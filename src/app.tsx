import React from 'react';

const App: React.FC = () => {
  let rootStyle: React.CSSProperties = {
    backgroundColor: "lightcoral",
    width: "100vw",
    height: "100vh",
  }
  let content: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  }
  let inContent: React.CSSProperties = {
    backgroundColor: "rgb(255,255,255,0.4)",
    width: "50%",
    height: "60vh",
    marginTop: "209px",
    marginLeft: "80px",
  }
  let exContent: React.CSSProperties = {
    backgroundColor: "rgb(255,255,255,0.4)",
    width: "50%",
    height: "40vh",
    marginTop: "159px",
    marginLeft: "80px",
  }
  return (
    <div style={rootStyle}>
      <div id="content" style={content}>
        <div id="in-content" style={inContent}>indentation</div>
        <div id="ex-content" style={exContent}>exclusive</div>
      </div>
    </div>
  )
}

export default App