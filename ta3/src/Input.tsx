import React, { useState } from 'react';

function Input() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
            />

            <p>{inputValue}</p>
        </div>
    );
}

export default Input;