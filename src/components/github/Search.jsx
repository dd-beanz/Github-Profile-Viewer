import React, {Component} from 'react';
import ReacDom from 'react-dom';

class Search extends Component {
  onSubmit(e){
    e.preventDefault();
    let username = this.refs.username.value.trim();
    if(!username){
      alert('Please enter a user name');
      return;
    }
    this.props.onFormSubmit(username);
    this.refs.username.value = '';
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Search Github Users</label>
          <input type='text' ref='username' />
        </form>
      </div>
    )
  }
}

export default Search;
