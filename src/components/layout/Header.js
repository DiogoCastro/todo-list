import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
    return (
        <header className="header-style">
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}