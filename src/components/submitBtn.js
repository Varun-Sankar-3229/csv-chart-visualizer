import React from 'react';

const CreateSubmit = (props) => {
    if(props.valid){
        return (
            <button className="btn custom-btn-submit" onClick={props.handleSubmit}>Submit</button>
        );
    }
    else{
        return null;
    }
}

export default CreateSubmit;