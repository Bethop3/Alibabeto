import styled from 'styled-components'

export const ProductosGridContainer = styled.div`
    & .grid-productos
    {
        grid-auto-rows: 430px;
    }
    & > .grid-productos
    {
        /* background-color: red; */
        height: 100%;
    }
    & .card-producto
    {
        min-height: 430px;
    }
`   