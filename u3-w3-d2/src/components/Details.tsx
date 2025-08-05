import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Root from "../types/Space";

interface articleDetails {
  idArticle: Root;
}

const Details = (props: articleDetails) => {
  const params = useParams();
  console.log("Params", params);
  const endpoint = `https://api.spaceflightnewsapi.net/v4/articles/${props.idArticle}`;

  const getDetails = () => {
    fetch(endpoint)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dati");
        }
      })
      .then((resData) => {
        console.log(resData);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Details;
