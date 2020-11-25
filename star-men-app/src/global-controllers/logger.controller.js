function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`, new Date().toString());
  next();
}

module.exports = logger;
