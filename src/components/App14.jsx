import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App14() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await axios(url);
    setUsers(res.data);
    setFilteredUsers(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(results);
  }, [search, users]);

  return (
    <div>
      <h1>App14</h1>
      <h2>useEffect hook to fetch API</h2>
      <p>
        <input
          type="text"
          placeholder="Search name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </p>
      <ol>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name}, {user.email}, {user.phone}
          </li>
        ))}
      </ol>
    </div>
  );
}
