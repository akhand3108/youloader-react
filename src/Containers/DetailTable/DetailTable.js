import React,{Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class DetailTable extends Component{


    render(){
        const {data} = this.props;
        const options = data.videoformats;

        let link =`http://localhost:4000/download/video?id=${data.video_id}&itag=`;

        const columns = [{
            Header: 'Quality',
            accessor: 'resolution' // String-based value accessors!
          }, {
            Header: 'Size',
            accessor: 'clen',
          }, {
            Header: 'Type',
            accessor: 'type',
          },{
              Header: 'Link',
              accessor: 'itag',
              Cell: props => <a href={link+props.original.itag}> Download Here</a>,
          }]
         
          return <ReactTable
            data={options}
            columns={columns}
          />


         }    
} 

export default DetailTable;