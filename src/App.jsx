import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Courses from './pages/Courses';
import Gallery from './pages/Gallery';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import VerifyCertificate from './pages/Verify-Certificate';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/courses" component={Courses} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/appointment" component={Appointment} />
                <Route path="/contact" component={Contact} />
                <Route path="/verify-certificate" component={VerifyCertificate} />
            </Switch>
        </Router>
    );
}

export default App;
