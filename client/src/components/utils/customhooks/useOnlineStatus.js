import { useEffect, useState } from "react";
const useOnlineStatus = () => {
  const [isOnline, setisOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setisOnline(false);
    });
    window.addEventListener("online", (event) => {
      setisOnline(true);
    });
  }, []);
  return isOnline;
};

export default useOnlineStatus;
