import BackPrj from "./components/BackPrj";
import Footer from "./components/common/Footer";
import FrontPrj from "./components/FrontPrj";
import Profilesss from "./components/Profilesssss";
import Profile from "./components/Profile";
import PublPrj from "./components/PublPrj";


import Visual from "./components/Visual";

import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import Header from "./components/common/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import TimeLineSection from "./components/TimeLineSection";


function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
      <Header />
      <Visual/>
      <Profile/>
      <Experience />
      <Education />
      <FrontPrj/>

      <BackPrj/>
      
      <PublPrj/>
      
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
