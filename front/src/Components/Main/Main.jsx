//import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import { useTask } from "../../Context/TaskContext.jsx";
import Modal from "../Modal/Modal.jsx";
import ToDoList from "../ToDoList/ToDoList.jsx";
import Profile from "../Profile/Profile.jsx";
import Welcome from "./welcome.jsx";
const Main = () => {
  const { isModalOpen, closeModal, error } = useTask();

  //if (!showToDoList) return null;
  return (
    <main className={styles.main}>
      <Welcome />
      <ToDoList />
      <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
      <Profile />
      {error && (
        <div className={styles.alert}>
          <p>{error}</p>
        </div>
      )}
    </main>
  );
};

export default Main;
