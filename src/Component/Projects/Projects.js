import React, { useEffect, useState } from 'react'
import products from '../../data';
import "./Projects.css";
const Projects = () => {
 return (
    <div className='project-container'>
       <h1 id='p3' className='headtag'>My Work</h1>
       <div className="products-container">
        {products.map(product => (
          <div key={product.id} className="product-item glass">
            <img src={product.image} alt={product.name} />
            <p>{product.category}</p>
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;