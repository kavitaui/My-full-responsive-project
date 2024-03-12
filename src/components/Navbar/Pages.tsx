import React, { useState } from 'react'
import { MyNavBarItems } from './MyNavbarItems'
const Pages = () => {

    const [subDropDown, setSubDropDown] = useState(-1)
  return (
      <div>
          <ul className='nav nav-tabs'>
              {MyNavBarItems.map((item) => (
                 
                     <li> 
                          {item.child && item.child.length > 0 && (
                              <ul>
                                  {item.child.map((child) => (
                                      <li key={child.id}>
                                          {child.subChild && child.subChild.length > 0 && (
                                              <ul>
                                                  {child.subChild.map((subChild) => (
                                                     
                                                      <li key={subChild.id} >{subChild.title}</li>  
                                                     
                                                  ))}
                                             </ul>
                                      )}
                                      </li>

                                  ))}
                         </ul>  
                             
                                 
                         
                      )}        
                        
                        </li>
                  
                      
              
              
              
              ))}
  
          </ul>  
    </div>
  )
}

export default Pages;