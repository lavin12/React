const heading = React.createElement(
    "div",{id: "parent"}, 
[
    React.createElement("div",{id: "child"},
React.createElement("h1",{},"This one is done by nested arguement")
    ),
React.createElement("div",{id: "child"},
React.createElement("h1",{},"This one is done by nested arguement")
)]

);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);