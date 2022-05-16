import { useState, useEffect } from "react";
const useToken = (user) => {
  const [token, setToken] = useState("");
  const currentUser = {
    email: user?.email,
  };
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/user/${user?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("accessToken", data.token);
          setToken(data.token);
        });
    }
    console.log(user);
  }, [user]);
  return [token];
};
export default useToken;
