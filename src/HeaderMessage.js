import React from 'react';

export default class HeaderMessage extends React.Component {
    render() {
        const {auteur, datePublication} = this.props
        return (

            <div className="HeaderMessage">
                <div className="HeaderMessage__auteur">
                    <img src={auteur.avatar} alt="avatar de l'utilisateur"/>
                    {auteur.nom}
                </div>
                <div className="HeaderMessage__date-publication">
                {new Date(datePublication).toLocaleString()}
                </div>
            </div>
        );
    }
}
