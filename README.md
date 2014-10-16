Clearcode trimValue filter
=========

Trims value to max value when it's exceeding it. 100 is the default value.

Installation
--------------
``` bower install clearcodeangularjs/cc-trimvalue-filter --save ``` 


Usage
------

Add ``` cc.trimvalue.filter ``` module to your app module list :


```
angular
    .module('yourAwesomeApp', [
        'cc.trimvalue.filter'
    ]);
```
and you are ready to go!

Filters :

*trimValue*
```
trimValue(input, maxSize); // trimValue(100) -> '99+'

\\ OR in html

trimValue:maxSize

```



Author
------

Roman Sek


License
----

LGPL

