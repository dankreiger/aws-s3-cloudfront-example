import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from 'pages/About';
import Home from 'pages/Home';
import Contact from 'pages/Contact';

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Home} />
    </Switch>
  );
}
