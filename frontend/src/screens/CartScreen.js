import React, { useEffect } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin.userInfo);
  const { cartItems } = cart;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    //navigate('/login?redirect=/shipping')
    userLogin ? navigate("/shipping") : navigate("/login");
    //navigate('/shipping')
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty. <Link to="/">Go back</Link>{" "}
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.productId}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.productId}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>KES {item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.productId, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.productId)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>
                Sub-total({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                )items
              </h3>
              KES{" "}
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <div  className="d-grid gap-2">
              <Button
                type="button"
                className="btn-block"
                variant="dark"
                disabled={cartItems.length === 0}
                onClick={handleCheckout}
              >
                Proceed To Checkout
              </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
