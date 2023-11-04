import {AppContainer} from "./AppStyle";
import Home from "./ui/home/Home";
import {GlobalStyle} from "./GlobalStyle";

function App() {
  return (
    <AppContainer>
      <GlobalStyle/>
      <Home/>
    </AppContainer>
  );
}

export default App;
