import React from 'react';
import PageWrapper from './components/PageWraper';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Team from "./components/common/Team";
// pages
import {Home, About, ServicesPage, PortfolioPage} from './components/Pages';


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
          <Route 
            path="/services"
            component={ServicesPage}
          />
          <Route 
            path="/portfolio"
            component={PortfolioPage}
          />
          <Route 
            path="/team"
            component={Team}
          />
        </PageWrapper>
      </Router>
  );
}

export default App;
