// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// const reportData = [
//   {
//     name: "Name 1",
//     role: "User",
//     details: "Here are some details to show on expand"
//   },
//   {
//     name: "Name 2",
//     role: "Admin",
//     details: "Here are some details to show on expand"
//   },
//   {
//     name: "Name 3",
//     role: "Guest",
//     details: "Here are some details to show on expand"
//   },
//   {
//     name: "Name 0",
//     role: "User",
//     details: "Here are some details to show on expand"
//   }
// ];

// const rowRenderer = ({ key, className, columns, rowData, style }) => {
//   if (rowData.open) {
//     return (
//       <div>
//         <div key={key} role={"row"} className={className} style={Object.assign({}, style, { height: "80px" })}>
//           {columns}
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div key={key} role={"row"} className={className} style={style}>
//         {columns}
//       </div>
//     );
//   }
// }

// cellRenderer({ cellData, columnData, columnIndex, dataKey, isScrolling, rowData, rowIndex }) {
//   if (dataKey === "details") {
//     return (
//       <img
//         onClick={(e) => this.toggleCollapsible(e, rowIndex)}
//         style={{ cursor: "pointer", display: "inline-block" }}
//         src={"/imgs/" + (rowData.open ? "icon-arrow-up" : "icon-arrow-down") + ".svg"}
//       />
//     );
//   }

//   return (
//     <Tooltip overlay={rowData[dataKey]} placement="top" destroyTooltipOnHide={true} mouseEnterDelay={0.3}>
//       {cell}
//     </Tooltip>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <AutoSizer>
//         {({ height, width }) => (
//           <Table
//             headerHeight={40}
//             height={height}
//             rowCount={reportData.length}
//             rowGetter={({ index }) => reportData[index]}
//             rowHeight={40}
//             width={2000}
//           >
//             <Column
//               cellRenderer={cellRenderer}
//               label={`User Name`}
//               dataKey={`name`}
//             />
//             <Column
//               cellRenderer={cellRenderer}
//               label={`User Role`}
//               dataKey={`role`}
//             />
//             <Column
//               cellRenderer={cellRenderer}
//               label={`Details`}
//               dataKey={`details`}
//             />
//           </Table>
//         )}
//       </AutoSizer>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
