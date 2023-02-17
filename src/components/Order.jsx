import React from "react";

function Order({ newOrder, setNewOrder }) {
  const [orders, setOrders] = React.useState();
  console.log(newOrder);
  const result = newOrder.map((order, index) => {
    return (
      <div className="drink">
        <p>{order.id}</p>
        <p>{order.status}</p>
        <p>{order.name}</p>
        <button className="btn" onClick={() => addOrder(order.name)}>оформить</button>
        <button className="btn" onClick={() => del(index)}>
          Удалить
        </button>
      </div>
    );
  });

  function addOrder(name){
    setNewOrder([...newOrder, name ])
    console.log('Order')

  }
  console.log(newOrder)

  function del(index) {
    setNewOrder([...newOrder.slice(0, index), ...newOrder.slice(index + 1)]);
  }

  return (
    <div>
      <h1 className="h1">Заказы</h1>
      {result}
    </div>
  );
}

export default Order;
