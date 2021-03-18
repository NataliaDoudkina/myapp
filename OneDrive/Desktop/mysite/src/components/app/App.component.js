import React from "react";
import AppRouter from "../../routers/AppRouter";
import Footer from "../footer/footer.component";
import './app.styles.scss';

const App = () => {
    return ( <div class='appPage'>
        <AppRouter / >
        <Footer / >
        </div>
    );
};

export default App;