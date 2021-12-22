import React, { Suspense } from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import { AnimatePresence, motion } from "framer-motion";
import { listRoutes } from "./listRoutes";

/* loader component for Suspense*/
import PageLoader from "./Components/Common/PageLoader";

import Base from "./Components/Layout/Base";
// import BasePage from "./Components/Layout/BasePage";
// import BaseHorizontal from './components/Layout/BaseHorizontal';

/* Used to render a lazy component with react-router */
const waitFor = (Tag) => (props) => <Tag {...props} />;

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname

const Routes = ({ location }) => {
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 300, exit: 300 };
  const animationName = "animate__animated fadeIn";
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Base>
      <TransitionGroup>
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames={animationName}
          exit={false}
        >
          <Suspense fallback={<PageLoader />}>
            {/* <AnimatePresence exitBeforeEnter> */}
              <Switch location={location} key={location.pathname}>
                {listRoutes().map((item, index) => {
                  return (
                    // <motion.div
                    //   // key={"item"+ index}
                    //   initial={{ opacity: 0.4 }}
                    //   animate={{ opacity: 1 }}
                    //   transition={{ duration: 0.4 }}
                    //   exit={{ opacity: 0 }}
                    // >
                    <Route
                      exact={item.exact}
                      path={item.path}
                      component={waitFor(item.component)}
                      key={"item" + index}
                    />
                    // </motion.div>
                  );
                })}
                {/* <motion.div
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    exit={{ opacity: 0 }}
                  > */}
                <Redirect
                  to={{
                    pathname: "/maintenance",
                  }}
                />
                {/* </motion.div> */}
              </Switch>
            {/* </AnimatePresence> */}
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
    </Base>
  );
};

export default withRouter(Routes);
