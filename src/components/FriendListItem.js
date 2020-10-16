import React from "react";
import PropTypes, { object } from "prop-types";
import styled from "styled-components";

const ListItem = styled.li`
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

const FriednsListName = styled.span`
	display: inline-block;
	font-weight: bolder;
`;

const FriendListItem = ({ FriendListItem }) => (
	<ListItem>
		<FriendsListStatus
			className="status"
			style={{
				color: FriendListItem.isOnline ? "green" : "red",
			}}
		></FriendsListStatus>
		<FriendsListImage
			className="avatar"
			src={FriendListItem.avatar}
			alt={FriendListItem.name}
			width="48"
		/>
		<FriednsListName className="name">{FriendListItem.name}</FriednsListName>
	</ListItem>
);

export default FriendListItem;

FriendListItem.propTypes = {
	FriendListItem: PropTypes.shape({
		name: PropTypes.string,
		phoneNumber: PropTypes.string,
		email: PropTypes.string,
	}).isRequired,
};
