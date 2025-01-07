// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home from './components/Home';
import Background from './components/Background';
import Projects from './components/Projects';
// import Contact from './components/Contact';
import Footer from './components/footer';
import Skills from './components/Skills';
// import Demo from './components/Demo';

function App() {
  return (
    <div className="App">
      <Header />
     
      <Home />
      {/* <Demo/> */}
      <Skills />
      <Background />
      <Projects />
      {/* <Contact /> */}
      <Footer />

    </div>
  );
}

export default App;


// design sources
//https://webflow.com/made-in-webflow/website/Epicurrence-site-rebuild

// walking man on background top(current)


//fot skills section
//https://www.youtube.com/watch?v=5jlDHSqjZcc&ab_channel=codemmit

// rotating effect
// https://www.youtube.com/watch?v=XQ3LqVyQgLM&ab_channel=Codegrid