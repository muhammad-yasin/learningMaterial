/* Rafal Wesolowski 2014 */
var MyModule = (function() {

    function sayHi (name) {
        return "Hi, " + name + "!";
    }

    return {
        sayHi: sayHi
    };
}());
