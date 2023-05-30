import React, { useState, useEffect } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { saveShippingAddress } from "../actions/cartActions";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = () => {

    const cart = useSelector(state=>state.cart)
    const {shippingAddress} = cart

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({address, city, postalCode, country}))
    navigate("/payment")
  };

  return (
    <FormContainer>
        <CheckoutSteps step1 step2/>
      <h1>Shipping Address</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="address"
            placeholder="Address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="city"
            placeholder="City"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Postal code</Form.Label>
          <Form.Control
            type="postalCode"
            placeholder="Postal code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="country"
            placeholder="Country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </FormGroup>

        <Button type="submit" variant="dark" className="button btn-block">Continue</Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
