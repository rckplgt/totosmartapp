import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "react-bootstrap/esm/Container";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <main className="py-3">
          <Container>
            <h1>Welcome to Toto's Mart</h1>
          </Container>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
