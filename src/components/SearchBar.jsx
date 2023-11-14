import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const SearchBar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
      // Realizar la búsqueda utilizando el término de búsqueda (searchTerm)
      fetch(`https://localhost:7018/api/items?search=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
          // Pasar los datos a la página de la lista de elementos
          navigate('/listItems', { state: { searchData: data } });
        });
    };
  return (
    <div className="input-group mt-4 mb-4">
    <input
      type="text"
      className="form-control"
      placeholder="search"
      aria-label="search"
      aria-describedby="basic-addon2"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <div className="input-group-append">
      <button
        className="btn btn-outline-dark"
        type="button"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  </div>  )
}

export default SearchBar