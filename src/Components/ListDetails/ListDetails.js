import React from 'react';
import DetailTable from '../../Containers/DetailTable/DetailTable';

const ListDetails =  ({data})=>{
  return ( data.title ?
    <div className="">
      <p className="fa2 white">
        <strong> {data.title} </strong>
      </p>

 
      <DetailTable className="white" data={data}/>

    </div> : <div/>
  );
}

export default ListDetails;