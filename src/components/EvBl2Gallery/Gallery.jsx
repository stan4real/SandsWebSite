import React from 'react'
import styles from '../EvBl2Gallery/Gallery.module.css'
import { useState } from 'react';
import { useCallback } from 'react';
import Modal from '../EvBl3Modal/Modal';

const Gallery = () => {
    const [x, setX] = useState(false);
    
    const handler = () => {
        setX(!x);
        console.log(x)
    };
    const [IsOpen, setIsOpen] = useState(false);

    const items = [
        {id:1, img:`url(../../../public/red.png)`},
        {id:2, img:`url(../../../public/video.png)`},
        {id:3, img:`url(../../../public/peski.png)`},
        {id:4, img:`url(../../../public/award.png)`},
        {id:5, img:`url(../../../public/peski.png)`},
        {id:6, img:`url(../../../public/peski.png)`}
    ]
  return (
    <div className={styles.container}>
        <div className={styles.DopContainer}>
            <h1>ГАЛЕРЕЯ</h1>
            <input type={'checkbox'} onChange={handler} className={styles.readMoreChecker} id="readMoreChecker" />
        <div className={styles.limited}>
            <div className={styles.FlexContainer}>
                <div className={styles.FlexRow}>
                    <div className={styles.FlexImage1}></div>
                    <div className={styles.FlexImage2}>
                    </div>
                </div>
                <div className={styles.FlexRow}>
                    <div 
                        className={styles.FlexImage1} 
                        style={{backgroundImage: `url(../../../public/red.png)`}}>
                    </div>
                    <div 
                        className={styles.FlexImage2} 
                        style={{backgroundImage: `url(../../../public/video.png)`}}>
                    </div>
                </div>
                <div className={styles.FlexRow}>
                    <div 
                        className={styles.FlexImage1} 
                        style={{backgroundImage: `url(../../../public/peski.png)`,
                        width:`59%`}}>
                    </div>
                    <div 
                        className={styles.FlexImage2}
                        style={{backgroundImage: `url(../../../public/award.png)`,
                        width:`39%`}}>
                    </div>
                </div>
                <div className={styles.FlexRow}>
                    <div 
                        className={styles.FlexImage1} 
                        style={{backgroundImage: `url(../../../public/peski.png)`,
                        width:`59%`}}>
                    </div>
                    <div 
                        className={styles.FlexImage2}
                        style={{backgroundImage: `url(../../../public/award.png)`,
                        width:`39%`}}>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}></div>
            
        </div>
        <div className={styles.Svernut}>
            <label for={"readMoreChecker"} className={styles.readMoreButton}>{x ? 'Свернуть' : 'Развернуть'}</label>
            {!x ? <div className={styles.dash} style={{width:'172px'}} /> : <div className={styles.dash} style={{width:'142px'}} />}
            
        </div>
        </div>
        <div className={styles.ModalButton} onClick={() => console.log("clicked")}>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal open={IsOpen} onClose={() => setIsOpen(false)} items={items}>
                
            </Modal>
        </div>
        
    </div>
  )
}

export default Gallery