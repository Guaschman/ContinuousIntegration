import React, { useEffect, useState } from 'react';
import { REST_API_URL } from '../settings/URL';

function Build(props) {
    
    const [data, setData] = useState(null)

    useEffect( () => {
        if (props.match.params.repo_id != null && props.match.params.build_id != null){
            fetch(`${REST_API_URL}/repo/${props.match.params.repo_id}/${props.match.params.build_id}`)
            .then( response => {
                return response.json()
            })
            .then( json => {
                setData(json);
            })
        }
    }, [])
        

    function renderBuild(){

        return(
            <div>
                Repository name: {data.build.repository.name} <br/>
                on: {data.type} <a href={data.build.head_commit.url}>{data.build.head_commit.id}</a> <br/>
                build: {data.log}
            </div>
        )

    }

    console.log("build: ", data);

    return(
        <div>
            <div>
                {data != null ? renderBuild(): ''}
            </div>
        </div>
    )

}


export default Build;