import { useState } from "react";
import "./index.css";
const App = () => {
  const [data, setdata] = useState();
  const [extdata, setextdata] = useState([]);

  const getdata = () => {
    if (!data) {
    } else {
      setextdata((olditem) => {
        return [...olditem, data];
      });
    }
    setdata("");
  };
  const change = (e) => {
    setdata(e.target.value);
  };
  const delitem = (id) => {
    console.log(id);
    const updatedel = extdata.filter((arr, ind) => {
      return id !== ind;
    });
    setextdata(updatedel);
  };

  return (
    <>
      <div id="todo_div">
        <div id="todomain">
          <h1>ToDO</h1>
          <input
            type="text"
            id="inp"
            value={data}
            onChange={change}
            autoComplete="off"
          />
          <button className="addbtn" onClick={getdata}>
            +
          </button>
          <br />
          <ol className="list">
            {extdata.map((interval, ind) => {
              return (
                <>
                  <li>{interval}</li>
                  <button
                    className="Del"
                    key={ind}
                    onClick={() => delitem(ind)}
                  >
                    Del
                  </button>
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
