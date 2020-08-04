import React, { useState } from "react";
import "./App.css";
import { Header } from "./Header.js";
import { Team } from "./Team.js";

export function App() {
	const [listOfTeams, setListOfTeams] = useState([
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
	]);

	const updateTeamName = (newName, index) => {
		const updatedListOfTeams = [...listOfTeams];
		updatedListOfTeams[index].teamName = newName;
		setListOfTeams(updatedListOfTeams);
	};

	return (
		<div className="App">
			<Header />
			{listOfTeams.map((teamInList, index) => {
				return (
					<Team
						name={teamInList.teamName}
						score={teamInList.teamScore}
						index={index}
						key={index}
						updateTeamName={updateTeamName}
					/>
				);
			})}
		</div>
	);
}
