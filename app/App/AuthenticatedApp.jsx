import React from 'react'; 
import PropTypes from 'prop-types'; 

// Parent Node that passes down authentication properties
import AuthenticatedAppContent from './AuthenticatedAppContent'; 

/* TODO
   - User Info (Oauth) 
   - Session Timeout 
   - 
*/

const AuthenticatedApp = () => {
  return (
    <AuthenticatedAppContent/>
  )
}

AuthenticatedApp.propTypes = {}

AuthenticatedApp.defaultProps = {}

export default AuthenticatedApp; 

