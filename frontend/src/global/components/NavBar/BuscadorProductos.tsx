import { useEffect, useState } from "react"

const BuscadorProductos = () => {

    const [state, setState] = useState('')

    useEffect(() => {

        handleGetParameters()

    }, [])

    const handleGetParameters = () => {

        // Obtener los parámetros de consulta de la URL actual
        const queryParams = new URLSearchParams(window.location.search);

        // Obtener el valor del parámetro 'nombre'
        const nombre = queryParams.get('nombre') ?? '';

        setState(nombre)

    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setState(event.target.value)

    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // Verificar si la tecla presionada es "Enter"
        if (event.key === 'Enter') {
            // Ejecutar alguna acción, por ejemplo, enviar el valor del input a una función
            handleSubmit();
        }
    };

    const handleSubmit = () => {

        const productName = state;

        const url = `/productos?nombre=${productName}`;

        window.location.href = url;

    };

    return (
        <>
            <input
                type="text"
                value={state}
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
                placeholder="Buscar un producto"
                className="text-center rounded-3xl w-full bg-transparent outline-none placeholder-gray-500 border-0 f"
            />
        </>
    )
}

export default BuscadorProductos