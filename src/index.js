import ReactDOM from 'react-dom/client';


// eslint-disable-next-line import/extensions
import {BrowserRouter} from "react-router-dom";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";
import Routes from './Routes';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // eslint-disable-next-line react/jsx-no-undef
    <React.StrictMode>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </React.StrictMode>
);

root.render(<App />);

serviceWorker.unregister();


reportWebVitals();