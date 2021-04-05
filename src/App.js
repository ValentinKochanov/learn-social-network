import './App.css';
import React from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import HeaderContainer from './header/headerContainer';
import Sidebar from './sidebar/sidebar';
import ContentContainer from "./profile/content/contentContainer";
import MessagesContainer from './profile/messages/messagesContainer';
import News from "./profile/news/news";
import Music from "./profile/music/music";
import Settings from "./profile/settings/settings";
import UsersContainer from "./profile/users/usersContainer";
import LoginContainer from "./header/login/loginContainer";
import { initializesSuccess } from './redux/app-reducer';

class App extends React.Component {

	componentDidMount() {
		this.props.initializesSuccess();
	}

	render() {

		if (!this.props.initialized) {
			return <></>
		}

		return (
			<div className="App">
				<HeaderContainer />
				<Sidebar />
				<div className="AppContent">
					<Route path='/profile/:userId?' render={() => <ContentContainer />} />
					<Route path='/messages' render={() => <MessagesContainer />} />
					<Route path='/news' component={() => <News />} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
					<Route path='/login' component={LoginContainer} />
				</div>
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	initialized: state.app.initialized 
})

export default compose(
	connect(mapStateToProps, { initializesSuccess }),
	withRouter
)(App)