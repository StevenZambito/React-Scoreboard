import React from "react";
import styles from "./Team.module.css";
export const Team = () => {
	return (
		<div>
			<h2 className={styles.team}>Team Name:</h2>
			<h2 className={styles.team}>Team Score:</h2>
			<input /> <button>Update Team Name</button>
			<div>
				<button className={styles.pointButtons}>Add Point</button>
				<button>Subtract Point</button>
			</div>
		</div>
	);
};
