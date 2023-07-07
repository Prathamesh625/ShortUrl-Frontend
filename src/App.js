import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import logo from "./refresh.svg";
import Popup from "./components/Popup";
import Header from "./components/Header";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shorturl, setShortUrl] = useState();

  const fun = async () => {
    if (longUrl === "") {
      alert("do something");
    } else {
      const data = await fetch("https://shorturl-pxri.onrender.com/api/post", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          longUrl: longUrl,
        }),
      });
      const get = await data.json();
      console.log(get.data);
      setShortUrl(get.data.shortUrl);
    }
  };

  const refresh = (e) => {
    e.preventDefault();
    setLongUrl("");
    setShortUrl("");
  };

  return (
    <div>
      <Header />
      <div className="container" style={{ backgroundColor: "white" }}>
        <div>
          <div>
            <h1
              className="Heading"
              style={{ marginTop: "4.2rem", color: "black" }}
            >
              Make Url Short Easily With Shortly And Access It Anywhere In The
              World
            </h1>
          </div>
        </div>
        <data />

        <center>
          <div>
            <div className="d-flex p-2" style={{ marginTop: "10%" }}>
              <input
                class="form-control form-control-lg  m-2"
                type="text"
                value={name}
                onChange={(e) => {
                  setLongUrl(e.target.value);
                }}
                placeholder="Place Your Url Here"
                aria-label=".form-control-lg example"
              ></input>
              <button
                onClick={fun}
                class="btn btn-outline-info m-2"
                type="submit"
              >
                Shorten
              </button>
              <button onClick={refresh} class="btn btn-outline-dark m-2">
                <img src={logo} alt="img" width="20px" />
              </button>
            </div>
          </div>
        </center>

        {shorturl && <Popup shorturl={shorturl} />}
        <div style={{ display: "flex", margin: "10%" }}></div>
      </div>

      <div
        style={{
          backgroundColor: "orange",
          width: "100%",
          height: "300px",
          textAlign: "center",
          fontFamily: "aparjita",
          fontWeight: "bold",
          fontSize: "50px",
        }}
      >
        Use Shortly , Grow Your Buisness
      </div>

      <center>Connect With Us</center>
      <Footer />
    </div>
  );
}

export default App;
