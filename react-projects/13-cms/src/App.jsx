import Home from './pages/Home/Home';
import routes from './routes';
import { useRoutes } from 'react-router';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/Sidebar/SideBar';
import './App.css';
import { useEffect, useState } from 'react';

export default function App() {
    let router = useRoutes(routes);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleSidebar = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    return (
        <>
            <div className="container">
                <TopBar onMenuClick={toggleSidebar} />
                <div className="containerMain">
                    <SideBar
                        isOpen={isMenuOpen}
                        onClose={() => setIsMenuOpen(false)}
                    />
                    <div className="router-style">{router}</div>
                </div>
            </div>
        </>
    );
}
