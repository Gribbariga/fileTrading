import { useEffect } from "react";
import AppRouter from "./providers/router/UI/AppRouter";
import { subscriptionSlice } from "src/entities/subscription/model/subcriptionSlice";
import { subscriptionStatus } from "src/shared/API/subscription/subscription";
function App() {
  const { fetchTarrifs } = subscriptionSlice((state) => state);
  const { setSubscribeStatus } = subscriptionSlice((state) => state);
  useEffect(() => {
    fetchTarrifs();
    subscriptionStatus().then(({ data }) => {
      setSubscribeStatus(data);
    });
  }, []);
  return <AppRouter />;
}

export default App;
