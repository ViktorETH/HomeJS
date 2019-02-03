import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {searchPosts} from '../../../actions/allPosts'

const Title = styled.h1`
  font-size: 2em;
  width: 20%;
  color: #FFF
`;

const HeaderWrapper = styled.div`
  box-shadow: 0 1px 0 0 black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0, .2);
  margin: 0 auto;
  padding: 0 5.5%;
  background-color: #2A2B32;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  justify-content: flex-end
`;

const LinkItem = styled.a`
	font-size: 1.5em;
  font-weight: bold;
  margin-left: 5%;
  color: #FFF;
  :hover {
    color: #3A3B45;
  }
`;

const SearchInput = styled.input`
  font-size: 16px
  padding: 10px
  display: block
  width: 300px
  border: none
  border-bottom: 1px solid #ccc
  outline: none
`;

class Header extends Component {

	handleSearch = (e) => {
		this.props.searchPosts(e.target.value)
	};

	render () {
		return (
			<HeaderWrapper>
				<Title>My simple blog</Title>
				<SearchInput onChange={this.handleSearch} placeholder="Search"/>
				<RowWrapper>
					<LinkItem href={`/`}>Posts</LinkItem>
					<LinkItem href={`/create-post`}>Create Post</LinkItem>
				</RowWrapper>
			</HeaderWrapper>
		);
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts.posts
	}
};

const mapDispatchToProps = {
	searchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
