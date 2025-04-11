import './App.css';
import Navigation from './components/header';
import HeroSection from './components/hero';
// App
const App = () => {
    return (
        <div>
            <Navigation />
            <HeroSection />
        </div>
    );
}
// Export the App component
export default App;