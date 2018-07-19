import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";


const BoardList = (props) => {
const {
    datas,
    isFetching,
  } = props;

  console.log("BoardList",datas);

let Id = datas._id;

if(isFetching){
    return(
      <div>testtest11123testetsetestetest</div>
    )
  } else {
      return(
        <div className='col-3'>
          <Link to={`/view/${Id}`}>
            Name: {datas.name}
          </Link>
        </div>
      )
  }
  return null;
}

export default BoardList;