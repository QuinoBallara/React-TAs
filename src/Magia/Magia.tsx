import React, { useState } from 'react';

function magicButton() {

    const [visible, setVisible] = useState(true);

    return (
        <div>
            <h1 className={visible ? "visible" : "invisible"}>Ahora me ves</h1>
            <button>Magic Button</button>
        </div>
    )
}