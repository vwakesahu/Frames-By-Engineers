import { useEffect } from "react";
import "./App.css";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";
import MainPage from "./pages/MainPage";
import { getAllFrames } from "./utils/firebaseFunctions";

function App() {
  const [{ setFrame }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFrames().then((data) => {
      // console.log(data);
      dispatch({
        type: actionType.SET_FRAME,
        setFrame: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="">
      <MainPage />
    </div>
  );
}

export default App;
