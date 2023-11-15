import React from "react";
import ReactDOM from "react-dom/client";


 const elem = <span>React Element</span>
//JSX
const jsxHeading = (
<h1 className="head">
Namaste React using JSX
</h1>
);

//React Functional Component 
const Title = () => (
        <h1 className="head" tabIndex="5">
                {elem}
                Namaste React using JSX
        </h1>
);

const number = 10000;

const HeadingComponent = () =>(
<div id ="container">
 <Title />       
 <Title></Title>
 {Title()}
 <h2>{number+100}</h2>
 <h1>Namaste React Functional Component</h1>
</div>
);

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<HeadingComponent />);
 