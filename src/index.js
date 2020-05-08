import React from "react";
import ReactDOM from "react-dom";
import { AutoSizer, Table, Column } from "react-virtualized";
import "react-virtualized/styles.css";

class App extends React.Component {
  state = {
    data: [
      { id: "01", name: "Name 1", expanded: true },
      { parent: "01", name: "Name 2" },
      { parent: "01", name: "Name 3" },
      { id: "02", name: "Name 1", expanded: false },
      { parent: "02", name: "Name 2" },
      { parent: "02", name: "Name 2" }
    ]
  };

  constructor(props) {
    super(props);
    this._table = React.createRef();
    this._visibleItems = this._visibleItems.bind(this);
    this.toggleCollapsible = this.toggleCollapsible.bind(this);
  }

  toggleCollapsible = ({ event, index, rowData }) => {
    if (!rowData.parent) {
      this.setState(
        prevState => {
          prevState.data.find(
            x => x.id === rowData.id
          ).expanded = !prevState.data.find(x => x.id === rowData.id).expanded;
          return prevState;
        },
        () => {
          this._table.current.recomputeRowHeights(index); // Clear cached size
          this._table.current.forceUpdateGrid(); // Rerender list with new size
        }
      );
    }
  };

  _visibleItems = () => {
    var isVisibe = item => {
      if (!item.parent) {
        return true;
      }
      return this.state.data.find(x => x.id === item.parent).expanded;
    };
    return this.state.data.filter(isVisibe);
  };

  render() {
    const { data } = this.state;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            headerHeight={40}
            height={40 + this._visibleItems().length * 40}
            ref={this._table}
            rowCount={this._visibleItems().length}
            rowGetter={({ index }) => this._visibleItems()[index]}
            rowHeight={40}
            width={500}
            onRowClick={this.toggleCollapsible}
          >
            <Column label={`ID`} dataKey={`id`} width={width / 5} />
            <Column label={`Parent`} dataKey={`parent`} width={width / 5} />
            <Column label={`Name`} dataKey={`name`} width={width / 5} />
          </Table>
        )}
      </AutoSizer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
