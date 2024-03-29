import { useState, useEffect } from "react";
const useToken = (user) => {
  const [token, setToken] = useState("");
  const currentUser = {
    email: user?.email,
  };
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://doctors-portal-server-pnb2.onrender.com/user/${user?.email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("accessToken", data.token);
          setToken(data.token);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
