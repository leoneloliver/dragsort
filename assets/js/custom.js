/*!
 * IE10 viewport hack for surface/desktop Windows 8 bug (Windows 8 Phone versions older than Update 3 - a.k.a. GDR3)
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap-3.3.5/blob/master/LICENSE)
 */
(function () {
    'use strict';
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
          document.createTextNode(
            '@-ms-viewport{width:auto!important}'
          )
        )
        document.querySelector('head').appendChild(msViewportStyle)
    }
    
    

    //end of script
    console.log('custom.js is initiated');
})();
