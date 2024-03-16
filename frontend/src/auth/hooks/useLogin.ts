/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthAxios } from '../../global/api/AuthAxios'
import { useNavigate } from 'react-router-dom'
import { BasicResponse } from '../../types'
import { Auth } from '../types/auth.types'
import { useState } from 'react'
import useAuth from './useAuth'
const useLogin = () => {
  
  const navigate = useNavigate()
  const [ isLoading , setLoading ] = useState(false)
  const [ errors , setErrors ] = useState<any>(null)
  const { handleSetSession } = useAuth()

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

      const formData = new FormData();
      
      // formData.append('correo', 'john.doe@example.com');
      // formData.append('correo', 'john.doe1@example.com');
      
      setLoading(true)
      
      formData.append('correo', formState.correo);
      
      formData.append('password', formState.password);
      // formData.append('password', 'secreto123');
      
      const { data: { data } } = await AuthAxios.post<BasicResponse<Auth>>('/auth/login', formData)
      
      handleSetSession(data.token , data.usuario)

      setLoading(false)

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