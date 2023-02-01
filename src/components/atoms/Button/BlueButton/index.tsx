import React from 'react';

import styles from './styles.module.scss';

interface Props {
    text: string;
    onClickBtn: any;
}

function BlueButton({ text, onClickBtn }: Props) {
    return (
        <div className={styles.button} onClick={onClickBtn}>
            {text}
        </div>
    );
}

export default BlueButton;
