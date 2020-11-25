function serveResults(req, res, next) {
    return res.json(req.testObject);
}

module.exports = serveResults;
