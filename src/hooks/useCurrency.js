import React, { Fragment, useState } from 'react';

const useCurrency = (label, initialState, options) => {
    // State of our custom hook
    const [state, setState] = useState(initialState);

    const Select = () => (
        <Fragment>
            <label>{label}</label>
            <select
                onChange={ e => setState(e.target.value)}
                value={state}
            >
                <option value="">-- Choose --</option>
                {options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </select>
        </Fragment>
    );

    // Return state, interface and fn that modifies the state
    return [state, Select];
};

export default useCurrency;