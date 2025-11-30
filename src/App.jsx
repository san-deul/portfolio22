import BackPrj from "./components/BackPrj";
import Footer from "./components/common/Footer";
import FrontPrj from "./components/FrontPrj";
import Profilesss from "./components/Profilesssss";
import Profile from "./components/Profile";
import PublPrj from "./components/PublPrj";


import Visual from "./components/Visual";

import GlobalStyle from "./styles/GlobalStyle";
import { device } from "./styles/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={{ device }}>
    <GlobalStyle/>

      <Visual/>
      
      
      <FrontPrj/>
      <BackPrj/>
      <PublPrj/>
      <Profile/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
