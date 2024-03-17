import React, { useContext } from 'react'
import { BuscadorProductosContext } from '../../context/BuscadorProductosContext'

const FilterDisplay = () => {

    const { displayInfo, handleFilterDisplay } = useContext(BuscadorProductosContext)!

    return (
        <>
            {/* {displayInfo.display} */}
            <button onClick={() => handleFilterDisplay('grid')} className={`${displayInfo.display === 'grid' ? 'bg-alibabeto-1 bg-alibabeto-1' : 'bg-white'} p-2 rounded mr-1`}>
                <svg className={`w-6 h-6 ${displayInfo.display === 'grid' ? 'text-white dark:text-white' : 'text-blue-600'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.1 4H5c-.5 0-.9.4-.9.9V9c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9V5c0-.5-.4-.9-.9-.9Zm10 0H15c-.5 0-.9.4-.9.9V9c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9V5c0-.5-.4-.9-.9-.9Zm-10 10H5c-.5 0-.9.4-.9.9V19c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9v-4c0-.5-.4-.9-.9-.9Zm10 0H15c-.5 0-.9.4-.9.9V19c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9v-4c0-.5-.4-.9-.9-.9Z" />
                </svg>
            </button>
            <button onClick={() => handleFilterDisplay('lista')} className={`${displayInfo.display === 'lista' ? 'bg-alibabeto-1 bg-alibabeto-1 ' : "bg-white"} p-2 rounded mr-1`}>
                <svg className={`w-6 h-6 ${displayInfo.display === 'lista' ? 'text-white dark:text-white' : 'text-blue-600'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0" />
                </svg>
            </button>
        </>
    )
}

export default FilterDisplay