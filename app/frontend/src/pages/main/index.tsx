import React from 'react';
import Header from '../../components/header/header';
import Home from '../../components/home/home';
import styles from './styles.module.scss';

function Main() {
	return (
		<div className={styles.container}>
			<Header />
			<Home />
		</div>
	);
}

export default Main;
