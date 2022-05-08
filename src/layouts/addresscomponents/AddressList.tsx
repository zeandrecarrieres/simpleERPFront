import style from "./style.module.css"

function AddressList(item: any) {
    console.info(item)

    return (
        <>
            
            {item.street !== "" && <div>
                <li><label>Rua: </label> {item.street} </li>
                <li><label>Número: </label> {item.number} </li>
                <li><label>Complemento: </label> {item.complement} </li>
                <li><label>Bairro:  </label> {item.district} </li>
                <li><label>Cidade: </label> {item.city} </li>
                <li><label>Estado: </label> {item.state} </li>
                <li><label>CEP: </label> {item.zipCode} </li>
                <li><label>País: </label> {item.country} </li>
            </div>

            }

        </>
      
      
  )
}

export default AddressList