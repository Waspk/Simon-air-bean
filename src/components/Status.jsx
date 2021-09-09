import React, { useState, useEffect } from "react";
import "../css/status.css";
import loader from "../assets/graphics/loader.png";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import drone from "../assets/graphics/drone.svg";
import { useDispatch } from "react-redux";
import { clearCart } from "../actions/addToCart";

export default function Status() {
  const [orderStatus, setOrderStatus] = useState([]);
  const [loaderData, setLoaderDate] = useState(true);
  const dispatch = useDispatch();
  const order = useSelector(state => state.order);

  
  const history = useHistory();
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        order
      }),
  };

  const onClickHandler = () => {
    history.push("/menu");
    dispatch(clearCart())
  };

  useEffect(async () => {
    const response = await fetch("http://localhost:5000/api/beans", options);
    const data = await response.json();
    setOrderStatus([
      {
        eta: data.eta,
        orderno: data.orderNr
      },
    ]);
     setLoaderDate(false)
  }, []);

  return (
    <div className="status-page">
    { loaderData ? <img className="loaderStatus" src={loader}></img> 
      : orderStatus.map((stat) => (
        <div key="wrapper">
          <div key="order" className="ordernumber">
            <p>{`Ordernummer #${stat.orderno}`}</p>
          </div>
          <div key="drone_img" className="drone">
            <img src={drone}></img>
          </div>
          <div key="confirm" className="confirmation-text">
            <p>Din beställning är på väg!</p>
          </div>
          <div key="eta" className="eta">
            <p>{`${stat.eta} minuter`}</p>
          </div>
        </div>
      ))
    }
      <button className="status-btn" onClick={onClickHandler}>
        Ok,cool!
      </button>
    </div>
  );
}
