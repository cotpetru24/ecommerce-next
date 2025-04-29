import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


const createProduct = async (productData)=> {
    try{
        prisma.product.create({
            data:{
                name: productData.name,
                description: productData.description,
                price: productData.price,
                stock: productData.stock,
                categoryId: productData.categoryId,
                brand: productData.brand,
                image: productData.image,
                model: productData.model,           
            }
        })
    } catch (error) {
        console.error("Error creating product:", error);
        throw new Error("Failed to create product");
    }
}


const getProductById = async (productId) => {
    try {
        return await prisma.product.findUnique({
            where: { id: productId },
        });
    } catch (error) {
        console.error("Error fetching product:", error);
        throw new Error("Failed to fetch product");
    }
};


const getAllProducts = async () => {
    try{
        return await prisma.product.findMany();
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
    }
}

const updateProduct = async (productId, productData) => {
    try {
        return await prisma.product.update({
            where: { id: productId },
            data: productData,
        });
    } catch (error) {
        console.error("Error updating product:", error);
        throw new Error("Failed to update product");
    }
}

const deleteProduct = async (productId) => {
    try {
        return await prisma.product.delete({
            where: { id: productId },
        });
    } catch (error) {
        console.error("Error deleting product:", error);
        throw new Error("Failed to delete product");
    }
}

export { createProduct, getProductById, getAllProducts, updateProduct, deleteProduct };
