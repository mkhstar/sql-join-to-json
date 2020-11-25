function populateObject(req, res, next) {
    req.testObject = {
      hasTests: false
    };
    return next();
}

module.exports = populateObject;
