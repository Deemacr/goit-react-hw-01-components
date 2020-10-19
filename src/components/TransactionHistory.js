import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TransactionsItem from "./TransactionsItem";

const TransactionsTableContainer = styled.table`
	margin: auto;
	width: 40%;
	border-collapse: collapse;
	margin-bottom: 30px;
	border-bottom: 2px solid #e4e4e4;
`;

const TransactionsTableHead = styled.th`
	background-color: #00bcd5;
	color: #ffffff;
	width: 300px;
	border-right: 1px solid #e4e4e4;
	padding: 20px;
	font-weight: 400;
	text-transform: uppercase;
`;

const TransactionBody = styled.tbody`
	text-align: center;
	color: #83868b;
`;

const TransactionHistory = ({ items }) => {
	return (
		<TransactionsTableContainer className="transaction-history">
			<thead>
				<tr>
					<TransactionsTableHead>Type</TransactionsTableHead>
					<TransactionsTableHead>Amount</TransactionsTableHead>
					<TransactionsTableHead>Currency</TransactionsTableHead>
				</tr>
			</thead>

			<TransactionBody>
				{items.map((item) => (
					<TransactionsItem TransactionsItems={item} key={item.id} />
				))}
			</TransactionBody>
		</TransactionsTableContainer>
	);
};

export default TransactionHistory;

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
		.isRequired,
};
