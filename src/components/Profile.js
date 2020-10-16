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
		<CardContainer className="profile">
			<ProfileContainer className="description">
				<ProfileImage src={avatar} alt="user avatar" className="avatar" />
				<ProfileName className="name">{name}</ProfileName>
				<p className="tag">@{tag}</p>
				<ProfileLocation className="location">{location}</ProfileLocation>
			</ProfileContainer>

			<StatsContainer className="stats">
				<StatsItem>
					<StatsLabel className="label">Followers </StatsLabel>
					<StatsQuantity className="quantity">{stats.followers}</StatsQuantity>
				</StatsItem>
				<StatsItem>
					<span className="label">Views </span>
					<StatsQuantity className="quantity">{stats.views}</StatsQuantity>
				</StatsItem>
				<StatsItem>
					<span className="label">Likes </span>
					<StatsQuantity className="quantity">{stats.likes}</StatsQuantity>
				</StatsItem>
			</StatsContainer>
		</CardContainer>
	);
};

Profile.defaultProps = {
	avatar:
		"http://img.dummy-image-generator.com/abstract/dummy-50x50-Circus.jpg",
};

Profile.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
