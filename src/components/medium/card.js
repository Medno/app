import { Card, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function getFirstImageSrc(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const img = doc.querySelector("img");
  return img ? img.src : null;
}

const MediumCard = ({ article }) => {
  const imageSrc = getFirstImageSrc(article.content)
  return (
    <Card className="mb-3" style={{ width: "100%" }}>
      <Card.Link href={ article.link } style={{ textDecoration: "none", color: "inherit" }}>
		<Row className="g-0">
          {imageSrc && (
            <Col md={4}>
              <Card.Img
                variant="left"
                src={imageSrc}
                alt={article.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Col>
          )}
		  <Col md={imageSrc ? 8 : 12}>
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Subtitle className="text-muted mb-2">
                {new Date(article.pubDate).toLocaleDateString()}
              </Card.Subtitle>
            </Card.Body>
          </Col>
		</Row>
      </Card.Link>
    </Card>
  );
};

export default MediumCard;
