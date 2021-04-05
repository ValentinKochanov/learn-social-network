import React from 'react';
import s from './content.module.css';
import ContentItem from './contentItem/contentItem';
import NewPosts from './newPosts/newPosts';
import usersPhoto from '../../images/usersPhoto.png';
import ProfileStatus from './contentStatus';

const Content = (props) => {

	if (!props.profile) return <></>

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0])
		}
	}

	let contentElem = props.content.map(content => <div key={content.id}><ContentItem content={content} /></div>)
	return (
		<div className={s.content}>
			<img src={props.profile.photos.small || usersPhoto} alt="users-avatar" />
			{ props.isOwner && <input onChange={onMainPhotoSelected} type={"file"}/> }
			<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
			<div>
				< NewPosts onSubmit={props.submit} />
			</div>
			<div>
				{contentElem}
			</div>
		</div>
	)
}

export default Content;