import axios from 'axios'
import cookie from 'js-cookie'
import {USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,USER_SIGNIN_REQUEST,USER_SIGNIN_SUCCESS,USER_SIGNIN_FAIL} from '../constant/userConstant'

const signin=(email,password)=>async(dispatch)=>{
    dispatch({type:USER_SIGNIN_REQUEST,payload:{email,password}});
    try {
      
        
        const { data } = await axios.post('http://localhost:4000/api/users/signin',{email,password});
       
        dispatch({type:USER_SIGNIN_SUCCESS,payload:data})
     
        cookie.set('userInfo',JSON.stringify(data))
    } catch (error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.message })
    }
}

const register = (name,email, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: {name, email, password } });
    try {


        const { data } = await axios.post('http://localhost:4000/api/users/register', { name,email, password });

        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })

        cookie.set('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error.message })
    }
}

const logOut=()=>(dispatch)=>{
    
}

export {signin,register}
