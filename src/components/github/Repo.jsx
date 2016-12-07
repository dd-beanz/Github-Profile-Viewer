import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Repo extends Component {

  render(){
    const {repo} = this.props;

    return(
      <li className='collection-item'>
        <a href={repo.html_url}>
          {repo.name}
        </a> : {repo.description}
      </li>
    );
  }
}
export default Repo;
