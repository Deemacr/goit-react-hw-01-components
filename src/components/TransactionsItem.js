import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

const TransactionsItem = ({ TransactionsItems }) => (
	<TransactionTr>
		<TransactionName>{TransactionsItems.type}</TransactionName>
		<TransactionAmount>{TransactionsItems.amount}</TransactionAmount>
		<td>{TransactionsItems.currency}</td>
	</TransactionTr>
);

export default TransactionsItem;

TransactionsItem.propTypes = {
	TransactionsItems: PropTypes.shape({
		id: PropTypes.string.isRequired,
		amount: PropTypes.string,
		currency: PropTypes.string,
		type: PropTypes.string,
	}).isRequired,
};
