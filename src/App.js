
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.js'
import Accueil from './components/Accueil/Accueil.js';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'; 
import BijouxArticles from './components/BijouxArticles/BijouxArticles';
import CoutureArticles from './components/CoutureArticles/CoutureArticles';
import Apropos from './components/Apropos/Apropos';
import BijouxDetail from './components/BijouxDetail/BijouxDetail';
import Inscription from './components/Inscription/Inscription';
import Connexion from './components/Connexion/Connextion';
import Commentaires from './components/Commentaire/Commentaire';
 





function App() {
  return (
      <Router>

    <div className="App">
      <Header />
        <Switch> 
       <Route path="/" exact component={Accueil}/>  
       <Route path="/Bijoux-Articles" exact component={BijouxArticles}/>  
       <Route path="/Couture-Articles" exact component={CoutureArticles}/> 
       <Route path="/Apropos" exact component={Apropos}/> 
       <Route path="/BijouxDetail" exact component={BijouxDetail} />
       <Route path="/Inscription" exact component={Inscription} />
       <Route path="/Connexion" exact component={Connexion} />
       <Route path="/Commentaire" exacte component={Commentaires} />
    
       </Switch>  
       
        
   
      <Footer/>    
  
    </div>
     </Router>
  );
}

export default App;
