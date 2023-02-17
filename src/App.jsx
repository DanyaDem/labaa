import React, { useState } from "react";
import Home from "./components/Home";
import Reg from "./components/Reg";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Order from "./components/Order";
import LogIn from "./components/LogIn";

function App() {
  const [newOrder, setNewOrder] = React.useState([]);
  const [login, setLogin] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [newOrdered, setNewOrdered] = useState([]);
  const [Ordered, setOrdered] = React.useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Link className="link" to="/">
          Домой
        </Link>
        <Link className="link" to="/reg">
          Регистрация
        </Link>
        <Link className="link" to="/ord">
          Заказы
        </Link>
        <Link className="link" to="/log">
          Вход
        </Link>
        <Link className="link" to="/ored">
          Оформленные заказы
        </Link>
        <div className="aaa"></div>
        <Routes>
          <Route
            element={
              <Home
                login={login}
                setNewOrder={setNewOrder}
                newOrder={newOrder}
              />
            }
            path="/"
          />
          <Route
            element={<Reg />}
            path="/reg"
            users={users}
            setUsers={setUsers}
          />
          <Route
            path="ord"
            element={<Order newOrder={newOrder} setNewOrder={setNewOrder} />}
          />
          <Route
            path="/log"
            element={<LogIn setLogin={setLogin} users={users} />}
          />
          <Route
            path="/ored"
            element={<Order newOrder={newOrdered} setNewOrder={setNewOrder} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
