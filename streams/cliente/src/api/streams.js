import axios from 'axios';

/**
 * Funcion de biblioteca axios para generar un servidor,
 * donde se encontrara la base de datos
 */
export default axios.create({
    baseURL:'http://localhost:3001'
});