import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const PostWrapper = styled.div`
  margin: 2% 0;
  width: 26%;
  height: 500px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 20px 1px #F5F5F5;
  overflow: hidden;
`;

const Paragraph = styled.p`
  text-align: justify;
  padding: 1% 5%;
  height: 310px;
  overflow: hidden;
`;

const Title = styled.h2`
	margin-left: 5%;
  padding: 0 5%;
  width: 100%;
`;

const Author = styled.h4`
	margin-left: 5%;
  padding: 0 5%;
  width: 100%;
`;

const Post = ({post}) => {
	return (
		<PostWrapper>
			<Link to={`/posts/${post.id}`}>
				<Title>{post.title}</Title>
			</Link>
			<Paragraph>{post.body}</Paragraph>
			<div>
				<Author>Author: {post.author}</Author>
			</div>
		</PostWrapper>
	)
};

export default Post;
