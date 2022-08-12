import { Form } from "../Form/Form.jsx";

export function Joinin({ join, setJoin }) {
  return (
    <>
      <div className="join__choice main__choice">
        <h2 className="join__title main__title">
          {join ? "Зарегистрироваться" : "Войти"}
        </h2>
        <button
          className="join__btn-registration main__btn-join"
          onClick={() => setJoin(!join)}
        >
          Регистрация
        </button>
      </div>
      <Form join={join} btnTitle={join ? "Зарегистрироваться" : "Войти"} />
    </>
  );
}
