import { Footer } from "../Footer/Footer.jsx";

export function Room({ users, messages, log, sendMessage }) {
  return (
    <>
      <div className="room__gradient gradient"></div>
      <main className="room main">
        <div className="room__container ">
          <h2 className="room__title">Общая комната</h2>
          <div className="room__content">
            <ul className="room__items">
              <li className="room__item">
                <p className="room__author"> Васек</p>
                <p className="room__message">
                  Нет ну SaintCode конечно крутая школа. А Юрий так вообще
                  шикарен, дай бог ему здоровья.
                </p>
              </li>
              <li className="room__item">
                <p className="room__author"> {log}</p>
                <p className="room__message">{messages}</p>
              </li>
            </ul>
          </div>
          <form className="room__form">
            <textarea
              placeholder="Введите сообщение..."
              className="room__textarea"
              cols="67"
              type="text"
            />
            <button className="room__send">Отправить</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
