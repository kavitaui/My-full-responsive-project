import React, { useState } from 'react';
import "./MyNavbarItems";
import { MyNavBarItems } from './MyNavbarItems';
const DropdownMenu = () => {
    const [dropdownMenu, setDropDownMenu] = useState(-1);
    return (<div>
        <ul className="nav nav-tabs">
            {MyNavBarItems.map((item) => (

                <li key={item.id}
                    className="nav-item dropdown" onMouseEnter={() => { setDropDownMenu(item.id) }} >
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{item.title}</a>
                    {item.child.length > 0 &&
                        <div className={`dropdown-menu ${dropdownMenu === item.id ? 'show' : ''}`}>
                            {item.child.map((child) => (
                                <a key={child?.id} className="dropdown-item"> {child.title} </a>
                            ))}
                        </div>
                    }
                </li>



            ))}
        </ul>
    </div>
    )
}

export default DropdownMenu