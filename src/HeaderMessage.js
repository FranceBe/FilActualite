import React from 'react';
import { Link } from 'react-router-dom';

export default class HeaderMessage extends React.Component {
    render() {
        const {auteur, datePublication, id } = this.props
        return (

            <div className="HeaderMessage">
                <div className="HeaderMessage__auteur">
                    <img src={auteur.avatar} alt="avatar de l'utilisateur"/>
                    {auteur.nom}
                </div>
                <div className="HeaderMessage__date-publication">
                < Link to={'/actualite/' + id }>
                {new Date(datePublication).toLocaleString()}
                </Link>
                </div>
            </div>
        );
    }
}
