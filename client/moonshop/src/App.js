import React from "react";
// import { ReduxRouter } from '@lagunovsky/redux-react-router';
import RouteApp from './routes/index';
// import { browserHistory } from './redux/history';
// import { Provider } from 'react-redux';

const ShoppingApp = () => {
  return(
    <RouteApp/>
  )
}

export default React.memo(ShoppingApp);
