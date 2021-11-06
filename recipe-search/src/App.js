
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
     
     <Banner>
        
        <Navbar />

     </Banner>

     <Search />
     
     <RecipeCard />
     
    </div>
  );
}

export default App;
