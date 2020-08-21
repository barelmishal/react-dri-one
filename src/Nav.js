import React from 'react';

const Nav = () => {
    return (
    <nav class="navigetion">
        <div class="left-side">
            <div class="button clickable">Clients</div>
            <div class="button clickable">Recipe</div>
            <div class="button clickable">FIT Menu</div>
        </div>
        <div class="right-side">
            <div class="button user">welcome ron levi</div>
        </div>
    </nav>
    );
}

export default Nav;