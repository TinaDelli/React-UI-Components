import React from 'react';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

import './Header.css';

function HeaderContainer () {
    return (
<div className="header-container">
   <ImageThumbnail />
    <HeaderTitle />
</div>
    );
}

export default HeaderContainer; 