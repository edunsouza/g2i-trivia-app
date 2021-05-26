import React, { useEffect, useRef } from 'react';

import styles from './Shared.module.scss';

export default function DecoratedList({ list = [] }) {
	const scrollRef = useRef();

	const addScrollListeners = (ref, handler) => {
		if (ref.current) {
			ref.current.addEventListener('wheel', handler);
			ref.current.addEventListener('touchmove', handler);
		}
	};

	const removeScrollListeners = (ref, handler) => {
		if (ref.current) {
			ref.current.removeEventListener('wheel', handler);
			ref.current.removeEventListener('touchmove', handler);
		}
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			const scrolled = scrollRef.current.offsetHeight + scrollRef.current.scrollTop;

			if (scrolled >= scrollRef.current.scrollHeight) {
				return clearInterval(intervalId);
			}

			scrollRef.current.scrollBy(0, 2);
		}, 50);

		const stopScroll = () => clearInterval(intervalId);

		addScrollListeners(scrollRef, stopScroll);

		return () => {
			clearInterval(intervalId);
			removeScrollListeners(scrollRef, stopScroll);
		}
	}, []);

	return (
		<ul className={styles.list} ref={scrollRef}>
			{list.map(({ id, text, decorator }) =>
				<li key={id}>
					<span className={styles.decorator}>{decorator}</span>
					<span>{text}</span>
				</li>
			)}
		</ul>
	);
}