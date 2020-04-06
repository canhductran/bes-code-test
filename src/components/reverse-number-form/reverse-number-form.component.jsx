import React from 'react';

const ReverseNumberFormComponent = ({ onChangeNumber, resultMessage }) => (
    <div>
        <h2>Now enter the same number in reverse</h2>
        <input onChange={onChangeNumber} type='number' step='any' />
        <h3>{resultMessage}</h3>
    </div>
);

export default ReverseNumberFormComponent;