import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
          <ul>
            <li><NavLink to="/" activeClassName="active">Homes</NavLink></li>
            <li><NavLink to="/category" activeClassName="active">Category</NavLink></li>
            <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
            <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
          </ul>
       </nav>
    )
}

export default Navigation