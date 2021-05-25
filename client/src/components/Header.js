import React from 'react';

import styles from './Header.module.scss';

export default function Header({ title, subtitle }) {
	return (
		<header>
			<h1 className={styles.h1}>{title}</h1>
			{
				subtitle &&
				<h2 className={styles.h2}>{subtitle}</h2>
			}
		</header>
	);
}