define(["jquery"], function($) {
    var storage = window.localStorage;
    strogeObj = {
        set: function(key, val) {
            storage.setItem(key, JSON.stringify(val))
        },
        get: function(key, val) {
            var val = storage.getItem(key)
            return JSON.parse(val)
        }
    }
    return strogeObj
});