import "./sidebar.css";
import { Link } from "react-router-dom";
import ClientIcon from "../../assets/client_icon.png";

function SideBar() {
  return (
    <div className="menu-container">
      <nav>
        <ul>
          <li className="menu-title">
            CADASTROS
          </li>
          <Link className="menu-link" to="/user">
            <img src={ClientIcon} className="bar-icon" alt="icon" /> Usuários
          </Link>
          <Link className="menu-link" to="/supplier">
            <img src={ClientIcon} className="bar-icon" alt="icon" /> Fornecedores
          </Link>
          <Link className="menu-link" to="/client">
            <img src={ClientIcon} className="bar-icon" alt="icon" /> Clientes
          </Link>
          <Link className="menu-link" to="/category">
            <img src={ClientIcon} className="bar-icon" alt="icon" /> Categorias
          </Link>
          <Link className="menu-link" to="/product">
            <img src={ClientIcon} className="bar-icon" alt="icon" /> Produtos
          </Link>
          <li className="menu-title">
            TRANSAÇÕES
          </li>
          <Link className="menu-link" to="/incomeadd">
            <img src={ClientIcon} className="bar-icon" alt="icon" /> Entradas
          </Link>
          <Link className="menu-link" to="/saleadd">
            <img src={ClientIcon} className="bar-icon" alt="icon" /> Saídas
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
