import React from "react";
import "./App.css";
import { Header } from "./Header.js";
import { Team } from "./Team.js";

export function App() {
	const listOfTeams = [
		{
			teamName: "Gators",
			teamScore: 0,
		},
		{
			teamName: "Seminoles",
			teamScore: 0,
		},
		{
			teamName: "Dolphins",
			teamScore: 0,
		},
		{
			teamName: "Bears",
			teamScore: 0,
		},
	];

	return (
		<div className="App">
			<Header />
			{listOfTeams.map((teamInList, index) => {
				return (
					<Team
						name={teamInList.teamName}
						score={teamInList.teamScore}
						index={index}
					/>
				);
			})}
		</div>
	);
}
