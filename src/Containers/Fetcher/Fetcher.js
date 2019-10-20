import React,{Component} from 'react';
import ListDetails from '../../Components/ListDetails/ListDetails';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class Fetcher extends Component{


    render(){
         let {data, fetching } = this.props;
         return  fetching ?<Loader
         type="Triangle"
         color="#240b36"
         height={200}
         width={200}
         timeout={0}/>
        : <ListDetails data={data}  /> 
         }    
} 

export default Fetcher;