import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./categoryadd.css";
import SideBar from "../sidebar/SideBar";
import api from "../../api/api";

function CategoryAdd() {
  let navigate = useNavigate();

  let baseCategory = { category: "" };

  const [category, setCategory] = useState(baseCategory);

  function handleChange(e: any) {
    setCategory({ ...category, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!category.category) {
      alert("preencha a categoria!");
    }

    const response = await api.post("/category", category);
    alert("Categoria Adicionada com sucesso!");
    console.info(response);
    clearForm();

    navigate("/category");
  }

  function clearForm() {
    setCategory(baseCategory);
  }

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>CADASTRO DE CATEGORIA</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="category">Categoria</label>
          <input
            type="category"
            name="category"
            onChange={handleChange}
            value={category.category}
          />
          <button>Incluir</button>
        </form>
      </main>
    </div>
  );
}

export default CategoryAdd;
