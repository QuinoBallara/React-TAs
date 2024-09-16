import React, { FunctionComponent, PropsWithChildren } from 'react';
import './Card.css';

const Card: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <div className='card'>
            {children}
        </div>
    );
}

export default Card;