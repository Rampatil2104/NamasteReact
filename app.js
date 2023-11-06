        const parent = React.createElement(
                "div",{id:"parent"},
        React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I'm an H1 Tag"),
        React.createElement("h2",{},"I am an h2 tag")]),
        React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I'm an H1 Tag"),
        React.createElement("h2",{},"I am an h2 tag")]))
        
        const heading = React.createElement("h1",{id:"heading", xyz: "abc"},"Hello World from ReactJS");
        const root    = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);