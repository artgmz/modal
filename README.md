# Modal

## Description:
This module is used to create a modal with asynch-loaded content in a template ("tmpl") directory.

## Dependencies:
* jQuery 2.0.3+
* Handlebars 1.3.0
* TinyPubSub for jQuery 0.7.0
* Colorbox for jQuery 1.4.31

## Notes:
* Templates must be created for use with either Mustache or Handlebars.
* You must modify the "tmpls" object within the module. It is a POJO that should contain a unique name for your template as the key and its relative location as the value. This information will be used to fetch your template using AJAX.

## Sample Usage:
```
modal.create("sample", { data: "xyz", data2: 123 });
```