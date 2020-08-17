import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

     const [inputValue, setInputValue] = useState('')

     const handleInputChange = (e) => {
          setInputValue( e.target.value );
     }

     const handleSubmit = (e) => {
          e.preventDefault();

          if ( inputValue.trim().length > 2) {
               setCategories( items => [inputValue, ...items]);
               setInputValue('');
          }          
     }

     
     return (
          <form onSubmit= { handleSubmit }>
               <input 
                    type="text"
                    className="form-control"
                    id="inputSuccess"
                    placeholder="Enter value"
                    value={ inputValue }
                    onChange={ handleInputChange }
                    autoFocus
               />
          </form>
     )
}

AddCategory.propTypes = {
     setCategories: PropTypes.func.isRequired
}

export default AddCategory

