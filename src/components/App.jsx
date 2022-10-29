import React from "react";
import unsplash from "./API/unsplash";
import Image from './image';
import SeachBar from "./SearchBar";
//key:N6g7HSVXs6TMqPnTpqgz3pgB3Y7MnU0W7v0CE2VIUwI

class App extends React.Component{
    state={images:[]};
    onSubmit=async (term)=>{
        const response=await unsplash.get('/search/photos',{
            params:{query:term}
        });
        this.setState({images: response.data.results});
    }
    render(){
        return(
        <div className="ui container" style={{marginTop:'10px'}}>
            <SeachBar onsub={this.onSubmit}/>
            <Image imm={this.state.images}/>
        </div>);
    };
}
export default App;