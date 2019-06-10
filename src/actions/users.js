const ADD_USERS = 'ADD_USERS';

export const addUsers = (data) => (
	{
		type: ADD_USERS,
		payload: data.results,
	}
);

export const fetchUsers = () => {
	return (dispatch) => {
		fetch('https://randomuser.me/api/')
			.then(res => res.json())
			.then(data => {
				dispatch(addUsers(data));
			})
			.catch(err => dispatch)
		;
	};
};