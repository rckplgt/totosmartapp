import React, { useState, useEffect } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  Image,
  Card,
  ListGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { saveShippingAddress } from "../actions/cartActions";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";

const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart);

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  //calculate prices

  cart.itemPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  cart.shippingPrice = addDecimals( cart.itemPrice > 5000 ? 0 : 200);

  cart.taxPrices = addDecimals(Number(0.16 * cart.itemPrice).toFixed(2));

  cart.totalPrice = addDecimals(
    Number(cart.itemPrice) + Number(cart.shippingPrice) + Number(cart.taxPrices)
  );

  const placeOrderHandler = () => {
    alert("Shut up and order!");
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />

      <Row>
        <Col md={8}>
          <ListGroup>
            <ListGroup.Item>
              <h2>Shipping Address</h2>
              <p>
                <strong>Address: </strong>
                {cart.shippingAddress.address} {cart.shippingAddress.city} -
                {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method </h2>
              <p>
                <strong>Method: </strong>
                {cart.paymentMethod}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items </h2>
              <p>
                {cart.cartItems.length === 0 ? (
                  <Message variant="danger">No items in cart</Message>
                ) : (
                  <ListGroup variant="flush">
                    {cart.cartItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            ></Image>
                          </Col>
                          <Col>
                            <Link to={`/product/${item.productId}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={4}>
                            {item.qty} x KES {item.price} ={" "}
                            {item.qty * item.price}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <h2>Items in cart</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>KES {cart.itemPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    Shipping (Items above KES 5000 qualify for free shipping)
                  </Col>
                  <Col>KES {cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Taxes (VAT=16%) </Col>
                  <Col>KES {cart.taxPrices}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>KES {cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <div   className="d-grid gap-2">
                <Button
                  type="button"
                  className="btn btn-block d-grid gap-2"
                  variant="dark"
                
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Order
                </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
