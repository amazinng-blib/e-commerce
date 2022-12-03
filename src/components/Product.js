import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

const Product = (props) => {
  const { product } = props;
  return (
    <Card className='product'>
      <Link to={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          width={400}
          height={350}
          className='card-img-top '
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>{' '}
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
