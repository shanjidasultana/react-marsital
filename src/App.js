import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import About from './components/About/About';
import Classes from './components/Classes/Classes';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Blogs from './components/Blogs/Blogs';
import Features from './components/Features/Features';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/classes">
            <Classes></Classes>
          </Route>
          <Route path="/gallery">
            <Gallery></Gallery>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/features">
            <Features></Features>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
