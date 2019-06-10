import React from 'react';

export default class Card extends React.Component {
	render() {
		const {name, gender, picture, children, onPictureClick} = this.props;
		return (
			<div>
				<h1>{children}</h1>
				<img onClick={onPictureClick} src={picture}/>
				{name} {gender}
			</div>
		);
	}
}