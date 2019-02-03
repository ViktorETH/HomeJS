import React from 'react';
import styled from "styled-components";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

const Wrapper = styled.ul`
  width: 60%;
  margin-left: 5%;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  padding: 1%;
`;

const options = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric'
};

const Comment = ({comment}) => {
	return (
		<Wrapper>
			{comment.body}
			<ListItemText primary={`${new Date(comment.date).toLocaleString('en-EN', options)}`}/>
		</Wrapper>
	)
};

export default Comment;
