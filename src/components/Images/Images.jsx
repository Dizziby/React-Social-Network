import React from 'react';
import styles from './Images.module.css';
import photo1 from '../../img/images/photo1.jpg';

const Images = () => {
    return (
        <div>
            <div className={styles.images}>
                <img src={photo1} alt="Photo"/>
                <img src={photo1} alt="Photo"/>
                <img src={photo1} alt="Photo"/>
                <img src={photo1} alt="Photo"/>
                <img src={photo1} alt="Photo"/>
                <img src={photo1} alt="Photo"/>
                <img src={photo1} alt="Photo"/>
                <img src={photo1} alt="Photo"/>
                <img src={photo1} alt="Photo"/>
                <img src={photo1} alt="Photo"/>
                <img src={photo1} alt="Photo"/>
                <img src={photo1} alt="Photo"/>
                <img src={photo1} alt="Photo"/>
                <img src={photo1} alt="Photo"/>
                <img src={photo1} alt="Photo"/>
            </div>
            <div>
                <button>Еще</button>
            </div>
        </div>

    )
}
export default Images;