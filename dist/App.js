var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Hello2, { name: '高飞34223', age: 29613 })));
    };
    ;
    return App;
}(React.Component));
export { App };
var Hello2 = /** @class */ (function (_super) {
    __extends(Hello2, _super);
    function Hello2(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Hello2.prototype.render = function () {
        return (React.createElement("div", null,
            "\u6211\u662F",
            this.props.name,
            ",\u4ECA\u5E74",
            this.props.age,
            "\u5C81\u4E86\u554A"));
    };
    ;
    return Hello2;
}(React.Component));
export { Hello2 };
export default App;
//# sourceMappingURL=App.js.map