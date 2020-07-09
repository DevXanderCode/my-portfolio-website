import React from 'react';
import PageWrapper from './components/PageWraper';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// pages
import {Home, About} from './components/Pages';


function App() {
  return (
      <Router>
        <PageWrapper>
          <Route 
            path="/"
            exact
            component={Home}
          />
          <Route 
            path="/about"
            component={About}
          />
        </PageWrapper>
      </Router>
  );
}

export default App;
