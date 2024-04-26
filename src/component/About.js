import React, {useState} from 'react'
import Navbar from './Navbar'
import Alerts from './Alerts'

export default function About() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 3000);
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("! DarkMode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("! LightMode enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        name="TheText"
        optionOne="Home"
        optionTwo="About TheText"
        mode={mode}
        changeMode={changeMode}
      />
      <Alerts alert={alert} />
      <div className={`container my-3`}>
        <h2>About The TextZone</h2>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item rounded">
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed ${
                  mode === "dark" ? "bg-dark text-white" : "bg-white text-black"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div
                className={`accordion-body ${
                  mode === "dark" ? "bg-dark text-white" : "bg-white text-black"
                }`}
              >
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed ${
                  mode === "dark" ? "bg-dark text-white" : "bg-white text-black"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div
                className={`accordion-body ${
                  mode === "dark" ? "bg-dark text-white" : "bg-white text-black"
                }`}
              >
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed ${
                  mode === "dark" ? "bg-dark text-white" : "bg-white text-black"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div
                className={`accordion-body ${
                  mode === "dark" ? "bg-dark text-white" : "bg-white text-black"
                }`}
              >
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
