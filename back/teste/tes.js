const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());

/* app.get("/", cors(), (req, res, next) => {
  axios
    .get(
      "http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider"
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
app.get(
  `http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider/:id`,
  cors(),
  (req, res, next) => {}
); */

app.get("/products", async (req, res) => {
  try {
    const brazilianResponse = await axios.get(
      "http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider"
    );
    const europeanResponse = await axios.get(
      "http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider"
    );
    const products = [...brazilianResponse.data, ...europeanResponse.data];
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* app.get("/devnology/brazilian_provider/:id", (req, res) => {
  const id = req.params.id;
  Product.findById(id, (err, product) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(product);
  });
}); */

app.get('/products/:id', async (req, res) => {
  try {
    const brazilianResponse = await axios.get(`http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider/${req.params.id}`);
    const europeanResponse = await axios.get(`http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider/${req.params.id}`);
    let product = brazilianResponse.data || europeanResponse.data;
    if(!product) throw new Error('Product not found')
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
