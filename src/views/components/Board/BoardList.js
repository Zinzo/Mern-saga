import React from 'react';

const BoardList = (props) => {
    const {
        datas, 
        isFetching
      } = props;

    if(isFetching){
        return(
          <div>testtest11123testetsetestetest</div>
        )
      } else {
          return(
            <div className="container">
              <div className='row'>
                <div className='col-3'>
                  ID: {datas._id}
                </div>
                <div className='col-3'>
                  Name: {datas.name}
                </div>
                <div className='col-3'>
                  Port: {datas.port}
                </div>
                <div className='col-3'>
                  datas: {datas.datas}
                </div>
              </div>
            </div>
          )
      }
      return null;
}

export default BoardList;