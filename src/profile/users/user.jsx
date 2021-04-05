import React from 'react';
import s from './users.module.css';
import usersPhoto from './../../images/usersPhoto.png';
import { NavLink } from 'react-router-dom';

const User = (props) => {
  return (
    <div key={props.user.id} className={s.users}>
			<div>
				<div>
					<NavLink to={'/profile/' + props.user.id}>
						<img src={props.user.photos.small || usersPhoto} alt="users" />
					</NavLink>
				</div>
				<div>{props.user.followed
					? <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
						props.unfollowThC(props.user.id);
					}}> Unfollow </button>

					: <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
						props.followThC(props.user.id);
					}}> Follow </button>}
				</div>
			</div>
			<div>
				<div>{props.user.name}</div>
				<div>{props.user.status}</div>
			</div>
		</div>
  )
}

export default User;