import React from "react";
// eslint-disable-next-line
import knockout from "./knockout";

class DataVisualization extends React.Component {
  componentDidMount() {
    this.dv.addEventListener("oracle.bitech.dataaction", this.handleDVEvent);
  }

  componentWillUnmount() {
    this.dv.removeEventListener("oracle.bitech.dataaction", this.handleDVEvent);
  }

  handleDVEvent(event) {
    this.props.dataActionHandler(event);
  }

  render() {
    const options = {
      bDisableMobileLayout: this.props.disableMobileLayout,
      bShowFilterBar: this.props.showFilter
    };

    const style = {
      width: "100%",
      height: "100%"
    };

    return (
      <div ref={elem => (this.dv = elem)} style={style}>
        <oracle-dv
          project-path={this.props.path}
          project-options={JSON.stringify(options)}
          active-page="canvas"
          active-tab-id={this.props.activeTab}
        />
      </div>
    );
  }
}

export default DataVisualization;
