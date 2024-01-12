import './css/style.css'
import NavigationBar from './components/NavigationBar';
import PopularMovie from './components/PopularMovie';
import Carousel from './components/Carousel';
import TopRatedMovie from './components/TopRatedMovie';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App text-center w-full sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
      <NavigationBar/>
      <Carousel/>
      <PopularMovie/>
      <TopRatedMovie/>
      <Footer/>
    </div>
  );
}

export default App;
