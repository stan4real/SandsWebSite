import React from 'react'
import styles from '../EvBl3Modal/GalleryV2.module.css'
import { useState } from 'react';
import Modal from './Modal';
import "./FlexItem.css"; 

const GalleryV2 = () => {

    const items = [
        {id:1, img:'../../../public/mascott.png'},
        {id:2, img:`../../../public/maidanov.png`},
        {id:3, img:`../../../public/red.png`},
        {id:4, img:`../../../public/video.png`},
        {id:5, img:`../../../public/peski.png`},
        {id:6, img:`../../../public/award.png`},
        {id:7, img:'../../../public/mascott.png'},
        {id:8, img:`../../../public/maidanov.png`}
    ]

    const [IsOpen, setIsOpen] = useState(false);
    const [IsId, SetIsId] = useState(0)
    
    const [FlexOpen, SetFlexOpen] = useState(false)

    

    const ShowMore = (FlexOpen) =>{
        
            const show = document.querySelector('#show-more')
            const products = document.querySelectorAll('.FlexItem').length
            let items=6,
                step = 2,
                itemsTotal = items + step;
                const array = Array.from(document.querySelectorAll('.FlexItem'))
                const visItems = array.slice(0, itemsTotal)
                //console.log(visItems)
            if (FlexOpen) {
                visItems.forEach(el => el.classList.add('is_visible'))
            //console.log(FlexOpen)
        } else {
                visItems.forEach(el => el.classList.remove('is_visible'))
                //console.log(visItems)
        }

    }
    return (
    <div className={styles.container}>
        <div className={styles.DopContainer}>
            <h1>ГАЛЕРЕЯ</h1>
            <div className='FlexContainer'>
                {items.map(item => (
                    <div key={item.id} className='FlexItem' onClick={() => SetIsId(item.id)}>
                        <div  
                        className={styles.image} 
                        style={{backgroundImage:`url(${item.img})`}}
                        onClick={() => setIsOpen(true) }>
                            
                            
                            
                        </div>
                    </div>
                ))}
            </div>
                <Modal open={IsOpen} items={items} id={IsId} onClose={() => setIsOpen(false)}>
                    
                </Modal>
            <div className={styles.Svernut} onClick={ShowMore(FlexOpen)} >
                <div className={styles.SvButton} 
                id='show-more'  
                onClick={() => SetFlexOpen(!FlexOpen)} >
                    {FlexOpen ? 'Свернуть' : 'Развернуть'}
                </div>
                {!FlexOpen ? <div className={styles.dash} style={{width:'172px'}} /> : <div className={styles.dash} style={{width:'142px'}} />}
            </div>
        </div>
        
    </div>
)
}

export default GalleryV2