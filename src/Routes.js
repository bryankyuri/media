import React, { Suspense, lazy } from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

/* loader component for Suspense*/
import PageLoader from "./Components/Common/PageLoader";

import Base from "./Components/Layout/Base";
// import BasePage from "./Components/Layout/BasePage";
// import BaseHorizontal from './components/Layout/BaseHorizontal';

/* Used to render a lazy component with react-router */
const waitFor = (Tag) => (props) => <Tag {...props} />;

const Home = lazy(() => import("./Pages/Home"));
const NotFound = lazy(() => import("./Pages/Notfound/NotFound"));
const Maintenance = lazy(() => import("./Pages/Maintenance"));

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname

const Routes = ({ location }) => {
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 500, exit: 500 };
  const animationName = "rag-fadeIn";

  return (
    <Base>
      <TransitionGroup>
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames={animationName}
          exit={false}
        >
          <div>
            <Suspense fallback={<PageLoader />}>
              <Switch location={location}>
                <Route exact path="/" component={waitFor(Home)} />
                <Route exact path="/notfound" component={waitFor(NotFound)} />
                <Route exact path="/maintenance" component={waitFor(Maintenance)} />
                <Redirect
                  to={{
                    pathname: "/notfound",
                  }}
                />
              </Switch>
            </Suspense>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Base>
  );
};

export default withRouter(Routes);
