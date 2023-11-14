import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-black">
      <div className='container'>
    <a className="navbar-brand text-white" onClick={() =>navigate('/')}>Bazar Online</a>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link text-white" onClick={() =>navigate('/')}>Regresar al menu <span className="sr-only"></span></a>
        </li>

      </ul>
    </div>
    </div>
  </nav></div>
  )
}

export default Navbar