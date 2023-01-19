import React from 'react';
import styles from './styles.module.scss';
import HeaderTabs from 'src/components/molecules/HeaderTabs';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.Logo}>MOGAKSO</div>
            <HeaderTabs />
            <div className={styles.account_btn}>
                <div>Login</div>
                <div>Sign up</div>
            </div>
        </div>
    );
}

export default Header;
