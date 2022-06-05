import { useContext } from "react"
import { MeuContexto } from "../Context/MeuContexto"
import style from "./loginform.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import tools from "../../helpers/tools";
import api from "../../api/api";

function LoginForm() {
  let userLogin = { email: "", password: "" };

  const navigate = useNavigate()

  const { logado, setLogado } = useContext(MeuContexto)

  function handleChange(e: any) {


    const inputName = e.target.name;
    const inputValue = e.target.value;
    userLogin = { ...userLogin, [inputName]: inputValue };

    console.log(e.target.name);
    console.log(e.target.value);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const email = userLogin.email;
    const isEmail = await tools.validateEmail(email);
    if (!isEmail) {
      alert("Insira um email válido!");
      return;
    }
    const password = userLogin.password;
    if (password.length < 6) {
      alert("Senha muito curta!");
    }
    try {
      const response = await api.post("/admin/login", userLogin);
      console.info(response.data.token);
      let token = response.data.token;
      api.defaults.headers.common['Authorization'] = `Bearer ${token} `
      localStorage.setItem("token", token);
      let userId = response.data.user._id;
      localStorage.setItem("userId", userId);
      console.debug(api.defaults.headers.common['Authorization'])
      setLogado(true)
      navigate("/income")
      // return <Navigate to="/income" replace />
      
      
    } catch (error) {
      console.info(error);
    }

    return;
  }

  return (
    <div className="login">
      <h1>Logado {String(logado)}</h1>
      <form onSubmit={handleSubmit}>
        <div className={style["form-container"]}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChange} />
          <Link to="/">Esqueceu sua senha?</Link>
        </div>
        <button>Entrar</button>
      </form>
    </div>
  );
}

export default LoginForm;
