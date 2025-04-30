import {
  getAllProductsController,
  createProductController,
} from "@/controllers/productController";

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      return getAllProductsController(req, res);
    case "POST":
      return createProductController(req, res);
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
