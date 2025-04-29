import { 
    createProductController, 
    getProductByIdController, 
    getAllProductsController, 
    updateProductController, 
    deleteProductController 
} from "@/pages/controllers/productController";


const handler = async(req, res) => {
    switch (req.method) {
        case "POST":
            await createProductController(req, res);
            break;
        case "GET":
            if (req.query.id) {
                await getProductByIdController(req, res);
            } else {
                await getAllProductsController(req, res);
            }
            break;
        case "PUT":
            await updateProductController(req, res);
            break;
        case "DELETE":
            await deleteProductController(req, res);
            break;
        default:
            res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}