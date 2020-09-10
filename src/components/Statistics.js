import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Statistics = ({ title, stats }) => {
	return (
		<section class="statistics">
			<h2 class="title">{title}</h2>
			<ul class="stat-list">
				{stats.map((stat) => (
					<li key={stat.id}>
						<p>{stat.label}</p> <p>{stat.percentage}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Statistics;
