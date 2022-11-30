import React, { ReactNode } from 'react';
import styles from './styles.css';
type Props = {
    element : ReactNode
}

function CustomGridItemBig({element}:Props) {
    return (
        <div className={styles["grid__item--big"]}>
            {element}
        </div>
    );
}

export default CustomGridItemBig;