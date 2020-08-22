import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from 'pages/About';
import Home from 'pages/Home';
import Contact from 'pages/Contact';
import NotFound from 'pages/NotFound';

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}
