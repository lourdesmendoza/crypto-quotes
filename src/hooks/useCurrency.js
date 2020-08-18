import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const SelectForm = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    --webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCurrency = (label, initialState, options) => {
    // State of our custom hook
    const [state, setState] = useState(initialState);

    const Select = () => (
        <Fragment>
            <Label>{label}</Label>
            <SelectForm
                onChange={ e => setState(e.target.value)}
                value={state}
            >
                <option value="">-- Choose --</option>
                {options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </SelectForm>
        </Fragment>
    );

    // Return state, interface and fn that modifies the state
    return [state, Select];
};

export default useCurrency;