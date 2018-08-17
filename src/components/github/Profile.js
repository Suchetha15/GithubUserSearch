import React, { Component } from 'react';
import Repolist from './Repolist';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.userData.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="thumbnail" style={{width: "100%"}} src={this.props.userData.avatar_url} />
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-12">
                                        <span className="label label-primary"> Number of Public repos: {this.props.userData.public_repos}</span>
                                        <span className="label label-success"> Number of public gists: {this.props.userData.public_gists}</span>
                                        <span className="label label-info"> Number of followers: {this.props.userData.followers}</span>
                                        <span className="label label-danger">Followers: {this.props.userData.following}</span>
                                        {/* <span className="label label-danger"> Number of followers: {this.props.userData.public_repos}</span> */}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-12"> 
                                        <ul  className="list-group">
                                            <li className="list-group-item"><strong>Username: </strong>{this.props.userData.login}</li>
                                            <li className="list-group-item"><strong>Location: </strong>{this.props.userData.location}</li>
                                            <li className="list-group-item"><strong>Email: </strong>{this.props.userData.email || 'User does not like to share email publically' }</li>
                                        </ul>
                                    </div>
                                </div>
                                <br />
                                <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit profile</a>
                            </div>
                        </div>
                        <hr />
                        <h3> User Repositories </h3>
                        <Repolist userRepos={this.props.userRepos}/>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Profile;