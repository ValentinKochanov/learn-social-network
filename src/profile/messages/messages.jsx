import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../validators/validators';
import s from './messages.module.css';
import MessagesItem from './messageItem/messagesItem';
import DialogItem from './dialogsItem/dialogsItem';
import Textarea from '../../formControl/formControl';

let maxLength100 = maxLengthCreator(100)

let MessagesForm = (props) => {
	const { handleSubmit } = props
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Field name="Messages" component={Textarea} type="text" validate={[required, maxLength100]}/>
			</div>
			<div>
				<button>Click</button>
			</div>
		</form>
	)}

MessagesForm = reduxForm({
	form: 'newMessage'
})(MessagesForm)

let Messages = (props) => {

	let dialogsElem = props.dialogs.map(dialog => <div key={dialog.id}><DialogItem name={dialog.name} id={dialog.id} /></div>);
	let messagesElem = props.messages.map(message => <div key={message.id}><MessagesItem text={message.text} /></div>);

	return (
		<div className={s.chat}>
			<div>{dialogsElem}</div>
			<div>
				<div>{messagesElem}</div>
				<MessagesForm onSubmit={props.submit}/>
			</div>
		</div>
	)
}

export default Messages;