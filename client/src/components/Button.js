import React from 'react';

import styles from './Button.module.scss';

export default function Button({ children, onClick, variant }) {
	return (
		<button onClick={onClick} className={variant === 'secondary' ? styles.secondary : styles.primary}>
			{children}
		</button>
	);
}