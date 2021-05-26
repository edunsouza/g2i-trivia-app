import React from 'react';

import styles from './Shared.module.scss';

export default function Section({ children }) {
	return (
		<section className={styles.section}>
			{children}
		</section>
	);
}