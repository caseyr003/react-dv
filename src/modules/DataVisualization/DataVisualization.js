import React from 'react';
import knockout from './knockout';

class DataVisualization extends React.Component {

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
