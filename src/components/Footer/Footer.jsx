import Button from "../Button/Button";
import logo from "../../../public/icons/logo.svg";
import cart from "../../../public/icons/cart.svg";
import "./Footer.css";
import { NavLink } from "react-router-dom";

import Modal from "react-modal";
import { useState } from "react";
import ModelContent from "../ModalContent/ModelContent";

export default function Footer() {
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
      <div className="footer">
        <div className="footer-block section">
          <div className="footer-logo">
            <img src={logo} alt="" className="footer-block__logo" />
            <div className="footer-logo__text">SAFQ</div>
          </div>

          <div className="footer-block__left">
            <NavLink to={"/"}>
              <div className="footer-link">Главная</div>
            </NavLink>
            <div onClick={openModal} className="footer-block__left-link">
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
