(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{336:function(t,r,e){"use strict";e(9),e(23),e(33),e(15),e(19),e(20),e(59),e(45),e(3),e(60),e(66),e(52);function n(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var C,l=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return l=t.done,t},e:function(t){c=!0,C=t},f:function(){try{l||null==e.return||e.return()}finally{if(c)throw C}}}}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,e=new Array(r);i<r;i++)e[i]=t[i];return e}var C={name:"wv-sharer",props:["light","center","hideLabel","label","allowCopyLink","outline","url"],data:function(){return{encodedURL:""}},mounted:function(){this.encodedURL=encodeURI(this.url||window.location.href)},methods:{copyToClipboard:function(t){return window.navigator.clipboard.writeText(t)},_classStringToObject:function(t){var r={};if("string"!=typeof t)return r;var e,o=n(t.trim().split(/\s+/));try{for(o.s();!(e=o.n()).done;){r[e.value]=!0}}catch(t){o.e(t)}finally{o.f()}return r}}},l=e(65),component=Object(l.a)(C,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{class:t._classStringToObject("wv_sharer "+(this.light?"wv_sharer--light":"wv_sharer--dark")+" "+(this.center?"wv_sharer--center":""))},[t.hideLabel?t._e():e("span",{staticClass:"wv-b5"},[t._v(t._s(t.label||"Share"))]),t._v(" "),t.allowCopyLink?e("div",{staticClass:"wv_sharer__share-link",on:{click:function(r){return t.copyToClipboard(t.encodedURL)}}},[e("svg",{attrs:{viewBox:"0 0 28 28"}},[e("path",{staticClass:"outline",attrs:{d:"M27.5 14C27.5 21.4564 21.4564 27.5 14 27.5C6.54358 27.5 0.5 21.4564 0.5 14C0.5 6.54358 6.54358 0.5 14 0.5C21.4564 0.5 27.5 6.54358 27.5 14Z"}}),t._v(" "),e("path",{attrs:{d:"M9.9751 16.5375C11.1832 16.5375 12.1626 15.5581 12.1626 14.35C12.1626 13.1419 11.1832 12.1625 9.9751 12.1625C8.76697 12.1625 7.7876 13.1419 7.7876 14.35C7.7876 15.5581 8.76697 16.5375 9.9751 16.5375Z"}}),t._v(" "),e("path",{attrs:{d:"M17.6313 21.4594C18.8395 21.4594 19.8188 20.48 19.8188 19.2719C19.8188 18.0638 18.8395 17.0844 17.6313 17.0844C16.4232 17.0844 15.4438 18.0638 15.4438 19.2719C15.4438 20.48 16.4232 21.4594 17.6313 21.4594Z"}}),t._v(" "),e("path",{attrs:{d:"M17.6313 11.6156C18.8395 11.6156 19.8188 10.6362 19.8188 9.42812C19.8188 8.22 18.8395 7.24062 17.6313 7.24062C16.4232 7.24062 15.4438 8.22 15.4438 9.42812C15.4438 10.6362 16.4232 11.6156 17.6313 11.6156Z"}}),t._v(" "),e("path",{attrs:{d:"M15.7915 10.6109L11.8149 13.1673"}}),t._v(" "),e("path",{attrs:{d:"M11.8149 15.5327L15.7915 18.0891"}})])]):t._e(),t._v(" "),e("a",{attrs:{target:"_blank",rel:"noreferrer noopener",href:"http://www.facebook.com/sharer/sharer.php?u="+t.encodedURL}},[t.outline?e("svg",{attrs:{viewBox:"0 0 28 28"}},[e("path",{staticClass:"outline",attrs:{d:"M27.5 14C27.5 21.4564 21.4564 27.5 14 27.5C6.54358 27.5 0.5 21.4564 0.5 14C0.5 6.54358 6.54358 0.5 14 0.5C21.4564 0.5 27.5 6.54358 27.5 14Z"}}),t._v(" "),e("path",{attrs:{d:"M11.8096 18.2251C11.8096 16.9154 11.8022 15.6057 11.817 14.2959C11.817 14.074 11.7578 14.0074 11.5358 14.0148C11.1289 14.0296 10.7219 14.0148 10.3075 14.0222C10.1447 14.0296 10.0781 13.9778 10.0855 13.8076C10.0929 12.9936 10.0929 12.1723 10.0855 11.3583C10.0855 11.2029 10.1299 11.1511 10.2927 11.1511C10.7071 11.1585 11.1289 11.1363 11.5432 11.1585C11.7874 11.1733 11.8318 11.0845 11.8318 10.8625C11.817 10.241 11.817 9.61941 11.8318 8.99785C11.8466 8.23569 12.0538 7.52533 12.5052 6.91117C13.0749 6.12681 13.8889 5.77163 14.8286 5.72724C15.7906 5.68284 16.7599 5.70504 17.7293 5.69764C17.8625 5.69764 17.9069 5.74204 17.9069 5.87523C17.8995 6.70398 17.8995 7.53273 17.9069 8.35409C17.9069 8.50208 17.8625 8.54648 17.7145 8.54648C17.2483 8.53908 16.7821 8.53908 16.3234 8.54648C15.7018 8.54648 15.3318 8.86466 15.2948 9.47882C15.2652 9.9672 15.2874 10.463 15.2726 10.9587C15.2652 11.1363 15.3762 11.1215 15.4872 11.1215C16.1902 11.1215 16.9005 11.1289 17.6035 11.1141C17.8107 11.1141 17.8773 11.1585 17.8551 11.3731C17.7663 12.1945 17.6923 13.0158 17.6183 13.8446C17.6035 14.0296 17.5147 14.0666 17.3519 14.0666C16.7969 14.0592 16.2346 14.0592 15.6796 14.0666C15.28 14.0666 15.317 14.0074 15.317 14.4143C15.317 16.982 15.3096 19.5422 15.3244 22.1099C15.3244 22.3837 15.2578 22.4503 14.9914 22.4429C14.0369 22.4281 13.0749 22.4281 12.1204 22.4429C11.854 22.4503 11.8096 22.3541 11.8096 22.1173C11.8096 20.8076 11.8096 19.5201 11.8096 18.2251Z"}})]):t._e(),t._v(" "),t.outline?t._e():e("svg",{attrs:{viewBox:"0 0 30 30"}},[e("path",{attrs:{d:"M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM18.975 9.15C18.45 9.15 18 9.15 17.475 9.15C16.8 9.15 16.425 9.525 16.35 10.125C16.35 10.65 16.35 11.175 16.35 11.7C16.35 11.925 16.425 11.85 16.575 11.85C17.325 11.85 18.075 11.85 18.825 11.85C19.05 11.85 19.125 11.925 19.125 12.15C19.05 13.05 18.975 13.875 18.9 14.775C18.9 15 18.825 15 18.6 15C18 15 17.4 15 16.8 15C16.35 15 16.425 14.925 16.425 15.375C16.425 18.15 16.425 20.85 16.425 23.625C16.425 23.925 16.35 24 16.05 24C15 24 14.025 24 12.975 24C12.675 24 12.675 23.925 12.675 23.625C12.675 22.275 12.675 20.85 12.675 19.5C12.675 18.075 12.675 16.725 12.675 15.3C12.675 15.075 12.6 15 12.375 15C11.925 15 11.475 15 11.025 15C10.875 15 10.8 14.925 10.8 14.775C10.8 13.875 10.8 13.05 10.8 12.15C10.8 12 10.875 11.925 11.025 11.925C11.475 11.925 11.925 11.925 12.375 11.925C12.6 11.925 12.675 11.85 12.675 11.625C12.675 10.95 12.675 10.275 12.675 9.6C12.675 8.775 12.9 8.025 13.425 7.35C14.025 6.525 14.925 6.15 15.9 6.075C16.95 6 18 6.075 18.975 6.075C19.125 6.075 19.125 6.15 19.125 6.3C19.125 7.2 19.125 8.1 19.125 8.925C19.2 9.075 19.125 9.15 18.975 9.15Z"}})])]),t._v(" "),e("a",{attrs:{target:"_blank",rel:"noreferrer noopener",href:"https://twitter.com/intent/tweet?url="+t.encodedURL}},[t.outline?e("svg",{attrs:{viewBox:"0 0 28 28"}},[e("path",{staticClass:"outline",attrs:{d:"M27.5 14C27.5 21.4564 21.4564 27.5 14 27.5C6.54358 27.5 0.5 21.4564 0.5 14C0.5 6.54358 6.54358 0.5 14 0.5C21.4564 0.5 27.5 6.54358 27.5 14Z"}}),t._v(" "),e("path",{attrs:{d:"M11.2001 17.0552C10.2628 17.0401 9.44037 16.5796 8.94642 15.8937C9.2129 15.8792 9.47567 15.8385 9.72249 15.7755L9.69207 14.7998C8.65313 14.6027 7.83639 13.8572 7.55634 12.9031C7.83749 12.9772 8.13206 13.0218 8.43395 13.0304L10.2318 13.0822L8.71859 12.11C7.95913 11.6221 7.47591 10.7987 7.47591 9.87883C7.47591 9.63889 7.51049 9.4057 7.5748 9.18223C9.27121 10.8887 11.6079 11.9824 14.2094 12.1074L14.8714 12.1392L14.7202 11.4939C14.6712 11.2849 14.6449 11.0831 14.6449 10.8791C14.6449 9.41934 15.8767 8.2 17.4437 8.2C18.2545 8.2 18.9792 8.53045 19.4911 9.05665L19.6796 9.25048L19.9451 9.19877C20.1542 9.15803 20.3601 9.10894 20.5623 9.05175C20.464 9.12724 20.36 9.19682 20.2509 9.25989L20.5589 10.1894C20.6502 10.1788 20.7411 10.1666 20.8314 10.1527C20.7126 10.2498 20.5901 10.3425 20.4643 10.4304L20.2354 10.5903L20.2515 10.8691C20.2585 10.992 20.2587 11.1097 20.2587 11.2513C20.2587 15.2208 17.1264 19.8 11.369 19.8C10.3221 19.8 9.32078 19.6253 8.38835 19.306C9.54627 19.1008 10.6056 18.6263 11.4938 17.9538L12.6496 17.0786L11.2001 17.0552Z"}})]):t._e(),t._v(" "),t.outline?t._e():e("svg",{attrs:{viewBox:"0 0 30 30"}},[e("path",{attrs:{d:"M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM22.2 11.325C22.2 11.475 22.2 11.625 22.2 11.775C22.2 16.65 18.45 22.35 11.625 22.35C9.525 22.35 7.575 21.75 5.925 20.7C6.225 20.7 6.525 20.775 6.825 20.775C8.55 20.775 10.125 20.175 11.4 19.2C9.75 19.2 8.4 18.075 7.95 16.65C8.175 16.725 8.4 16.725 8.625 16.725C9 16.725 9.3 16.65 9.6 16.575C7.875 16.2 6.6 14.7 6.6 12.975C6.6 12.975 6.6 12.975 6.6 12.9C7.125 13.2 7.65 13.35 8.25 13.35C7.35 12.6 6.75 11.475 6.75 10.2C6.75 9.525 6.9 8.85 7.275 8.325C9.075 10.575 11.85 12.075 14.925 12.225C14.85 11.925 14.85 11.7 14.85 11.4C14.85 9.375 16.5 7.725 18.525 7.725C19.575 7.725 20.55 8.175 21.225 8.925C22.05 8.775 22.875 8.475 23.55 8.025C23.25 8.925 22.65 9.6 21.9 10.05C22.65 9.975 23.4 9.75 24 9.45C23.55 10.125 22.875 10.8 22.2 11.325Z"}})])]),t._v(" "),e("a",{attrs:{target:"_blank",rel:"noreferrer noopener",href:"https://social-plugins.line.me/lineit/share?url="+t.encodedURL}},[t.outline?e("svg",{attrs:{viewBox:"0 0 28 28"}},[e("path",{staticClass:"outline",attrs:{d:"M27.5 14C27.5 21.4564 21.4564 27.5 14 27.5C6.54358 27.5 0.5 21.4564 0.5 14C0.5 6.54358 6.54358 0.5 14 0.5C21.4564 0.5 27.5 6.54358 27.5 14Z"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.4949 16.8789C19.4835 18.1348 15.0479 21.1492 14.01 21.764C13.5869 22.0152 13.0515 21.7111 13.0515 21.2153V19.6817C10.5726 19.5825 6.13696 17.3879 6.13696 13.1175C6.13696 8.66867 10.5858 6.50705 13.9836 6.50705C17.659 6.50705 21.8434 8.94631 21.8434 13.0778C21.85 14.2413 21.5129 15.6163 20.4949 16.8789ZM12.0731 11.0218C11.8682 11.0218 11.7029 11.1989 11.7029 11.4184V14.464C11.7029 14.6835 11.8682 14.8606 12.0731 14.8606C12.278 14.8606 12.4433 14.6835 12.4433 14.464V11.4184C12.4433 11.1989 12.278 11.0218 12.0731 11.0218ZM15.0544 11.4184C15.0544 11.1989 15.2196 11.0218 15.4246 11.0218C15.6295 11.0218 15.7947 11.1989 15.7881 11.4184V14.464C15.7881 14.634 15.6824 14.7827 15.5303 14.8394C15.4973 14.8535 15.4576 14.8606 15.418 14.8606C15.3056 14.8606 15.1932 14.8039 15.1205 14.6977L13.7852 12.7287V14.464C13.7852 14.6835 13.6199 14.8606 13.415 14.8606C13.2101 14.8606 13.0448 14.6835 13.0448 14.464V11.5034C13.0448 11.3335 13.1506 11.1847 13.3026 11.1281C13.4546 11.0714 13.6265 11.1281 13.7191 11.2697L15.0544 13.2387V11.4184ZM11.0351 14.0744H10.0502V11.4255C10.0502 11.2059 9.88492 11.0289 9.68 11.0289C9.47508 11.0289 9.30981 11.2059 9.30981 11.4255V14.471C9.30981 14.6906 9.47508 14.8677 9.68 14.8677H11.0351C11.2401 14.8677 11.4053 14.6906 11.4053 14.471C11.4053 14.2515 11.2335 14.0744 11.0351 14.0744ZM17.0307 14.0036H18.4982C18.7031 14.0036 18.8684 14.1807 18.8684 14.4003C18.8684 14.6198 18.7031 14.7969 18.4982 14.7969H16.6605C16.4556 14.7969 16.2903 14.6198 16.2903 14.4003V12.8775V11.3547C16.2903 11.1352 16.4556 10.9581 16.6605 10.9581H18.4387C18.6437 10.9581 18.8089 11.1352 18.8089 11.3547C18.8089 11.5743 18.6437 11.7514 18.4387 11.7514H17.0307V12.4809H18.1743C18.3792 12.4809 18.5445 12.6579 18.5445 12.8775C18.5445 13.0971 18.3792 13.2741 18.1743 13.2741H17.0307V14.0036Z"}})]):t._e(),t._v(" "),t.outline?t._e():e("svg",{attrs:{viewBox:"0 0 30 30"}},[e("path",{attrs:{d:"M12.75 11.4751C12.525 11.4751 12.3 11.7001 12.3 11.9251V15.3001C12.3 15.5251 12.525 15.7501 12.75 15.7501C12.975 15.7501 13.2 15.5251 13.2 15.3001V11.9251C13.2 11.7001 12.975 11.4751 12.75 11.4751Z"}}),t._v(" "),e("path",{attrs:{d:"M16.725 11.4751C16.5 11.4751 16.275 11.7001 16.275 11.9251V13.9501L14.7 11.7751C14.625 11.6251 14.4 11.5501 14.175 11.6251C14.025 11.7001 13.875 11.8501 13.875 12.0751V15.3751C13.875 15.6001 14.1 15.8251 14.325 15.8251C14.55 15.8251 14.775 15.6001 14.775 15.3751V13.4251L16.35 15.6001C16.425 15.7501 16.575 15.7501 16.725 15.7501C16.8 15.7501 16.8 15.7501 16.875 15.7501C17.025 15.6751 17.175 15.5251 17.175 15.3001V11.9251C17.1 11.7001 16.95 11.4751 16.725 11.4751Z"}}),t._v(" "),e("path",{attrs:{d:"M11.475 14.8501H10.275V11.9251C10.275 11.7001 10.05 11.4751 9.825 11.4751C9.6 11.4751 9.375 11.7001 9.375 11.9251V15.3001C9.375 15.5251 9.6 15.7501 9.825 15.7501H11.4C11.625 15.7501 11.85 15.5251 11.85 15.3001C11.85 15.0751 11.775 14.8501 11.475 14.8501Z"}}),t._v(" "),e("path",{attrs:{d:"M20.325 14.775H18.6V13.95H19.95C20.175 13.95 20.4 13.725 20.4 13.5C20.4 13.275 20.175 13.05 19.95 13.05H18.6V12.225H20.25C20.475 12.225 20.7 12 20.7 11.775C20.7 11.55 20.475 11.325 20.25 11.325H18.15C17.925 11.325 17.7 11.55 17.7 11.775V13.425V15.075C17.7 15.3 17.925 15.525 18.15 15.525H20.325C20.55 15.525 20.775 15.3 20.775 15.075C20.775 14.85 20.55 14.775 20.325 14.775Z"}}),t._v(" "),e("path",{attrs:{d:"M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM22.725 18.225C21.525 19.725 16.275 23.25 15.075 24C14.55 24.3 13.95 23.925 13.95 23.325V21.525C11.025 21.375 5.775 18.825 5.775 13.725C5.775 8.475 11.025 5.925 15.075 5.925C19.425 5.925 24.375 8.775 24.375 13.725C24.3 15.075 23.925 16.725 22.725 18.225Z"}})])])])}),[],!1,null,null,null);r.a=component.exports},337:function(t,r,e){"use strict";e(9),e(23),e(33),e(15),e(19),e(20),e(59),e(45),e(3),e(60),e(66),e(52);function n(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var C,l=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return l=t.done,t},e:function(t){c=!0,C=t},f:function(){try{l||null==e.return||e.return()}finally{if(c)throw C}}}}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,e=new Array(r);i<r;i++)e[i]=t[i];return e}var C={name:"wv-button-group",props:["center"],methods:{_classStringToObject:function(t){var r={};if("string"!=typeof t)return r;var e,o=n(t.trim().split(/\s+/));try{for(o.s();!(e=o.n()).done;){r[e.value]=!0}}catch(t){o.e(t)}finally{o.f()}return r}}},l=e(65),component=Object(l.a)(C,(function(){var t=this,r=t.$createElement;return(t._self._c||r)("div",{class:t._classStringToObject("wv_button-group "+(this.center?"wv_button-group--center":""))},[t._t("default")],2)}),[],!1,null,null,null);r.a=component.exports},338:function(t,r,e){"use strict";e(9),e(23),e(33),e(15),e(19),e(20),e(59),e(45),e(3),e(60),e(66),e(52);function n(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var C,l=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return l=t.done,t},e:function(t){c=!0,C=t},f:function(){try{l||null==e.return||e.return()}finally{if(c)throw C}}}}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,e=new Array(r);i<r;i++)e[i]=t[i];return e}var C={name:"wv-button",props:["color","small","onClick"],methods:{_classStringToObject:function(t){var r={};if("string"!=typeof t)return r;var e,o=n(t.trim().split(/\s+/));try{for(o.s();!(e=o.n()).done;){r[e.value]=!0}}catch(t){o.e(t)}finally{o.f()}return r}}},l=e(65),component=Object(l.a)(C,(function(){var t=this,r=t.$createElement;return(t._self._c||r)("button",{class:t._classStringToObject("wv_button wv-font-anuphan wv_button--"+(this.color||"blue")+" "+(this.small?"wv-b5 wv_button--small":"wv-b4")),on:{click:function(r){t.onClick&&t.onClick()}}},[t._t("default")],2)}),[],!1,null,null,null);r.a=component.exports},398:function(t,r,e){"use strict";e(9),e(23),e(33),e(15),e(19),e(20),e(59),e(45),e(3),e(60),e(66),e(52);function n(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var C,l=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return l=t.done,t},e:function(t){c=!0,C=t},f:function(){try{l||null==e.return||e.return()}finally{if(c)throw C}}}}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,e=new Array(r);i<r;i++)e[i]=t[i];return e}var C={name:"wv-navbar",props:["dark","homeHref","logoAddonSrc","title","alwayShowSlot"],data:function(){return{isMobileMenuOpened:!1}},methods:{_classStringToObject:function(t){var r={};if("string"!=typeof t)return r;var e,o=n(t.trim().split(/\s+/));try{for(o.s();!(e=o.n()).done;){r[e.value]=!0}}catch(t){o.e(t)}finally{o.f()}return r}}},l=e(65),component=Object(l.a)(C,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{class:t._classStringToObject("wv_navbar "+(this.dark?"wv_navbar--black":"wv_navbar--white"))},[e("div",{staticClass:"wv_navbar__logo"},[e("a",{staticClass:"wv_navbar__logo__wevis",attrs:{href:t.homeHref||"/"}},[e("svg",{attrs:{viewBox:"0 0 110 37"}},[e("path",{attrs:{d:"M79.0175 35.3009V31.1026L80.3913 30.7904C80.7035 30.7568 80.7707 30.6511 80.7707 30.3101V16.8795C80.7707 16.6057 80.7035 16.5 80.3913 16.3991L79.0175 16.0581V11.8839H89.4843V16.0869L88.1057 16.4328C87.7982 16.5336 87.7262 16.6393 87.7262 16.9131V30.3293C87.7262 30.6367 87.7982 30.7087 88.072 30.8096L89.4843 31.1891V35.3201L79.0175 35.3009Z"}}),t._v(" "),e("path",{attrs:{d:"M59.962 35.3009L54.1257 16.8267C54.1054 16.7467 54.0615 16.6748 53.9999 16.62C53.9382 16.5652 53.8616 16.5301 53.7799 16.5192L51.9594 16.2118V11.9511H63.7375V16.2118L62.3637 16.6249C62.2309 16.6424 62.1089 16.7076 62.0205 16.8083C61.9321 16.9091 61.8834 17.0385 61.8834 17.1725C61.9069 17.5573 61.9762 17.9378 62.0899 18.3061L64.5973 28.1965H64.7655L67.2633 18.3205C67.3733 17.9513 67.4425 17.5712 67.4698 17.1869C67.4618 17.0499 67.406 16.92 67.3121 16.82C67.2182 16.7199 67.0921 16.656 66.9559 16.6393L65.6157 16.2262V11.9655H77.0864V16.1926L75.1987 16.5673C75.1134 16.5845 75.035 16.6265 74.9735 16.688C74.912 16.7495 74.87 16.8278 74.8528 16.9131L69.1895 35.3153L59.962 35.3009Z"}}),t._v(" "),e("path",{attrs:{d:"M91.8236 33.6148C91.8464 31.4846 91.9971 29.3576 92.2751 27.2454H97.9096L98.462 29.9306C99.1838 30.173 99.9391 30.301 100.7 30.31C102.007 30.31 102.867 29.724 102.867 28.7921C102.867 27.6249 101.387 27.1782 99.6293 26.6594C96.1179 25.593 91.9197 24.2144 91.9197 18.772C91.9197 13.3297 95.4983 11.5428 100.907 11.5428C104.351 11.5428 106.59 12.4362 108.996 13.5747C109.031 15.5893 108.905 17.6035 108.621 19.5982H102.982L102.708 17.2253C102.162 16.9957 101.576 16.878 100.984 16.8795C99.7109 16.8795 98.8847 17.1869 98.8847 18.186C98.8847 19.3581 100.47 20.0498 102.19 20.631C105.552 21.731 109.837 23.2489 109.837 28.2445C109.837 33.2402 106.666 35.6803 100.676 35.6803C97.6083 35.6612 94.5834 34.9555 91.8236 33.6148Z"}}),t._v(" "),e("path",{attrs:{d:"M13.7716 11.9511V16.2022L15.4576 16.6826C16.159 16.8699 16.1493 17.2302 15.7843 18.3205L12.5179 28.2205H12.2825L9.7607 18.3205C9.47729 17.2638 9.4821 16.8219 10.0873 16.6826L11.879 16.2022V11.9511H0V16.2022L1.9214 16.5769C2.10873 16.6249 2.15197 16.7162 2.2 16.9035L7.96419 35.3009H16.2502L19.1323 25.5258L22.0144 35.2865H30.3245L36.0886 16.8891C36.1107 16.8087 36.1533 16.7354 36.2122 16.6765C36.2712 16.6175 36.3445 16.5749 36.4249 16.5529L38.2838 16.1878V11.9367H26.4144V16.1878L28.2061 16.6681C28.8162 16.8074 28.8162 17.2494 28.5328 18.3061L26.0109 28.2061H25.7803L22.4948 18.3205C22.1345 17.2302 22.1201 16.8795 22.8214 16.6826L24.5074 16.2022V11.9511H13.7716Z"}}),t._v(" "),e("path",{attrs:{d:"M43.7167 24.7524H46.8245V23.8686C46.8245 22.9079 46.2769 22.3987 45.2874 22.3987C44.2979 22.3987 43.7167 22.9127 43.7167 23.8686V24.7524ZM37.0927 28.7825V24.2768C37.0927 20.1458 40.3014 17.4127 45.1529 17.4127C50.0044 17.4127 53.2084 20.1458 53.2084 24.2768V28.1196H43.7167V29.0419C43.7167 30.0314 44.8791 30.6799 46.1184 30.6799C47.3577 30.6799 48.5778 30.1323 48.7796 29.2821H53.1844V32.6445C51.4119 34.7293 48.7123 35.6515 45.9119 35.6515C40.6472 35.6467 37.0927 32.9135 37.0927 28.7825Z"}}),t._v(" "),e("path",{attrs:{d:"M84.4022 9.79911C86.4449 9.79911 88.1009 8.14315 88.1009 6.10042C88.1009 4.05769 86.4449 2.40173 84.4022 2.40173C82.3594 2.40173 80.7035 4.05769 80.7035 6.10042C80.7035 8.14315 82.3594 9.79911 84.4022 9.79911Z"}})]),t._v(" "),t.logoAddonSrc?e("img",{staticClass:"wv_navbar__logo__addon",attrs:{src:t.logoAddonSrc}}):t._e()])]),t._v(" "),t.title?e("div",{staticClass:"wv_navbar__title wv-font-kondolar wv-h9"},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),e("div",{class:t._classStringToObject("wv_navbar__menu wv_navbar__menu--desktop "+(this.alwayShowSlot?"wv_navbar__menu--always-show":"wv_navbar__menu--hide-mobile"))},[t._t("default")],2),t._v(" "),t.alwayShowSlot?t._e():e("button",{staticClass:"wv_navbar__hamburger-button",on:{click:function(r){t.isMobileMenuOpened=!t.isMobileMenuOpened}}},[t.isMobileMenuOpened?e("svg",{attrs:{width:"13",height:"14",viewBox:"0 0 13 14"}},[e("rect",{attrs:{x:"13",y:"2.38806",width:"15",height:"2",transform:"rotate(135 13 2.38806)"}}),t._v(" "),e("rect",{attrs:{x:"2.3934",y:"1.00525",width:"15",height:"2",transform:"rotate(45 2.3934 1.00525)"}})]):e("svg",{attrs:{width:"15",height:"12",viewBox:"0 0 15 12"}},[e("rect",{attrs:{width:"15",height:"2"}}),t._v(" "),e("rect",{attrs:{y:"5",width:"15",height:"2"}}),t._v(" "),e("rect",{attrs:{y:"10",width:"15",height:"2"}})])]),t._v(" "),t.isMobileMenuOpened?e("div",{staticClass:"wv_navbar__menu wv_navbar__menu--mobile",on:{click:function(r){t.isMobileMenuOpened=!1}}},[t._t("default")],2):t._e()])}),[],!1,null,null,null);r.a=component.exports},399:function(t,r,e){"use strict";e(9),e(23),e(33),e(15),e(19),e(20),e(59),e(45),e(3),e(60),e(66),e(52);function n(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var C,l=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return l=t.done,t},e:function(t){c=!0,C=t},f:function(){try{l||null==e.return||e.return()}finally{if(c)throw C}}}}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,e=new Array(r);i<r;i++)e[i]=t[i];return e}var C={name:"wv-nav-button",props:["dark","active","onClick"],methods:{_classStringToObject:function(t){var r={};if("string"!=typeof t)return r;var e,o=n(t.trim().split(/\s+/));try{for(o.s();!(e=o.n()).done;){r[e.value]=!0}}catch(t){o.e(t)}finally{o.f()}return r}}},l=e(65),component=Object(l.a)(C,(function(){var t=this,r=t.$createElement;return(t._self._c||r)("button",{class:t._classStringToObject("wv_nav-button wv-font-anuphan wv-b7 "+(this.dark?"wv_nav-button--white":"wv_nav-button--black")+" "+(this.active?"wv_nav-button--active":"")),on:{click:function(r){t.onClick&&t.onClick()}}},[t._t("default")],2)}),[],!1,null,null,null);r.a=component.exports},400:function(t,r,e){"use strict";e(9),e(23),e(33),e(15),e(19),e(20),e(59),e(45),e(3),e(60),e(66),e(52);function n(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var C,l=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return l=t.done,t},e:function(t){c=!0,C=t},f:function(){try{l||null==e.return||e.return()}finally{if(c)throw C}}}}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,e=new Array(r);i<r;i++)e[i]=t[i];return e}var C={name:"wv-footer",props:["dark"],methods:{_classStringToObject:function(t){var r={};if("string"!=typeof t)return r;var e,o=n(t.trim().split(/\s+/));try{for(o.s();!(e=o.n()).done;){r[e.value]=!0}}catch(t){o.e(t)}finally{o.f()}return r}}},l=e(65),component=Object(l.a)(C,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{class:t._classStringToObject("wv_footer "+(this.dark?"wv_footer--black":"wv_footer--white"))},[e("a",{staticClass:"wv_footer__logo",attrs:{target:"_blank",rel:"noreferrer noopener",href:"https://wevis.info"}},[e("svg",{attrs:{viewBox:"0 0 64 29"}},[e("path",{attrs:{d:"M49.3977 0.400024V5.56151L51.6001 6.12438C52.3466 6.29606 52.3495 6.82797 52.0019 8.10849L48.9019 20.1341H48.617L45.4828 10.7765L41.9668 21.9128L44.0211 28.7545H54.2385L61.3019 6.41144C61.3304 6.31474 61.3829 6.22656 61.4545 6.15484C61.5261 6.08312 61.6146 6.0301 61.7121 6.00055L63.9916 5.56151V0.400024H49.3977Z"}}),t._v(" "),e("path",{attrs:{d:"M16.9331 0.400024V5.56151L19.0045 6.12438C19.8593 6.35234 19.8593 6.78857 19.4063 8.10849L15.386 20.1341H15.1011L11.9982 8.1113C11.6506 6.83078 11.6535 6.29887 12.4 6.1272L14.6024 5.56433V0.402837H0V5.56433L2.35349 6.01744C2.58428 6.07373 2.63841 6.1863 2.69825 6.41426L9.75871 28.7545H19.979L23.5377 16.9033L27.0993 28.7545H37.3167L44.3943 6.41144C44.4228 6.31474 44.4753 6.22656 44.5469 6.15484C44.6185 6.08312 44.7071 6.0301 44.8046 6.00055L47.084 5.56151V0.400024H32.473V5.56151L34.6755 6.12438C35.422 6.29606 35.4277 6.82797 35.08 8.10849L31.9772 20.1341H31.6923L27.672 8.1113C27.2275 6.79138 27.2133 6.35516 28.0737 6.1272L30.148 5.56433V0.402837L16.9331 0.400024Z"}})])]),t._v(" "),e("div",{staticClass:"wv_footer__follow"},[e("span",{staticClass:"wv-b6"},[t._v("Follow Us")]),t._v(" "),e("a",{attrs:{target:"_blank",rel:"noreferrer noopener",href:"https://www.facebook.com/wevisdemo"}},[e("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.175 9.15002C17.65 9.15002 17.2 9.15002 16.675 9.15002C16 9.15002 15.625 9.52502 15.55 10.125C15.55 10.65 15.55 11.175 15.55 11.7C15.55 11.925 15.625 11.85 15.775 11.85C16.525 11.85 17.275 11.85 18.025 11.85C18.25 11.85 18.325 11.925 18.325 12.15C18.25 13.05 18.175 13.875 18.1 14.775C18.1 15 18.025 15 17.8 15C17.2 15 16.6 15 16 15C15.55 15 15.625 14.925 15.625 15.375C15.625 18.15 15.625 20.85 15.625 23.625C15.625 23.925 15.55 24 15.25 24C14.2 24 13.225 24 12.175 24C11.875 24 11.875 23.925 11.875 23.625C11.875 22.275 11.875 20.85 11.875 19.5C11.875 18.075 11.875 16.725 11.875 15.3C11.875 15.075 11.8 15 11.575 15C11.125 15 10.675 15 10.225 15C10.075 15 10 14.925 10 14.775C10 13.875 10 13.05 10 12.15C10 12 10.075 11.925 10.225 11.925C10.675 11.925 11.125 11.925 11.575 11.925C11.8 11.925 11.875 11.85 11.875 11.625C11.875 10.95 11.875 10.275 11.875 9.60002C11.875 8.77502 12.1 8.02502 12.625 7.35002C13.225 6.52502 14.125 6.15002 15.1 6.07502C16.15 6.00002 17.2 6.07502 18.175 6.07502C18.325 6.07502 18.325 6.15002 18.325 6.30002C18.325 7.20002 18.325 8.10002 18.325 8.92502C18.4 9.07502 18.325 9.15002 18.175 9.15002Z"}})])]),t._v(" "),e("a",{attrs:{target:"_blank",rel:"noreferrer noopener",href:"https://twitter.com/wevisdemo"}},[e("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30"}},[e("path",{attrs:{d:"M22.2 11.325C22.2 11.475 22.2 11.625 22.2 11.775C22.2 16.65 18.45 22.35 11.625 22.35C9.52499 22.35 7.57499 21.75 5.92499 20.7C6.22499 20.7 6.52499 20.775 6.82499 20.775C8.54999 20.775 10.125 20.175 11.4 19.2C9.74999 19.2 8.39999 18.075 7.94999 16.65C8.17499 16.725 8.39999 16.725 8.62499 16.725C8.99999 16.725 9.29999 16.65 9.59999 16.575C7.87499 16.2 6.59999 14.7 6.59999 12.975C6.59999 12.975 6.59999 12.975 6.59999 12.9C7.12499 13.2 7.64999 13.35 8.24999 13.35C7.34999 12.6 6.74999 11.475 6.74999 10.2C6.74999 9.52498 6.89999 8.84998 7.27499 8.32498C9.07499 10.575 11.85 12.075 14.925 12.225C14.85 11.925 14.85 11.7 14.85 11.4C14.85 9.37498 16.5 7.72498 18.525 7.72498C19.575 7.72498 20.55 8.17498 21.225 8.92498C22.05 8.77498 22.875 8.47498 23.55 8.02498C23.25 8.92498 22.65 9.59997 21.9 10.05C22.65 9.97497 23.4 9.74998 24 9.44998C23.55 10.125 22.875 10.8 22.2 11.325Z"}})])]),t._v(" "),e("a",{attrs:{target:"_blank",rel:"noreferrer noopener",href:"https://www.instagram.com/wevisdemo/"}},[e("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30"}},[e("rect",{attrs:{x:"6",y:"7",width:"17",height:"16",rx:"5"}}),t._v(" "),e("path",{attrs:{d:"M18.25 15C18.25 16.9049 16.6001 18.5 14.5 18.5C12.3999 18.5 10.75 16.9049 10.75 15C10.75 13.0951 12.3999 11.5 14.5 11.5C16.6001 11.5 18.25 13.0951 18.25 15Z",stroke:t.dark?"black":"white"}}),t._v(" "),e("ellipse",{attrs:{cx:"19.8125",cy:"10",rx:"1.0625",ry:"1",fill:t.dark?"black":"white"}})])]),t._v(" "),e("a",{attrs:{target:"_blank",rel:"noreferrer noopener",href:"https://medium.com/wevisdemo"}},[e("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30"}},[e("path",{attrs:{d:"M16.1015 15.0993C16.1015 19.0199 12.9447 22.1983 9.05087 22.1983C5.15701 22.1983 2 19.0192 2 15.0993C2 11.1793 5.15677 8 9.05087 8C12.945 8 16.1015 11.1786 16.1015 15.0993ZM23.8363 15.0993C23.8363 18.7897 22.2579 21.7827 20.3108 21.7827C18.3638 21.7827 16.7854 18.7897 16.7854 15.0993C16.7854 11.4088 18.3636 8.41586 20.3106 8.41586C22.2577 8.41586 23.836 11.4078 23.836 15.0993H23.8363ZM27 15.0993C27 18.405 26.445 21.0865 25.7601 21.0865C25.0752 21.0865 24.5204 18.4057 24.5204 15.0993C24.5204 11.7928 25.0755 9.11198 25.7601 9.11198C26.4447 9.11198 27 11.7925 27 15.0993Z"}})])]),t._v(" "),e("a",{attrs:{target:"_blank",rel:"noreferrer noopener",href:"https://github.com/wevisdemo"}},[e("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.2782 5.0377C12.7824 5.03522 10.3673 5.89886 8.4656 7.47383C6.56392 9.0488 5.30002 11.2322 4.90041 13.6326C4.5008 16.0331 4.9916 18.4938 6.28483 20.5737C7.57807 22.6536 9.58923 24.2168 11.9579 24.9832C12.4801 25.0774 12.6735 24.757 12.6735 24.4869C12.6735 24.2168 12.6735 23.6011 12.6735 22.7468C9.75291 23.375 9.13397 21.3773 9.13397 21.3773C8.93935 20.7581 8.52591 20.2262 7.96701 19.8759C7.01926 19.2477 8.04437 19.2477 8.04437 19.2477C8.3766 19.2934 8.69379 19.4122 8.97193 19.595C9.25007 19.7779 9.48186 20.02 9.64975 20.3031C9.79241 20.5551 9.98473 20.7772 10.2157 20.9566C10.4467 21.1361 10.7117 21.2693 10.9957 21.3487C11.2796 21.4281 11.5768 21.452 11.8703 21.4192C12.1637 21.3864 12.4477 21.2974 12.7058 21.1574C12.7462 20.6406 12.9749 20.1549 13.3505 19.7879C11.0166 19.5304 8.5666 18.6509 8.5666 14.7309C8.55058 13.7151 8.93608 12.7321 9.6433 11.9856C9.32768 11.1025 9.36451 10.136 9.74646 9.27807C9.74646 9.27807 10.6297 9.00166 12.6348 10.3272C14.3566 9.86655 16.174 9.86655 17.8958 10.3272C19.9009 9.00166 20.7778 9.27807 20.7778 9.27807C21.1637 10.1348 21.2029 11.102 20.8874 11.9856C21.5946 12.7321 21.9801 13.7151 21.9641 14.7309C21.9641 18.6634 19.5077 19.5241 17.1673 19.7565C17.4182 20.0023 17.612 20.2978 17.7355 20.623C17.859 20.9481 17.9093 21.2954 17.8829 21.6411C17.8829 23.0106 17.8829 24.1163 17.8829 24.4492C17.8829 24.7822 18.0699 25.0397 18.605 24.9455C20.9662 24.1719 22.9686 22.6062 24.2551 20.5277C25.5415 18.4491 26.0284 15.9929 25.6288 13.5971C25.2292 11.2013 23.9691 9.02168 22.0733 7.44706C20.1775 5.87244 17.7693 5.00519 15.2782 5V5.0377Z"}})])])])])}),[],!1,null,null,null);r.a=component.exports}}]);