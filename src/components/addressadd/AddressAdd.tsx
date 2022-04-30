import "./addressadd.css";
import SideBar from "../sidebar/SideBar";

function AddressAdd() {
  let address = {

  }

  function handleChange(e: any) {
  address = {...address, [e.target.name]: e.target.value}
   console.log(address)
  }

  function handleSubmit(e:any) {
    e.preventDefault()
    console.log(address)
  }

  return (
    <div className="container">
      <SideBar />
      <main>
        <h2>CADASTRO DE ENDEREÇOS</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <label htmlFor="street">Endereço</label>
            <input type="text" name="street" onChange={handleChange}/>
            <div className="forms-group">
              <label htmlFor="number">Número</label>
              <input type="name" name="number" onChange={handleChange}/>
              <label htmlFor="complement">Complemento</label>
              <input type="text" name="complement" onChange={handleChange}/>
            </div>

            <div className="forms-group">
              <label htmlFor="district">Bairro</label>
              <input type="text" name="district" onChange={handleChange}/>
              <label htmlFor="zipcode">CEP</label>
              <input type="text" name="zipCode" onChange={handleChange}/>
            </div>

            <div className="forms-group">
              <label htmlFor="city">Cidade</label>
              <input type="text" name="city" onChange={handleChange}/>

              <label htmlFor="state">Estado</label>
              <input type="text" name="state" onChange={handleChange}/>
            </div>

            <label htmlFor="country">País</label>
            <input type="text" name="country" onChange={handleChange}/>
          </div>

          <button>Incluir</button>
        </form>
      </main>
    </div>
  );
}

export default AddressAdd;
