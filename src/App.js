import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Fact from './pages/Fact/Fact';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Questions from './pages/Quiz/Questions';
import Quiz from './pages/Quiz/Quiz';
import Random from './pages/Random/Random';
import { QuizStorage } from './QuizContext';


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <QuizStorage>
        <div className="container">
            <main className="full-height">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='*' element={<NotFound/>}/>
                <Route path="fact" element={<Fact/>}/>
                <Route path="random" element={<Random/>}/>
                <Route path="quiz" element={<Quiz/>}/>
                <Route path="quiz/:type" element={<Questions/>}/>
              </Routes>
            </main>
        </div>
      </QuizStorage>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
