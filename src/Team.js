import React, { useState } from "react";
import styles from "./Team.module.css";

export const Team = (props) => {
	const [teamName, setTeamName] = useState("Gators");
	const [newTeamName, setNewTeamName] = useState("");
	const [teamScore, setTeamScore] = useState(0);

	const handleTeamNameInput = (event) => {
		setNewTeamName(event.target.value);
	};

	const handleTeamNameClick = () => {
		props.updateTeamName(newTeamName, props.index);
	};

	const handleAddPoint = () => {
		setTeamScore(teamScore + 1);
	};

	const handleSubPoint = () => {
		if (teamScore === 0) {
			return;
		}
		setTeamScore(teamScore - 1);
	};

	return (
		<div>
			<div className={styles.teamname}>
				<h2 className={styles.team}>{props.name}</h2>
				<h2 className={styles.teamScore}>{props.score}</h2>
			</div>
			<div className={styles.update}>
				<input
					onChange={handleTeamNameInput}
					value={newTeamName}
					className={styles.input}
				/>
				<button onClick={handleTeamNameClick} className={styles.updateButtons}>
					Update Team Name
				</button>
			</div>
			<div>
				<button onClick={handleAddPoint} className={styles.pointButtons}>
					+
				</button>
				<button onClick={handleSubPoint} className={styles.pointButtons}>
					-
				</button>
			</div>
		</div>
	);
};
