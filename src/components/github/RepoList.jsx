import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Repo from './Repo.jsx';

class RepoList extends Component {

  render(){
    return(
      <div>
        <ul className='collection'>
          {
            this.props.userRepos.map(repo => {
              return <Repo repo={repo} key={repo.id} {...this.props} />
            })
          }
        </ul>
      </div>
    );
  }
}
export default RepoList;
