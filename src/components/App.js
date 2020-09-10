import React from "react";
import Profile from "./Profile";
import user from "../json/user.json";
import Statistics from "./Statistics";
import statisticalData from "../json/statistical-data.json";
import FriendList from "./FriendList";
import friends from "../json/friends.json";
import TransactionHistory from "./TransactionHistory";
import transactions from "../json/transactions.json";

const App = () => {
	return (
		<>
			<Profile
				name={user.name}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
			<Statistics title="Upload stats" stats={statisticalData} />
			<FriendList friends={friends} />
			<TransactionHistory items={transactions} />
		</>
	);
};

export default App;
