import React from 'react';

const Axis = (props) => {

    const handleClick = () => {
        let x = document.getElementById('xValue').value;
        let y = document.getElementById('yValue').value;
        props.alterState(x,y);
        //console.log(x,y);
        //console.log(props);
    }

    let listRenderX =  props.keys.map((data,index) => {
        return (
            <option className="dropdown-item" key={index} value={index}>{data}</option>
        );
    });

    let listRenderY =  props.keys.map((data,index) => {
        return (
            <option className="dropdown-item" key={index} value={index}>{data}</option>
        );
    });

    return (
        <div className="axis-wrapper">
            <div onClick={handleClick}><i className="fas fa-times"></i></div>
            <div>
                <select id="xValue" className="dropdown">
                    {listRenderX}
                </select>
            </div>

            <div>
                <select id="yValue" className="dropdown">
                    {listRenderY}
                </select>
            </div>
        </div>
    );
}

export default Axis;