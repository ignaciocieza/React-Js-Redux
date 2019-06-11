import streams from '../api/streams';
import history from '../history';
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
 } from "./types";

 /**
  * Funcion que toma una accion cuando el usuario se haya registrado
  * @param {informacion del usuario} userId
  * return, devuelve un objeto con la accion a seguir, el tipo y la informacion del usuario 
  */
export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

/**
 * Funcion que toma una accion cuando el usuario cierre la sesion 
 * return, solo el tipo de accion.
 */
export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

/**
 * Funcion que genera un array con los datos obtenidos del formulario
 * junto con el id del usuario para cargarlos a la base de datos. 
 * @param {*valores que se envian desde el explorador} formValues 
 * Genera el despachante con el tipo y la informacion. 
 */
export const createStream = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await streams.post('/streams', {...formValues, userId});

    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    });

    history.push('/');
}

/**
 * Funcion que obtiene los objetos del array almacenado en la base de datos 
 * y genera un despachante con la informacion de estos arrays
 */
export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    });
}

/**
 *Funcion que obtiene un objete del array, en base al id que se le pasa.
 * @param {*id de usuario} id 
 * despacha el tipo y la informacion de dicho objeto
 */
export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    });
}

/**
 * Funcion que edita un determinado Stream de la base de datos 
 * y genera el despachante
 * @param {*id a modificar} id 
 * @param {*valores con los que se modificara el objeto existente} formValues 
 */
export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    });

    history.push('/');
}

/**
 * Funcion que borra un determinado objeto de la base de datos 
 * y genera un despachante 
 *@param {*id a borrar} id  
 */
export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({
        type: DELETE_STREAM,
        payload: id
    });

    history.push('/');
}
