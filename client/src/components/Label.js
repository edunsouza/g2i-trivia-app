import React from 'react';

import styles from './Label.module.scss';

export default function Label({ children }) {
	return (
		<p className={styles.p}>
			{children}
		</p>
	);
}
