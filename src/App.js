import { useEffect, useState } from "react";
import { UserCard, SearchBar } from "./components";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const resp = await fetch("https://randomuser.me/api/?results=15");
    const { results } = await resp.json();
    setUsers(results);
    setFilteredUsers(results);
  };

  return (
    <div className="app">
      <h2>Perfil de usuarios</h2>

      <SearchBar users={users} setFilteredUsers={setFilteredUsers} />

      <div className="userList">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, i) => (
            <UserCard
              key={i}
              user={user}
              users={users}
              setUsers={setUsers}
              setFilteredUsers={setFilteredUsers}
            />
          ))
        ) : (
          <h5>No existen usuarios para mostrar</h5>
        )}
      </div>
    </div>
  );
};

export default App;
