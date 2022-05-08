import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./productadd.css";
import SideBar from "../sidebar/SideBar";
import api from "../../api/api";

function ProductAdd() {
  let navigate = useNavigate()

  let baseProduct = {
    code: "",
    categoryId: "",
    name: "",
    description: "",
    unit: "",
    price: 0,
    cost: 0,
  };

  const [product, setProduct] = useState(baseProduct);

  function handleChange(e: any) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  // function handleChange(e: any) {
  //   product = { ...products, [e.target.name]: e.target.value };
  //   console.log(product);
  // }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (
      !product.code ||
      !product.categoryId ||
      !product.name ||
      !product.description ||
      !product.unit ||
      !product.price ||
      !product.cost
    ) {
      alert("Preencha todos os campos!");
    }

    console.log(product);
    api.post("/product", product);

    alert("Produto Adicionado com sucesso!");
    clearForm();

    navigate("/product")
  }

  function clearForm() {
    setProduct(baseProduct);
  }

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>CADASTRO DE PRODUTOS</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <label htmlFor="code">Código</label>
            <input
              type="text"
              name="code"
              onChange={handleChange}
              value={product.code}
            />
            {/* lembrar de criar tabela de categorias e atualizar isso */}
            <label htmlFor="categoryId">CategoriaID</label>
            <input
              type="text"
              name="categoryId"
              onChange={handleChange}
              value={product.categoryId}
            />
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={product.name}
            />
            <label htmlFor="description">Descrição:</label>
            <input
              type="text"
              name="description"
              onChange={handleChange}
              value={product.description}
            />
            <label htmlFor="unit">Unidade</label>
            <input
              type="text"
              name="unit"
              onChange={handleChange}
              value={product.unit}
            />
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              name="price"
              onChange={handleChange}
              value={product.price}
            />
            <label htmlFor="cost">Custo</label>
            <input
              type="text"
              name="cost"
              onChange={handleChange}
              value={product.cost}
            />
          </div>

          <button>Incluir</button>
        </form>
      </main>
    </div>
  );
}

export default ProductAdd;
