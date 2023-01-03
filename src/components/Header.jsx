import React from 'react';
import styles from '@styles/components/Header.module.scss';
const Header = () => {
    return (
        <header>
            <nav id={styles.nav}>
                <div className={styles["nav-left"]}>
                    <h3>Giphy Searcher</h3>
                </div>
                <div className={styles["nav-right"]}>
                    <ul>
                        <li>Github</li>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;