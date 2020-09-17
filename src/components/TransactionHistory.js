import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

const TransactionTr = styled.tr`
	background-color: #ffffff;
	&:nth-child(2n) {
		background-color: #ecf1f4;
	}
`;

const TransactionName = styled.td`
	text-align: left;
	padding-left: 40px;
	text-transform: capitalize;
	border-right: 1px solid #e4e4e4;
	padding-top: 10px;
	padding-bottom: 10px;
`;

const TransactionAmount = styled.td`
	border-right: 1px solid #e4e4e4;
`;

const TransactionHistory = ({ items }) => {
	return (
		<TransactionsTableContainer class="transaction-history">
			<thead>
				<tr>
					<TransactionsTableHead>Type</TransactionsTableHead>
					<TransactionsTableHead>Amount</TransactionsTableHead>
					<TransactionsTableHead>Currency</TransactionsTableHead>
				</tr>
			</thead>

			<TransactionBody>
				{items.map((item) => (
					<TransactionTr key={item.id}>
						<TransactionName>{item.type}</TransactionName>
						<TransactionAmount>{item.amount}</TransactionAmount>
						<td>{item.currency}</td>
					</TransactionTr>
				))}
			</TransactionBody>
		</TransactionsTableContainer>
	);
};

TransactionHistory.propTypes = {
	items: PropTypes.array.isRequired,
};

export default TransactionHistory;
