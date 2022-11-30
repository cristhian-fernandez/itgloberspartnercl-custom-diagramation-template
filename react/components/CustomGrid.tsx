import React, {ReactNode} from 'react';
import customGridSchema from '../schemas/custom-grid-schema';
import CustomGridItemBig from './CustomGridItemBig';
import CustomGridItemSmall from './CustomGridItemSmall';
import styles from './styles.css';

//Reactnode => Permite importar parte de un componente en react  

type Props = {
    gridType : number,
    children : [
        ReactNode,
        ReactNode,
        ReactNode,
        ReactNode,
        ReactNode
    ]
}
function CustomGrid({gridType = 1, children}:Props) {
    console.log('Children Grid :::', gridType);
    console.log('Children Grid :::', children);
    // <div>Aqui irá mi grilla customizada {gridType}</div>
    return (
        <div className={`${styles['grid']} ${styles[`grid__${gridType}`]}`}>
            
            <CustomGridItemBig element={children[0]} />
            <CustomGridItemSmall elementOne={children[1]} elementTwo = {children[2]} />
            <CustomGridItemSmall elementOne={children[3]} elementTwo = {children[4]} />
            {/* {children} */}
        </div>
    );
}

CustomGrid.schema = customGridSchema;

export default CustomGrid;