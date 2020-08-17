import React from 'react';
import styled from '@emotion/styled';

import useCurrency from '../hooks/useCurrency';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFFFFF;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;


const Form = () => {
    const [currency, SelectCurrency, setState] = useCurrency();

    return ( 
        <form>
            <SelectCurrency />
            <Button type="submit" value="Calculate" />
        </form>
    );
}
 
export default Form;