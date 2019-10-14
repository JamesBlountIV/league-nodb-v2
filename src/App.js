import React from 'react';
import Champion from './components/Champion';
import ComSection from './components/CommentSection/ComSection';

export default class App extends React.Component {
  render() {
    return (
      <div>
        
        <Champion><ComSection/></Champion>
      </div>
    )
  }
}
