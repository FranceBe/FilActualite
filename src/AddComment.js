import React from 'react';




export default class AddComment extends React.Component {

    constructor (props) {
        super(props)

        this.onCommentFormClick = this.onCommentFormClick.bind(this)

        this.state = {displayForm: false}
    }

    onCommentFormClick() {
        this.setState({
            displayForm: true
        })
    }

    onMessageAdd(evt){
        evt.preventDefault();
        const newMessage = this.newMessage.value;
        this.newMessage.value = '';
        this.props.onAddComment(newMessage);
    }

    renderForm (){
        return (
            <form>
                <input type='text' ref={(input) => this.newMessage = input} />
                <button onClick={this.onMessageAdd.bind(this)}> Ajouter </button>
            </form>
        )
    }

    renderButton (){
        return (
            <button onClick= {this.onCommentFormClick}> Ajouter un Commentaire </button>
        )
    }

    render() {

        return (
            <div>
                { this.state.displayForm ? this.renderForm() : this.renderButton() }
            </div>
    );
    }
}
