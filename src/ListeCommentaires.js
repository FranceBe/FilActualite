import React from 'react';
import Commentaire from './Commentaire';
import uniqid from 'uniqid';
import AddComment from './AddComment';

export default class ListeCommentaires extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            commentaires : props.commentaires
        }

        this.onAddComment = this.onAddComment.bind(this)
    }

    onAddComment(value) {
        console.log(value)

        const commentaires = this.state.commentaires
        commentaires.push({
            message: value,
            datePublication: Date.now(),
            auteur: {
                nom: '',
                avatar: '../img/unknown.jpg',
            },
            actualiteId: '48ld'
        })

         this.setState({
             commentaires : commentaires
         });
    }

    render() {
        const { commentaires } = this.state;

        if (!commentaires.length) {
            return null;
        }

        return (
            <div className="ListeCommentaires">
                <div>
                    <span className="comments"> Commentaires : </span>
                </div>
                {
                    commentaires.map((commentaire) => <Commentaire key={uniqid()} commentaire={commentaire} />)
                }
                <AddComment onAddComment={this.onAddComment} />
            </div>
        )
    }
}
