'use strict';

var React = require('react');
var SvgIcon = require('../../svg-icon');

var DeviceSignalCellular4Bar = React.createClass({
  displayName: 'DeviceSignalCellular4Bar',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M2 22h20V2z' })
    );
  }

});

module.exports = DeviceSignalCellular4Bar;