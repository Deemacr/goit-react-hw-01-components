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
`;

const Statistics = ({ title, stats }) => {
	return (
		<DataContainer class="statistics">
			<StatisticalTitle class="title">{title}</StatisticalTitle>
			<StatisticalDataContainer class="stat-list">
				{stats.map((stat) => (
					<StatisticalDataItem
						key={stat.id}
						style={{ backgroundColor: "#" + randomColor() }}
					>
						<p>{stat.label}</p> <p>{stat.percentage}</p>
					</StatisticalDataItem>
				))}
			</StatisticalDataContainer>
		</DataContainer>
	);
};

export default Statistics;
