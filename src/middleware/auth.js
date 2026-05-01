function loginRequired(req, res, next) {
  if (!req.session.user) {
    return res.send('Please login first');
  }

  next();
}

function instructorOnly(req, res, next) {
  if (!req.session.user) {
    return res.send('Please login first');
  }

  if (req.session.user.role !== 'instructor') {
    return res.send('Only instructor can access this page');
  }

  next();
}

module.exports = {
  loginRequired,
  instructorOnly,
};