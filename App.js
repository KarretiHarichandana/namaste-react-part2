import React from "react";
import ReactDOM from "react-dom/client";

//React Element

const heading = React.createElement("h1", { id: "heading" }, "hello");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// JSX
const jsxHeading = (
  <h1 id="heading1" className="heading">
    hello react from jsx file
  </h1>
);

root.render(jsxHeading);

//React Component 
// class based components 
// function based components(99.99% of the time)

const HeadingComponent = () => {
    return <h1> This is heading component from function based react </h1>;
}; 

const HeadingComponent2 = () => <h1> Heading compoennt2</h1> 

const Title = () => (
    <h1>Namaste React from Jsx</h1>
);

const elem = <span> React</span>;

const title = (
    <h1> {elem} Namaste Reacted from 100000</h1>    
)



const number = 1000;
//component composition
const HeadingComponent3 = () => (
    <div id="container">
        <Title/>
        {title}
        <HeadingComponent/>
        <h1 className ="heading2"> Heading component 3</h1>
    </div>
);


root.render(<HeadingComponent3/>); 


