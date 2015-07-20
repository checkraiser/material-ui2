'use strict';

var React = require('react');
var Transitions = require('./styles/transitions');
var StylePropable = require('./mixins/style-propable');

var FooterInkBar = React.createClass({
  displayName: 'FooterInkBar',

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  propTypes: {
    left: React.PropTypes.string.isRequired,
    width: React.PropTypes.string.isRequired
  },

  mixins: [StylePropable],

  render: function render() {
    var palette = this.context.muiTheme.palette;

    var styles = this.mergeAndPrefix({
      left: this.props.left,
      width: '17%',
      bottom: '2px',
      display: 'block',
      backgroundColor: '#9ad6f7',
      height: 3,
      marginTop: -2,
      position: 'fixed',
    });

    return React.createElement(
      'div',
      { style: styles },
      ' '
    );
  }

});

module.exports = FooterInkBar;
