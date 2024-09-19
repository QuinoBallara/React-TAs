import React, { useState } from 'react';
import './Magia.css';

function magicButton() {

    const [visible, setVisible] = useState(true);

    return (
        <div>
            <h1 className={visible ? "" : "invisible"}>Ahora me ves</h1>
            <button onClick={() => setVisible(!visible)}>Magic Button</button>
        </div>
    )
}

export default magicButton;