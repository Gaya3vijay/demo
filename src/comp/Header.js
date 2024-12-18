import React from 'react'

function Header(
    {children,headerLable}
) {
  return (
    <div>
        <h1>
            {headerLable}
        </h1>
        <span>{children}</span>
    </div>
  )
}

export default Header