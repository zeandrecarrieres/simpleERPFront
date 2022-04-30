import "./categoryadd.css";
import SideBar from "../sidebar/SideBar";
import api from "../../api/api"

function CategoryAdd() {
  let category = {category:""}

  function handleChange(e:any) {
    category = { ...category, [e.target.name]: e.target.value }
    console.info(category)
  }

  async function handleSubmit(e:any) {
    e.preventDefault()
    console.info(category)
    const response = await api.post("/category", category)
    console.info(response)
  }

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>CADASTRO DE CATEGORIA</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="category">Categoria</label>
          <input type="category" name="category" onChange={handleChange} />
          <button>Incluir</button>
        </form>
      </main>
    </div>
  );
}

export default CategoryAdd;
