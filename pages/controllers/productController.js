import { createProduct, getProductById, getAllProducts, deleteProduct, updateProduct } from "../services/productService";
import { verifyAdmin } from "@/utils/auth";

const createProductController = async (req, res) => {
    try {
        verifyAdmin(req);

        const productData = req.body;
        const newProduct = await createProduct(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Failed to create product" });
    }
}

const getProductByIdController = async (req, res) => {
    try {
        const { id } = req.query;
        const product = await getProductById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Failed to fetch product" });
    }
}

const getAllProductsController = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Failed to fetch products" });
    }
}

const updateProductController = async (req, res) => {
    try {
         verifyAdmin(req);

        const { id } = req.query;
        const productData = req.body;
        const updatedProduct = await updateProduct(id, productData);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Failed to update product" });
    }
}

const deleteProductController = async (req, res) => {
    try {
        verifyAdmin(req);

        const { id } = req.query;
        await deleteProduct(id);
        res.status(204).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Failed to delete product" });
    }
}

export { createProductController, getProductByIdController, getAllProductsController, updateProductController, deleteProductController };