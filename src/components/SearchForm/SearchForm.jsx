import React, { useState, useEffect } from 'react';
import '../../styles/components/_SearchForm.scss'

const SearchForm = ({ onDebouncedSearch }) => {
  const [inputValue, setInputValue] = useState(''); 

  useEffect(() => {
    
    if (!inputValue.trim()) return;
    
    const debounceTimer = setTimeout(() => {
      onDebouncedSearch(inputValue); 
    }, 1500); 
    

    return () => clearTimeout(debounceTimer); 
  }, [inputValue, onDebouncedSearch]);

  
  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Busca un Pokémon..."
        value={inputValue}
        onChange={handleInputChange}
       
      />
    </div>
  );
};

export default SearchForm;
