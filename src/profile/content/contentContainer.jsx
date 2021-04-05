import Content from './content';
import React from 'react';
import { updateStatusThC, 
	addPost, 
	getUserProfileThC, 
	getStatusThC, 
	savePhoto } from './../../redux/content-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return {
		content: state.contentPage.content,
		profile: state.contentPage.profile,
		status: state.contentPage.status,
		authId: state.auth.id
	}
}

class ContentContainer extends React.Component {

	refreshProfile () {
		let userId = (this.props.match.params.userId || this.props.authId);
		this.props.getStatusThC(userId);
		this.props.getUserProfileThC(userId);
	}

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId !== prevProps.match.params.userId || !this.props.profile) {
			this.refreshProfile();
		}
	}

	submit = values => {
		this.props.addPost(values.newPost)
	}

	render() {
		return <Content {...this.props}
			profile={this.props.profile}
			status={this.props.status}
			updateStatus={this.props.updateStatusThC}
			submit={this.submit}
			isOwner={!this.props.match.params.userId}
			savePhoto={this.props.savePhoto} />
	}
}

export default compose(
	connect(mapStateToProps, { savePhoto, addPost, getUserProfileThC, getStatusThC, updateStatusThC }),
	withRouter
)(ContentContainer)
