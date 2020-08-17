import React, { useState } from 'react'
import GifGrid from './components/GifGrid'
import GifFooter from './components/GifFooter';
import GifNavbar from './components/GifNavbar';

const GifExpertApp = () => {

     const initialData = ['Samurai x'];
     const [categories, setCategories] = useState(initialData)

     return (
          <div className="container">

               <GifNavbar setCategories={ setCategories } />

               <ol className="gif-content">               
                    {
                         categories.map( category => (
                              
                              <GifGrid key={category} category={category} />
                         ))
                    }
               </ol>             
               
               <GifFooter />
          </div>
     )
}

export default GifExpertApp
