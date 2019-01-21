import {
	FETCH_ALL_POSTS_ERROR,
	FETCH_ALL_POSTS_START,
	FETCH_ALL_POSTS_SUCCESS,
} from '../helpers/constantTypes';

const initialState = {
	loading: false,
	isError: false,
	errors: [],
	posts: []
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_POSTS_START:
			return {
				...state,
				loading: true,
			};
		case FETCH_ALL_POSTS_SUCCESS:
			return {
				...state,
				posts: action.payload,
				loading: false
			};
		case FETCH_ALL_POSTS_ERROR:
			return {
				...state,
				isError: true,
				errors: action.payload,
				loading: false
			};
		default:
			return state
	}
};

export default postsReducer;
