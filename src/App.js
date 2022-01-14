import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <CakeContainer></CakeContainer>;
    </Provider>
  );
}

export default App;
