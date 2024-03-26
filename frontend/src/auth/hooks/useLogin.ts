/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { useState } from 'react'

import { AuthAxios } from '../../global/api/AuthAxios'
import { AUTH_LOGIN_MUTATION } from '../graphql'
import { BasicResponse } from '../../types'
import { Auth } from '../types/auth.types'
import useAuth from './useAuth'

const useLogin = () => {
  
  const navigate = useNavigate()
  const [ isLoading , setLoading ] = useState(false)
  const [ errors , setErrors ] = useState<any>(null)
  const { handleSetSession } = useAuth()

  const [ authMutate ] = useMutation(AUTH_LOGIN_MUTATION)

  const [formState, setFormState] = useState({
    correo: '',
    password: ''
  })

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  const handleSubmit = async ( event: React.FormEvent<HTMLFormElement> ) => {

    // alert("Hola")
    event.preventDefault()
    
    try {

      setErrors(null)
      
      const formData = new FormData();
      
      // formData.append('correo', 'john.doe@example.com');
      // formData.append('correo', 'john.doe1@example.com');
      
      setLoading(true)
      
      formData.append('correo', formState.correo);
      
      formData.append('password', formState.password);

      const { errors } = await authMutate({
        variables: {
          input: {
            correo: formState.correo,
            password: formState.password
          }
        }
      })

      if( errors !== undefined ){
        alert("Error")
      }
      // formData.append('password', 'secreto123');
      
      const { data: { data } } = await AuthAxios.post<BasicResponse<Auth>>('/auth/login', formData)
      
      handleSetSession(data.token , data.usuario)

      navigate('/')
      // event.currentTarget.submit()
      
      //  window.location.href = '/'
      
    }
    catch (err:any) {
      
      if( err?.response?.data)
      {
        const error = err?.response?.data
        setErrors(error)
      }
      if( err?.message)
      {
        const error = err?.message
        setErrors({
          msg: error
        })
      }

    }
    finally
    {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false)
    }

  }

  return {
    // auth,
    errors,
    formState,
    isLoading,
    onInputChange,
    handleSubmit
  }
}

export default useLogin