import React, { ReactNode } from 'react';
import styles from './styles.css';
type Props = {
    elementOne : ReactNode,
    elementTwo : ReactNode
}

function CustomGridItemSmall({elementOne, elementTwo}:Props) {
    return (
        <div className={styles["grid__item--small"]}>
            {elementOne}
            {elementTwo}
        </div>
    );
}

export default CustomGridItemSmall;