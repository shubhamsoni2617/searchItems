import React, { Component } from 'react';
import unspash from '../api/unsplash';
import ImageList from './ImageList'

import SearchBar from './SearchBar'


class App extends Component{
    state={
        images:[]
    }

onSearchSubmit=async (term)=>{
   const response= await unspash.get('/search/photos',{
       params:{
        query:term
       }
   })
   console.log(response.data.results)
   this.setState({
       images: response.data.results
   })
}

    render(){

        return (
            <div className="ui container" style={{marginTop:"10px"}}>

               <SearchBar onSubmit={this.onSearchSubmit}/>
               <ImageList Images={this.state.images}/>
            </div>
        )
    }
}

export default App;
