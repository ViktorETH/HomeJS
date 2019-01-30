import React, {Component} from 'react';
import Posts from './all-posts/all-posts';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./header/header";
import styled from "styled-components";
import Post from "./post/post";
import CreatePost from "../presentational/createPost/create-post";

const Wrapper = styled.div`
	margin: 0 auto;
  width: 100%;
`;

class App extends Component {

	render () {
		return (
			<Router>
				<Wrapper>
					<Header/>
					<div className="App">
						<Route exact path="/" component={Posts}/>
						<Route path={`/posts/:id`} component={ Post }/>
						<Route path={`/create-post`} component={ CreatePost }/>
					</div>
				</Wrapper>
			</Router>
		);
	}
}

export default App;
