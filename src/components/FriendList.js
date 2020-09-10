import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FriendList = ({ friends }) => {
	return (
		<ul class="friend-list">
			{friends.map((friend) => (
				<li key={friend.id} class="item">
					<span class="status">{friend.isOnline}</span>
					<img
						class="avatar"
						src={friend.avatar}
						alt={friend.name}
						width="48"
					/>
					<p class="name">{friend.name}</p>
				</li>
			))}
		</ul>
	);
};

export default FriendList;
