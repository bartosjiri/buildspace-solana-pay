import products from "./products.json"

export default function handler(req, res) {
  if (req.method === "GET") {
    const cleanProducts = products.map(item => {
      delete item.hash;
      return item;
    });

    res.status(200).json(cleanProducts);
  }
  else {
    res.status(405).send(`Method ${req.method} not allowed`);
  }
}