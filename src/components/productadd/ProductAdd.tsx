import "./productadd.css";
import SideBar from "../sidebar/SideBar";

function ProductAdd() {
  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>CADASTRO DE PRODUTOS</h2>
        <form action="">
          <div className="form-container">
            <label htmlFor="code">Código</label>
            <input type="text" name="code" />
            <label htmlFor="category">Categoria</label>
            <input type="text" name="category" />
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" />
            <label htmlFor="unit">Unidade</label>
            <input type="text" name="unit" />
            <label htmlFor="price">Preço</label>
            <input type="number" name="price" />
            <label htmlFor="cost">Custo</label>
            <input type="text" name="cost" />
          </div>

          <button>Entrar</button>
        </form>
      </main>
    </div>
  );
}

export default ProductAdd;
