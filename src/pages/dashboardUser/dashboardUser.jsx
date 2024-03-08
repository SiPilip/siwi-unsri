import { useEffect, useState } from "react";
import { getUsers } from "../../services/apiUser";

export default function DashboardUser() {
  const [user, setUser] = useState([]);

  useEffect(function () {
    // getUsers().then((data) => console.log(data.at(0).nim));
    getUsers().then((data) => setUser(data));
  }, []);

  return (
    <div>
      {/* <p>NIM: {user.at(0).nim}</p>
      <p>Password: {user.at(0).password}</p>
      <p>Email: {user.at(0).email}</p>
      <p>Roles: {user.at(0).roles}</p> */}
      {user.map((e) => (
        <div key={e.id}>
          <p>id: {e.id}</p>
          <p>nim: {e.nim}</p>
          <p>email: {e.password}</p>
          <p>password: {e.email}</p>
          <p>roles: {e.roles}</p>
        </div>
      ))}
    </div>
  );
}
