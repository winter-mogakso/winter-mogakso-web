import React from 'react';

import Mogakso from 'src/assets/mogakso.svg';

import styles from './styles.module.scss';

function Content() {
    return (
        <div className={styles.content}>
            <div className={styles.content_left}>
                <div>모각소에서 화상 회의, 화면 공유 그리고 실시간 채팅을 경험해보세요!</div>
                <button className={styles.button}>새 회의 시작</button>
            </div>
            <Mogakso />
        </div>
    );
}

export default Content;
