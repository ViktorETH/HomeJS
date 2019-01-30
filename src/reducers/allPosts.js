import {
	FETCH_ALL_POSTS_ERROR,
	FETCH_ALL_POSTS_START,
	FETCH_ALL_POSTS_SUCCESS,
	SEARCH_POSTS
} from '../helpers/constantTypes';

const initialState = {
	loading: false,
	isError: false,
	errors: [],
	posts: [],
	search: ''
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
		case SEARCH_POSTS:
			return {
				...state,
				search: action.payload,
			};
		default:
			return state
	}
};

export default postsReducer;
