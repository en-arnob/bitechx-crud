let users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

exports.getAll = (req, res) => {
  res.json(users);
};
