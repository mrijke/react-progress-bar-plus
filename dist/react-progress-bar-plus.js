!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactProgressBarPlus=t(require("react")):e.ReactProgressBarPlus=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o);t["default"]=a["default"],e.exports=t["default"]},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e,t,r){for(var n=!0;n;){var o=e,a=t,i=r;n=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var c=u.get;if(void 0===c)return;return c.call(i)}var s=Object.getPrototypeOf(o);if(null===s)return;e=s,t=a,r=i,n=!0,u=s=void 0}},c=r(2),s=n(c),p=r(3),l=n(p),f=function(e){function t(){var e=this;o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments),this.state={percent:this.props.percent},this.increment=function(){var t=e.state.percent+(Math.random()+1-Math.random());t=99>t?t:99,e.setState({percent:t})},this.handleProps=function(t){t.autoIncrement&&t.percent>=0&&t.percent<99&&(e.interval=setInterval(e.increment,t.intervalTime)),t.percent>=100?e.setState({percent:99.9},function(){e.timeout=setTimeout(function(){e.setState({percent:-1})},400)}):e.setState({percent:t.percent})},this.componentDidMount=function(){e.handleProps(e.props)},this.componentWillReceiveProps=function(t){e.interval&&clearInterval(e.interval),e.timeout&&clearTimeout(e.timeout),e.handleProps(t)},this.componentWillUnmount=function(){e.interval&&clearInterval(e.interval),e.timeout&&clearTimeout(e.timeout)}}return a(t,e),i(t,[{key:"render",value:function(){var e=(0,l["default"])({"react-progress-bar":!0,"react-progress-bar-on-top":this.props.onTop,"react-progress-bar-hide":this.state.percent<0||this.state.percent>=100}),t={width:(this.state.percent<0?0:this.state.percent)+"%"};return s["default"].createElement("div",{className:e},s["default"].createElement("div",{className:"react-progress-bar-percent",style:t}),s["default"].createElement("div",{className:"react-progress-bar-spinner"},s["default"].createElement("div",{className:"react-progress-bar-spinner-icon"})))}}],[{key:"propTypes",value:{percent:s["default"].PropTypes.number.isRequired,onTop:s["default"].PropTypes.bool,autoIncrement:s["default"].PropTypes.bool,intervalTime:s["default"].PropTypes.number},enumerable:!0},{key:"defaultProps",value:{percent:-1,onTop:!1,autoIncrement:!1,intervalTime:200},enumerable:!0}]),t}(s["default"].Component);t["default"]=f,e.exports=t["default"]},function(t,r){t.exports=e},function(e,t,r){var n,o;!function(){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(r.apply(null,n));else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=r:(n=[],o=function(){return r}.apply(t,n),!(void 0!==o&&(e.exports=o)))}()}])});