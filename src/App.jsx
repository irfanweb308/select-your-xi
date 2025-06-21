import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Players from './components/Players/Players'
import { ToastContainer, toast, Bounce } from 'react-toastify';

import Footer from './components/Footer/Footer'

function App() {
  const [coins, setCoins] = useState(0);

  const [selected, setSelected] = useState([])

  const [view, setView] = useState("available");

  const handleAvailableClick = () => {
    setView("available");
  };

  const handleSelectedClick = () => {
    setView("selected");
  };


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


  const choosePlayerHandler = (player) => {

    const newSelected = [...selected, player]


    if (selected.length < 6) {

      setSelected(newSelected);
      if (coins >= player.price) {
        setCoins(coins - player.price);
        toast.success('Selection successful', {
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
    else {
      toast.warn('Cant select more than 6 players', {
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
  const handleRemove = (id, price) => {
    const remainingPlayers = selected.filter(select => select.id !== id)

    setCoins(coins + price);
    setSelected(remainingPlayers);
  }



  return (

    <>
      <Header coins={coins} ></Header>
      <div className='max-w-[1320px] mx-auto'>
        <Banner pass={claimHandler}></Banner>
        <Players cp={choosePlayerHandler} view={view} handleAvailableClick={handleAvailableClick} handleSelectedClick={handleSelectedClick} playersChosen={selected} handleRemove={handleRemove}></Players>

        <ToastContainer></ToastContainer>



      </div>
      <Footer></Footer>

    </>
  )
}

export default App
