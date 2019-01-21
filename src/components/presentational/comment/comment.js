import React from 'react';
import styled from "styled-components";

const Wrapper = styled.ul`
  width: 60%;
  margin-left: 2%;
`;

const Comment = ({comment}) => {
	return (
		<Wrapper>
			{comment.body}
		</Wrapper>
	)
};

export default Comment;
