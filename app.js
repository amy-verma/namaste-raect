/**
 * 
 * //ReactElement is an (object)=>HTML(browser understands)
 * //what is a react element- is an object this object is  then using react dom,createroot is responsible to create 
 * root/assign a root isnide a raect
 * //then thsi render method is helping us to put that object onto our page in form if html
 * //createElement api takes three argument- name of the tag(div,h1) , attribute(id,class),if single children,
 * or multiple childrens then pass it in array list
  * 
  * //when we do root.render  it is getting replaced inside root
  * 
  * //react is just a library you can import it just like a javascript file into your code 
  * //you can use react in an existing web application just import react and start usning it
  * it is library not a full-fleged framework
 */

const parent=React.createElement("div",
    {id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am a h1 tag"),
            React.createElement("h2",{},"I am a h2 tag")]
        ),React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"I am a h1 tag"),
                React.createElement("h2",{},"I am a h2 tag")]
            )]
    );

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

    // const heading=React.createElement("h1",{id:"heading"},"Hello world from react "); //it basically creates an js object for you basically react element
    // console.log(heading)//object
    // const root=ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);//is responsile to take this object and convert it into heading tab and put on the dom

     


    // const heading_second=React.createElement("h2",{},"Second Haeding");

    // const second_root=ReactDOM.createRoot(document.getElementById("second_root"));
    // second_root.render(heading_second);

    // const season=React.createElement("h1",{},"TOP PICS FOR SEASON");
    // const social=ReactDOM.createRoot(document.getElementById("social"));
    // social.render(season);