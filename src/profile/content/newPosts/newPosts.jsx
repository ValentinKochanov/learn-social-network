import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../validators/validators';
import Textarea from '../../../formControl/formControl';
import s from './../content.module.css';

const maxLength50 = maxLengthCreator(50)

let NewPosts = (props) => {

	const { handleSubmit } = props

	return (
		<form onSubmit={handleSubmit} className={s.content}>
			<div>
				<Field name="newPost" component={Textarea} type="text" validate={[required, maxLength50]} />
			</div>
			<div>
				<button>Click</button>
			</div>
		</form>
	)
}

NewPosts = reduxForm({
	form: 'newPosts'
})(NewPosts)

export default NewPosts;