import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  margin-left: 5%;
  color: #3a3a3a;
`;

const HeaderWrapper = styled.div`
  box-shadow: 0 1px 0 0 black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #696969;
`;

const RowWrapper = styled.ul`
  display: inline-block;
  width: 20%;
`;

const LinkItem = styled.a`
	font-size: 1.5em;
  color: #696969;
  font-weight: bold;
  margin-right: 5%;
`;

const Header = () => (
	<HeaderWrapper>
		<Title>My simple blog</Title>
		<RowWrapper>
			<LinkItem href={`/`}>Posts</LinkItem>
			<LinkItem href={`/create-post`}>Create Post</LinkItem>
		</RowWrapper>
	</HeaderWrapper>
);

export default Header;
