import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './MyNavbarItems';
import { MyNavBarItems } from './MyNavbarItems';
import './Navbar.css';
const DropdownMenu = (props) => {
  // debugger;
  const [dropdownMenu, setDropDownMenu] = useState(-1)
  return (
    <div>
      <ul className="nav nav-tabs">
        {MyNavBarItems.map((item) => (
          <li
            key={item.id}
            className="nav-item dropdown"
            onMouseEnter={() => {
              setDropDownMenu(item.id)
            }}
          >
            <Link
              className={`nav-link dropdown-toggle ${props.Dcolor}`}
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              to={ item.path}
            >
              {item.title}
            
            {item.child.length > 0 && (
              <div
                className='dropdown-menu'>
                {item.child.map((child) => (
                  <Link key={child?.id} className="dropdown-item" to={child.path}>
                    {' '}
                    {child.title}{' '}
                  </Link>
                ))}
              </div>
              )}</Link>
           
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropdownMenu
