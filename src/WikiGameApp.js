import React, { Component } from 'react';
import WikiSummary from "./WikiSummary.js";

export default class WikiGameApp extends Component {
  render() {
    // Properties (data) provided by WikiGameHistory.
    var isComplete = this.props.isComplete;
    var titles = this.props.titles;
    var currentTitle = this.props.currentTitle;
    var targetTitle = this.props.targetTitle;

    // Properties (functions) provided by WikiGameHistory.
    var addTitle = this.props.addTitle;
    var setCurrentTitle = this.props.setCurrentTitle;

    return (
      <div>
        <WikiSummary currentTitle={currentTitle} addTitle={addTitle}/>
      </div>
    );
  }
}
