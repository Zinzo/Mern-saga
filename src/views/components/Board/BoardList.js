import React from 'react';

const BoardList = props => {
    return(
    <div>
        <div>
        ID: {props._id}
        </div>
        <div>
        Name: {props.name}
        </div>
    </div>
    )
}

export default BoardList;