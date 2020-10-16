import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const randomColor = () => {
	return Math.floor(Math.random() * 16777215).toString(16);
};

const DataContainer = styled.section`
	margin: auto;
	max-width: 250px;
	text-align: center;
	background-color: #ffffff;
`;
const StatisticalTitle = styled.h2`
	padding-top: 15px;
`;
const StatisticalDataContainer = styled.ul`
	display: flex;
	text-align: center;
	background-color: #ffffff;
	padding: 0px;
`;

const StatisticalDataItem = styled.li`
	display: inline-block;
	margin: auto;
	flex: 1 1 auto;
	width: 20%;
	color: #ffffff;
	height: 40px;
	padding-left: 10px;
	padding-right: 10px;
`;

const StatisticalDataLabel = styled.p`
	font-size: 12px;
	margin: 0px;
`;

const StatisticalDataPercentage = styled.p`
	margin-top: 0px;
`;

const Statistics = ({ title, stats }) => {
	return (
		<DataContainer className="statistics">
			<StatisticalTitle className="title">{title}</StatisticalTitle>
			<StatisticalDataContainer className="stat-list">
				{stats.map((stat) => (
					<StatisticalDataItem
						key={stat.id}
						style={{ backgroundColor: "#" + randomColor() }}
					>
						<StatisticalDataLabel>{stat.label}</StatisticalDataLabel>{" "}
						<StatisticalDataPercentage>
							{stat.percentage}
						</StatisticalDataPercentage>
					</StatisticalDataItem>
				))}
			</StatisticalDataContainer>
		</DataContainer>
	);
};

Statistics.defaultProps = {
	title: "Stats Title",
};

export default Statistics;

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
