import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
//import products from "../products";
import Product from "../components/Product";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux"
import { listProducts } from "../actions/productActions";
import products from "../products";

const HomeScreen = () => {
  const dispatch = useDispatch()
  //const [products, setProducts] = useState([]);

  const productList = useSelector(state=>state.productList)
  const {loading, error, products} = productList

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const { data } = await axios.get("/api/products");
    //   setProducts(data);
    // };
    // fetchProducts();
    dispatch(listProducts())
  }, [dispatch]);

  //const products = []

  return (
    <>
      <h1>Latest products</h1>
      {loading ? <h2>Loading...</h2>:error ? <h3>{error}</h3>:<Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>}
      
    </>
  );
};

export default HomeScreen;
