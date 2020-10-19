import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FriendListItem from "./FriendListItem";

const FriendsListContainer = styled.ul`
	margin: auto;
	max-width: 250px;
	text-align: center;
	background-color: #ffffff;
	padding: 0px;
	margin-bottom: 20px;
`;

const FriendList = ({ friends }) => {
	return (
		<FriendsListContainer className="friend-list">
			{friends.map((friend) => (
				<FriendListItem
					key={friend.id}
					FriendListItem={friend}
					className="item"
				/>
			))}
		</FriendsListContainer>
	);
};

export default FriendList;

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({ id: PropTypes.number.isRequired })
	).isRequired,
};
