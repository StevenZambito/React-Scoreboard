import React, { useState } from "react";
import styles from "./Team.module.css";

export const Team = () => {
	const [teamName, setTeamName] = useState("Gators");
	let newTeamName = "";
	const handleTeamNameInput = (event) => {
		newTeamName = event.target.value;
	};
	const handleTeamNameClick = () => {
		setTeamName(newTeamName);
	};
	return (
		<div>
			<div className={styles.teamname}>
				<h2 className={styles.team}>{teamName}</h2>
				<h2 className={styles.team}>0</h2>
			</div>
			<div className={styles.update}>
				<input onChange={handleTeamNameInput} />
				<button onClick={handleTeamNameClick} className={styles.updateButtons}>
					Update Team Name
				</button>
			</div>
			<div>
				<button className={styles.pointButtons}>+</button>
				<button className={styles.pointButtons}>-</button>
			</div>
		</div>
	);
};
