import React from 'react'

const GifGridItem = ( {title, url} ) => {
 
     return (
          <div className="card-group mx-auto">
               <div className="card border-secondary mb-3 animate__animated animate__fadeIn" >

                    <img className="card-img-top" src={url} alt={title} />
                         
                    <div className="card-body">
                         <p className="card-text">{title}</p>
                    </div>
               </div>
          </div>              

     )
}

export default GifGridItem
