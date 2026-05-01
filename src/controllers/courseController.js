function getCourses(req, res) {
  res.send('You can view courses');
}

function getProfile(req, res) {
  const { username, role } = req.session.user;
  res.send(`Username: ${username}, Role: ${role}`);
}

function createCourse(req, res) {
  res.send('You can create a course');
}

module.exports = {
  getCourses,
  getProfile,
  createCourse,
};