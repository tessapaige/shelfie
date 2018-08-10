module.exports = {
  getProducts: (req, res) => {
    console.log("Received get request");
    req.app
      .get("db")
      .getProducts()
      .then(response => {
        res.send(response).status(200);
      })
      .catch(err => {
        console.error(err);
        res.status(500);
      });
  }
};
