import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessage } from '../../redux/dialogs-reducer';
import Messages from './messages';

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialog,
		messages: state.dialogsPage.messages,
	}
}

class MessagesContainer extends React.Component {

	submit = values => {
		this.props.addMessage(values.Messages);
	}

	render() {
		return <Messages submit={this.submit} dialogs={this.props.dialogs}
			messages={this.props.messages} />
	}
}

export default compose(
	connect(mapStateToProps, { addMessage }),
	withAuthRedirect
)(MessagesContainer)