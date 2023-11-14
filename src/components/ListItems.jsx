// import {productsData} from "../data/products";
import Rating from "./Rating";
import { Link,useLocation } from 'react-router-dom'
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";

const ListItems = () => {
  const location = useLocation();
  const productosData = location.state?.searchData || [];
  const navigateToItem = (userId) => {
    <div>
    <Link to={`/item/${userId}`}>Usuario {userId}</Link><br />
    </div>
  };

  // console.log(productsData.products)
  return (
    <>
      <Navbar />
      <div className="container col-5">
                   <SearchBar />
        {productosData.map(product => (
        <div key={product.id}>
                  <Link to={`/item/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ul className="list-group">
          <div className="list-group-item" onClick={() => navigateToItem(product.id)}>
    <div className="row">
      <div className="col-3">
      <img src={product.images[0]} width="100" height="100"/>
      </div>
      <div className="col-9">
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        <p><b>${product.price}</b></p>

        <Rating value={product.rating} />

</div>  
      </div>
  </div>
</ul>
</Link>
        </div>
      ))}
    </div>
    </>
    
  )
}

export default ListItems