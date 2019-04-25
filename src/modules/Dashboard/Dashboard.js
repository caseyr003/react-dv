import React from "react";

class Dashboard extends React.Component {

  render() {

    const style = {
      width: "100%",
      height: "100%"
    };

    const frameStyle = {
      width: "100%",
      height: "100%",
      border: "none"
    };

    return (
      <div style={style}>
        <iframe style={frameStyle} src={this.props.link} title="BI Dashboard" />
      </div>
    );
  }
}

export default Dashboard;
