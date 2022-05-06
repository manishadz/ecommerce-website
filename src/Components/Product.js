import React from 'react'
import {Link} from 'react-router-dom'
import {Card ,Button} from 'react-bootstrap'
import Rating from './Rating'


const Product = ({ product}) => {
     const clickHandler=()=>{
        console.log("button clicked")
    }
    return (
        <Card className="my-3 p-3 rounded shadow">
            <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top"/>
            </Link>
            <Card.Body>
            <Link to={`/product/${product._id}`} >
                <Card.Title as="div"><strong>{product.name} </strong></Card.Title>
            </Link>
            <Card.Text as= "div">
            <Rating value={product.rating}
            text={`${product.numReviews} reviews`}
                // color="#f8e828"
            />
            </Card.Text>
            <Card.Text   as="h3">Rs:{product.price} </Card.Text>
            <Link to={`/product/${product._id}`} className="btn btn-dark">Add to cart<i className="fas fa-shopping-cart"></i></Link>
            
            </Card.Body>
            
        </Card>
    )
}

export default Product
