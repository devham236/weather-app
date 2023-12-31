import React from "react"
import useCustomContext from "../Context/useCustomContext"

const useModal = () => {
  const { setModalOpened, setWeatherArray, setActiveCard, modalOpened } =
    useCustomContext()

  function addItem(newItem) {
    setWeatherArray((prevItem) => [...prevItem, newItem])
    setModalOpened(false)
    setActiveCard(newItem)
  }

  function closeModal() {
    setModalOpened(false)
  }

  return { setModalOpened, addItem, closeModal, modalOpened }
}

export default useModal
