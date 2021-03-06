var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function spare() {
    (function (window) {
        function defineSpare() {
            //console.log('Touch framework is running')
            var Spare = {};
            //@ts-ignore
            Spare.info = function () {
                console.log('Touch framework is running');
            };
            //@ts-ignore
            Spare.addEvent = function (selector, eventName, exec) {
                var element = document.querySelector(selector);
                element.addEventListener(eventName, function () {
                    console.log(exec());
                    exec();
                });
            };
            //@ts-ignore
            Spare.create = function (tagName) {
                var Element = new Ele();
                return Element.create(tagName);
            };
            //@ts-ignore
            Spare.sel = function (selector) {
                var element = new Ele();
                return element.sel(selector);
            };
            return Spare;
        }
        if (typeof Spare === "undefined") {
            window.Spare = defineSpare();
        }
        // defineTouch()
    })(window); //hello
}
;
var Ele = /** @class */ (function () {
    function Ele() {
        var _this = this;
        this.attr = function (attr, value) {
            _this.element.setAttribute(attr, value);
            return _this.methodList();
        };
        this.Class = function () {
            var _a;
            var className = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                className[_i] = arguments[_i];
            }
            (_a = _this.element.classList).add.apply(_a, className);
            return _this.methodList();
        };
        this.html = function (html) {
            _this.element.innerHTML = "" + html;
            return _this.methodList();
        };
        this.append = function () {
            var _a;
            var children = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                children[_i] = arguments[_i];
            }
            (_a = _this.element).append.apply(_a, children);
            return _this.methodList();
        };
    }
    Object.defineProperty(Ele.prototype, "element", {
        get: function () {
            return this._element;
        },
        set: function (value) {
            this._element = value;
        },
        enumerable: true,
        configurable: true
    });
    Ele.prototype.methodList = function () {
        var methods = this._methods =
            { Class: this.Class,
                attr: this.attr,
                html: this.html,
                element: this.element,
                append: this.append
            };
        return __assign({}, methods);
    };
    Ele.prototype.create = function (tagName) {
        this.element = document.createElement(tagName);
        return this.methodList();
    };
    Ele.prototype.sel = function (selector) {
        this.element = document.querySelector(selector);
        return this.methodList();
    };
    // prototype
    Ele.copy = function () {
        return new Ele();
    };
    return Ele;
}());

export default spare