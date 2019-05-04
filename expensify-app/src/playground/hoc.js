import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const ImportantDetail = props => (
  <div>
    <h1>Secret Info</h1>
    <p>The secret info is this: Delta Foxtrox Alpha</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  // Return a stateless component that contains the added info and the component
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requiresAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent />
      ) : (
        <p>You are not Authorized to view this section. Please Sign In</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const SecretInfo = requiresAuthentication(ImportantDetail);

// ReactDOM.render(<AdminInfo isAdmin={true} info='There are the details' />, document.getElementById('root'));
ReactDOM.render(<SecretInfo isAuthenticated={false} />, document.getElementById('root'));
