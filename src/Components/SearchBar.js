import React, { Component } from 'react';

class SearchBar extends Component{
state={
    text: ''
}

onFormSubmit=(event)=>{
    event.preventDefault();

    this.props.onSubmit(this.state.text)
    // console.log(this.state.text)
}
    render(){
       return (
       <div className="ui segment">
           <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field">
                   <label>Image Search</label>
                   <input value={this.state.text} type="text" onChange={(e)=>this.setState({text: e.target.value})} />

               </div>
           </form>
        </div>
       )
    }

}

export default SearchBar;