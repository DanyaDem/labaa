import React from "react";

function Home({ setNewOrder, newOrder, login }) {
  const [doggie, setDoggie] = React.useState([]);


  const gettingCock = async () => {
    const api_url = await fetch(
      "https://petstore.swagger.io/v2/pet/findByStatus?status=sold"
    );
    const data = await api_url.json();
    setDoggie(data);
  };
console.log(doggie)
  const result = doggie.map((doggie) => {
    return (
     <div>
      <div className="drink">
        <p>{doggie.id}</p>
        <p>{doggie.status}</p>
        <p>{doggie.name}</p>
 

        {login === true ? <button className="btn" onClick={() => Add(doggie.idDoggie)}>Добавить в заказ</button> : 'Войдите, для оформления  заказа'}
        </div>
      </div>
    );
  });

  function Add(id){
    doggie.map(doggie => {
      if(doggie.idDoggie == id) {
          setNewOrder([...newOrder, doggie])
      }
    })
  }

  React.useEffect(() => {
    gettingCock();
  }, []);

  return <div className="result">{result}</div>;
}
export default Home;
