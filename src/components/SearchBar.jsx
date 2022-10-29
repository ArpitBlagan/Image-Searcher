import React from "react";

class SearchBar extends React.Component{
    state={term:''};
    thisdd=(event)=>{
        event.preventDefault();
       this.props.onsub(this.state.term);
    }
    render(){
        return <div className="ui segment">
            <form  onSubmit={this.thisdd} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input onChange={(e)=>{this.setState({term:e.target.value})}} type="text" 
                    placeholder="Who's image you want to search" value={this.state.term} />
                </div>
            </form>
        </div>;
    };
}
export default SearchBar;