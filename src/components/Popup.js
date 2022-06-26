import "./Popup.css";
import copy from "copy-to-clipboard";
function Popup(props) {
  function copied() {
    copy(props.shorturl);
  }
  return (
    <div className="box">
      <div className="d-flex p-2" style={{ marginTop: "50px" }}>
        <input
          className="form-control form-control-lg m-2 p-2"
          value={props.shorturl}
        />
        <button onClick={copied} class="btn btn-outline-dark m-2">
          Copy
        </button>
      </div>
    </div>
  );
}

export default Popup;
