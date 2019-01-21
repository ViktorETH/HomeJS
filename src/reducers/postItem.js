import {
	FETCH_POST_ERROR,
	FETCH_POST_START,
	FETCH_POST_SUCCESS,
} from '../helpers/constantTypes';

const initialState = {
	loading: false,
	isError: false,
	errors: [],
	post: []
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POST_START:
			return {
				...state,
				loading: true,
			};
		case FETCH_POST_SUCCESS:
			return {
				...state,
				post: action.payload,
				loading: false
			};
		case FETCH_POST_ERROR:
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

export default postReducer;
