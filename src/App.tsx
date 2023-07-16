import './App.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Navbar from './front/components/Navbar/Navbar.tsx';
import Footer from './front/components/Footer/Footer.tsx';
import Login from './front/components/Login/Login.tsx';
import Header from './front/components/Header/Header.tsx';
import Middle from './front/components/Middle/Middle.tsx';
import Dashboard from './front/components/Dashboard/Dashboard.tsx';
import About from './front/components/About/About.tsx';
import Carousel from './front/components/Carousel/Carousel.tsx';
import CardList from './front/components/Card/Cards.tsx';
import Alumnos from './front/components/Alumnos/Alumnos.tsx';
import Arbitros from './front/components/Arbitros/Arbitros.tsx';
import Escuelas from './front/components/Escuelas/Escuelas.tsx';

const App = () => {
  return (
    <div className="App">
    <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/about" exact component={About} />
          <Route path="/alumnos" exact component={Alumnos} />
          <Route path="/arbitros" exact component={Arbitros} />
          <Route path="/escuelas" exact component={Escuelas} />
          <Route>
            <Carousel />
            <CardList />
            <Middle />
          </Route>
        </Switch>
        <Footer />

      </Router>
     
    </div>
  );
};

export default App;