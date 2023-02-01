import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Container,
  Nav,
  Col,
  Row,
  Button,
  Form,
} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import { supabase } from './supabaseClient';

//XyyeGpyXyrDmDP7A

//Create the user interface (Navbar, Form to create products, product card)
//Setup supabase, create a table for our products
//Implements the CRUD logic for the products
function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState([]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    try {
      const { data, error } = await supabase.from('products').select('*');
      // .limit(10);
      if (error) throw error;
      if (data != null) {
        setProducts(data); //[product1, product2, product3]
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function createProduct() {
    try {
      const { data, error } = await supabase
        .from('products')
        .insert({ name: name, description: description })
        .single();

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  console.log(products);
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>Store Product</Navbar.Brand>
          <Nav>
            <Nav.Item>Created by ilmialimudins</Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h3>Create Product </h3>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              id="Description "
              onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            <Button onClick={() => createProduct()}>Create New Product</Button>
          </Col>
        </Row>
        <hr></hr>
        <h3>List All Products</h3>
        <Row  xs={1} lg={1} className="g-4">
          {products.map((product) => (
            <Col>
              <ProductCard product={product} /> {/* product={product} */}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
