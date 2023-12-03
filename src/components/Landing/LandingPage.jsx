import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import ShuffleText from "react-shuffle-text";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleRedirect = () => {
      setTimeout(() => {
        navigate("/HomePage");
      }, 1500);
    };

    const onComplete = () => {
      setIsLoading(false);
      handleRedirect();
    };

    setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout();
    };
  }, [navigate]);

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
    >
      {isLoading ? (
        <p className="text-white display-5">
          <b>
            <ShuffleText
              content="Hi, I'm James Lumawag"
              onComplete={() => {}}
            />
          </b>
        </p>
      ) : (
        <Spinner animation="grow" variant="light" role="status"></Spinner>
      )}
    </Container>
  );
};

export default Home;
