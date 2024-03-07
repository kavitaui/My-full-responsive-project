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
            className={`nav-item dropdown ${item.design === 'design' && 'megaMenu'} `}

          >
            <Link
              className={`nav-link dropdown-toggle ${props.Dcolor}`}
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              to={item.path}
            >
              {item.title}

              {item.child.length > 0 && (
                <ul className={`dropdown-menu`} >

                  <li className={`${item.design === 'design' && 'full-length'}`}>
                    {item.child.map((child) => (
                      <><Link key={child?.id} className="dropdown-item" to={child.path}>

                        {child.title}
                        {child.subChild && child.subChild.length > 0 && (
                          <ul>
                            {child.subChild.map((subChild) => (
                              <li key={subChild.id}>{subChild.title} </li>
                            ))}
                          </ul>
                        )}
                      </Link></>
                    ))}
                  </li>
                  {item.image.length ? <li className='col-img'><img className="img-fluid" src={`src/components/Navbar/img/LandingPage-images/${item.image}`} /></li>: null}
                </ul>
              )}
            </Link>

          </li>
        ))}

      </ul>


    </div>
  )
}

export default DropdownMenu
