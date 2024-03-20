/* eslint-disable @typescript-eslint/no-explicit-any */
// import { checkToken } from '../helpers/checkToken'
import { checkToken } from '../utils/checkToken'
import axios from 'axios'

export const AuthAxios = axios.create({
    baseURL: 'http://localhost:3000',
})

AuthAxios.interceptors.request.use( ( config:any ) => {

    try
    {
        const token = checkToken()

        if( token )
        {
            config.headers = {
                ...config.headers,
                'x-auth-token': token
            }
        }
    
    }
    catch
    {
        return config
    }
    
    return config

})