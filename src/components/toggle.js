import React from 'react';

const Toggle = (props) => {
    const handleClick = () => {
        props.alterState();
    }

    return (
        <div>
            <i class="far fa-hand-pointer" onClick={handleClick}></i>
        </div>
    );
}

export default Toggle;