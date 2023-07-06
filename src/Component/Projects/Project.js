import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../../data';
import "./Projects.css";
const Project = () => {
    const { id } = useParams();
    const product = products.find(product => product.id === +id);
    console.log(product);
  return (
    <div className='products-container' >
        <div key={products.id} className="product-item">
            <img src={products.image} alt={products.name}/>
        </div>
        <p>{products.category}</p>
        <h3>{products.name}</h3>
    </div>
  )
}

export default Project;