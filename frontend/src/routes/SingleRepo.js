import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { API_REPO } from '../settings/URL';

Modal.setAppElement('#root')

function SingleRepo(props){

    const [builds, setBuilds] = useState(null);
    const [modal, setModal] = useState({
        trigger: false,
        data: {}
    });

    useEffect(() => {
        
        fetch(`${API_REPO}/${props.match.params.id}`).then(response => {
            return response.json()
        }).then(json => {

            var json_array = []
            Object.keys(json).forEach(function(key) {
                json_array.push(json[key]);
            });
            setBuilds(json_array);
        })

    }, [])

    function renderBuilds(){
        return builds.map((b, i) => {
            return <li style={{'cursor': 'pointer'}} key={i} onClick={() => setModal({trigger: true, data: b})} >{b.build.head_commit.id}</li>
        })
    }

    return(
        <div>
            <ul>
                {builds != null ? renderBuilds() : null}
                {modal.trigger != false ? 
                <Modal isOpen={modal.trigger}>
                    <h2>Repository: {modal.data.build.repository.name}</h2>
                    <p>
                        on: {modal.data.type} - 
                        <a href={modal.data.build.head_commit.url}>{modal.data.build.head_commit.id}</a>
                    </p>
                    <p>
                        logs: <br/>
                    </p>
                    <button onClick={ () => setModal({trigger: false})}>Close</button>
                </Modal> 
                : ''}
            </ul>
        </div>
    );
}

export default SingleRepo;