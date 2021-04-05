import React from 'react';
import User from './user';
import Paginator from '../../utils/paginator';

let Users = (props) => {
	if (!props.totalUserCount) return <div>Loading...</div>
	return <div>
		<Paginator totalUserCount={props.totalUserCount} 
		pageSize={props.pageSize} 
		currentPage={props.currentPage}
		onPageChanged={props.onPageChanged} />

		{props.users.map(u => 
		<User user={u} 
		followingInProgress={props.followingInProgress} 
		unfollowThC={props.unfollowThC} 
		followThC={props.followThC}
		onPageChanged={props.onPageChanged}/>)
		}
	</div>
}

export default Users;