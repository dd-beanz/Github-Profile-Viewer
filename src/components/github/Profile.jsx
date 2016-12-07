import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RepoList from './RepoList.jsx';

class Profile extends Component {
  render() {
    return(
    <div className="row">
      <div className="col s12 m5">
        <div className="card">
          <div className="card-image">
            <img src={this.props.userData.avatar_url} />
            <span className="card-title">{this.props.userData.login}</span>
          </div>
          <div className="card-content">
            <h5 className='light center'>User Repositories</h5>
            <RepoList userRepos={this.props.userRepos} />
          </div>
        </div>
      </div>
      <div className='center col s12 m5 push-m2'>
        <h3 className='light'>{this.props.userData.name}</h3>
        <div className='row'>
          <div className='col s12 m12'>
            <div className="chip blue">
              {this.props.userData.public_repos} Repos
            </div>
            <div className="chip yellow">
              {this.props.userData.public_gists} Gists
            </div>
            <div className="chip red">
              {this.props.userData.followers} Followers
            </div>
            <div className="chip green">
              {this.props.userData.following} Following
            </div>
            <ul className="collection">
              <li className="collection-item"><h6 className='light'><strong>Location:</strong> {this.props.userData.location}</h6></li>
              <li className="collection-item"><h6 className='light'><strong>Email Address:</strong> {this.props.userData.email}</h6></li>
              <li className="collection-item"><h6 className='light'><strong>Bio:</strong> {this.props.userData.bio}</h6></li>
            </ul>
          </div>
          <br />
          <a className='waves-effect waves-light btn red' target='_blank' href={this.props.userData.html_url}>Visit Profile</a>
        </div>
      </div>
    </div>
    )
  }
}
export default Profile;
