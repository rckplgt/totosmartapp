import React, { useState, useEffect } from "react";
import { Link, redirect, useLocation } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { login } from "../actions/userActions";
import FormContainer from "../components/FormContainer";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation()

  const submitHandler = ()=>{
    
  }

  const redirect = location.search ? location.search.split("=")[1]:"/"

  return (
    <FormContainer children={children}>
     Test
    </FormContainer>
  );
};

export default LoginScreen;
