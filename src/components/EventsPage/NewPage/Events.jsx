import React from 'react'
import FirstBlock from '../../EvBl1/FirstBlock'
import Gallery from '../../EvBl2Gallery/Gallery'
import Modal from '../../EvBl3Modal/Modal'
import GalleryV2 from '../../EvBl3Modal/GalleryV2'
import Faces from '../../EvBl4Faces/Faces'
import Pictures from '../../EvBl4Faces2/Pictures'
import Footer from '../../footer/footer'
import Header from '../../header/Header'
const Events = () => {
  return (
    <div>
      <Header/>
      <FirstBlock/>
    {/*  <Gallery/> 
    Рабочий Вариант галереи со свернуть */}
    {/*  Экспериментальный вариант GalleryV2 */}
    <GalleryV2/>
    <Faces/>
      <Pictures/>
      <Footer/>
    </div>
  )
}

export default Events