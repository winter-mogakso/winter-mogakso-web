import React from 'react';

import Mogakso from 'src/assets/mogakso.svg';
import ContentBox from 'src/components/molecules/Home/ContentBox';

import styles from './styles.module.scss';

function Content() {
    return (
        <div className={styles.content}>
            <div className={styles.content_left}>
                <ContentBox />
            </div>
            <div className={styles.content_right}>
                <Mogakso />
            </div>
        </div>
    );
}

export default Content;
