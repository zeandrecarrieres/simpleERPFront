import { useNavigate } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import tools from "../../helpers/tools";
import api from "../../api/api";
import "./useradd.css";

function UserAdd() {
  let navigate = useNavigate();

  let user = { name: null, email: null, password: "", access: "" };

  function handleChange(e: any): void {
    user = { ...user, [e.target.name]: e.target.value }; // decorar
    console.log(user);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const { name, email, password, access } = user;
    if (!name || !email || !password || !access) {
      alert("preencha todos os campos");
      return;
    }
    const isEmail = await tools.validateEmail(email);
    if (!isEmail) {
      alert("Insira um email válido!");
      return;
    }
    if (password.length < 5) {
      alert("Senha muito curta!");
      return;
    }
    try {
      const userCreate = await api.post("/admin/create", user);
      console.info(userCreate);
    } catch (error) {
      console.info(error);
    }

    navigate("/user");
  }

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>CADASTRO DE USUÁRIO</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="type"
            value="user"
            onChange={handleChange}
          />
          <div className="form-container">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
            />
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
            <label htmlFor="access">Tipo</label>
            <select name="access" id="access" onChange={handleChange}>
              <option selected disabled>
                Selecione o nível
              </option>
              <option value="admin">Administrador</option>
              <option value="manager">Gerente</option>
              <option value="user">user</option>
            </select>
          </div>

          <button>Incluir</button>
        </form>
      </main>
    </div>
  );
}

export default UserAdd;
