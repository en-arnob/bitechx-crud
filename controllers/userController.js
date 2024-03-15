let users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

exports.getAll = (req, res) => {
  res.json(users);
};

exports.createNew = (req, res) => {
  const { username, password } = req.body;
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  res.status(201).json(newUser);
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const { username, password } = req.body;
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { id, username, password };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
