import React from 'react';
import styles from '@styles/components/Header.module.scss';
import github from '@icons/github.svg'
import twitter from '@icons/twitter.svg'
import linkedIn from '@icons/linkedin.svg'
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
    return (
        <header>
            
            <nav id={styles.nav}>
                <div className={styles["nav-left"]}>
                    <h3>Giphy Searcher</h3>
                </div>
                <div className={styles["nav-right"]}>
                    <Link target="_blank" href="https://github.com/JuanCCampo95">
                        <Image width={30} alt="logo de github" src={github} />
                    </Link>
                    <Link target="_blank" href="https://twitter.com/JuanCCampoT">
                        <Image width={30} alt="logo de twitter" src={twitter} />
                    </Link>
                    <Link target="_blank" href="https://www.linkedin.com/in/juancampo95/">
                        <Image width={30} alt="logo de linkedin" src={linkedIn} />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;