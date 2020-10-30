import React, { useState } from 'react';


const AdicionarFruta = ()=>{

    const [nome,setNome]= useState('')
    const [quantidade,setQuantidade]=useState(0)


    const adicionarFrutas = event =>{
        event.preventDefault();


        const fruta ={
            id: new Date(),
            nome,
            quantidade
        };

        console.log('adicionar Fruta',fruta);
    };


    return(
        <form onSubmit={adicionarFrutas}>
            <input type="text"
             name={nome} id="" 
             placeholder="Nome da fruta:"
             required
             onChange={event => setNome(event.target.value)}
             />
            <input type="number"
             name={quantidade}
              id="" placeholder="Quantidade:"
              required
             onChange={event => setNome(event.target.value)}
               
              />

              <button type="submit">Adicionar</button>
        </form>


    );


}


export default AdicionarFruta