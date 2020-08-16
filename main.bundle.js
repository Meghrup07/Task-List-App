webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid{\n    background-color: #f2f2f2;\n    min-height: 600px;;\n\n\n}\n#ttcTitle{\n   \n    color:rgb(51, 102, 153);\n   \n    \n}\n\n#title{\n    text-align: center;\n    background-color:whitesmoke;\n    color:  rgb(38, 77, 115);\n    border-radius: 5px;\n    font-family: 'Philosopher', sans-serif;\n\n}\n#inputTask{\n    height: 50px;\n}\n\n#task{\n      background-color:white;\n      margin-top: 10px;\n      padding: 20px;\n      min-height: 500px;\n\n}\n.dateTime{\n    color: gray;\n    \n    padding: 3px;\n}\n.ctrlButtons{\n    float: right;\n}\n#errMessage{\n    background-color: rgb(255, 204, 128);\n    display: block;\n    border-radius: 5px;\n    height: 30px;\n    margin: 10px;\n    font-family: 'Domine', serif;\n    padding: 5px;\n}\n#errButton{\n    float: right;\n}\nli{\n    min-height: 50px;\n    font-family: 'Pontano Sans', sans-serif;\n    \n}\n.taskToComplete{\n    background-color: rgb(235, 250, 250);\n\n}\n.completedTask{\n   background-color: rgb(153, 221, 255);\n}\n\nfont-family: 'Acme', sans-serif;\nfont-family: 'Pontano Sans', sans-serif;\nfont-family: 'Philosopher', sans-serif;\nfont-family: 'Cookie', cursive;\nfont-family: 'Domine', serif;", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3\" id=\"task\">\n              <h1 id=\"title\">{{title}}</h1>\n\n            <div class=\"input-group\" >\n                <input id=\"inputTask\" #spy name=\"task\" placeHolder=\"Add new task...\" (keyup.enter)=\"addTask(taskText)\" [(ngModel)]=\"taskText\" class=\"form-control\" required/>\n                  \n                <span class=\"input-group-addon\">\n                 <button (click)=\"addTask(taskText)\"  class=\"btn btn-md  btn-primary\" > <span  class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\" alt=\"Add\"></span></button>\n                  <button (click)=\"reset()\" class=\"btn btn-md btn-primary\">clear</button>\n                 \n                </span>\n            </div>\n            \n            <div *ngIf=\"errMsg\">\n                   <p id=\"errMessage\"><strong>oh Sorry ! </strong>{{errMsg}}\n                      <span id=\"errButton\">\n                           <button class=\"btn btn-default btn-xs\" (click)=\"dismiss()\" >Dismiss</button>\n                           <button class=\"btn btn-info btn-xs\" (click)=\"addAnyWay(taskText)\" >Add anyway</button>\n                      </span>\n                   </p>\n                   \n            </div>\n           \n             \n              <div *ngIf=\"Tasks\">\n                 <h4  id=\"ttcTitle\" >Task-to-do  <span class=\"badge \"  style=\"background-color:rgb(51, 102, 153)\">{{totalTaskToComplete}}</span></h4><hr />\n                     <ul class=\"list-group\">\n                        \n                         <li  *ngFor=\"let task of Tasks\" class=\"list-group-item taskToComplete\"> \n                             <span class=\"dateTime\">{{task.timeStamp |date}} {{task.timeStamp| date:'jm'}}</span> \n                           \n                            <span class=\"list-group-addon ctrlButtons \" >\n                                <button (click)=\"markAsComplete(task)\" class=\"btn btn-xs btn-success\">completed</button>\n                                <button (click)=\"editTask(task)\" class=\"btn btn-xs btn-primary\"><span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span></button>\n                                <button (click)=\"deleteTask(task)\" class=\"btn btn-xs btn-danger\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button>\n                            </span><br />\n                            {{task.name}}\n                         </li>  \n                     </ul>\n              </div>  \n              \n             \n\n\n             \n\n              <div *ngIf=\"dTask\">\n                <h4 style=\"color:rgb(0, 153, 153)\">Completed-task  <span class=\"badge\"  style=\"background-color:rgb(0, 153, 153)\">{{completedTask}}</span></h4><hr/>\n                <ul class=\"list-group\">\n                  <li  *ngFor=\"let task of dTask\" class=\"list-group-item colmpletedTask\"> \n                     <span class=\"dateTime\">Completed on:{{task.timeStamp |date}} {{task.timeStamp| date:'jm'}}</span>\n                   \n                     <span class=\"list-group-addon\" style=\"float:right\">\n                       <button (click)=\"deleteDTask(task)\" class=\"btn btn-xs btn-danger\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button>\n                     </span><br />\n                      {{task.name}}\n                   \n                  </li>\n                </ul>\n              </div>\n                \n      </div>       \n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task__ = __webpack_require__("../../../../../src/app/task.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = "Task list";
        this.flag = 1;
        this.toDoTaskCount = 0;
        this.completedTaskCount = 0;
        this.Tasks = [];
        this.dTask = [];
        this.taskText = "";
    }
    AppComponent.prototype.addTask = function (msg) {
        if (msg.length == 0) {
            this.errMsg = "Task is not clear";
        }
        else if (this.duplicateTask(msg) && this.flag) {
            this.errMsg = "Task is already in the list";
        }
        else {
            this.today = Date.now();
            this.Tasks.push(new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */](msg, this.toDoTaskCount, this.today));
            this.errMsg = "";
            this.taskText = "";
            this.totalTaskToComplete = this.Tasks.length;
            this.toDoTaskCount += 1;
        }
    };
    AppComponent.prototype.duplicateTask = function (msg) {
        for (var i = 0; i < this.Tasks.length; i++) {
            if (msg == this.Tasks[i].name) {
                return 1;
            }
        }
        return 0;
    };
    AppComponent.prototype.markAsComplete = function (task) {
        this.addDTask(task);
        this.deleteTask(task);
    };
    AppComponent.prototype.editTask = function (task) {
        this.taskText = task.name;
        this.deleteTask(task);
        this.totalTaskToComplete = this.Tasks.length;
    };
    AppComponent.prototype.deleteTask = function (task) {
        this.Tasks = this.Tasks.filter(function (Tasks) { return Tasks.id !== task.id; });
        this.totalTaskToComplete = this.Tasks.length;
    };
    AppComponent.prototype.reset = function () {
        this.taskText = "";
    };
    AppComponent.prototype.dismiss = function () {
        this.errMsg = "";
        this.taskText = "";
    };
    AppComponent.prototype.addAnyWay = function (msg) {
        if (msg.length == 0) {
            msg = "Nothing to do";
        }
        this.flag = 0;
        this.addTask(msg);
        this.taskText = "";
    };
    AppComponent.prototype.addDTask = function (task) {
        this.dTask.push(new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */](task.name, this.completedTaskCount, Date.now()));
        this.msg = task.name;
        this.completedTask = this.dTask.length;
        this.completedTaskCount += 1;
    };
    AppComponent.prototype.deleteDTask = function (task) {
        this.dTask = this.dTask.filter(function (dTask) { return dTask.id !== task.id; });
        this.completedTask = this.dTask.length;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.addTask("Buy daily items from new-market");
        this.addTask("Call Meghshyam At 6:30 PM");
        this.addDTask(new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */]("this is completed task", this.completedTaskCount, Date.now()));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: "app-root",
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/task.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task(nameN, idN, timeN) {
        this.name = nameN;
        this.id = idN;
        this.timeStamp = timeN;
    }
    return Task;
}());

//# sourceMappingURL=task.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map