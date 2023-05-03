import { ROUTES } from '/src/nav/routes.js';
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    window.location.replace(ROUTES.notFound);
  }

  render() {
    if (this.state.errorInfo) {
      return null;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
