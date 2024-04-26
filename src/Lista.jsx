import React from "react"
// é necessario importar o react para funcionar
const Lista = () => {
    const [items, setItems] = React.useState(['item 0'])

    function HandleClick() {
        setItems([...items, "Nyan Cat" + items.length])
    }
    function Remove() {
       const novaLista = [...items]
       novaLista.pop()
       setItems(novaLista)
    }

    return ( 
        <>
          <button onClick={HandleClick}>Adicionar item</button>
        <button onClick={Remove}>Remover item</button>


         {items.map((item, index)=>(
                <li key={index}>{item}</li>
        ))}

       

       </>
       
    )
}
export default Lista;