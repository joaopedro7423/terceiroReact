import {createStore} from 'redux';
import {reducers} from '../reducers';


const store = createStore(
    reducers,
    // A LINHA DE BAIXO SERVIA PARA DEBUGAR PELO NAVEGADOR
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export {store};