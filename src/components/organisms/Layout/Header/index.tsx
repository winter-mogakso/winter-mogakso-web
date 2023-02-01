import React from 'react';
import styles from './styles.module.scss';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.Logo}>MOGAKSO</div>
            <div className={styles.account_btn}>
                <div>Login</div>
                <div>Sign up</div>
            </div>
        </div>
    );
}

export default Header;
