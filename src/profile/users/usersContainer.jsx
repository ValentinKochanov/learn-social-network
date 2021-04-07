import React from 'react';
import Users from './users';
import { connect } from 'react-redux';
import { getUsersThC, unfollowThC, followThC } from './../../redux/users-reducer';

class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getUsersThC(this.props.pageSize, this.props.currentPage);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThC(this.props.pageSize, pageNumber);
    }

    render = () => {
        return <Users totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            followingInProgress={this.props.followingInProgress}
            unfollowThC={this.props.unfollowThC}
            followThC={this.props.followThC}
            paginatorSize={this.props.paginatorSize}
            />
        }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress,
        paginatorSize: state.usersPage.paginatorSize
    }
}

export default connect (mapStateToProps, 
    {getUsersThC, unfollowThC, followThC})(UsersContainer);