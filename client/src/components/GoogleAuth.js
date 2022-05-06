import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '1098606169626-35fsd56j93rtcqp3aj9l2hk5vmtp34g5.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
