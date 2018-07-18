/* global React ReactDOM */

var ce = React.createElement;

var MyTitle = function(props) {
    return(
        ce('div', null, 
            ce("h1", {style: {color: props.color}}, props.title)
        )
    );
};


var myFirstComponent = function (){
    return(
        ce('div', null,
        ce(MyTitle, {color: 'rebeccapurple', title: 'House of Cards'}),
        ce(MyTitle, {color: 'peru', title: 'Orange is the New Black'}),
        ce(MyTitle, {title: 'Stranger Things', color: 'burlywood'})
      )
    );
};

ReactDOM.render(
    React.createElement(myFirstComponent),
    document.getElementById("app")
);