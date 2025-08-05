import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Root from "../types/Space";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const endpoint = `https://api.spaceflightnewsapi.net/v4/articles`;

// interface spaceCard {
//   count: number;
//   next: string;
//   previous: null;
//   results: [];
// }

const SpaceArticles = () => {
  const [articles, setArticles] = useState<Root>();
  const navigate = useNavigate();

  const getArticles = () => {
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
        setArticles(resData);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <Container fluid>
        <Row className=" g-3">
          {articles?.results.map((article) => {
            return (
              <Col xs={12} md={6} lg={4} key={article.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={article.image_url}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>
                      {article.authors.map((author) => {
                        return author.name;
                      })}
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        navigate("/details/" + article.id);
                      }}
                    >
                      Dettagli articolo
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SpaceArticles;
