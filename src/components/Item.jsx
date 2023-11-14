import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from "./SearchBar";
import Rating from './Rating';
import Navbar from './Navbar';
// import ImageSlider from './ImageSlider';


const Item = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await fetch(`https://localhost:7018/api/items/${id}`);
        const charactersApi = await api.json();
        setProduct(charactersApi);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    console.log(product),
    <>
          <Navbar />

    <div className="container">
    <SearchBar />
      {product && (
        <div key={product.id}>
          <div >
{/* <ImageSlider/> */}
      
{product.images.length >= 1 && (
  <div className="row">
    {product.images.map((image, index) => (
      <div key={index} className="col-md-2">
        <img className="img-fluid" src={image} alt={`Slide ${index + 1}`} />
      </div>
    ))}
  </div>
)}


            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{`${product.title}`}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{`${product.category}`}</h6>
                <p>Cantidad disponibles {`${product.stock}`}</p>

                <p className="card-text">
                {`${product.description}`}
                <Rating value={product.rating} />
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Item;
