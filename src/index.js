//importing React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';


//Hold Api Key
const API_KEY='AIzaSyC7GCLoI7kXNnwVUnCWxUZ_g5MLHTOdVZY';


//create new component and should produce some HTML
//Take this component's geenerated HTMl and put it on the page (*in the DOM*)

class App extends Component {
	constructor(props){
		super(props);
		this.state={ videos: [] };
		
	YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
		this.setState({videos});
		//this.setState({videos: videos}); in ES6 .. when key and property have the same name..
	})

	}
	render(){

	return <div>
		<SearchBar />
	</div>

	}
}
ReactDOM.render(<App />, document.querySelector('.container'));
