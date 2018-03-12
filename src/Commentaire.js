import React from 'react';
import HeaderMessage from './HeaderMessage';
import Message from './Message';
import FontAwesome from'react-fontawesome';

export default function Commentaire(props) {
    const { auteur, datePublication, message } = props.commentaire;

    return (
        <div className="Commentaire">
            <HeaderMessage auteur={auteur} datePublication={datePublication} />
            <Message message={message} />

        </div>
    )
}
