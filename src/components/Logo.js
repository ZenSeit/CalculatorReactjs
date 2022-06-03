import React from 'react';

function Logo({logoimg, name}) {


return (
    <div className="logo-container">
        <img className="sensei-img" 
        src={logoimg}
        alt={`${name} imagen`}/>
      </div>
);


}
 export default Logo;
