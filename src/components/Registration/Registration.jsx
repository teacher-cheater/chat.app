import { Form } from "../Form/Form.jsx";

export function Registration({ join, setJoin, postData, getData }) {
  return (
    <>
      <div className="main__choice">
        <h2 className="main__title">{join ? "Войти" : "Зарегистрироваться"}</h2>
        <button className="main__btn-join" onClick={() => setJoin(!join)}>
          {join ? "Зарегистрироваться" : "Войти"}
        </button>
      </div>
      <Form join={join} btnTitle={join ? postData : getData} />
    </>
  );
}
