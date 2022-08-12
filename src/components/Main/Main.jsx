import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { Registration } from "../Registration/Registration.jsx";
import { useState } from "react";

export function Main() {
  const [join, setJoin] = useState(false);
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__container">
          <div className="main__registration">
            <Registration join={join} setJoin={setJoin} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
