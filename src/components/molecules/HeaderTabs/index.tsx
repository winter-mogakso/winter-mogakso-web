import React from 'react';

import styles from './styles.module.scss';

const MENU_DATA = [
    {
        title: '화상 통화',
    },
    {
        title: '화면 공유',
    },
    {
        title: '실시간 채팅',
    },
];

function HeaderTabs() {
    return (
        <div className={styles.tabs}>
            {MENU_DATA.map((item) => (
                <div key={item.title} className={styles.item}>
                    {item.title}
                </div>
            ))}
        </div>
    );
}

export default HeaderTabs;
