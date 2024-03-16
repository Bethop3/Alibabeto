import { AuthAxios } from '../../global/api/AuthAxios'
import { BasicResponse } from '../../types'
import { Auth } from '../types/auth.types'
import { useState } from 'react'
import useAuth from './useAuth'

const useLogin = () => {

  const { handleSetSession } = useAuth()
  const [ isLoading , setLoading ] = useState(false)

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

      // window.localStorage.setItem("token-auth", data.token)
      
      setLoading(false)
      // event.currentTarget.submit()
      
      //  window.location.href = '/'
      
    }
    catch (err) {
      setLoading(false)
      alert("Error")
    }

  }

  return {
    // auth,
    formState,
    isLoading,
    onInputChange,
    handleSubmit
  }
}

export default useLogin