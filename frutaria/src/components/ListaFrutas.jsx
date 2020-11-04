import React from 'react';
import Fruta from './Fruta';
import AdicionarFruta from './AdicionarFruta';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';

const ListaFrutas = ()=>{
    const frutas = useSelector(state => state.frutaReducers.frutas);
    //aqui é como a main que junta todos os recursos
    
    return(
        <>
            <h1>Teste para Validação de Formularios:</h1>
            <Formik
             initialValues={{nome:'',email:'',nascimento:''}}
            validate ={(values)=>{
                const errors ={};
                if(!values.nome){
                errors.nome ='O nome é obrigatorio';
            }
            if(!values.email){
                errors.email ='O E-mail é obrigatorio';
            }
            if(!values.nascimento){
                errors.nascimento ='O Nascimento é obrigatorio';
            }
            return errors;
        }}
        onSubmit={(values)=>{
            alert(JSON.stringify(values));
        }}
        >
                
            {(props)=>(
            <form onSubmit={props.handleSubmit} noValidate>
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id="nome" name="nome" value={props.values.nome} onChange={props.handleChange}/>
                    {props.errors.nome ? <div>{props.errors.nome}</div>: null}
                </div>
                <div>   
                       <label htmlFor="email">E-mail: </label>
                    <input type="email" id="email" name="email" value={props.values.email} onChange={props.handleChange}/>
                    {props.errors.email ? <div>{props.errors.email}</div>: null}
                 </div>
                 <div>   
                    <label htmlFor="date">Data de Nascimento: </label>
                    <input type="date" id="nascimento" name="nascimento" value={props.values.nascimento} onChange={props.handleChange} />
                    {props.errors.nascimento ? <div>{props.errors.nascimento}</div>: null}
                </div>
                 <button type="submit">Adicionar</button>
            </form>
            )}
            </Formik>

            <h1>Lista de Frutas</h1>
            <AdicionarFruta/>

            {frutas.map(fruta=>(
                <Fruta key={fruta.id} fruta={fruta}/>
            ))}
        </>
    );
};

export default ListaFrutas