(function(){var t,e;e=function(t){function e(e,s){var n,c=t.createElement(e);for(n in s)s.hasOwnProperty(n)&&c.setAttribute(n,s[n]);return c}function s(t){var e,s,n=u[t];n&&(e=n.callback,s=n.urls,s.shift(),l=0,s.length||(e&&e.call(n.context,n.obj),u[t]=null,f[t].length&&c(t)))}function n(){var e=navigator.userAgent;o={async:t.createElement("script").async===!0},(o.webkit=/AppleWebKit\//.test(e))||(o.ie=/MSIE/.test(e))||(o.opera=/Opera/.test(e))||(o.gecko=/Gecko\//.test(e))||(o.unknown=!0)}function c(c,l,h,g,p){var m,k,y,b,d=function(){s(c)},j="css"===c,v=[];if(o||n(),l)if(l="string"==typeof l?[l]:l.concat(),j||o.async||o.gecko||o.opera)f[c].push({urls:l,callback:h,obj:g,context:p});else for(m=0,k=l.length;k>m;++m)f[c].push({urls:[l[m]],callback:m===k-1?h:null,obj:g,context:p});if(!u[c]&&(b=u[c]=f[c].shift())){for(i||(i=t.head||t.getElementsByTagName("head")[0]),l=b.urls,m=0,k=l.length;k>m;++m)h=l[m],j?y=o.gecko?e("style"):e("link",{href:h,rel:"stylesheet"}):(y=e("script",{src:h}),y.async=!1),y.className="lazyload",y.setAttribute("charset","utf-8"),o.ie&&!j?y.onreadystatechange=function(){/loaded|complete/.test(y.readyState)&&(y.onreadystatechange=null,d())}:j&&(o.gecko||o.webkit)?o.webkit?(b.urls[m]=y.href,a()):(y.innerHTML='@import "'+h+'";',r(y)):y.onload=y.onerror=d,v.push(y);for(m=0,k=v.length;k>m;++m)i.appendChild(v[m])}}function r(t){var e;try{e=!!t.sheet.cssRules}catch(n){return l+=1,200>l?setTimeout(function(){r(t)},50):e&&s("css"),void 0}s("css")}function a(){var t,e=u.css;if(e){for(t=h.length;--t>=0;)if(h[t].href===e.urls[0]){s("css");break}l+=1,e&&(200>l?setTimeout(a,50):s("css"))}}var o,i,u={},l=0,f={css:[],js:[]},h=t.styleSheets;return{css:function(t,e,s,n){c("css",t,e,s,n)},js:function(t,e,s,n){c("js",t,e,s,n)}}}(this.document),e.css("http://interactive.guim.co.uk/2013/mar/budget/v/22/min.css"),t=["http://pasteup.guim.co.uk/js/lib/jquery/1.8.1/jquery.min.js"],e.js(t,function(){e.js("http://interactive.guim.co.uk/2013/mar/budget/v/22/js/main.js")})})();