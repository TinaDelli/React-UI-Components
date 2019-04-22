import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

function HeaderTitle (){
    return (
<div className="header-title">
<div className="header-header">
    <h1>Lambda School</h1>
    <p>@LambdaSchool &bull; 26 Jan</p>
    </div>
    <HeaderContent />
</div>

    );
}

export default HeaderTitle;