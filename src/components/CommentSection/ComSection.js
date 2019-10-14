import React, { Component } from "react";
import Comment from './Comment';
import axios from "axios";
import './ComSection.css';

export default class ComSection extends Component {
  constructor() {
    super();
    this.state = {
        comments: [],
        text: ''
    };

    this.handleChange = this.handleChange.bind( this );
    this.createComment = this.createComment.bind( this );
    this.editComment = this.editComment.bind( this );
    this.removeComment = this.removeComment.bind( this );
  }

  getAllComments = () => {
    axios.get("/api/comments").then( response => {
      this.setState({ comments: response.data });
    }).catch(error => { console.log(error);});
  }
  componentDidMount() {
      this.getAllComments();
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
    console.log(this.handleChange);
  }

  createComment(e) {
    const { text } = this.state;
    if ( e.key === "Enter" && text.length !== 0 ) {
      axios.post("/api/comments/text", {text} ).then( response => {
        this.setState({ comments: response.data });
      }).catch(error => { console.log(error);});

      this.setState({ text: "" });
    }
  }

  editComment( id, text ) {
    console.log( "editComment:", id, text ); 
    axios.put(`"/api/comments"/${id}`, {text} ).then( response => {
      this.setState({ comments: response.data });
    });
  }

  removeComment(id) {
    axios.delete(`"/api/comments"/${id}` ).then( response => {
      this.setState({ comments: response.data });
    });
  }

  render() {
    return (
      <div id="ComSec-container1">
        <div id="ComSec-container2">
          <div id="ComSec-container3">
            {
              this.state.comments.map( comment => (
                <Comment id={ comment.id} key={ comment.id } text={ comment.text }
                edit={ this.editComment } remove={ this.removeComment } />
              ))
            }
          </div>
        </div>
        <div id="ComSec-createComment">
          <input className= "comment-here"
                 placeholder="Leave A Feedback Comment Here!"
                 onKeyPress={ this.createComment } 
                 onChange={ this.handleChange }
                 value={ this.state.text } 
          />
        </div>
      </div>
    )
  }
}