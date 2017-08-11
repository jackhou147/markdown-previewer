import React, { Component } from 'react';
import './App.css';
import InputBox from './input-box-component.js';
import Previewer from './previewer-component.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import marked from 'marked';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
/*http://localhost:3000/*/

class App extends Component {
    
    constructor(props){
        super(props);
        var scrollBarWidth =(function (){
            var outer = document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.width = "100px";
            outer.style.msOverflowStyle = "scrollbar";
            document.body.appendChild(outer);
            var widthNoScroll = outer.offsetWidth;
            outer.style.overflow = "scroll";
            var inner = document.createElement("div");
            inner.style.width = "100%";
            outer.appendChild(inner);     
            var widthWithScroll = inner.offsetWidth;
            outer.parentNode.removeChild(outer);
            return widthNoScroll - widthWithScroll
        }());
        var minScreen768px = window.matchMedia("(min-width: 768px)").matches;
        this.state = {
            inputVal: marked("This is a __markdown__ previewer powered by *[Marked library](https://github.com/chjj/marked)*"),
            scrollBarWidth: scrollBarWidth,
            match768: minScreen768px
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }
    
    handleInput(val){
        this.setState({
            inputVal: marked(val,{sanitize:true})
        })
    }
    
    handleResize(){
        var match768 = window.matchMedia("(min-width: 768px)").matches;
        this.setState({
            match768: match768
        })
        /*if(match768.matches){
            this.setState({
                textAreaRowsMax: 21,
                textAreaRows: 21,
                textAreaHeight: "100%",
                textAreaMarginTop: "0px",
                textFieldBackgroundColor: "#FFE0B2",
                floatingLabelStyle: {
                    "display":"none"
                },
            })
        } else {
            this.setState({
                textAreaRowsMax: 5,
                textAreaRows: 1,
                textAreaHeight: "auto",
                textAreaMarginTop: "36px",
                textFieldBackgroundColor:"transparent",
                floatingLabelStyle: {
                    "display":"initial",
                    "color":"#212121"
                }
            })
        }*/
    }
    
    componentDidMount(){
        window.addEventListener("resize",this.handleResize)
    }
    
    render() {
        return (
            
            <MuiThemeProvider>
            
                <div className="App">
            
                    <Previewer html={this.state.inputVal} width={"80vw"} height={"40vw"} scrollBarWidth={this.state.scrollBarWidth}  />
            
                    <InputBox 
                        match768={this.state.match768}
                        scrollBarWidth={this.state.scrollBarWidth} 
                        onInput={this.handleInput.bind(this)} 
                    />


                </div>

            </MuiThemeProvider>
          
        );
    }
};

export default App;
