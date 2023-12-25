import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../constanse';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  path: string;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children, path} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={path} />
  );
}

export default PrivateRoute;
