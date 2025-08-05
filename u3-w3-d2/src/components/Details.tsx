import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";

const Details = () => {
  const params = useParams();
  console.log("Params", params);
  const endpoint = `https://api.spaceflightnewsapi.net/v4/articles/${params.idArticles}`;

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
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Details;
