import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import MediumCard from './card.js'

const MediumArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@philippe.chadenier")
      .then(res => res.json())
      .then(data => setArticles(data.items));
  }, []);

  return (
    <Row>
      {articles.map((article, index) => (
           <Col key={index} lg="1" md="1000" className="mb-3">
               <MediumCard article={article} />
           </Col>
      ))}
    </Row>
  );
};

export default MediumArticles;
