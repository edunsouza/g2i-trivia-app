import React from 'react';

import styles from './ResponsiveContainer.module.scss';

export default function PageHeader({ title, subtitle }) {
	return (
		<>
			<h1 className={styles.class1}>{title}</h1>
			{subtitle && <h2>{subtitle}</h2>}
		</>
	);
}