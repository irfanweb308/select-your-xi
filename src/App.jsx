import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Players from './components/Players/Players'
import { ToastContainer, toast, Bounce } from 'react-toastify';

function App() {
  const [coins, setCoins] = useState(0)


  const claimHandler = (c) => {
    const newCoins = (coins + c);
    setCoins(newCoins);
    toast.success('Successfully claimed', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  }

  const choosePlayerHandler = (value) => {
    if (coins >= value) {
      const newValue = coins - value;
      setCoins(newValue)
    }
    else {
      toast.warn('Oops not enough money!', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }

  }


  return (

    <>
      <Header coins={coins} ></Header>
      <div className='max-w-[1320px] mx-auto'>
        <Banner pass={claimHandler}></Banner>
        <Players cp={choosePlayerHandler}></Players>
        <ToastContainer></ToastContainer>


      </div>

    </>
  )
}

export default App
