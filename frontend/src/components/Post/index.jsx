import React from "react";

function Post({ title, message, imageUrl, userId }) {
	return (
		<li className="posts-item">
			<h2 className="post-title">{title}</h2>
			<div className="post-message">{message}</div>
			<img className="post-image" src={imageUrl} width="300" aria-hidden alt="image post"/>
			<div className="post-details">
				<div className="post-author">User= {userId}</div>
				<div className="post-date">12-12-2020</div>
				<div className="post-likes">♥ TODO</div>
			</div>
		</li>
	)
}

export default Post;