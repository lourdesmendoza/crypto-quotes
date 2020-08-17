import React, { Fragment, useState } from 'react';

const useCurrency = () => {
    // State of our custom hook
    const [state, setState] = useState('');

    const Select = () => (
        <Fragment>
            <label>Currency</label>
            <select>
                <option value="ARS">Argentine pesos</option>
            </select>
        </Fragment>
    );

    // Return state, interface and fn that modifies the state
    return [state, Select, setState];
};

export default useCurrency;