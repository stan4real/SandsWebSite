import React, { useState } from 'react'
import styles from '../EvBl3Modal/Modal.module.css'
import  ReactDOM  from 'react-dom'
import { SimpleSlider } from './Slider/SimpleSlider'

const Modal = ({ open, children, onClose, items , id}) => {
  
  if (!open) return null
  const [IsClose, setIsClose] = ('');
  
  const handleClose=()=>{
    setIsClose(false)}
  
  return ReactDOM.createPortal (
    <>
        <div classname={styles.container}>
        <div className={styles.OverlayStyles} onClick={onClose} ></div>
        <div className={styles.ModalStyles}>
              <div>
                <SimpleSlider items={items} id={id} open={open}/>
              </div>
              <div className={styles.Alt}>
                <div className= {styles.text}>
                  Денис Майданов и Ольга Казакова рисуют песком портрет
                </div>
                <div className= {styles.text}>
                  Арустамова Георгия Аркадьевича
                </div>
              </div>
        </div>
        </div>
    </>,
    document.getElementById("portal")
  )
}

export default Modal