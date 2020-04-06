import React from 'react';

const OriginalNumberFormComponent = ({ onSubmitOriginalNumber, forwardedRef }) => (
    <div>
        <h2>Enter any number</h2>
        <form onSubmit={onSubmitOriginalNumber}>
            <input type='number' step='any' ref={forwardedRef} />
            <input type='submit' label='Submit' />
        </form>
    </div>
);

export default OriginalNumberFormComponent;