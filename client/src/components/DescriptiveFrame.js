import React from 'react';

import styles from './DescriptiveFrame.module.scss';

export default function DescriptiveFrame({ children, description }) {
	return (
		<section className={styles.root}>
			<article>{children}</article>
			<footer>{description}</footer>
		</section>
	);
}