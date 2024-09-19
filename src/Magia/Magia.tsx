import React, { useState } from 'react';
import './Magia.css';

function magicButton() {

    const [visible, setVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>Magic Button</button>
            <h1 className={visible ? "" : "invisible"}>Ahora me ves</h1>
        </div>
    )
}

export default magicButton;