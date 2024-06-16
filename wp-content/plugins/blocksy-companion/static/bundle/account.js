!function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.ctEvents,r=e.n(t),o=window.ctFrontend;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var i=function(e,t){var r=function(e){var t=jQuery();return a(e.querySelectorAll("input")).map((function(e){t=t.add(e)})),t}(t);if("object"===("undefined"==typeof grecaptcha?"undefined":n(grecaptcha)))grecaptcha.ready((function(){grecaptcha.execute(WFLSVars.recaptchasitekey,{action:"login"}).then((function(t){var o=jQuery("#wfls-captcha-token");o.length?o.val(t):r.length&&((o=jQuery('<input type="hidden" name="wfls-captcha-token" id="wfls-captcha-token" />')).val(t),r.parent().append(o)),"function"==typeof e&&e(!0)}))}));else{var o=jQuery("#wfls-captcha-token");o.length?o.val("grecaptcha-missing"):r.length&&((o=jQuery('<input type="hidden" name="wfls-captcha-token" id="wfls-captcha-token" />')).val("grecaptcha-missing"),r.parent().append(o)),"function"==typeof e&&e(!0)}},s=function(e){a(e.querySelectorAll(".g-recaptcha, .anr_captcha_field")).map((function(e){e.classList.contains("anr_captcha_field")?grecaptcha.reset(parseFloat(e.firstElementChild.id.replace("anr_captcha_field_",""))-1):grecaptcha.reset(e.gID)}))},l=function(e){return new Promise((function(t){(function(e,t){return!(!window.WFLSVars||!parseInt(WFLSVars.useCAPTCHA)||(i((function(){return e()}),t),0))})(t,e)||t()}))},u=window.jQuery,d=e.n(u),f=function(e){var t=function(){var t=e.closest("form");!function(e,t){var r=d()(e).find(".woocommerce-password-strength");""===d()(t).val()?(r.hide(),d()(document.body).trigger("wc-password-strength-hide")):0===r.length?(d()(t.nextElementSibling).after('<div class="woocommerce-password-strength" aria-live="polite"></div>'),d()(document.body).trigger("wc-password-strength-added")):(r.show(),d()(document.body).trigger("wc-password-strength-show"))}(t,e);var r=function(e,t){var r=d()(e).find(".woocommerce-password-strength"),o=d()(e).find(".woocommerce-password-hint"),n='<small class="woocommerce-password-hint">'+wc_password_strength_meter_params.i18n_password_hint+"</small>",a=wp.passwordStrength.meter(d()(t).val(),wp.passwordStrength.userInputDisallowedList()),c="";if(r.removeClass("short bad good strong"),o.remove(),r.is(":hidden"))return a;switch(a<wc_password_strength_meter_params.min_password_strength&&(c=" - "+wc_password_strength_meter_params.i18n_password_error),a){case 0:r.addClass("short").html(pwsL10n.short+c),r.after(n);break;case 1:case 2:r.addClass("bad").html(pwsL10n.bad+c),r.after(n);break;case 3:r.addClass("good").html(pwsL10n.good+c);break;case 4:r.addClass("strong").html(pwsL10n.strong+c);break;case 5:r.addClass("short").html(pwsL10n.mismatch)}return a}(t,e),o=d()(t).find('button[name="wp-submit"]');e.value.length>0&&r<wc_password_strength_meter_params.min_password_strength&&-1!==r?o.attr("disabled","disabled").addClass("disabled"):o.prop("disabled",!1).removeClass("disabled")};e.addEventListener("keyup",t),e.addEventListener("change",t)},m=function e(t,r){var o=r.querySelector('[name="validate_2fa_form"]');if(!o)return!1;var n="";t.parentNode.querySelector('[name="validate_2fa_form"]')&&(n=t.parentNode.querySelector('[id="authcode"]').value,t.parentNode.querySelector('[name="validate_2fa_form"]').remove()),t.insertAdjacentElement("beforebegin",o),o.querySelector('[id="authcode"]').value=n;var a=o.querySelector('input.authcode[inputmode="numeric"]'),c=(null==a?void 0:a.dataset.digits)||0;if(a){var i=!1;a.addEventListener("input",(function(){var e=this.value.replace(/[^0-9 ]/g,"").trimStart();!i&&c&&e.length===Math.floor(c/2)?(e+=" ",i=!0):i&&!this.value&&(i=!1),this.value=e,c&&e.replace(/ /g,"").length==c&&void 0!==o.requestSubmit&&(o.requestSubmit(),o.submit.disabled="disabled")}))}return o.addEventListener("submit",(function(r){r.preventDefault();var n=new FormData(o);fetch(o.action,{method:o.method,body:n}).then((function(e){return e.text()})).then((function(r){y(t);var o=S(t.closest(".ct-login-form"),r),n=o.doc,a=o.hasError;a&&e(t,n),a||setTimeout((function(){location=t.querySelector('[name="redirect_to"]').value}),2e3)}))})),!0},p=function(e){var t=e.querySelector('[name="loginform"]');t&&t.addEventListener("submit",(function(e){if(e.preventDefault(),!window.ct_customizer_localizations){g(t);var r=new FormData(t);r.append("redirect_to",location.href);var o="".concat(ct_localizations.ajax_url,"?action=blc_implement_user_login");if(window.WFLSVars&&!t.loginProceed)return r.append("action","wordfence_ls_authenticate"),o=WFLSVars.ajaxurl,void l(t).then((function(){fetch(o,{method:t.method,body:r}).then((function(e){return e.json()})).then((function(e){y(t);var r=!!e.error,o=t.closest(".ct-login-form"),n=t.closest(".ct-login-form").querySelector("form");if(r&&b(o,e.error),e.message&&_(n,e.message),e.login){if(e.two_factor_required){if(0===d()("#wfls-prompt-overlay").length){var a=d()('<div id="wfls-prompt-overlay"></div>'),c=d()('<div id="wfls-prompt-wrapper"></div>'),i=d()('<label for="wfls-token">');i.text("Wordfence 2FA Code "),i.append(d()('<a href="javascript:void(0)" class="wfls-2fa-code-help wfls-tooltip-trigger" title="The Wordfence 2FA Code can be found within the authenticator app you used when first activating two-factor authentication. You may also use one of your recovery codes."><i class="dashicons dashicons-editor-help"></i></a>')),i=d()("<p>").append(i);var l=d()('<p><input type="text" name="wfls-token" id="wfls-token" aria-describedby="wfls-token-error" class="input" value="" size="6" autocomplete="one-time-code"/></p>'),u=d()('<p class="wfls-remember-device-wrapper"><label for="wfls-remember-device"><input name="wfls-remember-device" type="checkbox" id="wfls-remember-device" value="1" /> </label></p>');u.find("label").append("Remember for 30 days");var f=d()('<p class="submit"><input type="submit" name="wfls-token-submit" id="wfls-token-submit" class="button button-primary button-large"/></p>');f.find("input[type=submit]").val("Log In"),c.append(i),c.append(l),parseInt(WFLSVars.allowremember)&&c.append(u),c.append(f),a.append(c),d()(n).css("position","relative").append(a),d()("#wfls-token").focus(),new(d().Zebra_Tooltips)(d()(".wfls-tooltip-trigger"))}}else{var m=new FormData(t);m.append("redirect_to",location.href),fetch("".concat(ct_localizations.ajax_url,"?action=blc_implement_user_login"),{method:t.method,body:m}).then((function(e){return e.json()})).then((function(e){var t=e.data,r=(t.html,t.redirect_to);location=r}))}t.loginProceed=!0}(!r||r&&-1===t.closest(".ct-login-form").querySelector(".ct-form-notification-error").innerHTML.indexOf("Captcha"))&&s(t.closest(".ct-login-form"))}))}));l(t).then((function(){fetch(o,{method:t.method,body:r}).then((function(e){return e.json()})).then((function(e){var r=e.data,o=r.html,n=r.redirect_to,a=S(t.closest(".ct-login-form"),o),c=a.doc,i=a.hasError;i?y(t):m(t,c)||setTimeout((function(){location=n}),2e3),(!i||i&&-1===t.closest(".ct-login-form").querySelector(".ct-form-notification-error").innerHTML.indexOf("Captcha"))&&s(t.closest(".ct-login-form"))}))}))}}))};function h(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var g=function(e){var t=e.querySelector('[name*="submit"]');t&&t.classList.add("ct-loading")},y=function(e){var t=e.querySelector('[name*="submit"]');t&&t.classList.remove("ct-loading")},w=function(e,t){var r=t.screen,o=void 0===r?"login":r;e.querySelector(".ct-".concat(o,"-form"))||(o="login"),e.querySelector("ul")&&e.querySelector("ul .ct-".concat(o))&&(e.querySelector("ul .active").classList.remove("active"),e.querySelector("ul .ct-".concat(o)).classList.add("active")),e.querySelector('[class*="-form"].active').classList.remove("active"),e.querySelector(".ct-".concat(o,"-form")).classList.add("active"),e.querySelector(".ct-".concat(o,"-form form"))&&e.querySelector(".ct-".concat(o,"-form form")).reset(),e.querySelector(".ct-account-modal").classList.remove("ct-error");var n=e.querySelector(".ct-".concat(o,"-form")).querySelector(".ct-form-notification");n&&n.remove();var c=e.querySelector(".ct-".concat(o,"-form")).querySelector(".ct-form-notification-error");c&&c.remove(),function(e){a(e.querySelectorAll(".g-recaptcha, .anr_captcha_field")).map((function(e){e.gID||(e.innerHTML="",e.gID=grecaptcha.render(e))}))}(e)},b=function(e,t){var r=e.querySelector(".ct-form-notification-error");r&&r.remove(),e.closest(".ct-account-modal").classList.remove("ct-error"),t&&(e.insertAdjacentHTML("afterbegin",'<div class="ct-form-notification-error">'.concat(t,"</div>")),requestAnimationFrame((function(){e.closest(".ct-account-modal").classList.add("ct-error")})))},S=function(e,t){var r=(new DOMParser).parseFromString(t,"text/html"),o=r.querySelector("#login_error"),n="";return o&&(n=o.innerHTML),b(e,n),{hasError:!!o,doc:r}},_=function(e,t){var r=e.querySelector(".ct-form-notification");r&&r.remove(),e.closest(".ct-account-modal").classList.remove("ct-error"),t&&e.insertAdjacentHTML("afterbegin",'<div class="ct-form-notification">'.concat(t,"</div>"))},q=function(e,t){var r=(new DOMParser).parseFromString(t,"text/html"),o=r.querySelector(".message"),n="";return o&&(n=o.innerHTML),_(e,n),{doc:r}},L="",k=function(){window.anr_onloadCallback&&window.anr_onloadCallback(),window.turnstile&&(document.querySelector(".ct-account-modal #loginform .cf-turnstile")&&turnstile.reset(".ct-account-modal #loginform .cf-turnstile"),document.querySelector(".ct-account-modal #lostpasswordform .cf-turnstile")&&turnstile.reset(".ct-account-modal #lostpasswordform .cf-turnstile"),document.querySelector(".ct-account-modal #registerform .cf-turnstile")&&(turnstile.reset(".ct-account-modal #registerform .cf-turnstile"),turnstile.remove(".ct-account-modal #registerform .sct-woocommerce-register"))),window.Dokan_Vendor_Registration&&window.Dokan_Vendor_Registration.init()};(0,o.registerDynamicChunk)("blocksy_account",{mount:function(e,t){var o=t.event;if(!document.body.dataset.panel){if(!L){var n=document.querySelector("#account-modal");if(!n)return void(location=document.querySelector('[data-id="account"] .ct-account-item')?document.querySelector('[data-id="account"] .ct-account-item').href:e.href);L=n.outerHTML,n.remove()}var a=document.querySelector("#account-modal");a||(document.querySelector(".ct-drawer-canvas").insertAdjacentHTML("beforeend",L),a=document.querySelector(".ct-drawer-canvas").lastChild);!function(e){if(e&&!e.hasListeners){e.hasListeners=!0,p(e);var t=e.querySelector('[name="loginform"]'),o=e.querySelector('[name="registerform"]'),n=e.querySelector('[name="lostpasswordform"]');if(e.addEventListener("click",(function(r){r.target.href&&r.target.href.indexOf("lostpassword")>-1&&(w(e,{screen:"forgot-password"}),r.preventDefault()),r.target.href&&r.target.classList.contains("showlogin")&&(w(e,{screen:"login"}),r.preventDefault()),r.target.href&&(r.target.href.indexOf("wp-login")>-1||t&&r.target.href===t.action||r.target.href.indexOf("login")>-1||"yes"===r.target.dataset.login)&&-1===r.target.href.indexOf("lostpassword")&&(w(e,{screen:"login"}),r.preventDefault())}),!0),e.querySelectorAll(".show-password-input + .show-password-input")&&e.querySelectorAll(".show-password-input + .show-password-input").forEach((function(e){e.remove()})),h(e.querySelectorAll(".show-password-input")).map((function(e){e.addEventListener("click",(function(t){e.previousElementSibling.type="password"===e.previousElementSibling.type?"text":"password"}))})),o){o.addEventListener("submit",(function(e){e.preventDefault(),window.ct_customizer_localizations||(g(o),l(o).then((function(){return fetch("".concat(ct_localizations.ajax_url,"?action=blc_implement_user_registration"),{method:o.method,body:new FormData(o)}).then((function(e){return e.text()})).then((function(e){var t=S(o.closest(".ct-register-form"),e),n=(t.doc,t.hasError);y(o),n||q(o.closest(".ct-register-form"),e),r().trigger("blocksy:account:register:".concat(n?"error":"success")),n||o.querySelector('[name="redirect_to"]')&&o.querySelector('[name="role"][value="seller"]:checked')&&(location=o.querySelector('[name="redirect_to"]').value),(!n||n&&-1===o.closest(".ct-register-form").querySelector(".ct-form-notification-error").innerHTML.indexOf("Captcha"))&&s(o.closest(".ct-register-form"))}))})))}));var a=o.querySelector("#user_pass_register");a&&f(a)}n&&n.addEventListener("submit",(function(e){e.preventDefault(),window.ct_customizer_localizations||(g(n),fetch("".concat(ct_localizations.ajax_url,"?action=blc_implement_user_lostpassword"),{method:n.method,body:new FormData(n)}).then((function(e){return e.text()})).then((function(e){var t=S(n.closest(".ct-forgot-password-form"),e),r=(t.doc,t.hasError);y(n),r||q(n.closest(".ct-forgot-password-form"),e),(!r||r&&-1===n.closest(".ct-forgot-password-form").querySelector(".ct-form-notification-error").innerHTML.indexOf("Captcha"))&&s(n.closest(".ct-forgot-password-form"))})))})),["login","register","forgot-password"].map((function(t){Array.from(e.querySelectorAll(".ct-".concat(t))).map((function(r){r.addEventListener("click",(function(r){r.preventDefault(),w(e,{screen:t})})),r.addEventListener("keyup",(function(r){13===r.keyCode&&(r.preventDefault(),w(e,{screen:t}))}))}))}))}}(a),w(a,{screen:e.dataset.view||"login"}),k(),r().trigger("ct:overlay:handle-click",{e:o,href:"#account-modal",options:{isModal:!0,computeScrollContainer:function(){if(a.closest("body"))return a.querySelector(".ct-account-forms")}}})}}}),r().on("ct:modal:closed",(function(e){e.closest("#account-modal")&&e.remove()}))}();