const cats = [
  {
    id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
    name: "Meow",
    createdAt: 1727098800585,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
    name: "Kitty",
    createdAt: 1727098952739,
    updatedAt: null,
    deleted: false,
  },
];


exports.create = (req, res) => {
    const { name } = req.body

    console.log(name + " added to list");
    //console.log(req.body.name)
    res.sendStatus(200);
};

exports.read = (req, res) => {
    res.send(cats);
};

exports.update = (req, res) => {
    res.send(cats);
    res.sendStatus(200);
};

exports.delete = (req, res) => {
  const { name } = req.body

  console.log("deleted " + name)
  res.sendStatus(200)
};