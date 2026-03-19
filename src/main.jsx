import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    console.error('[FinAuto] Error:', error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{
          padding: 40, background: '#070B14', color: '#EF4444',
          fontFamily: 'monospace', minHeight: '100vh'
        }}>
          <h1>⚠️ App Error</h1>
          <pre style={{ marginTop: 20, color: '#F0F4FF', whiteSpace: 'pre-wrap' }}>
            {this.state.error.toString()}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)
