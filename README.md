## React Data Visualization

### Installation

`npm install --save react-dv`

### How To Use

First import this component where you want to use it

`import DataVisualization from "react-dv"`

Next add embedding script to index.html of project

```
<script 
    src="<oac instance url>/dv/ui/api/v1/plugins/embedding/standalone/embedding.js"
    type="application/javascript">
</script>
```

Then just render it. This component requires Single Sign On to be enable between the Oracle Analytics Cloud and your application. For testing, you can run the application in the same browser where you are signed into Oracle Analytics Cloud to get around the Single Sign On requirement.

`<DataVisualization path="oac/project/path" activeTab="1" showFilter={false} dataActionHandler={this.dataActionHandler} />`

### Props

|       _Prop_       |                         _Description_                           |
| ------------------ | :-------------------------------------------------------------: |
| path               |          Set path to Oracle Cloud Analytics project             |
| activeTab          |                  Select active canvas to display                |
| showFilter         |      Determines if filtering is enabled for visualization       |
| dataActionHandler  |    Gets event from data action if publish event is configured   |

### Example

```
import React, { Component } from "react";
import DataVisualization from "react-dv";


class App extends Component {

    dataActionHandler = (event) => {
        console.log(event);
    }

  render() {
    return (
        <DataVisualization path="oac/project/path" activeTab="1" showFilter={false} dataActionHandler={this.dataActionHandler} />
    );
  }
}

export default App;
```