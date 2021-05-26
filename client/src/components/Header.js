import React from 'react';

import styles from './Shared.module.scss';

export default function Header({ title, subtitle }) {
	return (
		<header>
			<h1 className={styles.title}>{title}</h1>
			{
				subtitle &&
				<h2 className={styles.subtitle}>{subtitle}</h2>
			}
		</header>
	);
}