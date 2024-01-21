import { useEffect, useState } from "react";

export const useAuth = () => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      try {
        fetch("http://localhost:3001/user/me", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((res) => {
            if (res.ok) {
              return res.json().then((data: { email: any }) => {
                if (data.email) {
                  setUserEmail(data.email);
                }
              });
            } else {
              console.error("Error fetching user data");
            }
          })
          .catch((error) => {
            console.error("Error in fetch operation", error);
          });
      } catch (error) {
        console.error("Error in try block", error);
      }
    } else {
      console.log("User not logged in");
    }
  }, []);
  return userEmail;
};
