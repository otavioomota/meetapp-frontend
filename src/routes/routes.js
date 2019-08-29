import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Proptypes from "prop-types";

import DefaultLayout from "../pages/_Layouts/Default";
import AuthLayout from "../pages/_Layouts/Auth";

export default function RouteWrapper({
  isPrivate,
  component: Component,
  ...rest
}) {
  const signed = useSelector(state => state.auth.signed);

  const Layout = signed ? DefaultLayout : AuthLayout;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Layout>
      <Route {...rest} component={Component} />
    </Layout>
  );
}

RouteWrapper.propTypes = {
  isPrivate: Proptypes.bool,
  component: Proptypes.oneOfType([Proptypes.element, Proptypes.func]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: false
};
