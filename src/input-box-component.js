import React from 'react';
import TextField from 'material-ui/TextField';

class InputBox extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    
    handleChange(e){
        this.props.onInput(e.target.value);
    }
    
    
    
    render(){
        let underlineStyle = {
            "bottom": this.props.match768 ? "0" : "8px"
        };
        let rootStyle = {
            /*"border":"1px dashed red",*/
            "height": this.props.match768 ? "100%" : "72px",
            "backgroundColor": this.props.match768 ? "#FFE0B2" : "transparent",
            "paddingLeft": this.props.match768 ? "10px" : "0",
            "paddingBottom": this.props.match768 ? "10px" : "0"
        };
        let textAreaStyle = {
            /*"border":"1px dashed green",*/
            "boxSizing":"initial",
            "paddingRight":this.props.scrollBarWidth+5,
            "marginTop": this.props.match768 ? "15px" : "36px"
            
        };
        let rowsMax = this.props.match768 ? 20 : 4;
        let rows = this.props.match768 ? 20 : 1;
        
        let underlineShow = this.props.match768 ? false : true;

        let floatingLabelStyle = {
            "top": this.props.match768 ? "15px" : "38px"
        };
        
        let floatingLabelFocusStyle = {
            "transform": this.props.match768 ? 
                            "scale(0.75) translate(0,-18px)" :
                            "scale(0.75) translate(0,-28px)" 
        }
        
        
        return (
            <div className="App__InputBox-Component">
            
                <TextField 
                    onInput = {this.handleChange} 
                    id = "InputBox-Component" 
                    multiLine = {true} 
                    fullWidth = {true} 
                    floatingLabelText = "Type something"
                    underlineStyle = {underlineStyle}
                    style = {rootStyle}
                    textareaStyle = {textAreaStyle}
                    rowsMax = {rowsMax}
                    rows = {rows}
                    underlineShow = {underlineShow}
                    floatingLabelStyle = {floatingLabelStyle}
                    floatingLabelShrinkStyle = {floatingLabelFocusStyle}
                />
            
            </div>
        )
    }
    
    
}


export default InputBox;