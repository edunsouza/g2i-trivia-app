import React from 'react';

import styles from './Shared.module.scss';

export default function Label({ children, isLoading }) {
	return (
		<p className={styles.label}>
			{isLoading ? 'Loading...' : children}
		</p>
	);
}
