import {productsData} from "../data/products";
import { useNavigate } from 'react-router-dom'
import Rating from "./Rating";

const ListItems = () => {
  const navigate = useNavigate();

  console.log(productsData.products)
  return (
    <div className="container">
                   <div className="input-group mt-4 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="search"
            aria-label="search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => {console.log("hola") }}
            >
              Buscar
            </button>
          </div>
        </div>
        {productsData.products.map(product => (
        <div key={product.id}>
          <ul className="list-group">
  <div className="list-group-item" onClick={() => {navigate('/item') }}>
    <div className="row">
      <div className="col-2">
      <img src={product.images[0]} width="80" height="80"/>
      </div>
      <div className="col-10">
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        <p><b>${product.price}</b></p>

        <Rating value={product.rating} />

</div>  
      </div>
  </div>
</ul>
          {/* <h2>{product.title}</h2> */}
        </div>
      ))}
    </div>
    
  )
}

export default ListItems