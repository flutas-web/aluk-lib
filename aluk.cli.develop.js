/**
 * @license
 * Copyright 2023-2024 Aluk Library Authors
 * SPDX-License-Identifier: MIT
 * 
 * Version 4.0.32_rc1
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(module.exports) :
        typeof define === 'function' && define.amd ? define(['aluk'], factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.aluk = factory());
}(this, function (exports) {
    let aluk;
    let fremwork = function (e, t) {
        let fn = this;
        var ce;
        if (e == '' || e == undefined) {
            ce = '';
        }
        if (e == 'body' || e == 'head') {
            ce = [];
            ce.push(document[e])
        }
        if (typeof (e) == 'string' && checkHtml(e) === false) {
            try {
                ce = document.querySelectorAll(e.toString());
            } catch {
                ce = ''
            }

        } else {
            if (typeof (e) == 'number') {
                ce = '';
            } else {
                if (typeof (e) == 'object') {
                    ce = new Array(e);
                } else {
                    if (checkHtml(e) === true) {
                        ce = new Array(htmlToElement(e));
                    }
                }
            }
        }
        if (ce.length > 1) {
            let c = 0;
            ce.forEach(element => {
                this[c] = element;
                c++;
            });
        } else {
            if (ce.length > 0) {
                this[0] = ce[0];
            }
        }
        Object.defineProperty(this, '$$frem$$', {
            enumerable: false,
            configurable: false,
            value: fn
        })
    }
    let _event_lists = {};
    fremwork.prototype = {
        remove: function () {
            try {
                let count = 0;
                for (let [key] of Object.entries(this.$$frem$$)) {

                    this[key].remove()
                    count++;
                }
                return count;
            } catch (e) {
                try {
                    this[0].remove();
                    return 1;
                } catch (e) {
                    return 0;
                }

            }
        },
        rm: function () {try{let count = 0;for (let [key] of Object.entries(this.$$frem$$)){this[key].remove();count++};return count;}catch (e){try{this[0].remove();return 1}catch (e){return 0}}},
        Prep: function(e,t){t=t||false;(t?window:document).addEventListener(t?'load':'DOMContentLoaded',e)},
        prep: function(e,t){t=t||false;(t?window:document).addEventListener(t?'load':'DOMContentLoaded',e)},
        gors: function (n,v,m) {
            if (v == undefined) {
                for (let [key] of Object.entries(this.$$frem$$)) {
                    if (this[key].getAttribute(n) != undefined || m == 'attr') {
                        return this[key].getAttribute(n);
                    } else {
                        return this[key][n];
                    }
                }
            } else {
                if (m == undefined || m == null) {
                    for (let [key] of Object.entries(this.$$frem$$)) {
                        this[key].setAttribute(n, v);
                    }
                } else {
                    for (let [key] of Object.entries(this.$$frem$$)) {
                        this[key][n] = v;
                    }
                }
            }
        },
        gscss: function (v, m, i) {
            if (m == undefined) {
                let k = [];
                if (i != undefined) {
                    k.push(objectToCss(this[i].style).join('\n'));
                }
                for (let [key] of Object.entries(this.$$frem$$)) {
                    k.push(objectToCss(this[key].style).join('\n'));
                }
                return k;
            } else {
                try {
                    if (typeof v == 'string') {
                        let f = cssStringToJson(v);
                        if (i != undefined) {
                            Object.keys(f).forEach(b => {
                                this[i].style[b] = f[b];
                            })
                            return;
                        }
                        for (let [key] of Object.entries(this.$$frem$$)) {
                            Object.keys(f).forEach(b => {
                                this[key].style[b] = f[b];
                            })
                        }
                    } else {
                        if (i != undefined) {
                            Object.keys(v).forEach(b => {
                                this[i].style[b] = v[b];
                            })
                            return;
                        }
                        for (let [key] of Object.entries(this.$$frem$$)) {
                            Object.keys(v).forEach(b => {
                                this[key].style[b] = v[b];
                            })
                        }
                    }
                } catch { }

            }
        },
        show: function (i) {
            if (i == undefined) {
                for (let [key] of Object.entries(this.$$frem$$)) {
                    this[key].style.display = '';
                }
            } else {
                this[i].style.display = '';
            }

        },
        hide: function (i) {
            if (i == undefined) {
                for (let [key] of Object.entries(this.$$frem$$)) {
                    this[key].style.display = 'none';
                }
            } else {
                this[i].style.display = 'none';
            }
        },
        event: function (e, t, m) {
            if (m == undefined || m == 'add') {
                let f = [];
                for (let [key] of Object.entries(this.$$frem$$)) {
                    let k = generateUUID();
                    this[key].addEventListener(e, t);
                    _event_lists[k] = { name: e, event: t };
                    f.push(k);
                }
                return f;
            } else if (m == 'remove') {
                if (e == '$guid' || e == '$uuid') {
                    _event_lists[t] = null;
                } else {
                    Object.keys(_event_lists).forEach(y => {
                        for (let [key] of Object.entries(this.$$frem$$)) {
                            this[key].removeEventListener(_event_lists[y].name, _event_lists[y].event);
                        }
                    })

                }

            }

        }
    };
    let elements = {};
    elements.applier = fremwork;

    /*

    **/

    function generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 32) % 32 | 0;
            d = Math.floor(d / 32);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return `{${uuid}}`;
    };

    function Interpreter(options) {
        options = options || {};
        this.$$options_normal$$ = options;
        this.mode = undefined;
        this.enum = {};
        this.set = (e, v) => {
            this['enum'][e] = v;
            triggerOnChange(e);
        }
        this.get = (e) => {
            return this['enum'][e];
        }
        if ('mode' in options) { this.mode = options['mode'] } else { mode = 'normal' }
        if ('enum' in options) { this.enum = options['enum'] } else { this.enum = {} }

        this.enum = new Proxy(this.enum, {
            set: (target, property, value) => {
                const previousValue = target[property];
                if (previousValue !== value) {
                    target[property] = value;
                    triggerOnChange(property);
                }
                return true;
            }
        });
        function triggerOnChange(p) {
            document.querySelectorAll('*:not(script):not(html):not(meta)').forEach(a => {
                let random = generateUUID();
                a.setAttribute('aluk_temple_name', random);
            })
            const currentPageSource = document.documentElement.outerHTML;
            const parser = new DOMParser();
            let dom1 = parser.parseFromString(currentPageSource, 'text/html');
            const scriptTags = dom1.getElementsByTagName('script');
            for (let i = scriptTags.length - 1; i >= 0; i--) {
                scriptTags[i].parentNode.removeChild(scriptTags[i]);
            }
            console.log(dom1)

            function processElements() {
                const elementsWithCondition = dom1.querySelectorAll('*:not(script):not(html):not(meta)');
                elementsWithCondition.forEach(element => {
                    let attrs = element.getAttributeNames();
                    if (attrs.includes(`*(${p})*`)) {
                        element.setAttribute(aluk.Interpreter.enum[p], element.getAttribute(`*(${p})*`));
                        element.removeAttribute(`*(${p})*`);;
                    }
                    attrs = element.getAttributeNames();
                    attrs.forEach(e => {
                        if (element.getAttribute(e).indexOf(`*(${p})*`) != -1) {
                            element.setAttribute(e, aluk.Interpreter.enum[p]);
                        }
                    })

                    let sel = `[aluk_temple_name="${element.getAttribute('aluk_temple_name')}"]`.toString();
                    let am = document.querySelector(sel);
                    attrs = am.getAttributeNames();
                    let attrsb = element.getAttributeNames();
                    let i = 0;
                    let cy = [];
                    let cyb = [];
                    attrs.forEach(b => {
                        i++;
                        if (!am.getAttribute(b) === element.getAttribute(b)) {
                            am.setAttribute(b, element.getAttribute(b))
                        }
                        if (!attrs.includes(attrsb[i])) {
                            cy.push(b);
                            cyb.push(attrsb[i]);
                        }
                    });
                    i = 0;
                    cy.forEach(d => {
                        i++;
                        am.setAttribute(d, element.getAttribute(d));
                    })
                    let enums = [];
                    for (let i in element) {
                        enums.push(i);
                    }
                    enums.forEach(c => {
                        if (!am[c] === element[c]) {
                            am[c] = element[c];
                        }
                    })
                    /*

                    **/
                    if (element.textContent.includes(`*(${p})*`)) {
                        element.textContent.replaceAll(`*(${p})*`, aluk.Interpreter.enum[p])
                    }
                });
                document.querySelectorAll('[aluk_temple_name]').forEach(m => m.removeAttribute('aluk_temple_name'))
            }

            processElements();
        }

    }

    function forset() {
        /* {
            let f = Object.entries(aluk['Interpreter'].enum);
            f.forEach(a => {
                triggerOnChange(a[0])
            })
        } catch { }
        requestAnimationFrame(forset)*/
    }
    /*
 
    **/
    let specialTags = [];
    let controls = {
        /**
        * @param {string} url - The url of the content to be imported.
        */
        import: function (url) {
            let xhr = new XMLHttpRequest();
            xhr.addEventListener("load", function () {
                new Function(xhr.responseText)();
            });
            xhr.open("GET", url);
            xhr.send();
        },
        /**
        * @param {object} obj - The class to be loaded.
        */
        export: function (obj) {
            if (typeof obj == 'function') {
                specialTags.push(new obj(window, aluk.controls.export).tag);
                aluk.controls.list.push(new (Object.freeze(obj))(window, aluk.controls.export));
            } else {
                console.warn('Cannot load expansion\n', obj)
            }
        },
        /**
        * @param {object} e - Class or it has been instantiated
        * @param {boolean} t - If true, the class will be loaded even if it has been loaded
        */
        register: function (e, t) {
            switch (typeof e) {
                case "object":
                    return vailate(e, t);
                case "function":
                    return vailate(new e(window, aluk.controls.export), t);
                default:
                    console.warn('Cannot load expansion\n', e)
                    break;
            }
            function vailate(f) {
                if (aluk(f) == aluk('')) {
                    if (t == false || t == undefined) {
                        console.warn('Cannot load expansion\n', f.constructor);
                        return false;
                    } else {
                        return controls.export(f.constructor);
                    }

                }
                else {
                    return controls.export(f.constructor);
                }
            }
            return false;
        },
        list: []
    };

    /**
    * Check the object and return true if it is an HTML element.
    */
    let isHtmlElement = function (variable) {
        return variable instanceof Element || variable instanceof HTMLElement;
    }
    /**
    * Check the content and return true if its language is HTML.
    */
    let checkHtml = function (htmlStr) {

        var reg = /<[a-z][\s\S]*>/i;

        return reg.test(htmlStr);

    }
    /**
    * Parse HTML string to HTML element.
    */
    let htmlToElement = function (html) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        return doc.body.firstChild;
    }
    /**
    * Parse Object(JSON) to StyleSheet(CSS)
    */
    let objectToCss = function (obj) {
        return Object.entries(obj)
            .map(([key, value]) => `${key}: ${value};`)
        //.join('\n');
    }


    function XMLHttpRequest() {
        return {
            open: function (method, url, mode) {
                this.method = method;
                this.url = url;
                this.requestHeaders = {};
                this.body = null;
                this.responseType = 'text';
                if (mode == true) {
                    this.send = function (body) {
                        return new Promise((resolve, reject) => {
                            this.body = body;
                            const fetchOptions = {
                                method: this.method,
                                headers: this.requestHeaders,
                                body: this.body
                            };

                            // Include additional properties if present
                            Object.keys(this).forEach(key => {
                                if (!['method', 'url', 'requestHeaders', 'body', 'responseType'].includes(key)) {
                                    fetchOptions[key] = this[key];
                                }
                            });

                            fetch(this.url, fetchOptions)
                                .then(response => {
                                    this.status = response.status;
                                    this.statusText = response.statusText;
                                    return response[this.responseType]();
                                })
                                .then(responseBody => {
                                    this.responseText = responseBody;
                                    if (this.onload) {
                                        this.onload();
                                        resolve();
                                    }
                                })
                                .catch(error => {
                                    if (this.onerror) {
                                        this.onerror(error);
                                        reject()
                                    }
                                });
                        })

                    }

                }
            },
            setRequestHeader: function (header, value) {
                this.requestHeaders[header] = value;
            },
            send: function (body) {
                this.body = body;
                const fetchOptions = {
                    method: this.method,
                    headers: this.requestHeaders,
                    body: this.body
                };

                // Include additional properties if present
                Object.keys(this).forEach(key => {
                    if (!['method', 'url', 'requestHeaders', 'body', 'responseType'].includes(key)) {
                        fetchOptions[key] = this[key];
                    }
                });

                fetch(this.url, fetchOptions)
                    .then(response => {
                        this.status = response.status;
                        this.statusText = response.statusText;
                        return response[this.responseType]();
                    })
                    .then(responseBody => {
                        this.responseText = responseBody;
                        if (this.onload) {
                            this.onload();
                        }
                    })
                    .catch(error => {
                        if (this.onerror) {
                            this.onerror(error);
                        }
                    });
            },
            onload: null,
            onerror: null,
            responseText: "",
            status: 0,
            statusText: "",
            responseType: 'text'
        };
    }

    /**
    * Parse StyleSheet(CSS) to Object(JSON)
    */
    function cssStringToJson(cssString) {
        const cssRules = cssString.split(';').filter(rule => rule.trim() !== '');
        const cssObject = {};

        cssRules.forEach(rule => {
            const [property, value] = rule.split(':').map(part => part.trim());
            if (property && value) {
                cssObject[property] = value;
            }
        });

        return cssObject;
    }

    aluk = function (e, t) { return new elements.applier(e, t) }
    aluk.objectToCss = objectToCss;
    aluk.cssStringToJson = cssStringToJson;
    aluk.checkHtml = checkHtml;
    aluk.isHtmlElement = isHtmlElement;
    aluk.controls = controls;
    aluk.originalCreateElement = document.createElement;
    aluk.Interpreter = new Interpreter({ mode: 'normal', enum: { $$aluk_version$$: '0.2.1' } });
    aluk.XMLHttpRequest = XMLHttpRequest;
    /**
    * A method of vailating and creating a custom element or a local element.
    */
    const createElementX = function (tagName) {
        if (specialTags.includes(tagName)) {
            const element = aluk.originalCreateElement.call(document, tagName);
            element.$$aluk_framed$$ = false;
            const foundItem = aluk.controls.list.find(item => item.tag == tagName);
            if (typeof foundItem == 'undefined') return;
            try {
                const shadow = element.attachShadow({ mode: 'closed' });
                element.$$aluk_framed$$ = true;
                shadow.innerHTML = foundItem.inner || '';
                (async function () { (foundItem.renderer || ((e) => { e }))(element, shadow) })();
                requestAnimationFrame(async function () { (e.onframe || ((e) => { e }))(t, shadow) })
            } catch { }


            return element;
        } else {
            let element = aluk.originalCreateElement.call(document, tagName);
            Object.defineProperty(element, '$$aluk_framed$$', {
                value: true,
                writable: false,
                enumerable: false
            });
            return element;
        }
    }

    try {
        Object.defineProperty(document, 'createElement', {
            value: createElementX,
            writable: false,
        });
    } catch { console.warn('CreateElementX cannot replace the old version.') }

    function frameInvoker() {
        aluk.controls.list.forEach(e => {
            try {
                let els = document.querySelectorAll(e.tag.toString());
                els.forEach(t => {
                    if (t.$$aluk_framed$$ != false) {
                        try {
                            const shadow = t.attachShadow({ mode: 'closed' });
                            Object.defineProperty(t, '$$aluk_framed$$', {
                                value: true,
                                writable: false,
                                enumerable: false
                            });
                            if ('style' in e) {
                                if (typeof e.style == 'string') { shadow.innerHTML = ('<style class="original-style">' + e.style + '</style>') } else {
                                    shadow.appendChild(e);
                                }

                            }
                            shadow.innerHTML += e.inner || '';
                            shadow.createElement = document.createElement;
                            shadow.write = (e) => {
                                try {
                                    shadow.innerHTML = e;
                                } catch { }
                            }
                            (async function a() { (e.renderer || ((e) => { e }))(t, shadow) })();

                        } catch { }
                    } else {
                        try {
                            const shadow = t.attachShadow({ mode: 'closed' });
                        } catch { }
                        (async function a() { (e.onframe || ((e) => { e }))(t, shadow) })();
                    }
                })
            } catch { }
        })
        requestAnimationFrame(frameInvoker)
    }

    /*
        onload functions
    **/
    frameInvoker();



    /*
 
    **/




    /*
 
        *at last*
 
    **/

    exports = aluk;
    return exports;
}))