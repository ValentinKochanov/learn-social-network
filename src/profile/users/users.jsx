import React from 'react';
import User from './user';
import Paginator from '../../utils/paginator';
import SearchContainer from '../../utils/search/searchContainer';

const Users = (props) => {
	if (!props.totalUserCount) return <div>Loading...</div>
	return <div>
		<div>
			<Paginator totalUserCount={props.totalUserCount} 
			pageSize={props.pageSize}
			paginatorSize={props.paginatorSize} 
			currentPage={props.currentPage}
			onPageChanged={props.onPageChanged} />
		</div>
		<div>
			<SearchContainer />
		</div>
		<div>
			{props.users.map(u => 
			<User user={u} 
			followingInProgress={props.followingInProgress} 
			unfollowThC={props.unfollowThC} 
			followThC={props.followThC}
			onPageChanged={props.onPageChanged}/>)
			}
		</div>
	</div>
}

export default Users;