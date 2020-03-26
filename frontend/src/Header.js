import React from 'react';

export default function Header({title, children}){
    return (
        <header>
            <h1>{title}</h1>
            <h1>{children}</h1>
        </header>
    );
}
