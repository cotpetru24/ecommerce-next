import {
    getProductByIdController,
    updateProductController,
    deleteProductController,
  } from "@/controllers/productController";
  
  const handler = async (req, res) => {
    const { id } = req.query;
  
    switch (req.method) {
      case "GET":
        return getProductByIdController(req, res, id);
      case "PUT":
        return updateProductController(req, res, id);
      case "DELETE":
        return deleteProductController(req, res, id);
      default:
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  

  export default handler;