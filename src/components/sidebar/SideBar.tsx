import "./sidebar.css";
import { Link } from "react-router-dom";
import ClientIcon from "../../assets/client_icon.png";

function SideBar() {
  return (
    <div className="menu-container">
      <nav>
        <ul>
          <li>
            CADASTROS
          </li>
          <Link to="/useradd">
            <img src={ClientIcon} className="bar-icon" alt="icon" /> Usuários
          </Link>
          <Link to="/supplieradd">
            <img src={ClientIcon} className="bar-icon" alt="icon" /> Fornecedores
          </Link>
          <Link to="/clientadd">
            <img src={ClientIcon} className="bar-icon" alt="icon" /> Clientes
          </Link>
          <Link to="/productadd">
            <img src={ClientIcon} className="bar-icon" alt="icon" /> Produtos
          </Link>
          <li>
            ESTOQUE
          </li>
          <Link to="/useradd">
            <img src={ClientIcon} className="bar-icon" alt="icon" /> Entradas
          </Link>
          <Link to="/useradd">
            <img src={ClientIcon} className="bar-icon" alt="icon" /> Saídas
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;