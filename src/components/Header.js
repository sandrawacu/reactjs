import React from 'react';

function Header({fname, lname}) {
    return (
        <div>
          <h1>My name is {fname} {lname}</h1>
        </div>
    );
}

export default Header;