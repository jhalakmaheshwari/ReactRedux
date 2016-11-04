//we need this because JSX has to be converted into .js
import React, {Component} from 'react'

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state={ term: 'skjdhsdks'};
	}

	render(){
		return(
		<div>
		 <input 
		 value={this.state.term}
		 onChange={event => this.setState({ term: event.target.value})} /> 
		 Value of Input is {this.state.term}
		</div>
		 );
	}

	
}


export default SearchBar;
