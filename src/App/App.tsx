import { useEffect } from "react";
import AppRouter from "./providers/router/UI/AppRouter";
import { subscriptionSlice } from "src/entities/subscription/modal/subcriptionSlice";

function App() {
  const { fetchTarrifs, tariffs } = subscriptionSlice((state) => state);

  useEffect(() => {
    fetchTarrifs();
  }, []);

  useEffect(() => {
    console.log(tariffs);
  }, [tariffs]);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
