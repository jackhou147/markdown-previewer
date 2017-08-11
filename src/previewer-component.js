import React, { Component } from 'react';
import {Card, CardText} from 'material-ui/Card';


class Previewer extends Component {
    render(){
        var cardStyle = {
            "height": "100%",
            "width":"100%",
            "backgroundColor":"#FF9800"
        };
        
        var containerStyle = {
            "height": "100%",
            "width":"100%",/*
            "overflow":"hidden",*/
            "padding":"16px 0px 16px 16px"
        }
        
        var cardTextStyle = {
            "boxSizing":"initial",
            "height": "100%",
            "width":"100%",
            "overflow":"auto",
            "padding": `0px ${this.props.scrollBarWidth+5+"px"} 0px 0px`,
        }
        
        
        return (
            <div className="App__Previewer-Component" >

                <Card style={cardStyle} className="App__card" containerStyle={containerStyle}>

                    <CardText style={cardTextStyle} className="App__card-text" dangerouslySetInnerHTML = {{__html: this.props.html}} />

                </Card>

            </div>
        )
    }
}
export default Previewer;