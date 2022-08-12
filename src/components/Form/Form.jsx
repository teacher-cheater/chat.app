import { Button } from "../Button/Button.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Form({ btnTitle, join }) {
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [showMessage, setShowMessage] = useState("");

  async function postData() {
    await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: inputName, password: inputPassword }),
    })
      .then((data) => {
        if (data.ok) {
          localStorage.getItem("user", JSON.stringify(inputName));
        }
        return data.json();
      })
      .then((data) => {
        setShowMessage(data.message);
      });
  }

  const navigate = useNavigate();

  async function getData() {
    await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: inputName, password: inputPassword }),
    })
      .then((data) => {
        if (data.ok) {
          localStorage.getItem("user", JSON.stringify(inputName));
          navigate("../room");
        }
        return data.json();
      })
      .then((data) => {
        setShowMessage(data.message);
      });
  }

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="main__block-registration"
    >
      <div className="main__nickname nickname">
        <label className="nickname__registration">
          <p className="nickname__text">Никнейм</p>
          <input
            className="nickname__input"
            placeholder="Nagibator-228-2012"
            type="text"
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
          />
        </label>
      </div>
      <div className="main__password password">
        <p className="password__text">Пароль</p>
        <input
          className="password__input"
          placeholder="Крутой пароль"
          type="password"
          value={inputPassword}
          onChange={(event) => setInputPassword(event.target.value)}
        />
      </div>
      <Button getData={getData} postData={postData} join={join}>
        {btnTitle} {join ? "Войти" : "Зарегистрироваться"}
      </Button>
      <p className="main__message">{showMessage}</p>
    </form>
  );
}
