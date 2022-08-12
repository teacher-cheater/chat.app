import c from "./Header.module.css";

export function Header() {
  return (
    <header className={c.header}>
      <div className={c.gradient} />
      <div className={c.container}>
        <h1 className={c.title}> Чат чат </h1>
        <p className={c.text}>
          {" "}
          Привет, заходи к нам в чат и мы научим тебя программировать на html,
          css и javascript.
        </p>
      </div>
    </header>
  );
}
