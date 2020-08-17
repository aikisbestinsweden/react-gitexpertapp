import React from 'react'
import AddCategory from './AddCategory'

const GifNavbar = ({setCategories}) => {
     return (
     <>
          <div className="gif-navbar fixed-top p-3">
               <h2 className="gif-navbar-text mx-5">Gif Expert App</h2>
               <div className="mt-4 mx-5">
                    <AddCategory setCategories={ setCategories } />
               </div>
          </div>  
          
     </>
     )
}

export default GifNavbar
