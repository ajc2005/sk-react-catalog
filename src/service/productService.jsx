import axios from "axios";

const productDB = "http://localhost:3000/products";

const createProduct = async (newProduct) => {
    const response = await axios.post(productDB, newProduct);
    return response.data;
};

const readProductDB = async () => { 
    const response = await axios.get(productDB); 
    return response.data; 
};

const readProductDBWithId = async (id) => { 
    const response = await axios.get(`${productDB}/${id}`); 
    return response.data; 
};

const updateProduct = async (id, updatedProduct) => {
    const response = await axios.put(`${productDB}/${id}`, updatedProduct);
    return response.data;
};

const deleteProduct = async (id) => {
    const response = await axios.delete(`${productDB}/${id}`);
    return response.data;
};

export { productDB, createProduct, readProductDB, readProductDBWithId, updateProduct, deleteProduct }