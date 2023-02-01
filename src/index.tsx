import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./app";
import ThemeProvider from "./theme/ThemeProvider";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.querySelector('#root')
)