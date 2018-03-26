import React, { Component } from 'react';
import WikiApi from "./WikiApi.js";

export default class WikiSummary extends Component {

    constructor(props) {
        super(props);
        this.state = { summary: "", links: "Loading.." };
    }

    componentDidMount() {
        var self = this;
        WikiApi.getSummary(this.props.currentTitle).then(

            function(text) {
                self.setState({
                    summary: text
                });
            }
        )

        WikiApi.getLinks(this.props.currentTitle).then(
            function(text) {
                var link = [];

                text.forEach(function(a) {
                    link.push(<button onClick={ ()=>self.props.addTitle(a) }>{a}</button>)
                });


                self.setState({
                    links: link
                });

            })

    }

    componentWillReceiveProps(nextProps) {
        var self = this;
        WikiApi.getSummary(nextProps.currentTitle).then(

            function(text) {
                self.setState({
                    summary: text
                });
            }
        )

        WikiApi.getLinks(nextProps.currentTitle).then(
            function(text) {
                var link = [];

                text.forEach(function(a) {
                    link.push(<button onClick={ ()=>nextProps.addTitle(a) }>{a}</button>)
                });


                self.setState({
                    links: link
                });

            })
    }

    render() {


        var currentTitle = this.props.currentTitle;
        // var list = this.state.links.map(
        //     (link) => <li >{link}</li>
        //     );

        return (
            <div>
            <center><h1>{this.props.currentTitle}</h1></center>
        {this.state.summary}
        <p class="sum">{this.state.links}</p>
      </div>
        );
    }
}
