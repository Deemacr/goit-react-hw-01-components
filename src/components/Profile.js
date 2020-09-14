import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardContainer = styled.div`
	max-width: 250px;
	max-height: 500px;
	margin: auto;
	margin-bottom: 20px;
`;

const ProfileContainer = styled.div`
	max-width: 250px;
	background-color: rgb(255, 255, 255);
	text-align: center;
	border-color: rgb(0, 0, 0);
	border-width: 2px;
`;

const ProfileImage = styled.img`
	border-radius: 50%;
	margin: auto;
	margin-top: 10px;
`;

const ProfileName = styled.p`
	font-weight: bolder;
`;

const ProfileLocation = styled.p`
	margin-bottom: 0px;
	padding-bottom: 20px;
`;

const StatsContainer = styled.ul`
	display: flex;
	text-align: center;
	margin-top: 0px;
	padding-left: 0px;
	background-color: #ffffff;
`;

const StatsItem = styled.li`
	display: inline-block;
	border: 1px solid #e4e9f0;
	padding: 10px;
`;
const StatsLabel = styled.span``;

const StatsQuantity = styled.span`
	font-weight: bolder;
`;

const Profile = ({ avatar, name, tag, location, stats }) => {
	return (
		<CardContainer class="profile">
			<ProfileContainer class="description">
				<ProfileImage src={avatar} alt="user avatar" class="avatar" />
				<ProfileName class="name">{name}</ProfileName>
				<p class="tag">@{tag}</p>
				<ProfileLocation class="location">{location}</ProfileLocation>
			</ProfileContainer>

			<StatsContainer class="stats">
				<StatsItem>
					<StatsLabel class="label">Followers </StatsLabel>
					<StatsQuantity class="quantity">{stats.followers}</StatsQuantity>
				</StatsItem>
				<StatsItem>
					<span class="label">Views </span>
					<StatsQuantity class="quantity">{stats.views}</StatsQuantity>
				</StatsItem>
				<StatsItem>
					<span class="label">Likes </span>
					<StatsQuantity class="quantity">{stats.likes}</StatsQuantity>
				</StatsItem>
			</StatsContainer>
		</CardContainer>
	);
};

export default Profile;
