function login(req, res) {
  const { username, role } = req.body;
  if (!username || !role) {
    return res.send('Username and role are required');
  }

  req.session.user = {
    username,
    role: role.toLowerCase(),
  };

  res.send(`Logged in as ${username}`);
}

function logout(req, res) {
  req.session.destroy(() => {
    res.send('Logged out successfully');
  });
}

module.exports = {
  login,
  logout,
};