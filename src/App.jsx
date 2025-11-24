import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pizzak, setPizzak] = useState([]);

  useEffect(() => {
    fetch("https://pizza.sulla.hu/pizza")
      .then(res => res.json())
      .then(data => setPizzak(data));
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4 mb-4 text-center">Pizzák</h1>

      <div className="row">
        {pizzak.map(pizza => (
          <div key={pizza.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src={pizza.image_url}
                alt={pizza.name}
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
