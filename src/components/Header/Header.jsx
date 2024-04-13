import Button from "../Button/Button";
import logo from "../../../public/icons/logo.svg";
import cart from "../../../public/icons/cart.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";

import Modal from "react-modal";
import { useState } from "react";
import ModelContent from "../ModalContent/ModelContent";

export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="header">
        <div className="header-block section">
        <NavLink to={"/"}>
          <div className="header-logo">
            <img src={logo} alt="" className="header-block__logo" />
            <div className="header-logo__text">SAFQ</div>
          </div>
          
        </NavLink>
          <div className="header-block__left">
          <NavLink to={"/"}>
          <div className="header-link">Главная</div>
      </NavLink>
            <div onClick={openModal} className="header-block__left-link">
              <img src={cart} alt="" />
            </div>
          </div>
        </div>
      </div>

  

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <ModelContent closeModal={closeModal} />
      </Modal>
    </>
  );
}
