function get_sha(req) {
    var sha = req.body.head_commit.id
    return sha
}

module.exports = {
    get_sha
}