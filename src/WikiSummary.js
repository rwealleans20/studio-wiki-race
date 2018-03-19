import React, { Component } from 'react';
import WikiApi from "./WikiApi.js";

export default class WikiSummary extends Component {

    constructor(props) {
        super(props);
        this.state = { summary: "", links: [] };
    }

    componentDidMount() {
        WikiApi.getSummary(this.props.currentTitle).then(

            (summary) => this.setState({ summary: summary })
        );

        WikiApi.getLinks(this.props.currentTitle).then(

            (links) => this.setState({ links: links })

        );

    }



    render() {


        var currentTitle = this.props.currentTitle;
        var list = this.state.links.map(
            (link) => <li>{link}</li>
            );

        return (
            <div>
        {this.state.summary}
        {list}
      </div>
        );
    }
}
