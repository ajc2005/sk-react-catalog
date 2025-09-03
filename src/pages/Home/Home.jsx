import { useState, useEffect } from "react";
import { readProductDB } from "../../service/productService.jsx";
import Header from "../../components/Header/Header";
import Style from "./Home.module.css";

const Home = () => {

  const [products, setProducts] = useState([]);

  const getAllProductsFromDB = async () => {
    const data = await readProductDB();
    setProducts(data);
  };

  useEffect(() => {
    getAllProductsFromDB();
  }, []);

  return (
    <>
      <Header />
      <h1>Catálogo</h1>
      <h3>Total de productos:</h3>
      <div className="products-container">
        {products.map(p => ( 
          <ProductCard 
            key={p.id} 
            nombre={nombre} 
            precio={precio} 
            imagen={imagen} 
            colorBoton={colorBoton} 
          /> 
        ))}
      </div>
    </>
  )
}

export default Home