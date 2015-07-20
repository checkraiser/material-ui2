'use strict';

var React = require('react');
var StylePropable = require('../mixins/style-propable.js');
var Colors = require('../styles/colors.js');
var Tab = React.createClass({
  displayName: 'Tab',

  mixins: [StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  propTypes: {
    handleTouchTap: React.PropTypes.func,
    selected: React.PropTypes.bool,
    width: React.PropTypes.string
  },

  handleTouchTap: function handleTouchTap() {
    this.props.handleTouchTap(this.props.tabIndex, this);
  },

  render: function render() {
    var styles = this.mergeAndPrefix({
      'display': 'table-cell',
      'cursor': 'pointer',
      'textAlign': 'center',
      'verticalAlign': 'middle',
      'height': '48px',
      'fontSize': '13px',
      'fontWeight': '500',
      'whiteSpace': 'initial',
      'fontFamily': this.context.muiTheme.contentFontFamily,
      'boxSizing': 'border-box',
      'width': this.props.width
    }, this.props.style);
    var selectedStyle = {
      'display': 'table-cell',
      'cursor': 'pointer',
      'textAlign': 'center',
      'verticalAlign': 'middle',
      'height': '48px',
      'color': '#35acef',
      'opacity': '1',
      'fontSize': '13px',
      'fontWeight': '500',
      'whiteSpace': 'initial',
      'fontFamily': this.context.muiTheme.contentFontFamily,
      'boxSizing': 'border-box',
      'width': this.props.width
    }
    if (this.props.selected) {
      return React.createElement(
        'div',
        { style: selectedStyle, onTouchTap: this.handleTouchTap, routeName: this.props.route },
        React.createElement('span', {style: {display:'inline'}}, 'BTC'),
        React.createElement('span', {style: {display:'inline'}}, this.props.label)
      );
    } else {
      return React.createElement(
        'div',
        { style: styles, onTouchTap: this.handleTouchTap, routeName: this.props.route },
        React.createElement('span', {style: {display:'inline', color: 'black', opacity: '.3'}}, 'BTC'),
        React.createElement('span', {style: {display:'inline', color:'black', opacity:'1'}}, this.props.label)
      );
    }


  }

});

module.exports = Tab;
