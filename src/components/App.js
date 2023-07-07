import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Pages from '../pages/Pages';
import Search from './Search';

function App() {
    return (
    <BrowserRouter>
        <div className="App">
            <div className="content">
                <Header className="header"/>
                <div className="main">
                    <Search/>
                    <Pages/>
                </div>
                <Footer className="footer"/>
            </div>
        </div>
    </BrowserRouter>
    );
}

export default App;
