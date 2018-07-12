import React from 'react';

const BoardList = (props) => {
    const {
        datas,
        isFetching,
      } = props;

    if(isFetching){
        return(
          <div>Loading</div>
        )
      } else {
          return(
            <div>
              <div>
                ID: {datas._id}
              </div>
              <div>
                Name: {datas.name}
              </div>
              <div>
                Port: {datas.port}
              </div>
              <div>
                datas: {datas.datas}
              </div>
            </div>
          )
      }
      return null;
}

export default BoardList;