// create html tag from ReactJS code.
//By uing ReactDOM-I want create a root.
//I want render the element of the root.

const results = React.createElement("h1",{id:"my h1 tag"},"ReactJS");
const root = ReactDOM.createRoot(document.getElementById("root"));// we are pushing the above 5 line into linkedpage
root.render(results);//mixing above 2 lines