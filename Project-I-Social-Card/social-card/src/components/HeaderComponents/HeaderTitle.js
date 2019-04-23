import React from 'react';
import Moment from 'moment';

import './Header.css';
import HeaderContent from './HeaderContent';


function HeaderTitle (){
    return (
<div className="header-title">
<div className="header-header">
    <h1>Lambda School</h1>
    <p>@LambdaSchool &bull; {Moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>
    <HeaderContent />
</div>

    );
}


export default HeaderTitle;