import { useState } from 'react'

type Config = {
    inicioPagina?: number
    maximaPagina?: number | null
}

const usePagination = ({ 
    inicioPagina = 1,
    // maximaPagina = null
}: Config) => {

    const [ pagina , setPagina ] = useState(inicioPagina)
    const [ totalPaginas , setMaxPagina ] = useState(0)

    const setMaxPaginas = ( max: number ) => {
        setMaxPagina(max)
    }

    const handleSiguiente = ( next: number | null = null ) => {

        // debugger 

        if( Number(next) === 0 ) return 

        if( !next || next === -1 )
        {
            setPagina(pagina + 1)
            return
        }
        
       

        setPagina(next)

    }

  return {
    pagina,
    totalPaginas,
    setMaxPaginas,
    handleSiguiente
  }
}

export default usePagination