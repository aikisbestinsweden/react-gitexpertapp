import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category}) => {

     const { data:images, loading} = useFetchGifs(category);

     return (
     <> 
          <hr className="gif-hr-top"/>              
          <h2  className="gif-category-title pb-3 animate__animated animate__fadeIn">{ category }</h2>
          <hr className="gif-hr-bottom"/>
          
          <div className="card-deck">
          
               { loading && <p className="card animate__animated animate__flash">Loading...</p>}
          
               {
                    images.map( img => (
                         <GifGridItem key={img.id} {...img} /> 
                    ))                         
               }                
          
               </div>
     </>
     )
}

export default GifGrid
