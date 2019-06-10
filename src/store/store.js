import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
	users: [],
};

function reducer (state = initialState, action) {
	switch (action.type) {
		case 'ADD_USERS':
			return {
				...state,
				users: action.payload.map(({name, gender, picture}) => (
					{
						name: name.first,
						gender,
						picture: picture.medium,
					}
				)),
			};
		default:
			return state;
	}
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
