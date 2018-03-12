import React from 'react';
import HeaderMessage from './HeaderMessage';
import Message from './Message';

export default function Commentaire(props) {
    const { auteur, actualiteId, datePublication, message } = props.commentaire;

    return (
        <div className="Commentaire">
            <HeaderMessage auteur={auteur} datePublication={datePublication} id={actualiteId} />
            <Message message={message} />

        </div>
    )
}
