import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/users';
import Card from './components/Card';

import './App.css';

class App extends React.Component {
	componentDidMount () {
		this.props.fetchUsers();
	}

	render () {
		const { user, fetchUsers } = this.props;

		if (!user) {
			return (
				<div>Loading...</div>
			);
		}

		return (
			<Card
				onPictureClick={fetchUsers}
				name={user.name}
				gender={user.gender}
				picture={user.picture}>
				My Card
			</Card>

		);
	}
}

export default connect(
	state => ({
		user: state.users[0],
	}),
	{
		fetchUsers: fetchUsers,
	},
)(App);










