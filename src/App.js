import React, { Component } from 'react';
import FluxActualite from './FluxActualite';
import { actualites } from './actualites';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Actualite from "./Actualite"


function RouteActualite(props) {
    const { actualites, match } = props;
    if (!actualites.length) {
        return null;
    }
    const actualite = actualites.filter((actualites) => actualites.id === match.params.id);
    // match.params.id
    if (actualite.length !== 1) {
        return null;
    }

    return (
        <div>
            <Link to= "/"> Retour aux Actualités </Link>
            <Actualite actualite={actualite[0]} />
        </div>
    );
}

function RouteError({ location }) {
    return <div> Acune page ne correspond à "{location.pathname}". </div>
}

class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div className="App">
            <Switch>
            <Route exact path="/" component={()=> <FluxActualite actualites={actualites} />} />
            <Route path= "/actualite/:id" component={(props) => <RouteActualite match={props.match} actualites={actualites} />} />
            <Route component={RouteError} />
            </Switch>

            </div>
        </BrowserRouter>
    );
  }
}

export default App;
