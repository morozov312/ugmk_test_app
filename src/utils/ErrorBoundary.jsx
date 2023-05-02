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
    window.location.replace('/404');
  }

  render() {
    if (this.state.errorInfo) {
      return null;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
