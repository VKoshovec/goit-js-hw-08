!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var r={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,v=d||s||Function("return this")(),m=Object.prototype.toString,b=Math.max,g=Math.min,p=function(){return v.Date.now()};function y(e,t,n){var r,o,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function y(e){return c=e,f=setTimeout(w,t),d?m(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function w(){var e=p();if(S(e))return h(e);f=setTimeout(w,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?m(e):(r=o=void 0,u)}function T(){var e=p(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return y(l);if(s)return f=setTimeout(w,t),m(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=O(t)||0,j(n)&&(d=!!n.leading,a=(s="maxWait"in n)?b(O(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?u:h(p())},T}function j(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=f.test(t);return r||l.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}r=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var S=document.querySelector(".feedback-form"),w=S.elements,h=w.email,T=w.message;function N(){if(null===localStorage.getItem("feedback-form-state"))return{email:"",message:""};var e=localStorage.getItem("feedback-form-state");return JSON.parse(e)}h.value=N().email,T.value=N().message,S.addEventListener("submit",(function(e){e.preventDefault();var t=localStorage.getItem("feedback-form-state");console.log(JSON.parse(t)),h.value="",T.value="",localStorage.removeItem("feedback-form-state")})),S.addEventListener("input",r((function(){var t,r=(t={},e(n)(t,h.name,h.value),e(n)(t,T.name,T.value),t);localStorage.setItem("feedback-form-state",JSON.stringify(r))}),500))}();
//# sourceMappingURL=03-feedback.c24b41cb.js.map