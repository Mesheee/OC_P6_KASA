import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import About from './pages/about'
import Accomodation from './pages/accomodation'
import Error from './pages/error'
import Footer from './components/footer'

function App() {
    return (
        <Router>
            {/* Composant du header */}
            <Header />
            <Routes>
                {/* Route de la page d'accueil */}
                <Route path="/" element={<Home />} />
                {/* Route de la page À propos */}
                <Route path="/about" element={<About />} />
                {/* Route pour la page d'hébergement*/}
                <Route path="/accomodation/:id" element={<Accomodation />} />
                {/* Route pour toute URL inconnue */}
                <Route path="*" element={<Error />} />
            </Routes>
            {/* Composant du footer */}
            <Footer />
        </Router>
    )
}
export default App
