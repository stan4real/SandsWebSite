import styles from './App.module.css'
import Slider from './components/Slider/Slider'
import FirstScroll from './components/firstScroll/FirstScroll'
import Footer from './components/footer/footer'
import FormBlock from './components/formBlock/FormBlock'
import Header from './components/header/Header'
import SecondScroll from './components/secondScroll/SecondScroll'
import SandArea from './components/textarea/SandArea'

function App() {
  

  return (
    <>
    <div className ={styles.header}>
      <Header/>
    </div>
      <Slider/>
      <SandArea/>
      <FirstScroll/>
      <FormBlock/>
      <SecondScroll/>
      <Footer/>
    </>
  )
}

export default App
