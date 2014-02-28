// Modal module.
// On-the-fly compiles templates, then displays them as modals. Also uses TinyPubSub and Colorbox for jQuery.
var modal = (function ($, hndl) {
    "use strict";

    // Templates and their locations.
    var tmpls = { sample: "tmpl/sample.html" };

    // Create and display a modal.
    // TYPE: "sample".
    // CONTEXT: [{}]/{} representing data to display in modal.
    function create(type, context) {
        render(tmpls[type], context).then(function (html) { $.colorbox({ html: html, closeButton: false, scrolling: false }); });
    }

    // Async helper to get, render, and return HTML.
    // URI: Location of HTML template.
    // CONTEXT: [{}]/{} representing data to insert into template.
    function render(uri, context) {
        var deferred = new $.Deferred();
        $.ajax({ url: uri }).then(function (tmpl) { deferred.resolve(hndl.compile(tmpl)(context)); });
        return deferred.promise();
    }

    // Module methods.
    return { create: create };
})(jQuery, Handlebars);