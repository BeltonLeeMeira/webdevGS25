import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow container mx-auto p-4" style={{ paddingBottom: '488px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
