import {combineReducers} from 'redux';
import postsReducer from '../reducers/allPosts';
import postReducer from '../reducers/postItem';

const rootReducer = combineReducers({
	posts: postsReducer,
	post: postReducer
});

export default rootReducer;
