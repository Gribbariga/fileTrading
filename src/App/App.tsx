import { useEffect } from "react";
import AppRouter from "./providers/router/UI/AppRouter";
import { subscriptionSlice } from "src/entities/subscription/model/subcriptionSlice";
function App() {
  const { fetchTarrifs } = subscriptionSlice((state) => state);

  useEffect(() => {
    fetchTarrifs();
  }, []);
  return <AppRouter />;
}

export default App;
