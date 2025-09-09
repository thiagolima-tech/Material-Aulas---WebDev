import { useEffect } from "react";
import { useState } from "react";

export default function Usuarios() {

  const [users, setUsers] = useState([])

  useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => setUsers(data))
  .catch(error => console.log(error))
  .finally(console.log("FOI"))
  },[])

  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Usuários</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>Nome: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Rua: {user.address.street}</p>
          <p>Geo: {user.address.geo.lat}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
