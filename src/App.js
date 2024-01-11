import './css/style.css'
import NavigationBar from './components/NavigationBar';
import PopularMovie from './components/PopularMovie';
import Carousel from './components/Carousel';
import TopRatedMovie from './components/TopRatedMovie';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App text-center">
      <NavigationBar/>
      <Carousel/>
      <PopularMovie/>
      <TopRatedMovie/>
      <Footer/>
    </div>
  );
}

export default App;
