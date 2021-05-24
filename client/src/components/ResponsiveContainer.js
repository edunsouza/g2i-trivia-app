import React from 'react';

import styles from './ResponsiveContainer.module.scss';

export default function ResponsiveContainer(props) {
	return (
		<div className={styles.container}>
			{props.children}
		</div>
	);
}