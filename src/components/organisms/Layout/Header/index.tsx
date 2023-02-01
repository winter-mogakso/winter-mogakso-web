import React from 'react';
import { useNavigate } from 'react-router-dom';
import WhiteButton from 'src/components/atoms/Button/WhiteButton';
import styles from './styles.module.scss';

function Header() {
    const navigate = useNavigate();
    return (
        <div className={styles.header}>
            <div className={styles.Logo}>MOGAKSO</div>
            <div className={styles.account_group}>
                <WhiteButton
                    text="Login"
                    onClickBtn={() => {
                        navigate('/login');
                    }}
                />
                <WhiteButton
                    text="Signup"
                    onClickBtn={() => {
                        navigate('/signup');
                    }}
                />
            </div>
        </div>
    );
}

export default Header;
