import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="col-sm-6 mx-auto mt-4">
        <h3 className="text-center">BAZAR ONLINE</h3>
        <div className="input-group">
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
              onClick={() => {navigate('/listemItems') }}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
