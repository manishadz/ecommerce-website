import React from 'react'
import { Link } from 'react-router-dom'
import { Row,Col,ListGroup,Image,Card,Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../Components/Rating'
import products from '../products'
const ProductScreen = ({match,color}) => {
    const product = products.find((p) => p._id ===match.params.id)
    return (
        <>
            <Link className="btn btn-dark py-3" to="/"><i className="fas fa-hand-point-left"></i>Go Back</Link>
           <Row>
               <Col md={6}>
<Image className="py-3" src={product.image} alt={product.name}fluid/>
               </Col>
               <Col md={3}>
                   <ListGroup variant="flush">
              <ListGroup.Item>
              <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                  <Rating  value={product.rating} text={`${product.numReviews} reviews`}/>
              </ListGroup.Item>
              <ListGroupItem>
                  price:Rs {product.price}
              </ListGroupItem>
              <ListGroupItem className="text-start">
                  Description :{product.description}
              </ListGroupItem>

                   </ListGroup>
               </Col>
               <Col md={3} className="card-">
               <Card>
                   <ListGroup variant="fluid">
                   <ListGroupItem>
                       <Row>
                           <Col>price:</Col>
                           <Col>
                               <strong>Rs {product.price}</strong>
                           </Col>

                       </Row>
                   </ListGroupItem>

                   <ListGroupItem>
                       <Row>
                           <Col>Status:</Col>
                           <Col>
                               {product.countInStock > 0 ?"In stock" : "Out of stock"}
                           </Col>
                           
                       </Row>
                   </ListGroupItem>

                   <ListGroupItem>
                       <Button className="btn btn-block" type ="button"disabled={product.countInStock==0} >Add To Cart<i className="fas fa-shopping-cart"></i></Button>
                   </ListGroupItem>


                   </ListGroup>
               </Card>

               </Col>
           </Row>
        </>
    )
}

export default ProductScreen
