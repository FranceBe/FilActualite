import React from 'react';
import Commentaire from './Commentaire';
import uniqid from 'uniqid';

export default function ListeCommentaires(props) {
    const { commentaires } = props;

    if(!commentaires.length) {
        return null;
    }
        return (
            <div className="ListeCommentaires">
            <div> <span className="comments"> Commentaires : </span>  </div>
             { commentaires.map((commentaire) => <Commentaire key={uniqid()} commentaire={commentaire} />)}
             </div>
        )
}
