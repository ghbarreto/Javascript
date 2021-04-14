import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    // connecting to the google api (OAuth)
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: "783714706641-q1pgctp8tmihsvgrrd79o7i6b90q8npl.apps.googleusercontent.com",
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();

        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    })
  }

  onAuthChange = (isSignedIn) => {
    // this function change the status on the website when you log-in or log-off
    // for example, it will say "you are signed in", if you log out, it will update to "you are signed out"
    // without having to refresh the page.
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn(this.auth.currentUser.get().getId());
  };

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    // isSignedIn (shows button) logic
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />Sign Out
        </button>
      )
    } else {
      return <button onClick={this.onSignInClick} className="ui red google button">
        <i className="google icon" /> Sign In with Google
      </button>;
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);