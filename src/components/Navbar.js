import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import { GrCatalog } from "react-icons/gr";

const Navbar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  if (props.currentUserIndex === null && location.pathname !== "/") {
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="navbar-link"><Link to="/"><HomeIcon fontSize='medium' /> Home</Link></div>
      <div className="navbar-link"><Link to="/catalog"><GrCatalog fontSize='large' /> Catalog</Link></div>
    </nav>
  );
}


export default Navbar;
