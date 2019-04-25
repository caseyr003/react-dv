## React Data Visualization

### Installation

`npm install --save react-dv`

### Which Component to Use?

The `DataVisualization` component is to be used in conjunction with visualizations sourced from the Data Visualization tool from the Oracle Analytics Cloud.

The `Dashboard` component is to be used in conjunction with visualization dashboards from Oracle Business Intelligence.

### How To Use Data Visualization Component

First import this component where you want to use it

`import { DataVisualization } from "react-dv"`

Next add embedding script to index.html of project

```
<script
    src="<oac instance url>/dv/ui/api/v1/plugins/embedding/standalone/embedding.js"
    type="application/javascript">
</script>
```

Then just render it. This component requires Single Sign On to be enable between the Oracle Analytics Cloud and your application. For testing, you can run the application in the same browser where you are signed into Oracle Analytics Cloud to get around the Single Sign On requirement.

`<DataVisualization path="oac/project/path" activeTab="1" showFilter={false} disableMobileLayout={false} />`

### Props

| _Prop_              |                    _Description_                     | _Value_ |
| ------------------- | :--------------------------------------------------: | ------- |
| path                |      Set path to Oracle Cloud Analytics project      | String  |
| activeTab           |           Select active canvas to display            | String  |
| showFilter          | Determines if filtering is enabled for visualization | Boolean |
| disableMobileLayout |          Disables or enables mobile layout           | Boolean |

### Example

```
import React, { Component } from "react";
import DataVisualization from "react-dv";


class App extends Component {

  render() {
    return (
        <DataVisualization path="oac/project/path" activeTab="1" showFilter={false} disableMobileLayout={false} />
    );
  }
}

export default App;
```

### How To Use Dashoboard Component

First import this component where you want to use it

`import { Dashboard } from "react-dv"`

Then just render it. This component requires Single Sign On to be enable between the Oracle Analytics Cloud and your application. For testing, you can run the application in the same browser where you are signed into Oracle Analytics Cloud to get around the Single Sign On requirement.

`<Dashboard link="oac.com/prompted-url-link" />`

### Props

| _Prop_ |                  _Description_                   | _Value_ |
| ------ | :----------------------------------------------: | ------- |
| link   | Prompted URL for Business Intelligence Dashboard | String  |

### Example

```
import React, { Component } from "react";
import { Dashboard } from "react-dv";


class App extends Component {

  render() {
    return (
        <Dashboard link="oac.com/prompted-url-link" />
    );
  }
}

export default App;
```
