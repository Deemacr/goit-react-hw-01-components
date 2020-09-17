import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FriendsListContainer = styled.ul`
	margin: auto;
	max-width: 250px;
	text-align: center;
	background-color: #ffffff;
	padding: 0px;
	margin-bottom: 20px;
`;

const FriendsListItem = styled.li`
	display: flex;
	align-items: center;
	margin: auto;
	max-width: 250px;
`;

const FriendsListStatus = styled.span`
	display: inline-block;
	width: 50px;
	&::after {
		content: "\\26AB";
		font-weight: bolder;
		display: inline-block;
		margin-left: -1em;
		border-radius: 20px;
	}
`;
const FriendsListImage = styled.img`
	border-radius: 20%;
	margin-top: 10px;
	margin-right: 20px;
`;

const FriednsListName = styled.p`
	font-weight: bolder;
`;

const FriendList = ({ friends }) => {
	return (
		<FriendsListContainer class="friend-list">
			{friends.map((friend) => (
				<FriendsListItem key={friend.id} class="item">
					<FriendsListStatus
						class="status"
						style={{
							color: friend.isOnline ? "green" : "red",
						}}
					></FriendsListStatus>
					<FriendsListImage
						class="avatar"
						src={friend.avatar}
						alt={friend.name}
						width="48"
					/>
					<FriednsListName class="name">{friend.name}</FriednsListName>
				</FriendsListItem>
			))}
		</FriendsListContainer>
	);
};

FriendList.propTypes = {
	friends: PropTypes.array.isRequired,
};

export default FriendList;
