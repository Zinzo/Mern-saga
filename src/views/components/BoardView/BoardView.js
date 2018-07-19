import React from 'react';

const BoardView = (props) => {
    const {
        datas,
    } = props;

    return(
        <div className='container'>
            <div className="row">
                <div className="col-3">{datas.BoardDatas.name}</div>
                <div className="col-3">{datas.BoardDatas.port}</div>
                <div className="col-3">{datas.BoardDatas.datas}</div>
            </div>
        </div>
    )
}

export default BoardView;