import React, { Component } from "react";
import '../CommentSection/Comment.css';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      text: this.props.text
    };

    // this.handleChange = this.handleChange.bind( this );
    this.edit = this.edit.bind( this );
  }
  
  // handleChange(e) {
  //     this.setState({ text: e.target.value });
  //     console.log(this.handleChange);
  //   }
    
  edit(e) {
      const {text} = this.state;
      const {id, edit} = this.props;
      if( e.key === "Enter" && text.length !== 0 ) {
        edit(id, text);
        this.setState({ editing: false });
      }
  }
    
  render() {
    const { id, text, edit, remove } = this.props;
    const {  editing } = this.state;
    console.log( id, text );
    return (
      <div className="Comment-container">
        {
          editing
          ?
            <input className="Comment-typed" value={ this.props.editText } onChange={ this.props.handleEditChange } 
            onKeyPress={ edit } />
          :
            <span className="Comment">{text}</span>
        }
        <div className= "edit-delete">
            <span className="Comment-change" onClick={ () => this.setState({ editing: !editing, text }) }><button className= "edit-buttons">Update</button></span>
            <span className="Comment-remove" onClick={ () => remove( id ) }><button className= "edit-buttons">Delete</button></span>
        </div>
      </div>
    )
  }
}