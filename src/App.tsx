import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { TestListView } from "./views/Test";

const isLoggedIn = true;

const PublicRoutes: React.FC = () => {
  return <div>publicRoutes</div>;
};

const PrivateRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={TestListView} />
      <Redirect to="/" />
    </Switch>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      {isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
};

export default App;
