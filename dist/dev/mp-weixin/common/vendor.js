"use strict";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*.*?\*\//gs;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString$1 || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString$1 = Object.prototype.toString;
const toTypeString = (value) => objectToString$1.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns$1 = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const looseToNumber = (val) => {
  const n2 = parseFloat(val);
  return isNaN(n2) ? val : n2;
};
const LINEFEED = "\n";
const SLOT_DEFAULT_NAME = "d";
const ON_SHOW = "onShow";
const ON_HIDE = "onHide";
const ON_LAUNCH = "onLaunch";
const ON_ERROR = "onError";
const ON_THEME_CHANGE = "onThemeChange";
const ON_PAGE_NOT_FOUND = "onPageNotFound";
const ON_UNHANDLE_REJECTION = "onUnhandledRejection";
const ON_LOAD = "onLoad";
const ON_READY = "onReady";
const ON_UNLOAD = "onUnload";
const ON_INIT = "onInit";
const ON_SAVE_EXIT_STATE = "onSaveExitState";
const ON_RESIZE = "onResize";
const ON_BACK_PRESS = "onBackPress";
const ON_PAGE_SCROLL = "onPageScroll";
const ON_TAB_ITEM_TAP = "onTabItemTap";
const ON_REACH_BOTTOM = "onReachBottom";
const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
const ON_SHARE_TIMELINE = "onShareTimeline";
const ON_ADD_TO_FAVORITES = "onAddToFavorites";
const ON_SHARE_APP_MESSAGE = "onShareAppMessage";
const ON_NAVIGATION_BAR_BUTTON_TAP = "onNavigationBarButtonTap";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED = "onNavigationBarSearchInputClicked";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED = "onNavigationBarSearchInputChanged";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED = "onNavigationBarSearchInputConfirmed";
const ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED = "onNavigationBarSearchInputFocusChanged";
const customizeRE = /:/g;
function customizeEvent(str) {
  return camelize(str.replace(customizeRE, "-"));
}
function hasLeadingSlash(str) {
  return str.indexOf("/") === 0;
}
function addLeadingSlash(str) {
  return hasLeadingSlash(str) ? str : "/" + str;
}
const invokeArrayFns = (fns, arg) => {
  let ret;
  for (let i = 0; i < fns.length; i++) {
    ret = fns[i](arg);
  }
  return ret;
};
function once(fn, ctx = null) {
  let res;
  return (...args) => {
    if (fn) {
      res = fn.apply(ctx, args);
      fn = null;
    }
    return res;
  };
}
function getValueByDataPath(obj, path) {
  if (!isString(path)) {
    return;
  }
  path = path.replace(/\[(\d+)\]/g, ".$1");
  const parts = path.split(".");
  let key = parts[0];
  if (!obj) {
    obj = {};
  }
  if (parts.length === 1) {
    return obj[key];
  }
  return getValueByDataPath(obj[key], parts.slice(1).join("."));
}
function sortObject(obj) {
  let sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach((key) => {
      const _key = key;
      sortObj[_key] = obj[_key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
const encode = encodeURIComponent;
function stringifyQuery(obj, encodeStr = encode) {
  const res = obj ? Object.keys(obj).map((key) => {
    let val = obj[key];
    if (typeof val === void 0 || val === null) {
      val = "";
    } else if (isPlainObject(val)) {
      val = JSON.stringify(val);
    }
    return encodeStr(key) + "=" + encodeStr(val);
  }).filter((x) => x.length > 0).join("&") : null;
  return res ? `?${res}` : "";
}
const PAGE_HOOKS = [
  ON_INIT,
  ON_LOAD,
  ON_SHOW,
  ON_HIDE,
  ON_UNLOAD,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_SHARE_APP_MESSAGE,
  ON_ADD_TO_FAVORITES,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED
];
function isRootHook(name) {
  return PAGE_HOOKS.indexOf(name) > -1;
}
const UniLifecycleHooks = [
  ON_SHOW,
  ON_HIDE,
  ON_LAUNCH,
  ON_ERROR,
  ON_THEME_CHANGE,
  ON_PAGE_NOT_FOUND,
  ON_UNHANDLE_REJECTION,
  ON_INIT,
  ON_LOAD,
  ON_READY,
  ON_UNLOAD,
  ON_RESIZE,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_ADD_TO_FAVORITES,
  ON_SHARE_APP_MESSAGE,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED
];
const MINI_PROGRAM_PAGE_RUNTIME_HOOKS = /* @__PURE__ */ (() => {
  return {
    onPageScroll: 1,
    onShareAppMessage: 1 << 1,
    onShareTimeline: 1 << 2
  };
})();
function isUniLifecycleHook(name, value, checkType = true) {
  if (checkType && !isFunction(value)) {
    return false;
  }
  if (UniLifecycleHooks.indexOf(name) > -1) {
    return true;
  } else if (name.indexOf("on") === 0) {
    return true;
  }
  return false;
}
let vueApp;
const createVueAppHooks = [];
function onCreateVueApp(hook) {
  if (vueApp) {
    return hook(vueApp);
  }
  createVueAppHooks.push(hook);
}
function invokeCreateVueAppHook(app) {
  vueApp = app;
  createVueAppHooks.forEach((hook) => hook(app));
}
const invokeCreateErrorHandler = once((app, createErrorHandler2) => {
  if (isFunction(app._component.onError)) {
    return createErrorHandler2(app);
  }
});
const E = function() {
};
E.prototype = {
  on: function(name, callback, ctx) {
    var e2 = this.e || (this.e = {});
    (e2[name] || (e2[name] = [])).push({
      fn: callback,
      ctx
    });
    return this;
  },
  once: function(name, callback, ctx) {
    var self = this;
    function listener() {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function(name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;
    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }
    return this;
  },
  off: function(name, callback) {
    var e2 = this.e || (this.e = {});
    var evts = e2[name];
    var liveEvents = [];
    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }
    liveEvents.length ? e2[name] = liveEvents : delete e2[name];
    return this;
  }
};
var E$1 = E;
const LOCALE_ZH_HANS = "zh-Hans";
const LOCALE_ZH_HANT = "zh-Hant";
const LOCALE_EN = "en";
const LOCALE_FR = "fr";
const LOCALE_ES = "es";
function include(str, parts) {
  return !!parts.find((part) => str.indexOf(part) !== -1);
}
function startsWith(str, parts) {
  return parts.find((part) => str.indexOf(part) === 0);
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, "-");
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === "chinese") {
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf("zh") === 0) {
    if (locale.indexOf("-hans") > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("-hant") > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  const lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
function getBaseSystemInfo() {
  return wx.getSystemInfoSync();
}
function validateProtocolFail(name, msg) {
  console.warn(`${name}: ${msg}`);
}
function validateProtocol(name, data, protocol, onFail) {
  if (!onFail) {
    onFail = validateProtocolFail;
  }
  for (const key in protocol) {
    const errMsg = validateProp$1(key, data[key], protocol[key], !hasOwn(data, key));
    if (isString(errMsg)) {
      onFail(name, errMsg);
    }
  }
}
function validateProtocols(name, args, protocol, onFail) {
  if (!protocol) {
    return;
  }
  if (!isArray(protocol)) {
    return validateProtocol(name, args[0] || /* @__PURE__ */ Object.create(null), protocol, onFail);
  }
  const len = protocol.length;
  const argsLen = args.length;
  for (let i = 0; i < len; i++) {
    const opts = protocol[i];
    const data = /* @__PURE__ */ Object.create(null);
    if (argsLen > i) {
      data[opts.name] = args[i];
    }
    validateProtocol(name, data, { [opts.name]: opts }, onFail);
  }
}
function validateProp$1(name, value, prop, isAbsent) {
  if (!isPlainObject(prop)) {
    prop = { type: prop };
  }
  const { type, required, validator } = prop;
  if (required && isAbsent) {
    return 'Missing required args: "' + name + '"';
  }
  if (value == null && !required) {
    return;
  }
  if (type != null) {
    let isValid = false;
    const types = isArray(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType$1(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      return getInvalidTypeMessage$1(name, value, expectedTypes);
    }
  }
  if (validator) {
    return validator(value);
  }
}
const isSimpleType$1 = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol");
function assertType$1(value, type) {
  let valid;
  const expectedType = getType$1(type);
  if (isSimpleType$1(expectedType)) {
    const t2 = typeof value;
    valid = t2 === expectedType.toLowerCase();
    if (!valid && t2 === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else {
    {
      valid = value instanceof type;
    }
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage$1(name, value, expectedTypes) {
  let message = `Invalid args: type check failed for args "${name}". Expected ${expectedTypes.map(capitalize).join(", ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue$1(value, expectedType);
  const receivedValue = styleValue$1(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable$1(expectedType) && !isBoolean$2(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable$1(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function getType$1(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : "";
}
function styleValue$1(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable$1(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean$2(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
function tryCatch(fn) {
  return function() {
    try {
      return fn.apply(fn, arguments);
    } catch (e2) {
      console.error(e2);
    }
  };
}
let invokeCallbackId = 1;
const invokeCallbacks = {};
function addInvokeCallback(id, name, callback, keepAlive = false) {
  invokeCallbacks[id] = {
    name,
    keepAlive,
    callback
  };
  return id;
}
function invokeCallback(id, res, extras) {
  if (typeof id === "number") {
    const opts = invokeCallbacks[id];
    if (opts) {
      if (!opts.keepAlive) {
        delete invokeCallbacks[id];
      }
      return opts.callback(res, extras);
    }
  }
  return res;
}
const API_SUCCESS = "success";
const API_FAIL = "fail";
const API_COMPLETE = "complete";
function getApiCallbacks(args) {
  const apiCallbacks = {};
  for (const name in args) {
    const fn = args[name];
    if (isFunction(fn)) {
      apiCallbacks[name] = tryCatch(fn);
      delete args[name];
    }
  }
  return apiCallbacks;
}
function normalizeErrMsg$1(errMsg, name) {
  if (!errMsg || errMsg.indexOf(":fail") === -1) {
    return name + ":ok";
  }
  return name + errMsg.substring(errMsg.indexOf(":fail"));
}
function createAsyncApiCallback(name, args = {}, { beforeAll, beforeSuccess } = {}) {
  if (!isPlainObject(args)) {
    args = {};
  }
  const { success, fail, complete } = getApiCallbacks(args);
  const hasSuccess = isFunction(success);
  const hasFail = isFunction(fail);
  const hasComplete = isFunction(complete);
  const callbackId = invokeCallbackId++;
  addInvokeCallback(callbackId, name, (res) => {
    res = res || {};
    res.errMsg = normalizeErrMsg$1(res.errMsg, name);
    isFunction(beforeAll) && beforeAll(res);
    if (res.errMsg === name + ":ok") {
      isFunction(beforeSuccess) && beforeSuccess(res, args);
      hasSuccess && success(res);
    } else {
      hasFail && fail(res);
    }
    hasComplete && complete(res);
  });
  return callbackId;
}
const HOOK_SUCCESS = "success";
const HOOK_FAIL = "fail";
const HOOK_COMPLETE = "complete";
const globalInterceptors = {};
const scopedInterceptors = {};
function wrapperHook(hook, params) {
  return function(data) {
    return hook(data, params) || data;
  };
}
function queue$1(hooks, data, params) {
  let promise = false;
  for (let i = 0; i < hooks.length; i++) {
    const hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      const res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then() {
          },
          catch() {
          }
        };
      }
    }
  }
  return promise || {
    then(callback) {
      return callback(data);
    },
    catch() {
    }
  };
}
function wrapperOptions(interceptors2, options = {}) {
  [HOOK_SUCCESS, HOOK_FAIL, HOOK_COMPLETE].forEach((name) => {
    const hooks = interceptors2[name];
    if (!isArray(hooks)) {
      return;
    }
    const oldCallback = options[name];
    options[name] = function callbackInterceptor(res) {
      queue$1(hooks, res, options).then((res2) => {
        return isFunction(oldCallback) && oldCallback(res2) || res2;
      });
    };
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  const returnValueHooks = [];
  if (isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push(...globalInterceptors.returnValue);
  }
  const interceptor = scopedInterceptors[method];
  if (interceptor && isArray(interceptor.returnValue)) {
    returnValueHooks.push(...interceptor.returnValue);
  }
  returnValueHooks.forEach((hook) => {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  const interceptor = /* @__PURE__ */ Object.create(null);
  Object.keys(globalInterceptors).forEach((hook) => {
    if (hook !== "returnValue") {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  const scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach((hook) => {
      if (hook !== "returnValue") {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options, params) {
  const interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (isArray(interceptor.invoke)) {
      const res = queue$1(interceptor.invoke, options);
      return res.then((options2) => {
        return api(wrapperOptions(getApiInterceptorHooks(method), options2), ...params);
      });
    } else {
      return api(wrapperOptions(interceptor, options), ...params);
    }
  }
  return api(options, ...params);
}
function hasCallback(args) {
  if (isPlainObject(args) && [API_SUCCESS, API_FAIL, API_COMPLETE].find((cb) => isFunction(args[cb]))) {
    return true;
  }
  return false;
}
function handlePromise(promise) {
  return promise;
}
function promisify$1(name, fn) {
  return (args = {}, ...rest) => {
    if (hasCallback(args)) {
      return wrapperReturnValue(name, invokeApi(name, fn, args, rest));
    }
    return wrapperReturnValue(name, handlePromise(new Promise((resolve2, reject) => {
      invokeApi(name, fn, extend(args, { success: resolve2, fail: reject }), rest);
    })));
  };
}
function formatApiArgs(args, options) {
  const params = args[0];
  if (!options || !isPlainObject(options.formatArgs) && isPlainObject(params)) {
    return;
  }
  const formatArgs = options.formatArgs;
  const keys = Object.keys(formatArgs);
  for (let i = 0; i < keys.length; i++) {
    const name = keys[i];
    const formatterOrDefaultValue = formatArgs[name];
    if (isFunction(formatterOrDefaultValue)) {
      const errMsg = formatterOrDefaultValue(args[0][name], params);
      if (isString(errMsg)) {
        return errMsg;
      }
    } else {
      if (!hasOwn(params, name)) {
        params[name] = formatterOrDefaultValue;
      }
    }
  }
}
function invokeSuccess(id, name, res) {
  return invokeCallback(id, extend(res || {}, { errMsg: name + ":ok" }));
}
function invokeFail(id, name, errMsg, errRes) {
  return invokeCallback(id, extend({ errMsg: name + ":fail" + (errMsg ? " " + errMsg : "") }, errRes));
}
function beforeInvokeApi(name, args, protocol, options) {
  {
    validateProtocols(name, args, protocol);
  }
  if (options && options.beforeInvoke) {
    const errMsg2 = options.beforeInvoke(args);
    if (isString(errMsg2)) {
      return errMsg2;
    }
  }
  const errMsg = formatApiArgs(args, options);
  if (errMsg) {
    return errMsg;
  }
}
function normalizeErrMsg(errMsg) {
  if (!errMsg || isString(errMsg)) {
    return errMsg;
  }
  if (errMsg.stack) {
    console.error(errMsg.message + LINEFEED + errMsg.stack);
    return errMsg.message;
  }
  return errMsg;
}
function wrapperTaskApi(name, fn, protocol, options) {
  return (args) => {
    const id = createAsyncApiCallback(name, args, options);
    const errMsg = beforeInvokeApi(name, [args], protocol, options);
    if (errMsg) {
      return invokeFail(id, name, errMsg);
    }
    return fn(args, {
      resolve: (res) => invokeSuccess(id, name, res),
      reject: (errMsg2, errRes) => invokeFail(id, name, normalizeErrMsg(errMsg2), errRes)
    });
  };
}
function wrapperSyncApi(name, fn, protocol, options) {
  return (...args) => {
    const errMsg = beforeInvokeApi(name, args, protocol, options);
    if (errMsg) {
      throw new Error(errMsg);
    }
    return fn.apply(null, args);
  };
}
function wrapperAsyncApi(name, fn, protocol, options) {
  return wrapperTaskApi(name, fn, protocol, options);
}
function defineSyncApi(name, fn, protocol, options) {
  return wrapperSyncApi(name, fn, protocol, options);
}
function defineAsyncApi(name, fn, protocol, options) {
  return promisify$1(name, wrapperAsyncApi(name, fn, protocol, options));
}
const API_UPX2PX = "upx2px";
const Upx2pxProtocol = [
  {
    name: "upx",
    type: [Number, String],
    required: true
  }
];
const EPS = 1e-4;
const BASE_DEVICE_WIDTH = 750;
let isIOS = false;
let deviceWidth = 0;
let deviceDPR = 0;
function checkDeviceWidth() {
  const { platform, pixelRatio, windowWidth } = getBaseSystemInfo();
  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === "ios";
}
const upx2px = defineSyncApi(API_UPX2PX, (number, newDeviceWidth) => {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  let width = newDeviceWidth || deviceWidth;
  let result = number / BASE_DEVICE_WIDTH * width;
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}, Upx2pxProtocol);
const API_ADD_INTERCEPTOR = "addInterceptor";
const API_REMOVE_INTERCEPTOR = "removeInterceptor";
const AddInterceptorProtocol = [
  {
    name: "method",
    type: [String, Object],
    required: true
  }
];
const RemoveInterceptorProtocol = AddInterceptorProtocol;
function mergeInterceptorHook(interceptors2, interceptor) {
  Object.keys(interceptor).forEach((hook) => {
    if (isFunction(interceptor[hook])) {
      interceptors2[hook] = mergeHook(interceptors2[hook], interceptor[hook]);
    }
  });
}
function removeInterceptorHook(interceptors2, interceptor) {
  if (!interceptors2 || !interceptor) {
    return;
  }
  Object.keys(interceptor).forEach((name) => {
    const hooks = interceptors2[name];
    const hook = interceptor[name];
    if (isArray(hooks) && isFunction(hook)) {
      remove(hooks, hook);
    }
  });
}
function mergeHook(parentVal, childVal) {
  const res = childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  const res = [];
  for (let i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
const addInterceptor = defineSyncApi(API_ADD_INTERCEPTOR, (method, interceptor) => {
  if (isString(method) && isPlainObject(interceptor)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), interceptor);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}, AddInterceptorProtocol);
const removeInterceptor = defineSyncApi(API_REMOVE_INTERCEPTOR, (method, interceptor) => {
  if (isString(method)) {
    if (isPlainObject(interceptor)) {
      removeInterceptorHook(scopedInterceptors[method], interceptor);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}, RemoveInterceptorProtocol);
const interceptors = {};
const API_ON = "$on";
const OnProtocol = [
  {
    name: "event",
    type: String,
    required: true
  },
  {
    name: "callback",
    type: Function,
    required: true
  }
];
const API_ONCE = "$once";
const OnceProtocol = OnProtocol;
const API_OFF = "$off";
const OffProtocol = [
  {
    name: "event",
    type: [String, Array]
  },
  {
    name: "callback",
    type: Function
  }
];
const API_EMIT = "$emit";
const EmitProtocol = [
  {
    name: "event",
    type: String,
    required: true
  }
];
const emitter = new E$1();
const $on = defineSyncApi(API_ON, (name, callback) => {
  emitter.on(name, callback);
  return () => emitter.off(name, callback);
}, OnProtocol);
const $once = defineSyncApi(API_ONCE, (name, callback) => {
  emitter.once(name, callback);
  return () => emitter.off(name, callback);
}, OnceProtocol);
const $off = defineSyncApi(API_OFF, (name, callback) => {
  if (!name) {
    emitter.e = {};
    return;
  }
  if (!isArray(name))
    name = [name];
  name.forEach((n2) => emitter.off(n2, callback));
}, OffProtocol);
const $emit = defineSyncApi(API_EMIT, (name, ...args) => {
  emitter.emit(name, ...args);
}, EmitProtocol);
let cid;
let cidErrMsg;
let enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e2) {
  }
  return message;
}
function invokePushCallback(args) {
  if (args.type === "enabled") {
    enabled = true;
  } else if (args.type === "clientId") {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === "pushMsg") {
    const message = {
      type: "receive",
      data: normalizePushMessage(args.message)
    };
    for (let i = 0; i < onPushMessageCallbacks.length; i++) {
      const callback = onPushMessageCallbacks[i];
      callback(message);
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === "click") {
    onPushMessageCallbacks.forEach((callback) => {
      callback({
        type: "click",
        data: normalizePushMessage(args.message)
      });
    });
  }
}
const getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid2, errMsg) {
  getPushCidCallbacks.forEach((callback) => {
    callback(cid2, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
const API_GET_PUSH_CLIENT_ID = "getPushClientId";
const getPushClientId = defineAsyncApi(API_GET_PUSH_CLIENT_ID, (_, { resolve: resolve2, reject }) => {
  Promise.resolve().then(() => {
    if (typeof enabled === "undefined") {
      enabled = false;
      cid = "";
      cidErrMsg = "uniPush is not enabled";
    }
    getPushCidCallbacks.push((cid2, errMsg) => {
      if (cid2) {
        resolve2({ cid: cid2 });
      } else {
        reject(errMsg);
      }
    });
    if (typeof cid !== "undefined") {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
});
const onPushMessageCallbacks = [];
const onPushMessage = (fn) => {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
const offPushMessage = (fn) => {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    const index2 = onPushMessageCallbacks.indexOf(fn);
    if (index2 > -1) {
      onPushMessageCallbacks.splice(index2, 1);
    }
  }
};
const SYNC_API_RE = /^\$|getLocale|setLocale|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getDeviceInfo|getAppBaseInfo|getWindowInfo|getSystemSetting|getAppAuthorizeSetting/;
const CONTEXT_API_RE = /^create|Manager$/;
const CONTEXT_API_RE_EXC = ["createBLEConnection"];
const ASYNC_API = ["createBLEConnection"];
const CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== "onPush";
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function(onfinally) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(onfinally && onfinally()).then(() => value), (reason) => promise.resolve(onfinally && onfinally()).then(() => {
      throw reason;
    }));
  };
}
function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  if (!isFunction(api)) {
    return api;
  }
  return function promiseApi(options = {}, ...rest) {
    if (isFunction(options.success) || isFunction(options.fail) || isFunction(options.complete)) {
      return wrapperReturnValue(name, invokeApi(name, api, options, rest));
    }
    return wrapperReturnValue(name, handlePromise(new Promise((resolve2, reject) => {
      invokeApi(name, api, extend({}, options, {
        success: resolve2,
        fail: reject
      }), rest);
    })));
  };
}
const CALLBACKS = ["success", "fail", "cancel", "complete"];
function initWrapper(protocols2) {
  function processCallback(methodName, method, returnValue) {
    return function(res) {
      return method(processReturnValue(methodName, res, returnValue));
    };
  }
  function processArgs(methodName, fromArgs, argsOption = {}, returnValue = {}, keepFromArgs = false) {
    if (isPlainObject(fromArgs)) {
      const toArgs = keepFromArgs === true ? fromArgs : {};
      if (isFunction(argsOption)) {
        argsOption = argsOption(fromArgs, toArgs) || {};
      }
      for (const key in fromArgs) {
        if (hasOwn(argsOption, key)) {
          let keyOption = argsOption[key];
          if (isFunction(keyOption)) {
            keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
          }
          if (!keyOption) {
            console.warn(`微信小程序 ${methodName} 暂不支持 ${key}`);
          } else if (isString(keyOption)) {
            toArgs[keyOption] = fromArgs[key];
          } else if (isPlainObject(keyOption)) {
            toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
          }
        } else if (CALLBACKS.indexOf(key) !== -1) {
          const callback = fromArgs[key];
          if (isFunction(callback)) {
            toArgs[key] = processCallback(methodName, callback, returnValue);
          }
        } else {
          if (!keepFromArgs && !hasOwn(toArgs, key)) {
            toArgs[key] = fromArgs[key];
          }
        }
      }
      return toArgs;
    } else if (isFunction(fromArgs)) {
      fromArgs = processCallback(methodName, fromArgs, returnValue);
    }
    return fromArgs;
  }
  function processReturnValue(methodName, res, returnValue, keepReturnValue = false) {
    if (isFunction(protocols2.returnValue)) {
      res = protocols2.returnValue(methodName, res);
    }
    return processArgs(methodName, res, returnValue, {}, keepReturnValue);
  }
  return function wrapper3(methodName, method) {
    if (!hasOwn(protocols2, methodName)) {
      return method;
    }
    const protocol = protocols2[methodName];
    if (!protocol) {
      return function() {
        console.error(`微信小程序 暂不支持${methodName}`);
      };
    }
    return function(arg1, arg2) {
      let options = protocol;
      if (isFunction(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      const args = [arg1];
      if (typeof arg2 !== "undefined") {
        args.push(arg2);
      }
      const returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  };
}
const getLocale = () => {
  const app = isFunction(getApp) && getApp({ allowDefault: true });
  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
};
const setLocale = (locale) => {
  const app = isFunction(getApp) && getApp();
  if (!app) {
    return false;
  }
  const oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach((fn) => fn({ locale }));
    return true;
  }
  return false;
};
const onLocaleChangeCallbacks = [];
const onLocaleChange = (fn) => {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
};
if (typeof global !== "undefined") {
  global.getLocale = getLocale;
}
const UUID_KEY = "__DC_STAT_UUID";
let deviceId;
function useDeviceId(global2 = wx) {
  return function addDeviceId(_, toRes) {
    deviceId = deviceId || global2.getStorageSync(UUID_KEY);
    if (!deviceId) {
      deviceId = Date.now() + "" + Math.floor(Math.random() * 1e7);
      wx.setStorage({
        key: UUID_KEY,
        data: deviceId
      });
    }
    toRes.deviceId = deviceId;
  };
}
function addSafeAreaInsets(fromRes, toRes) {
  if (fromRes.safeArea) {
    const safeArea = fromRes.safeArea;
    toRes.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: fromRes.windowWidth - safeArea.right,
      bottom: fromRes.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(fromRes, toRes) {
  const { brand = "", model = "", system = "", language = "", theme, version: version2, platform, fontSizeSetting, SDKVersion, pixelRatio, deviceOrientation } = fromRes;
  let osName = "";
  let osVersion = "";
  {
    osName = system.split(" ")[0] || "";
    osVersion = system.split(" ")[1] || "";
  }
  let hostVersion = version2;
  let deviceType = getGetDeviceType(fromRes, model);
  let deviceBrand = getDeviceBrand(brand);
  let _hostName = getHostName(fromRes);
  let _deviceOrientation = deviceOrientation;
  let _devicePixelRatio = pixelRatio;
  let _SDKVersion = SDKVersion;
  const hostLanguage = language.replace(/_/g, "-");
  const parameters = {
    appId: "__UNI__BB7BE8A",
    appName: "狮业有成",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.8.11",
    uniRuntimeVersion: "3.8.11",
    uniPlatform: "mp-weixin",
    deviceBrand,
    deviceModel: model,
    deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion,
    hostTheme: theme,
    hostVersion,
    hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: void 0,
    osTheme: void 0,
    ua: void 0,
    hostPackageName: void 0,
    browserName: void 0,
    browserVersion: void 0
  };
  extend(toRes, parameters);
}
function getGetDeviceType(fromRes, model) {
  let deviceType = fromRes.deviceType || "phone";
  {
    const deviceTypeMaps = {
      ipad: "pad",
      windows: "pc",
      mac: "pc"
    };
    const deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    const _model = model.toLocaleLowerCase();
    for (let index2 = 0; index2 < deviceTypeMapsKeys.length; index2++) {
      const _m = deviceTypeMapsKeys[index2];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  let deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = deviceBrand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale ? getLocale() : defaultLanguage;
}
function getHostName(fromRes) {
  const _platform = "WeChat";
  let _hostName = fromRes.hostName || _platform;
  {
    if (fromRes.environment) {
      _hostName = fromRes.environment;
    } else if (fromRes.host && fromRes.host.env) {
      _hostName = fromRes.host.env;
    }
  }
  return _hostName;
}
const getSystemInfo = {
  returnValue: (fromRes, toRes) => {
    addSafeAreaInsets(fromRes, toRes);
    useDeviceId()(fromRes, toRes);
    populateParameters(fromRes, toRes);
  }
};
const getSystemInfoSync = getSystemInfo;
const redirectTo = {};
const previewImage = {
  args(fromArgs, toArgs) {
    let currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    const urls = fromArgs.urls;
    if (!isArray(urls)) {
      return;
    }
    const len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      toArgs.current = urls[currentIndex];
      toArgs.urls = urls.filter((item, index2) => index2 < currentIndex ? item !== urls[currentIndex] : true);
    } else {
      toArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
const showActionSheet = {
  args(fromArgs, toArgs) {
    toArgs.alertText = fromArgs.title;
  }
};
const getDeviceInfo = {
  returnValue: (fromRes, toRes) => {
    const { brand, model } = fromRes;
    let deviceType = getGetDeviceType(fromRes, model);
    let deviceBrand = getDeviceBrand(brand);
    useDeviceId()(fromRes, toRes);
    toRes = sortObject(extend(toRes, {
      deviceType,
      deviceBrand,
      deviceModel: model
    }));
  }
};
const getAppBaseInfo = {
  returnValue: (fromRes, toRes) => {
    const { version: version2, language, SDKVersion, theme } = fromRes;
    let _hostName = getHostName(fromRes);
    let hostLanguage = language.replace(/_/g, "-");
    toRes = sortObject(extend(toRes, {
      hostVersion: version2,
      hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme,
      appId: "__UNI__BB7BE8A",
      appName: "狮业有成",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage)
    }));
  }
};
const getWindowInfo = {
  returnValue: (fromRes, toRes) => {
    addSafeAreaInsets(fromRes, toRes);
    toRes = sortObject(extend(toRes, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
const getAppAuthorizeSetting = {
  returnValue: function(fromRes, toRes) {
    const { locationReducedAccuracy } = fromRes;
    toRes.locationAccuracy = "unsupported";
    if (locationReducedAccuracy === true) {
      toRes.locationAccuracy = "reduced";
    } else if (locationReducedAccuracy === false) {
      toRes.locationAccuracy = "full";
    }
  }
};
const baseApis = {
  $on,
  $off,
  $once,
  $emit,
  upx2px,
  interceptors,
  addInterceptor,
  removeInterceptor,
  onCreateVueApp,
  invokeCreateVueAppHook,
  getLocale,
  setLocale,
  onLocaleChange,
  getPushClientId,
  onPushMessage,
  offPushMessage,
  invokePushCallback
};
function initUni(api, protocols2, platform = wx) {
  const wrapper3 = initWrapper(protocols2);
  const UniProxyHandlers = {
    get(target, key) {
      if (hasOwn(target, key)) {
        return target[key];
      }
      if (hasOwn(api, key)) {
        return promisify(key, api[key]);
      }
      if (hasOwn(baseApis, key)) {
        return promisify(key, baseApis[key]);
      }
      return promisify(key, wrapper3(key, platform[key]));
    }
  };
  return new Proxy({}, UniProxyHandlers);
}
function initGetProvider(providers) {
  return function getProvider2({ service, success, fail, complete }) {
    let res;
    if (providers[service]) {
      res = {
        errMsg: "getProvider:ok",
        service,
        provider: providers[service]
      };
      isFunction(success) && success(res);
    } else {
      res = {
        errMsg: "getProvider:fail:服务[" + service + "]不存在"
      };
      isFunction(fail) && fail(res);
    }
    isFunction(complete) && complete(res);
  };
}
const objectKeys = [
  "qy",
  "env",
  "error",
  "version",
  "lanDebug",
  "cloud",
  "serviceMarket",
  "router",
  "worklet",
  "__webpack_require_UNI_MP_PLUGIN__"
];
const singlePageDisableKey = ["lanDebug", "router", "worklet"];
const launchOption = wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof wx[key] === "function";
}
function initWx() {
  const newWx = {};
  for (const key in wx) {
    if (isWxKey(key)) {
      newWx[key] = wx[key];
    }
  }
  if (typeof globalThis !== "undefined" && typeof requireMiniProgram === "undefined") {
    globalThis.wx = newWx;
  }
  return newWx;
}
const mocks$1 = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];
const getProvider = initGetProvider({
  oauth: ["weixin"],
  share: ["weixin"],
  payment: ["wxpay"],
  push: ["weixin"]
});
function initComponentMocks(component) {
  const res = /* @__PURE__ */ Object.create(null);
  mocks$1.forEach((name) => {
    res[name] = component[name];
  });
  return res;
}
function createSelectorQuery() {
  const query = wx$2.createSelectorQuery();
  const oldIn = query.in;
  query.in = function newIn(component) {
    return oldIn.call(this, initComponentMocks(component));
  };
  return query;
}
const wx$2 = initWx();
let baseInfo = wx$2.getAppBaseInfo && wx$2.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx$2.getSystemInfoSync();
}
const host = baseInfo ? baseInfo.host : null;
const shareVideoMessage = host && host.env === "SAAASDK" ? wx$2.miniapp.shareVideoMessage : wx$2.shareVideoMessage;
var shims = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  createSelectorQuery,
  getProvider,
  shareVideoMessage
});
const compressImage = {
  args(fromArgs, toArgs) {
    if (fromArgs.compressedHeight && !toArgs.compressHeight) {
      toArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !toArgs.compressWidth) {
      toArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  compressImage,
  getAppAuthorizeSetting,
  getAppBaseInfo,
  getDeviceInfo,
  getSystemInfo,
  getSystemInfoSync,
  getWindowInfo,
  previewImage,
  redirectTo,
  showActionSheet
});
const wx$1 = initWx();
var index = initUni(shims, protocols, wx$1);
function warn$1(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  get active() {
    return this._active;
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else {
      warn$1(`cannot run an inactive effect scope.`);
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
      this._active = false;
    }
  }
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    const eventInfo = { effect: activeEffect, target, type, key };
    trackEffects(dep, eventInfo);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (activeEffect.onTrack) {
      activeEffect.onTrack(Object.assign({ effect: activeEffect }, debuggerEventExtraInfo));
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const eventInfo = { target, type, key, newValue, oldValue, oldTarget };
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0], eventInfo);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects), eventInfo);
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray(dep) ? dep : [...dep];
  for (const effect of effects) {
    if (effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
  for (const effect of effects) {
    if (!effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if (effect.onTrigger) {
      effect.onTrigger(extend({ effect }, debuggerEventExtraInfo));
    }
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}
function getDepFromReactive(object, key) {
  var _a2;
  return (_a2 = targetMap.get(object)) === null || _a2 === void 0 ? void 0 : _a2.get(key);
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
const get$1 = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty(key) {
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2) {
      if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set$1 = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow) {
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function has$1(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get: get$1,
  set: set$1,
  deleteProperty,
  has: has$1,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    {
      warn$1(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  },
  deleteProperty(target, key) {
    {
      warn$1(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const shallowReadonlyHandlers = /* @__PURE__ */ extend({}, readonlyHandlers, {
  get: shallowReadonlyGet
});
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target[
    "__v_raw"
    /* ReactiveFlags.RAW */
  ];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has(key, isReadonly2 = false) {
  const target = this[
    "__v_raw"
    /* ReactiveFlags.RAW */
  ];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target[
    "__v_raw"
    /* ReactiveFlags.RAW */
  ];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto2 = getProto(target);
  const hadKey = proto2.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$2(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = isMap(target) ? new Map(target) : new Set(target);
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
    }
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get(this, key);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set: set$2,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set: set$2,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: createReadonlyMethod(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: createReadonlyMethod(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: createReadonlyMethod(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: createReadonlyMethod(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: createReadonlyMethod(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: createReadonlyMethod(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value[
    "__v_skip"
    /* ReactiveFlags.SKIP */
  ] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target[
    "__v_raw"
    /* ReactiveFlags.RAW */
  ] && !(isReadonly2 && target[
    "__v_isReactive"
    /* ReactiveFlags.IS_REACTIVE */
  ])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ]);
  }
  return !!(value && value[
    "__v_isReactive"
    /* ReactiveFlags.IS_REACTIVE */
  ]);
}
function isReadonly(value) {
  return !!(value && value[
    "__v_isReadonly"
    /* ReactiveFlags.IS_READONLY */
  ]);
}
function isShallow(value) {
  return !!(value && value[
    "__v_isShallow"
    /* ReactiveFlags.IS_SHALLOW */
  ]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed[
    "__v_raw"
    /* ReactiveFlags.RAW */
  ];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()), {
        target: ref2,
        type: "get",
        key: "value"
      });
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  const dep = ref2.dep;
  if (dep) {
    {
      triggerEffects(dep, {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal
      });
    }
  }
}
function isRef(r2) {
  return !!(r2 && r2.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this, newVal);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
function toRefs(object) {
  if (!isProxy(object)) {
    console.warn(`toRefs() expects a reactive object but received a plain one.`);
  }
  const ret = isArray(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = toRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(toRaw(this._object), this._key);
  }
}
function toRef(object, key, defaultValue) {
  const val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}
var _a;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this[_a] = false;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this[
      "__v_isReadonly"
      /* ReactiveFlags.IS_READONLY */
    ] = isReadonly2;
  }
  get value() {
    const self = toRaw(this);
    trackRefValue(self);
    if (self._dirty || !self._cacheable) {
      self._dirty = false;
      self._value = self.effect.run();
    }
    return self._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
_a = "__v_isReadonly";
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = () => {
      console.warn("Write operation failed: computed value is readonly");
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  if (debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}
const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
function warn(msg, ...args) {
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11, [
      msg + args.join(""),
      instance && instance.proxy,
      trace.map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
      trace
    ]);
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
const ErrorTypeStrings = {
  [
    "sp"
    /* LifecycleHooks.SERVER_PREFETCH */
  ]: "serverPrefetch hook",
  [
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  ]: "beforeCreate hook",
  [
    "c"
    /* LifecycleHooks.CREATED */
  ]: "created hook",
  [
    "bm"
    /* LifecycleHooks.BEFORE_MOUNT */
  ]: "beforeMount hook",
  [
    "m"
    /* LifecycleHooks.MOUNTED */
  ]: "mounted hook",
  [
    "bu"
    /* LifecycleHooks.BEFORE_UPDATE */
  ]: "beforeUpdate hook",
  [
    "u"
    /* LifecycleHooks.UPDATED */
  ]: "updated",
  [
    "bum"
    /* LifecycleHooks.BEFORE_UNMOUNT */
  ]: "beforeUnmount hook",
  [
    "um"
    /* LifecycleHooks.UNMOUNTED */
  ]: "unmounted hook",
  [
    "a"
    /* LifecycleHooks.ACTIVATED */
  ]: "activated hook",
  [
    "da"
    /* LifecycleHooks.DEACTIVATED */
  ]: "deactivated hook",
  [
    "ec"
    /* LifecycleHooks.ERROR_CAPTURED */
  ]: "errorCaptured hook",
  [
    "rtc"
    /* LifecycleHooks.RENDER_TRACKED */
  ]: "renderTracked hook",
  [
    "rtg"
    /* LifecycleHooks.RENDER_TRIGGERED */
  ]: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = ErrorTypeStrings[type] || type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    const info = ErrorTypeStrings[type] || type;
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      console.error(err);
    } else {
      console.error(err);
    }
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick$1(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function hasQueueJob(job) {
  return queue.indexOf(job) > -1;
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(seen, i = isFlushing ? flushIndex + 1 : 0) {
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.pre) {
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    {
      seen = seen || /* @__PURE__ */ new Map();
    }
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
  const diff2 = getId(a) - getId(b);
  if (diff2 === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff2;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  queue.sort(comparator);
  const check = (job) => checkRecursiveUpdates(seen, job);
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (check(job)) {
          continue;
        }
        callWithErrorHandling(
          job,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);
    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName(instance.type);
      warn(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`);
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
let devtools;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
  if (devtools) {
    devtools.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({ event, args });
  }
}
function setDevtoolsHook(hook, target) {
  var _a2, _b;
  devtools = hook;
  if (devtools) {
    devtools.enabled = true;
    buffer.forEach(({ event, args }) => devtools.emit(event, ...args));
    buffer = [];
  } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    // eslint-disable-next-line no-restricted-globals
    window.HTMLElement && // also exclude jsdom
    // eslint-disable-next-line no-restricted-globals
    !((_b = (_a2 = window.navigator) === null || _a2 === void 0 ? void 0 : _a2.userAgent) === null || _b === void 0 ? void 0 : _b.includes("jsdom"))
  ) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook(newHook, target);
    });
    setTimeout(() => {
      if (!devtools) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version2) {
  emit$1("app:init", app, version2, {
    Fragment,
    Text,
    Comment,
    Static
  });
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
);
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
);
const _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
);
const devtoolsComponentRemoved = (component) => {
  if (devtools && typeof devtools.cleanupBuffer === "function" && // remove the component if it wasn't buffered
  !devtools.cleanupBuffer(component)) {
    _devtoolsComponentRemoved(component);
  }
};
function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit$1(
      hook,
      component.appContext.app,
      component.uid,
      // fixed by xxxxxx
      // 为 0 是 App，无 parent 是 Page 指向 App
      component.uid === 0 ? void 0 : component.parent ? component.parent.uid : 0,
      component
    );
  };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
);
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function createDevtoolsPerformanceHook(hook) {
  return (component, type, time) => {
    emit$1(hook, component.appContext.app, component.uid, component, type, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit$1("component:emit", component.appContext.app, component, event, params);
}
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  {
    const { emitsOptions, propsOptions: [propsOptions] } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
          warn(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`);
        }
      } else {
        const validator = emitsOptions[event];
        if (isFunction(validator)) {
          const isValid = validator(...rawArgs);
          if (!isValid) {
            warn(`Invalid event arguments: event validation failed for event "${event}".`);
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => isString(a) ? a.trim() : a);
    }
    if (number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  {
    devtoolsComponentEmit(instance, event, args);
  }
  {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(event)}" instead of "${event}".`);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let currentRenderingInstance = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  instance && instance.type.__scopeId || null;
  return prev;
}
function provide(key, value) {
  if (!currentInstance) {
    {
      warn(`provide() can only be used inside setup().`);
    }
  } else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
    if (currentInstance.type.mpType === "app") {
      currentInstance.appContext.app.provide(key, value);
    }
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else {
      warn(`injection "${String(key)}" not found.`);
    }
  } else {
    warn(`inject() can only be used inside setup() or functional components.`);
  }
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  if (!isFunction(cb)) {
    warn(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  if (!cb) {
    if (immediate !== void 0) {
      warn(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
    }
    if (deep !== void 0) {
      warn(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
    }
  }
  const warnInvalidSource = (s2) => {
    warn(`Invalid watch source: `, s2, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
  };
  const instance = getCurrentScope() === (currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.scope) ? currentInstance : null;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s2) => isReactive(s2) || isShallow(s2));
    getter = () => source.map((s2) => {
      if (isRef(s2)) {
        return s2.value;
      } else if (isReactive(s2)) {
        return traverse(s2);
      } else if (isFunction(s2)) {
        return callWithErrorHandling(
          s2,
          instance,
          2
          /* ErrorCodes.WATCH_GETTER */
        );
      } else {
        warnInvalidSource(s2);
      }
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(
        source,
        instance,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
    warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(
        fn,
        instance,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  };
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect$1(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance)
      job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect = new ReactiveEffect(getter, scheduler);
  {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  }
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect$1(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }
  const unwatch = () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
  return unwatch;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen) {
  if (!isObject(value) || value[
    "__v_skip"
    /* ReactiveFlags.SKIP */
  ]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], seen);
    }
  }
  return value;
}
function defineComponent(options) {
  return isFunction(options) ? { setup: options, name: options.name } : options;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    if (isRootHook(type)) {
      target = target.root;
    }
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else {
    const apiName = toHandlerKey((ErrorTypeStrings[type] || type.replace(/^on/, "")).replace(/ hook$/, ""));
    warn(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().`);
  }
}
const createHook$1 = (lifecycle) => (hook, target = currentInstance) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
);
const onBeforeMount = createHook$1(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
);
const onMounted = createHook$1(
  "m"
  /* LifecycleHooks.MOUNTED */
);
const onBeforeUpdate = createHook$1(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
);
const onUpdated = createHook$1(
  "u"
  /* LifecycleHooks.UPDATED */
);
const onBeforeUnmount = createHook$1(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
);
const onUnmounted = createHook$1(
  "um"
  /* LifecycleHooks.UNMOUNTED */
);
const onServerPrefetch = createHook$1(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
);
const onRenderTriggered = createHook$1(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
);
const onRenderTracked = createHook$1(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn("Do not use built-in directive ids as custom directive id: " + name);
  }
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component2 = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(
        Component2,
        false
        /* do not include inferred name to avoid breaking existing code */
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component2;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component2[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component2;
    }
    if (warnMissing && !res) {
      const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
      warn(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
    }
    return res;
  } else {
    warn(`resolve${capitalize(type.slice(0, -1))} can only be used in render() or setup().`);
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    // fixed by xxxxxx vue-i18n 在 dev 模式，访问了 $el，故模拟一个假的
    // $el: i => i.vnode.el,
    $el: (i) => i.__$el || (i.__$el = {}),
    $data: (i) => i.data,
    $props: (i) => shallowReadonly(i.props),
    $attrs: (i) => shallowReadonly(i.attrs),
    $slots: (i) => shallowReadonly(i.slots),
    $refs: (i) => shallowReadonly(i.refs),
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
    // $nextTick: i => i.n || (i.n = nextTick.bind(i.proxy!)),// fixed by xxxxxx
    $watch: (i) => instanceWatch.bind(i)
  })
);
const isReservedPrefix = (key) => key === "_" || key === "$";
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if (key === "__isVue") {
      return true;
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n2 = accessCache[key];
      if (n2 !== void 0) {
        switch (n2) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
      ) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else if (currentRenderingInstance && (!isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
      } else if (instance === currentRenderingInstance) {
        warn(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
      }
    }
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
      warn(`Cannot mutate <script setup> binding "${key}" from Options API.`);
      return false;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      warn(`Attempting to mutate prop "${key}". Props are readonly.`);
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      warn(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`);
      return false;
    } else {
      if (key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
{
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
  };
}
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const { ctx, propsOptions: [propsOptions] } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const { ctx, setupState } = instance;
  Object.keys(toRaw(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP
      });
    }
  });
}
function createDuplicateChecker() {
  const cache = /* @__PURE__ */ Object.create(null);
  return (type, key) => {
    if (cache[key]) {
      warn(`${type} property "${key}" is already defined in ${cache[key]}.`);
    } else {
      cache[key] = type;
    }
  };
}
let shouldCacheAccess = true;
function applyOptions$1(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(
      options.beforeCreate,
      instance,
      "bc"
      /* LifecycleHooks.BEFORE_CREATE */
    );
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = createDuplicateChecker();
  {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props", key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        }
        {
          checkDuplicateProperties("Methods", key);
        }
      } else {
        warn(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
      }
    }
  }
  if (dataOptions) {
    if (!isFunction(dataOptions)) {
      warn(`The data option must be a function. Plain object usage is no longer supported.`);
    }
    const data = dataOptions.call(publicThis, publicThis);
    if (isPromise(data)) {
      warn(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
    }
    if (!isObject(data)) {
      warn(`data() should return an object.`);
    } else {
      instance.data = reactive(data);
      {
        for (const key in data) {
          checkDuplicateProperties("Data", key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (get2 === NOOP) {
        warn(`Computed property "${key}" has no getter.`);
      }
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : () => {
        warn(`Write operation failed: computed property "${key}" is readonly.`);
      };
      const c = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
      {
        checkDuplicateProperties("Computed", key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  {
    if (provideOptions) {
      const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
  }
  {
    if (created) {
      callHook$1(
        created,
        instance,
        "c"
        /* LifecycleHooks.CREATED */
      );
    }
  }
  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
  if (instance.ctx.$onApplyOptions) {
    instance.ctx.$onApplyOptions(options, instance, publicThis);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
          /* treat default function as factory */
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v) => injected.value = v
        });
      } else {
        {
          warn(`injected property "${key}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`);
        }
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
    {
      checkDuplicateProperties("Inject", key);
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(isArray(hook) ? hook.map((h) => h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    } else {
      warn(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject(raw)) {
    if (isArray(raw)) {
      raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      } else {
        warn(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else {
    warn(`Invalid watch option: "${key}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
      warn(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray$1,
  created: mergeAsArray$1,
  beforeMount: mergeAsArray$1,
  mounted: mergeAsArray$1,
  beforeUpdate: mergeAsArray$1,
  updated: mergeAsArray$1,
  beforeDestroy: mergeAsArray$1,
  beforeUnmount: mergeAsArray$1,
  destroyed: mergeAsArray$1,
  unmounted: mergeAsArray$1,
  activated: mergeAsArray$1,
  deactivated: mergeAsArray$1,
  errorCaptured: mergeAsArray$1,
  serverPrefetch: mergeAsArray$1,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray$1(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray$1(to[key], from[key]);
  }
  return merged;
}
function initProps$1(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId)
      return true;
    instance = instance.parent;
  }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const { props, attrs, vnode: { patchFlag } } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
              /* isAbsent */
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
              /* isAbsent */
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[
      0
      /* BooleanFlags.shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* BooleanFlags.shouldCastTrue */
      ] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if (!isString(raw[i])) {
        warn(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject(raw)) {
      warn(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : Object.assign({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[
            0
            /* BooleanFlags.shouldCast */
          ] = booleanIndex > -1;
          prop[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  } else {
    warn(`Invalid prop name: "${key}" is a reserved property.`);
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
  return match ? match[2] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray(expectedTypes)) {
    return expectedTypes.findIndex((t2) => isSameType(t2, type));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = toRaw(props);
  const options = instance.propsOptions[0];
  for (const key in options) {
    let opt = options[key];
    if (opt == null)
      continue;
    validateProp(key, resolvedValues[key], opt, !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
  }
}
function validateProp(name, value, prop, isAbsent) {
  const { type, required, validator } = prop;
  if (required && isAbsent) {
    warn('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  if (type != null && type !== true) {
    let isValid = false;
    const types = isArray(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value)) {
    warn('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
const isSimpleType = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol,BigInt");
function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (isSimpleType(expectedType)) {
    const t2 = typeof value;
    valid = t2 === expectedType.toLowerCase();
    if (!valid && t2 === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else if (expectedType === "null") {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean$1(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean$1(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = Object.assign({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      warn(`root props passed to app.mount() must be an object.`);
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        {
          warn(`app.config cannot be replaced. Modify individual options instead.`);
        }
      },
      use(plugin2, ...options) {
        if (installedPlugins.has(plugin2)) {
          warn(`Plugin has already been applied to target app.`);
        } else if (plugin2 && isFunction(plugin2.install)) {
          installedPlugins.add(plugin2);
          plugin2.install(app, ...options);
        } else if (isFunction(plugin2)) {
          installedPlugins.add(plugin2);
          plugin2(app, ...options);
        } else {
          warn(`A plugin must either be a function or an object with an "install" function.`);
        }
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else {
            warn("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
          }
        }
        return app;
      },
      component(name, component) {
        {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if (context.components[name]) {
          warn(`Component "${name}" has already been registered in target app.`);
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if (context.directives[name]) {
          warn(`Directive "${name}" has already been registered in target app.`);
        }
        context.directives[name] = directive;
        return app;
      },
      // fixed by xxxxxx
      mount() {
      },
      // fixed by xxxxxx
      unmount() {
      },
      provide(key, value) {
        if (key in context.provides) {
          warn(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
        }
        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}
let supported;
let perf;
function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark(`vue-${type}-${instance.uid}`);
  }
  {
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    const startTag = `vue-${type}-${instance.uid}`;
    const endTag = startTag + `:end`;
    perf.mark(endTag);
    perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
  {
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function isSupported() {
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  return supported;
}
const queuePostRenderEffect$1 = queuePostFlushCb;
const Fragment = Symbol("Fragment");
const Text = Symbol("Text");
const Comment = Symbol("Comment");
const Static = Symbol("Static");
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
const InternalObjectKey = `__vInternal`;
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = createDevRenderContext(instance);
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
const isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, config) {
  const appIsNativeTag = config.isNativeTag || NO;
  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn("Do not use built-in or reserved HTML elements as component id: " + name);
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const {
    props
    /*, children*/
  } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps$1(instance, props, isStateful, isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component2 = instance.type;
  {
    if (Component2.name) {
      validateComponentName(Component2.name, instance.appContext.config);
    }
    if (Component2.components) {
      const names = Object.keys(Component2.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component2.directives) {
      const names = Object.keys(Component2.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component2.compilerOptions && isRuntimeOnly()) {
      warn(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  {
    exposePropsOnRenderContext(instance);
  }
  const { setup } = Component2;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance, 0, [shallowReadonly(instance.props), setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      {
        warn(`setup() returned a Promise, but the version of Vue you are using does not support it yet.`);
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    if (isVNode(setupResult)) {
      warn(`setup() should not return VNodes directly - return a render function instead.`);
    }
    {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (setupResult !== void 0) {
    warn(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
  }
  finishComponentSetup(instance, isSSR);
}
let compile;
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component2 = instance.type;
  if (!instance.render) {
    instance.render = Component2.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions$1(instance);
    resetTracking();
    unsetCurrentInstance();
  }
  if (!Component2.render && instance.render === NOOP && !isSSR) {
    if (Component2.template) {
      warn(
        `Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
        /* should not happen */
      );
    } else {
      warn(`Component is missing template or render function.`);
    }
  }
}
function createAttrsProxy(instance) {
  return new Proxy(
    instance.attrs,
    {
      get(target, key) {
        track(instance, "get", "$attrs");
        return target[key];
      },
      set() {
        warn(`setupContext.attrs is readonly.`);
        return false;
      },
      deleteProperty() {
        warn(`setupContext.attrs is readonly.`);
        return false;
      }
    }
  );
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    {
      if (instance.exposed) {
        warn(`expose() should be called only once per setup().`);
      }
      if (exposed != null) {
        let exposedType = typeof exposed;
        if (exposedType === "object") {
          if (isArray(exposed)) {
            exposedType = "array";
          } else if (isRef(exposed)) {
            exposedType = "ref";
          }
        }
        if (exposedType !== "object") {
          warn(`expose() should be passed a plain object, received ${exposedType}.`);
        }
      }
    }
    instance.exposed = exposed || {};
  };
  let attrs;
  {
    return Object.freeze({
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      get slots() {
        return shallowReadonly(instance.slots);
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        }
        return instance.proxy[key];
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component2, includeInferred = true) {
  return isFunction(Component2) ? Component2.displayName || Component2.name : Component2.name || includeInferred && Component2.__name;
}
function formatComponentName(instance, Component2, isRoot = false) {
  let name = getComponentName(Component2);
  if (!name && Component2.__file) {
    const match = Component2.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component2) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function useSlots() {
  return getContext().slots;
}
function getContext() {
  const i = getCurrentInstance();
  if (!i) {
    warn(`useContext() called without active instance.`);
  }
  return i.setupContext || (i.setupContext = createSetupContext(i));
}
const version = "3.2.47";
function unwrapper(target) {
  return unref(target);
}
const ARRAYTYPE = "[object Array]";
const OBJECTTYPE = "[object Object]";
function diff(current, pre) {
  const result = {};
  syncKeys(current, pre);
  _diff(current, pre, "", result);
  return result;
}
function syncKeys(current, pre) {
  current = unwrapper(current);
  if (current === pre)
    return;
  const rootCurrentType = toTypeString(current);
  const rootPreType = toTypeString(pre);
  if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
    for (let key in pre) {
      const currentValue = current[key];
      if (currentValue === void 0) {
        current[key] = null;
      } else {
        syncKeys(currentValue, pre[key]);
      }
    }
  } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
    if (current.length >= pre.length) {
      pre.forEach((item, index2) => {
        syncKeys(current[index2], item);
      });
    }
  }
}
function _diff(current, pre, path, result) {
  current = unwrapper(current);
  if (current === pre)
    return;
  const rootCurrentType = toTypeString(current);
  const rootPreType = toTypeString(pre);
  if (rootCurrentType == OBJECTTYPE) {
    if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
      setResult(result, path, current);
    } else {
      for (let key in current) {
        const currentValue = unwrapper(current[key]);
        const preValue = pre[key];
        const currentType = toTypeString(currentValue);
        const preType = toTypeString(preValue);
        if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
          if (currentValue != preValue) {
            setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
          }
        } else if (currentType == ARRAYTYPE) {
          if (preType != ARRAYTYPE) {
            setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
          } else {
            if (currentValue.length < preValue.length) {
              setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
            } else {
              currentValue.forEach((item, index2) => {
                _diff(item, preValue[index2], (path == "" ? "" : path + ".") + key + "[" + index2 + "]", result);
              });
            }
          }
        } else if (currentType == OBJECTTYPE) {
          if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
            setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
          } else {
            for (let subKey in currentValue) {
              _diff(currentValue[subKey], preValue[subKey], (path == "" ? "" : path + ".") + key + "." + subKey, result);
            }
          }
        }
      }
    }
  } else if (rootCurrentType == ARRAYTYPE) {
    if (rootPreType != ARRAYTYPE) {
      setResult(result, path, current);
    } else {
      if (current.length < pre.length) {
        setResult(result, path, current);
      } else {
        current.forEach((item, index2) => {
          _diff(item, pre[index2], path + "[" + index2 + "]", result);
        });
      }
    }
  } else {
    setResult(result, path, current);
  }
}
function setResult(result, k, v) {
  result[k] = v;
}
function hasComponentEffect(instance) {
  return queue.includes(instance.update);
}
function flushCallbacks(instance) {
  const ctx = instance.ctx;
  const callbacks = ctx.__next_tick_callbacks;
  if (callbacks && callbacks.length) {
    const copies = callbacks.slice(0);
    callbacks.length = 0;
    for (let i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }
}
function nextTick(instance, fn) {
  const ctx = instance.ctx;
  if (!ctx.__next_tick_pending && !hasComponentEffect(instance)) {
    return nextTick$1(fn && fn.bind(instance.proxy));
  }
  let _resolve;
  if (!ctx.__next_tick_callbacks) {
    ctx.__next_tick_callbacks = [];
  }
  ctx.__next_tick_callbacks.push(() => {
    if (fn) {
      callWithErrorHandling(
        fn.bind(instance.proxy),
        instance,
        14
        /* ErrorCodes.SCHEDULER */
      );
    } else if (_resolve) {
      _resolve(instance.proxy);
    }
  });
  return new Promise((resolve2) => {
    _resolve = resolve2;
  });
}
function clone(src, seen) {
  src = unwrapper(src);
  const type = typeof src;
  if (type === "object" && src !== null) {
    let copy = seen.get(src);
    if (typeof copy !== "undefined") {
      return copy;
    }
    if (isArray(src)) {
      const len = src.length;
      copy = new Array(len);
      seen.set(src, copy);
      for (let i = 0; i < len; i++) {
        copy[i] = clone(src[i], seen);
      }
    } else {
      copy = {};
      seen.set(src, copy);
      for (const name in src) {
        if (hasOwn(src, name)) {
          copy[name] = clone(src[name], seen);
        }
      }
    }
    return copy;
  }
  if (type !== "symbol") {
    return src;
  }
}
function deepCopy(src) {
  return clone(src, typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : /* @__PURE__ */ new Map());
}
function getMPInstanceData(instance, keys) {
  const data = instance.data;
  const ret = /* @__PURE__ */ Object.create(null);
  keys.forEach((key) => {
    ret[key] = data[key];
  });
  return ret;
}
function patch(instance, data, oldData) {
  if (!data) {
    return;
  }
  data = deepCopy(data);
  const ctx = instance.ctx;
  const mpType = ctx.mpType;
  if (mpType === "page" || mpType === "component") {
    data.r0 = 1;
    const mpInstance = ctx.$scope;
    const keys = Object.keys(data);
    const diffData = diff(data, oldData || getMPInstanceData(mpInstance, keys));
    if (Object.keys(diffData).length) {
      ctx.__next_tick_pending = true;
      mpInstance.setData(diffData, () => {
        ctx.__next_tick_pending = false;
        flushCallbacks(instance);
      });
      flushPreFlushCbs();
    } else {
      flushCallbacks(instance);
    }
  }
}
function initAppConfig(appConfig) {
  appConfig.globalProperties.$nextTick = function $nextTick(fn) {
    return nextTick(this.$, fn);
  };
}
function onApplyOptions(options, instance, publicThis) {
  instance.appContext.config.globalProperties.$applyOptions(options, instance, publicThis);
  const computedOptions = options.computed;
  if (computedOptions) {
    const keys = Object.keys(computedOptions);
    if (keys.length) {
      const ctx = instance.ctx;
      if (!ctx.$computedKeys) {
        ctx.$computedKeys = [];
      }
      ctx.$computedKeys.push(...keys);
    }
  }
  delete instance.ctx.$onApplyOptions;
}
function setRef$1(instance, isUnmount = false) {
  const { setupState, $templateRefs, ctx: { $scope, $mpPlatform } } = instance;
  if ($mpPlatform === "mp-alipay") {
    return;
  }
  if (!$templateRefs || !$scope) {
    return;
  }
  if (isUnmount) {
    return $templateRefs.forEach((templateRef) => setTemplateRef(templateRef, null, setupState));
  }
  const check = $mpPlatform === "mp-baidu" || $mpPlatform === "mp-toutiao";
  const doSetByRefs = (refs) => {
    const mpComponents = (
      // 字节小程序 selectAllComponents 可能返回 null
      // https://github.com/dcloudio/uni-app/issues/3954
      ($scope.selectAllComponents(".r") || []).concat($scope.selectAllComponents(".r-i-f") || [])
    );
    return refs.filter((templateRef) => {
      const refValue = findComponentPublicInstance(mpComponents, templateRef.i);
      if (check && refValue === null) {
        return true;
      }
      setTemplateRef(templateRef, refValue, setupState);
      return false;
    });
  };
  const doSet = () => {
    const refs = doSetByRefs($templateRefs);
    if (refs.length && instance.proxy && instance.proxy.$scope) {
      instance.proxy.$scope.setData({ r1: 1 }, () => {
        doSetByRefs(refs);
      });
    }
  };
  if ($scope._$setRef) {
    $scope._$setRef(doSet);
  } else {
    nextTick(instance, doSet);
  }
}
function toSkip(value) {
  if (isObject(value)) {
    markRaw(value);
  }
  return value;
}
function findComponentPublicInstance(mpComponents, id) {
  const mpInstance = mpComponents.find((com) => com && (com.properties || com.props).uI === id);
  if (mpInstance) {
    const vm = mpInstance.$vm;
    if (vm) {
      return getExposeProxy(vm.$) || vm;
    }
    return toSkip(mpInstance);
  }
  return null;
}
function setTemplateRef({ r: r2, f: f2 }, refValue, setupState) {
  if (isFunction(r2)) {
    r2(refValue, {});
  } else {
    const _isString = isString(r2);
    const _isRef = isRef(r2);
    if (_isString || _isRef) {
      if (f2) {
        if (!_isRef) {
          return;
        }
        if (!isArray(r2.value)) {
          r2.value = [];
        }
        const existing = r2.value;
        if (existing.indexOf(refValue) === -1) {
          existing.push(refValue);
          if (!refValue) {
            return;
          }
          onBeforeUnmount(() => remove(existing, refValue), refValue.$);
        }
      } else if (_isString) {
        if (hasOwn(setupState, r2)) {
          setupState[r2] = refValue;
        }
      } else if (isRef(r2)) {
        r2.value = refValue;
      } else {
        warnRef(r2);
      }
    } else {
      warnRef(r2);
    }
  }
}
function warnRef(ref2) {
  warn("Invalid template ref type:", ref2, `(${typeof ref2})`);
}
var MPType;
(function(MPType2) {
  MPType2["APP"] = "app";
  MPType2["PAGE"] = "page";
  MPType2["COMPONENT"] = "component";
})(MPType || (MPType = {}));
const queuePostRenderEffect = queuePostFlushCb;
function mountComponent(initialVNode, options) {
  const instance = initialVNode.component = createComponentInstance(initialVNode, options.parentComponent, null);
  {
    instance.ctx.$onApplyOptions = onApplyOptions;
    instance.ctx.$children = [];
  }
  if (options.mpType === "app") {
    instance.render = NOOP;
  }
  if (options.onBeforeSetup) {
    options.onBeforeSetup(instance, options);
  }
  {
    pushWarningContext(initialVNode);
    startMeasure(instance, `mount`);
  }
  {
    startMeasure(instance, `init`);
  }
  setupComponent(instance);
  {
    endMeasure(instance, `init`);
  }
  {
    if (options.parentComponent && instance.proxy) {
      options.parentComponent.ctx.$children.push(getExposeProxy(instance) || instance.proxy);
    }
  }
  setupRenderEffect(instance);
  {
    popWarningContext();
    endMeasure(instance, `mount`);
  }
  return instance.proxy;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
function renderComponentRoot(instance) {
  const { type: Component2, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit: emit2, render, renderCache, data, setupState, ctx, uid: uid2, appContext: { app: { config: { globalProperties: { pruneComponentPropsCache: pruneComponentPropsCache2 } } } }, inheritAttrs } = instance;
  instance.$templateRefs = [];
  instance.$ei = 0;
  pruneComponentPropsCache2(uid2);
  instance.__counter = instance.__counter === 0 ? 1 : 0;
  let result;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      fallthroughAttrs(inheritAttrs, props, propsOptions, attrs);
      const proxyToUse = withProxy || proxy;
      result = render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx);
    } else {
      fallthroughAttrs(inheritAttrs, props, propsOptions, Component2.props ? attrs : getFunctionalFallthrough(attrs));
      const render2 = Component2;
      result = render2.length > 1 ? render2(props, { attrs, slots, emit: emit2 }) : render2(
        props,
        null
        /* we know it doesn't need it */
      );
    }
  } catch (err) {
    handleError(
      err,
      instance,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    );
    result = false;
  }
  setRef$1(instance);
  setCurrentRenderingInstance(prev);
  return result;
}
function fallthroughAttrs(inheritAttrs, props, propsOptions, fallthroughAttrs2) {
  if (props && fallthroughAttrs2 && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs2).filter((key) => key !== "class" && key !== "style");
    if (!keys.length) {
      return;
    }
    if (propsOptions && keys.some(isModelListener)) {
      keys.forEach((key) => {
        if (!isModelListener(key) || !(key.slice(9) in propsOptions)) {
          props[key] = fallthroughAttrs2[key];
        }
      });
    } else {
      keys.forEach((key) => props[key] = fallthroughAttrs2[key]);
    }
  }
}
const updateComponentPreRender = (instance) => {
  pauseTracking();
  flushPreFlushCbs();
  resetTracking();
};
function componentUpdateScopedSlotsFn() {
  const scopedSlotsData = this.$scopedSlotsData;
  if (!scopedSlotsData || scopedSlotsData.length === 0) {
    return;
  }
  const mpInstance = this.ctx.$scope;
  const oldData = mpInstance.data;
  const diffData = /* @__PURE__ */ Object.create(null);
  scopedSlotsData.forEach(({ path, index: index2, data }) => {
    const oldScopedSlotData = getValueByDataPath(oldData, path);
    const diffPath = isString(index2) ? `${path}.${index2}` : `${path}[${index2}]`;
    if (typeof oldScopedSlotData === "undefined" || typeof oldScopedSlotData[index2] === "undefined") {
      diffData[diffPath] = data;
    } else {
      const diffScopedSlotData = diff(data, oldScopedSlotData[index2]);
      Object.keys(diffScopedSlotData).forEach((name) => {
        diffData[diffPath + "." + name] = diffScopedSlotData[name];
      });
    }
  });
  scopedSlotsData.length = 0;
  if (Object.keys(diffData).length) {
    mpInstance.setData(diffData);
  }
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function setupRenderEffect(instance) {
  const updateScopedSlots = componentUpdateScopedSlotsFn.bind(instance);
  instance.$updateScopedSlots = () => nextTick$1(() => queueJob(updateScopedSlots));
  const componentUpdateFn = () => {
    if (!instance.isMounted) {
      onBeforeUnmount(() => {
        setRef$1(instance, true);
      }, instance);
      {
        startMeasure(instance, `patch`);
      }
      patch(instance, renderComponentRoot(instance));
      {
        endMeasure(instance, `patch`);
      }
      {
        devtoolsComponentAdded(instance);
      }
    } else {
      const { next, bu, u } = instance;
      {
        pushWarningContext(next || instance.vnode);
      }
      toggleRecurse(instance, false);
      updateComponentPreRender();
      if (bu) {
        invokeArrayFns$1(bu);
      }
      toggleRecurse(instance, true);
      {
        startMeasure(instance, `patch`);
      }
      patch(instance, renderComponentRoot(instance));
      {
        endMeasure(instance, `patch`);
      }
      if (u) {
        queuePostRenderEffect(u);
      }
      {
        devtoolsComponentUpdated(instance);
      }
      {
        popWarningContext();
      }
    }
  };
  const effect = instance.effect = new ReactiveEffect(
    componentUpdateFn,
    () => queueJob(instance.update),
    instance.scope
    // track it in component's effect scope
  );
  const update = instance.update = effect.run.bind(effect);
  update.id = instance.uid;
  toggleRecurse(instance, true);
  {
    effect.onTrack = instance.rtc ? (e2) => invokeArrayFns$1(instance.rtc, e2) : void 0;
    effect.onTrigger = instance.rtg ? (e2) => invokeArrayFns$1(instance.rtg, e2) : void 0;
    update.ownerInstance = instance;
  }
  update();
}
function unmountComponent(instance) {
  const { bum, scope, update, um } = instance;
  if (bum) {
    invokeArrayFns$1(bum);
  }
  scope.stop();
  if (update) {
    update.active = false;
  }
  if (um) {
    queuePostRenderEffect(um);
  }
  queuePostRenderEffect(() => {
    instance.isUnmounted = true;
  });
  {
    devtoolsComponentRemoved(instance);
  }
}
const oldCreateApp = createAppAPI();
function getTarget() {
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof my !== "undefined") {
    return my;
  }
}
function createVueApp(rootComponent, rootProps = null) {
  const target = getTarget();
  target.__VUE__ = true;
  {
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  const app = oldCreateApp(rootComponent, rootProps);
  const appContext = app._context;
  initAppConfig(appContext.config);
  const createVNode = (initialVNode) => {
    initialVNode.appContext = appContext;
    initialVNode.shapeFlag = 6;
    return initialVNode;
  };
  const createComponent2 = function createComponent3(initialVNode, options) {
    return mountComponent(createVNode(initialVNode), options);
  };
  const destroyComponent = function destroyComponent2(component) {
    return component && unmountComponent(component.$);
  };
  app.mount = function mount() {
    rootComponent.render = NOOP;
    const instance = mountComponent(createVNode({ type: rootComponent }), {
      mpType: MPType.APP,
      mpInstance: null,
      parentComponent: null,
      slots: [],
      props: null
    });
    app._instance = instance.$;
    {
      devtoolsInitApp(app, version);
    }
    instance.$app = app;
    instance.$createComponent = createComponent2;
    instance.$destroyComponent = destroyComponent;
    appContext.$appInstance = instance;
    return instance;
  };
  app.unmount = function unmount() {
    warn(`Cannot unmount an app.`);
  };
  return app;
}
function injectLifecycleHook(name, hook, publicThis, instance) {
  if (isFunction(hook)) {
    injectHook(name, hook.bind(publicThis), instance);
  }
}
function initHooks$1(options, instance, publicThis) {
  const mpType = options.mpType || publicThis.$mpType;
  if (!mpType || mpType === "component") {
    return;
  }
  Object.keys(options).forEach((name) => {
    if (isUniLifecycleHook(name, options[name], false)) {
      const hooks = options[name];
      if (isArray(hooks)) {
        hooks.forEach((hook) => injectLifecycleHook(name, hook, publicThis, instance));
      } else {
        injectLifecycleHook(name, hooks, publicThis, instance);
      }
    }
  });
}
function applyOptions$2(options, instance, publicThis) {
  initHooks$1(options, instance, publicThis);
}
function set(target, key, val) {
  return target[key] = val;
}
function createErrorHandler(app) {
  return function errorHandler(err, instance, _info) {
    if (!instance) {
      throw err;
    }
    const appInstance = app._instance;
    if (!appInstance || !appInstance.proxy) {
      throw err;
    }
    {
      appInstance.proxy.$callHook(ON_ERROR, err);
    }
  };
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function initOptionMergeStrategies(optionMergeStrategies) {
  UniLifecycleHooks.forEach((name) => {
    optionMergeStrategies[name] = mergeAsArray;
  });
}
let realAtob;
const b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== "function") {
  realAtob = function(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, "");
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }
    str += "==".slice(2 - (str.length & 3));
    var bitmap;
    var result = "";
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length; ) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split("").map(function(c) {
    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}
function getCurrentUserInfo() {
  const token = index.getStorageSync("uni_id_token") || "";
  const tokenArr = token.split(".");
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  let userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1e3;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(globalProperties) {
  globalProperties.uniIDHasRole = function(roleId) {
    const { role } = getCurrentUserInfo();
    return role.indexOf(roleId) > -1;
  };
  globalProperties.uniIDHasPermission = function(permissionId) {
    const { permission } = getCurrentUserInfo();
    return this.uniIDHasRole("admin") || permission.indexOf(permissionId) > -1;
  };
  globalProperties.uniIDTokenValid = function() {
    const { tokenExpired } = getCurrentUserInfo();
    return tokenExpired > Date.now();
  };
}
function initApp(app) {
  const appConfig = app._context.config;
  appConfig.errorHandler = invokeCreateErrorHandler(app, createErrorHandler);
  initOptionMergeStrategies(appConfig.optionMergeStrategies);
  const globalProperties = appConfig.globalProperties;
  {
    uniIdMixin(globalProperties);
  }
  {
    globalProperties.$set = set;
    globalProperties.$applyOptions = applyOptions$2;
  }
  {
    index.invokeCreateVueAppHook(app);
  }
}
const propsCaches = /* @__PURE__ */ Object.create(null);
function renderProps(props) {
  const { uid: uid2, __counter } = getCurrentInstance();
  const propsId = (propsCaches[uid2] || (propsCaches[uid2] = [])).push(guardReactiveProps(props)) - 1;
  return uid2 + "," + propsId + "," + __counter;
}
function pruneComponentPropsCache(uid2) {
  delete propsCaches[uid2];
}
function findComponentPropsData(up) {
  if (!up) {
    return;
  }
  const [uid2, propsId] = up.split(",");
  if (!propsCaches[uid2]) {
    return;
  }
  return propsCaches[uid2][parseInt(propsId)];
}
var plugin = {
  install(app) {
    initApp(app);
    app.config.globalProperties.pruneComponentPropsCache = pruneComponentPropsCache;
    const oldMount = app.mount;
    app.mount = function mount(rootContainer) {
      const instance = oldMount.call(app, rootContainer);
      const createApp2 = getCreateApp();
      if (createApp2) {
        createApp2(instance);
      } else {
        if (typeof createMiniProgramApp !== "undefined") {
          createMiniProgramApp(instance);
        }
      }
      return instance;
    };
  }
};
function getCreateApp() {
  const method = "createApp";
  if (typeof global !== "undefined") {
    return global[method];
  } else if (typeof my !== "undefined") {
    return my[method];
  }
}
function vOn(value, key) {
  const instance = getCurrentInstance();
  const ctx = instance.ctx;
  const extraKey = typeof key !== "undefined" && (ctx.$mpPlatform === "mp-weixin" || ctx.$mpPlatform === "mp-qq") && (isString(key) || typeof key === "number") ? "_" + key : "";
  const name = "e" + instance.$ei++ + extraKey;
  const mpInstance = ctx.$scope;
  if (!value) {
    delete mpInstance[name];
    return name;
  }
  const existingInvoker = mpInstance[name];
  if (existingInvoker) {
    existingInvoker.value = value;
  } else {
    mpInstance[name] = createInvoker(value, instance);
  }
  return name;
}
function createInvoker(initialValue, instance) {
  const invoker = (e2) => {
    patchMPEvent(e2);
    let args = [e2];
    if (e2.detail && e2.detail.__args__) {
      args = e2.detail.__args__;
    }
    const eventValue = invoker.value;
    const invoke = () => callWithAsyncErrorHandling(patchStopImmediatePropagation(e2, eventValue), instance, 5, args);
    const eventTarget = e2.target;
    const eventSync = eventTarget ? eventTarget.dataset ? String(eventTarget.dataset.eventsync) === "true" : false : false;
    if (bubbles.includes(e2.type) && !eventSync) {
      setTimeout(invoke);
    } else {
      const res = invoke();
      if (e2.type === "input" && (isArray(res) || isPromise(res))) {
        return;
      }
      return res;
    }
  };
  invoker.value = initialValue;
  return invoker;
}
const bubbles = [
  // touch事件暂不做延迟，否则在 Android 上会影响性能，比如一些拖拽跟手手势等
  // 'touchstart',
  // 'touchmove',
  // 'touchcancel',
  // 'touchend',
  "tap",
  "longpress",
  "longtap",
  "transitionend",
  "animationstart",
  "animationiteration",
  "animationend",
  "touchforcechange"
];
function patchMPEvent(event) {
  if (event.type && event.target) {
    event.preventDefault = NOOP;
    event.stopPropagation = NOOP;
    event.stopImmediatePropagation = NOOP;
    if (!hasOwn(event, "detail")) {
      event.detail = {};
    }
    if (hasOwn(event, "markerId")) {
      event.detail = typeof event.detail === "object" ? event.detail : {};
      event.detail.markerId = event.markerId;
    }
    if (isPlainObject(event.detail) && hasOwn(event.detail, "checked") && !hasOwn(event.detail, "value")) {
      event.detail.value = event.detail.checked;
    }
    if (isPlainObject(event.detail)) {
      event.target = extend({}, event.target, event.detail);
    }
  }
}
function patchStopImmediatePropagation(e2, value) {
  if (isArray(value)) {
    const originalStop = e2.stopImmediatePropagation;
    e2.stopImmediatePropagation = () => {
      originalStop && originalStop.call(e2);
      e2._stopped = true;
    };
    return value.map((fn) => (e3) => !e3._stopped && fn(e3));
  } else {
    return value;
  }
}
function vFor(source, renderItem) {
  let ret;
  if (isArray(source) || isString(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, i);
    }
  } else if (typeof source === "number") {
    if (!Number.isInteger(source)) {
      warn(`The v-for range expect an integer value but got ${source}.`);
      return [];
    }
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, i);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i) => renderItem(item, i, i));
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i);
      }
    }
  } else {
    ret = [];
  }
  return ret;
}
function renderSlot(name, props = {}, key) {
  const instance = getCurrentInstance();
  const { parent, isMounted, ctx: { $scope } } = instance;
  const vueIds = ($scope.properties || $scope.props).uI;
  if (!vueIds) {
    return;
  }
  if (!parent && !isMounted) {
    onMounted(() => {
      renderSlot(name, props, key);
    }, instance);
    return;
  }
  const invoker = findScopedSlotInvoker(vueIds, instance);
  if (invoker) {
    invoker(name, props, key);
  }
}
function findScopedSlotInvoker(vueId, instance) {
  let parent = instance.parent;
  while (parent) {
    const invokers = parent.$ssi;
    if (invokers && invokers[vueId]) {
      return invokers[vueId];
    }
    parent = parent.parent;
  }
}
function withScopedSlot(fn, { name, path, vueId }) {
  const instance = getCurrentInstance();
  fn.path = path;
  const scopedSlots = instance.$ssi || (instance.$ssi = {});
  const invoker = scopedSlots[vueId] || (scopedSlots[vueId] = createScopedSlotInvoker(instance));
  if (!invoker.slots[name]) {
    invoker.slots[name] = {
      fn
    };
  } else {
    invoker.slots[name].fn = fn;
  }
  return getValueByDataPath(instance.ctx.$scope.data, path);
}
function createScopedSlotInvoker(instance) {
  const invoker = (slotName, args, index2) => {
    const slot = invoker.slots[slotName];
    if (!slot) {
      return;
    }
    const hasIndex = typeof index2 !== "undefined";
    index2 = index2 || 0;
    const prevInstance = setCurrentRenderingInstance(instance);
    const data = slot.fn(args, slotName + (hasIndex ? "-" + index2 : ""), index2);
    const path = slot.fn.path;
    setCurrentRenderingInstance(prevInstance);
    (instance.$scopedSlotsData || (instance.$scopedSlotsData = [])).push({
      path,
      index: index2,
      data
    });
    instance.$updateScopedSlots();
  };
  invoker.slots = {};
  return invoker;
}
function stringifyStyle(value) {
  if (isString(value)) {
    return value;
  }
  return stringify(normalizeStyle(value));
}
function stringify(styles) {
  let ret = "";
  if (!styles || isString(styles)) {
    return ret;
  }
  for (const key in styles) {
    ret += `${key.startsWith(`--`) ? key : hyphenate(key)}:${styles[key]};`;
  }
  return ret;
}
function setRef(ref2, id, opts = {}) {
  const { $templateRefs } = getCurrentInstance();
  $templateRefs.push({ i: id, r: ref2, k: opts.k, f: opts.f });
}
const o = (value, key) => vOn(value, key);
const f = (source, renderItem) => vFor(source, renderItem);
const r = (name, props, key) => renderSlot(name, props, key);
const w = (fn, options) => withScopedSlot(fn, options);
const s = (value) => stringifyStyle(value);
const e = (target, ...sources) => extend(target, ...sources);
const n = (value) => normalizeClass(value);
const t = (val) => toDisplayString(val);
const p = (props) => renderProps(props);
const sr = (ref2, id, opts) => setRef(ref2, id, opts);
function createApp$1(rootComponent, rootProps = null) {
  rootComponent && (rootComponent.mpType = "app");
  return createVueApp(rootComponent, rootProps).use(plugin);
}
const createSSRApp = createApp$1;
const MP_METHODS = [
  "createSelectorQuery",
  "createIntersectionObserver",
  "selectAllComponents",
  "selectComponent"
];
function createEmitFn(oldEmit, ctx) {
  return function emit2(event, ...args) {
    const scope = ctx.$scope;
    if (scope && event) {
      const detail = { __args__: args };
      {
        scope.triggerEvent(event, detail);
      }
    }
    return oldEmit.apply(this, [event, ...args]);
  };
}
function initBaseInstance(instance, options) {
  const ctx = instance.ctx;
  ctx.mpType = options.mpType;
  ctx.$mpType = options.mpType;
  ctx.$mpPlatform = "mp-weixin";
  ctx.$scope = options.mpInstance;
  ctx.$mp = {};
  {
    ctx._self = {};
  }
  instance.slots = {};
  if (isArray(options.slots) && options.slots.length) {
    options.slots.forEach((name) => {
      instance.slots[name] = true;
    });
    if (instance.slots[SLOT_DEFAULT_NAME]) {
      instance.slots.default = true;
    }
  }
  ctx.getOpenerEventChannel = function() {
    {
      return options.mpInstance.getOpenerEventChannel();
    }
  };
  ctx.$hasHook = hasHook;
  ctx.$callHook = callHook;
  instance.emit = createEmitFn(instance.emit, ctx);
}
function initComponentInstance(instance, options) {
  initBaseInstance(instance, options);
  const ctx = instance.ctx;
  MP_METHODS.forEach((method) => {
    ctx[method] = function(...args) {
      const mpInstance = ctx.$scope;
      if (mpInstance && mpInstance[method]) {
        return mpInstance[method].apply(mpInstance, args);
      }
    };
  });
}
function initMocks(instance, mpInstance, mocks2) {
  const ctx = instance.ctx;
  mocks2.forEach((mock) => {
    if (hasOwn(mpInstance, mock)) {
      instance[mock] = ctx[mock] = mpInstance[mock];
    }
  });
}
function hasHook(name) {
  const hooks = this.$[name];
  if (hooks && hooks.length) {
    return true;
  }
  return false;
}
function callHook(name, args) {
  if (name === "mounted") {
    callHook.call(this, "bm");
    this.$.isMounted = true;
    name = "m";
  }
  const hooks = this.$[name];
  return hooks && invokeArrayFns(hooks, args);
}
const PAGE_INIT_HOOKS = [
  ON_LOAD,
  ON_SHOW,
  ON_HIDE,
  ON_UNLOAD,
  ON_RESIZE,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_ADD_TO_FAVORITES
  // 'onReady', // lifetimes.ready
  // 'onPageScroll', // 影响性能，开发者手动注册
  // 'onShareTimeline', // 右上角菜单，开发者手动注册
  // 'onShareAppMessage' // 右上角菜单，开发者手动注册
];
function findHooks(vueOptions, hooks = /* @__PURE__ */ new Set()) {
  if (vueOptions) {
    Object.keys(vueOptions).forEach((name) => {
      if (isUniLifecycleHook(name, vueOptions[name])) {
        hooks.add(name);
      }
    });
    {
      const { extends: extendsOptions, mixins } = vueOptions;
      if (mixins) {
        mixins.forEach((mixin) => findHooks(mixin, hooks));
      }
      if (extendsOptions) {
        findHooks(extendsOptions, hooks);
      }
    }
  }
  return hooks;
}
function initHook(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function(args) {
      return this.$vm && this.$vm.$callHook(hook, args);
    };
  }
}
const EXCLUDE_HOOKS = [ON_READY];
function initHooks(mpOptions, hooks, excludes = EXCLUDE_HOOKS) {
  hooks.forEach((hook) => initHook(mpOptions, hook, excludes));
}
function initUnknownHooks(mpOptions, vueOptions, excludes = EXCLUDE_HOOKS) {
  findHooks(vueOptions).forEach((hook) => initHook(mpOptions, hook, excludes));
}
function initRuntimeHooks(mpOptions, runtimeHooks) {
  if (!runtimeHooks) {
    return;
  }
  const hooks = Object.keys(MINI_PROGRAM_PAGE_RUNTIME_HOOKS);
  hooks.forEach((hook) => {
    if (runtimeHooks & MINI_PROGRAM_PAGE_RUNTIME_HOOKS[hook]) {
      initHook(mpOptions, hook, []);
    }
  });
}
const findMixinRuntimeHooks = /* @__PURE__ */ once(() => {
  const runtimeHooks = [];
  const app = isFunction(getApp) && getApp({ allowDefault: true });
  if (app && app.$vm && app.$vm.$) {
    const mixins = app.$vm.$.appContext.mixins;
    if (isArray(mixins)) {
      const hooks = Object.keys(MINI_PROGRAM_PAGE_RUNTIME_HOOKS);
      mixins.forEach((mixin) => {
        hooks.forEach((hook) => {
          if (hasOwn(mixin, hook) && !runtimeHooks.includes(hook)) {
            runtimeHooks.push(hook);
          }
        });
      });
    }
  }
  return runtimeHooks;
});
function initMixinRuntimeHooks(mpOptions) {
  initHooks(mpOptions, findMixinRuntimeHooks());
}
const HOOKS = [
  ON_SHOW,
  ON_HIDE,
  ON_ERROR,
  ON_THEME_CHANGE,
  ON_PAGE_NOT_FOUND,
  ON_UNHANDLE_REJECTION
];
function parseApp(instance, parseAppOptions) {
  const internalInstance = instance.$;
  const appOptions = {
    globalData: instance.$options && instance.$options.globalData || {},
    $vm: instance,
    onLaunch(options) {
      this.$vm = instance;
      const ctx = internalInstance.ctx;
      if (this.$vm && ctx.$scope) {
        return;
      }
      initBaseInstance(internalInstance, {
        mpType: "app",
        mpInstance: this,
        slots: []
      });
      ctx.globalData = this.globalData;
      instance.$callHook(ON_LAUNCH, options);
    }
  };
  initLocale(instance);
  const vueOptions = instance.$.type;
  initHooks(appOptions, HOOKS);
  initUnknownHooks(appOptions, vueOptions);
  {
    const methods = vueOptions.methods;
    methods && extend(appOptions, methods);
  }
  if (parseAppOptions) {
    parseAppOptions.parse(appOptions);
  }
  return appOptions;
}
function initCreateApp(parseAppOptions) {
  return function createApp2(vm) {
    return App(parseApp(vm, parseAppOptions));
  };
}
function initCreateSubpackageApp(parseAppOptions) {
  return function createApp2(vm) {
    const appOptions = parseApp(vm, parseAppOptions);
    const app = isFunction(getApp) && getApp({
      allowDefault: true
    });
    if (!app)
      return;
    vm.$.ctx.$scope = app;
    const globalData = app.globalData;
    if (globalData) {
      Object.keys(appOptions.globalData).forEach((name) => {
        if (!hasOwn(globalData, name)) {
          globalData[name] = appOptions.globalData[name];
        }
      });
    }
    Object.keys(appOptions).forEach((name) => {
      if (!hasOwn(app, name)) {
        app[name] = appOptions[name];
      }
    });
    initAppLifecycle(appOptions, vm);
  };
}
function initAppLifecycle(appOptions, vm) {
  if (isFunction(appOptions.onLaunch)) {
    const args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch(args);
  }
  if (isFunction(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow((args) => {
      vm.$callHook("onShow", args);
    });
  }
  if (isFunction(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide((args) => {
      vm.$callHook("onHide", args);
    });
  }
}
function initLocale(appVm) {
  const locale = ref(normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  Object.defineProperty(appVm, "$locale", {
    get() {
      return locale.value;
    },
    set(v) {
      locale.value = v;
    }
  });
}
function initVueIds(vueIds, mpInstance) {
  if (!vueIds) {
    return;
  }
  const ids = vueIds.split(",");
  const len = ids.length;
  if (len === 1) {
    mpInstance._$vueId = ids[0];
  } else if (len === 2) {
    mpInstance._$vueId = ids[0];
    mpInstance._$vuePid = ids[1];
  }
}
const EXTRAS = ["externalClasses"];
function initExtraOptions(miniProgramComponentOptions, vueOptions) {
  EXTRAS.forEach((name) => {
    if (hasOwn(vueOptions, name)) {
      miniProgramComponentOptions[name] = vueOptions[name];
    }
  });
}
const WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach((name) => {
      const matches = name.match(WORKLET_RE);
      if (matches) {
        const workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
function initWxsCallMethods(methods, wxsCallMethods) {
  if (!isArray(wxsCallMethods)) {
    return;
  }
  wxsCallMethods.forEach((callMethod) => {
    methods[callMethod] = function(args) {
      return this.$vm[callMethod](args);
    };
  });
}
function selectAllComponents(mpInstance, selector, $refs) {
  const components = mpInstance.selectAllComponents(selector);
  components.forEach((component) => {
    const ref2 = component.properties.uR;
    $refs[ref2] = component.$vm || component;
  });
}
function initRefs(instance, mpInstance) {
  Object.defineProperty(instance, "refs", {
    get() {
      const $refs = {};
      selectAllComponents(mpInstance, ".r", $refs);
      const forComponents = mpInstance.selectAllComponents(".r-i-f");
      forComponents.forEach((component) => {
        const ref2 = component.properties.uR;
        if (!ref2) {
          return;
        }
        if (!$refs[ref2]) {
          $refs[ref2] = [];
        }
        $refs[ref2].push(component.$vm || component);
      });
      return $refs;
    }
  });
}
function findVmByVueId(instance, vuePid) {
  const $children = instance.$children;
  for (let i = $children.length - 1; i >= 0; i--) {
    const childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  let parentVm;
  for (let i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
const builtInProps = [
  // 百度小程序,快手小程序自定义组件不支持绑定动态事件，动态dataset，故通过props传递事件信息
  // event-opts
  "eO",
  // 组件 ref
  "uR",
  // 组件 ref-in-for
  "uRIF",
  // 组件 id
  "uI",
  // 组件类型 m: 小程序组件
  "uT",
  // 组件 props
  "uP",
  // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
  "uS"
];
function initDefaultProps(options, isBehavior = false) {
  const properties = {};
  if (!isBehavior) {
    builtInProps.forEach((name) => {
      properties[name] = {
        type: null,
        value: ""
      };
    });
    properties.uS = {
      type: null,
      value: [],
      observer: function(newVal) {
        const $slots = /* @__PURE__ */ Object.create(null);
        newVal && newVal.forEach((slotName) => {
          $slots[slotName] = true;
        });
        this.setData({
          $slots
        });
      }
    };
  }
  if (options.behaviors) {
    if (options.behaviors.includes("wx://form-field")) {
      if (!options.properties || !options.properties.name) {
        properties.name = {
          type: null,
          value: ""
        };
      }
      if (!options.properties || !options.properties.value) {
        properties.value = {
          type: null,
          value: ""
        };
      }
    }
  }
  return properties;
}
function initVirtualHostProps(options) {
  const properties = {};
  {
    if (options && options.virtualHost) {
      properties.virtualHostStyle = {
        type: null,
        value: ""
      };
      properties.virtualHostClass = {
        type: null,
        value: ""
      };
    }
  }
  return properties;
}
function initProps(mpComponentOptions) {
  if (!mpComponentOptions.properties) {
    mpComponentOptions.properties = {};
  }
  extend(mpComponentOptions.properties, initDefaultProps(mpComponentOptions), initVirtualHostProps(mpComponentOptions.options));
}
const PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function parsePropType(type, defaultValue) {
  if (isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function normalizePropType(type, defaultValue) {
  const res = parsePropType(type);
  return PROP_TYPES.indexOf(res) !== -1 ? res : null;
}
function initPageProps({ properties }, rawProps) {
  if (isArray(rawProps)) {
    rawProps.forEach((key) => {
      properties[key] = {
        type: String,
        value: ""
      };
    });
  } else if (isPlainObject(rawProps)) {
    Object.keys(rawProps).forEach((key) => {
      const opts = rawProps[key];
      if (isPlainObject(opts)) {
        let value = opts.default;
        if (isFunction(value)) {
          value = value();
        }
        const type = opts.type;
        opts.type = normalizePropType(type);
        properties[key] = {
          type: opts.type,
          value
        };
      } else {
        properties[key] = {
          type: normalizePropType(opts)
        };
      }
    });
  }
}
function findPropsData(properties, isPage2) {
  return (isPage2 ? findPagePropsData(properties) : findComponentPropsData(properties.uP)) || {};
}
function findPagePropsData(properties) {
  const propsData = {};
  if (isPlainObject(properties)) {
    Object.keys(properties).forEach((name) => {
      if (builtInProps.indexOf(name) === -1) {
        propsData[name] = properties[name];
      }
    });
  }
  return propsData;
}
function initFormField(vm) {
  const vueOptions = vm.$options;
  if (isArray(vueOptions.behaviors) && vueOptions.behaviors.includes("uni://form-field")) {
    vm.$watch("modelValue", () => {
      vm.$scope && vm.$scope.setData({
        name: vm.name,
        value: vm.modelValue
      });
    }, {
      immediate: true
    });
  }
}
function initData(_) {
  return {};
}
function initPropsObserver(componentOptions) {
  const observe = function observe2() {
    const up = this.properties.uP;
    if (!up) {
      return;
    }
    if (this.$vm) {
      updateComponentProps(up, this.$vm.$);
    } else if (this.properties.uT === "m") {
      updateMiniProgramComponentProperties(up, this);
    }
  };
  {
    if (!componentOptions.observers) {
      componentOptions.observers = {};
    }
    componentOptions.observers.uP = observe;
  }
}
function updateMiniProgramComponentProperties(up, mpInstance) {
  const prevProps = mpInstance.properties;
  const nextProps = findComponentPropsData(up) || {};
  if (hasPropsChanged(prevProps, nextProps, false)) {
    mpInstance.setData(nextProps);
  }
}
function updateComponentProps(up, instance) {
  const prevProps = toRaw(instance.props);
  const nextProps = findComponentPropsData(up) || {};
  if (hasPropsChanged(prevProps, nextProps)) {
    updateProps(instance, nextProps, prevProps, false);
    if (hasQueueJob(instance.update)) {
      invalidateJob(instance.update);
    }
    {
      instance.update();
    }
  }
}
function hasPropsChanged(prevProps, nextProps, checkLen = true) {
  const nextKeys = Object.keys(nextProps);
  if (checkLen && nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key]) {
      return true;
    }
  }
  return false;
}
function initBehaviors(vueOptions) {
  const vueBehaviors = vueOptions.behaviors;
  let vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  const behaviors = [];
  if (isArray(vueBehaviors)) {
    vueBehaviors.forEach((behavior) => {
      behaviors.push(behavior.replace("uni://", "wx://"));
      if (behavior === "uni://form-field") {
        if (isArray(vueProps)) {
          vueProps.push("name");
          vueProps.push("modelValue");
        } else {
          vueProps.name = {
            type: String,
            default: ""
          };
          vueProps.modelValue = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ""
          };
        }
      }
    });
  }
  return behaviors;
}
function applyOptions(componentOptions, vueOptions) {
  componentOptions.data = initData();
  componentOptions.behaviors = initBehaviors(vueOptions);
}
function parseComponent(vueOptions, { parse, mocks: mocks2, isPage: isPage2, initRelation: initRelation2, handleLink: handleLink2, initLifetimes: initLifetimes2 }) {
  vueOptions = vueOptions.default || vueOptions;
  const options = {
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true,
    pureDataPattern: /^uP$/
  };
  if (isArray(vueOptions.mixins)) {
    vueOptions.mixins.forEach((item) => {
      if (isObject(item.options)) {
        extend(options, item.options);
      }
    });
  }
  if (vueOptions.options) {
    extend(options, vueOptions.options);
  }
  const mpComponentOptions = {
    options,
    lifetimes: initLifetimes2({ mocks: mocks2, isPage: isPage2, initRelation: initRelation2, vueOptions }),
    pageLifetimes: {
      show() {
        this.$vm && this.$vm.$callHook("onPageShow");
      },
      hide() {
        this.$vm && this.$vm.$callHook("onPageHide");
      },
      resize(size2) {
        this.$vm && this.$vm.$callHook("onPageResize", size2);
      }
    },
    methods: {
      __l: handleLink2
    }
  };
  {
    applyOptions(mpComponentOptions, vueOptions);
  }
  initProps(mpComponentOptions);
  initPropsObserver(mpComponentOptions);
  initExtraOptions(mpComponentOptions, vueOptions);
  initWxsCallMethods(mpComponentOptions.methods, vueOptions.wxsCallMethods);
  {
    initWorkletMethods(mpComponentOptions.methods, vueOptions.methods);
  }
  if (parse) {
    parse(mpComponentOptions, { handleLink: handleLink2 });
  }
  return mpComponentOptions;
}
function initCreateComponent(parseOptions2) {
  return function createComponent2(vueComponentOptions) {
    return Component(parseComponent(vueComponentOptions, parseOptions2));
  };
}
let $createComponentFn;
let $destroyComponentFn;
function getAppVm() {
  return getApp().$vm;
}
function $createComponent(initialVNode, options) {
  if (!$createComponentFn) {
    $createComponentFn = getAppVm().$createComponent;
  }
  const proxy = $createComponentFn(initialVNode, options);
  return getExposeProxy(proxy.$) || proxy;
}
function $destroyComponent(instance) {
  if (!$destroyComponentFn) {
    $destroyComponentFn = getAppVm().$destroyComponent;
  }
  return $destroyComponentFn(instance);
}
function parsePage(vueOptions, parseOptions2) {
  const { parse, mocks: mocks2, isPage: isPage2, initRelation: initRelation2, handleLink: handleLink2, initLifetimes: initLifetimes2 } = parseOptions2;
  const miniProgramPageOptions = parseComponent(vueOptions, {
    mocks: mocks2,
    isPage: isPage2,
    initRelation: initRelation2,
    handleLink: handleLink2,
    initLifetimes: initLifetimes2
  });
  initPageProps(miniProgramPageOptions, (vueOptions.default || vueOptions).props);
  const methods = miniProgramPageOptions.methods;
  methods.onLoad = function(query) {
    this.options = query;
    this.$page = {
      fullPath: addLeadingSlash(this.route + stringifyQuery(query))
    };
    return this.$vm && this.$vm.$callHook(ON_LOAD, query);
  };
  initHooks(methods, PAGE_INIT_HOOKS);
  {
    initUnknownHooks(methods, vueOptions);
  }
  initRuntimeHooks(methods, vueOptions.__runtimeHooks);
  initMixinRuntimeHooks(methods);
  parse && parse(miniProgramPageOptions, { handleLink: handleLink2 });
  return miniProgramPageOptions;
}
function initCreatePage(parseOptions2) {
  return function createPage2(vuePageOptions) {
    return Component(parsePage(vuePageOptions, parseOptions2));
  };
}
function initCreatePluginApp(parseAppOptions) {
  return function createApp2(vm) {
    initAppLifecycle(parseApp(vm, parseAppOptions), vm);
  };
}
const MPPage = Page;
const MPComponent = Component;
function initTriggerEvent(mpInstance) {
  const oldTriggerEvent = mpInstance.triggerEvent;
  const newTriggerEvent = function(event, ...args) {
    return oldTriggerEvent.apply(mpInstance, [customizeEvent(event), ...args]);
  };
  try {
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initMiniProgramHook(name, options, isComponent) {
  const oldHook = options[name];
  if (!oldHook) {
    options[name] = function() {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function(...args) {
      initTriggerEvent(this);
      return oldHook.apply(this, args);
    };
  }
}
Page = function(options) {
  initMiniProgramHook(ON_LOAD, options);
  return MPPage(options);
};
Component = function(options) {
  initMiniProgramHook("created", options);
  const isVueComponent = options.properties && options.properties.uP;
  if (!isVueComponent) {
    initProps(options);
    initPropsObserver(options);
  }
  return MPComponent(options);
};
function initLifetimes({ mocks: mocks2, isPage: isPage2, initRelation: initRelation2, vueOptions }) {
  return {
    attached() {
      let properties = this.properties;
      initVueIds(properties.uI, this);
      const relationOptions = {
        vuePid: this._$vuePid
      };
      initRelation2(this, relationOptions);
      const mpInstance = this;
      const isMiniProgramPage = isPage2(mpInstance);
      let propsData = properties;
      this.$vm = $createComponent({
        type: vueOptions,
        props: findPropsData(propsData, isMiniProgramPage)
      }, {
        mpType: isMiniProgramPage ? "page" : "component",
        mpInstance,
        slots: properties.uS || {},
        parentComponent: relationOptions.parent && relationOptions.parent.$,
        onBeforeSetup(instance, options) {
          initRefs(instance, mpInstance);
          initMocks(instance, mpInstance, mocks2);
          initComponentInstance(instance, options);
        }
      });
      if (!isMiniProgramPage) {
        initFormField(this.$vm);
      }
    },
    ready() {
      if (this.$vm) {
        {
          this.$vm.$callHook("mounted");
          this.$vm.$callHook(ON_READY);
        }
      }
    },
    detached() {
      if (this.$vm) {
        pruneComponentPropsCache(this.$vm.$.uid);
        $destroyComponent(this.$vm);
      }
    }
  };
}
const mocks = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];
function isPage(mpInstance) {
  return !!mpInstance.route;
}
function initRelation(mpInstance, detail) {
  mpInstance.triggerEvent("__l", detail);
}
function handleLink(event) {
  const detail = event.detail || event.value;
  const vuePid = detail.vuePid;
  let parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  detail.parent = parentVm;
}
var parseOptions = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  handleLink,
  initLifetimes,
  initRelation,
  isPage,
  mocks
});
const createApp = initCreateApp();
const createPage = initCreatePage(parseOptions);
const createComponent = initCreateComponent(parseOptions);
const createPluginApp = initCreatePluginApp();
const createSubpackageApp = initCreateSubpackageApp();
{
  wx.createApp = global.createApp = createApp;
  wx.createPage = createPage;
  wx.createComponent = createComponent;
  wx.createPluginApp = global.createPluginApp = createPluginApp;
  wx.createSubpackageApp = global.createSubpackageApp = createSubpackageApp;
}
const createHook = (lifecycle) => (hook, target = getCurrentInstance()) => {
  !isInSSRComponentSetup && injectHook(lifecycle, hook, target);
};
const onLaunch = /* @__PURE__ */ createHook(ON_LAUNCH);
const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
const onReady = /* @__PURE__ */ createHook(ON_READY);
const onPageScroll = /* @__PURE__ */ createHook(ON_PAGE_SCROLL);
const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
const isEmptyVariableInDefault = (variable, defaultValue = void 0) => {
  return variable === void 0 || variable === null ? defaultValue : variable;
};
const isEmptyDoubleVariableInDefault = (variable1, variable2, defaultValue = void 0) => {
  return isEmptyVariableInDefault(
    variable1,
    isEmptyVariableInDefault(variable2, defaultValue)
  );
};
const withNoopInstall = (component) => {
  component.install = () => {
  };
  return component;
};
function fromPairs(pairs) {
  const result = {};
  if (pairs == null) {
    return result;
  }
  for (const pair of pairs) {
    result[pair[0]] = pair[1];
  }
  return result;
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
const objectProto = Object.prototype;
const objectToString = objectProto.toString;
const boolTag = "[object Boolean]";
function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && objectToString.call(value) == boolTag;
}
const numberTag = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike(value) && objectToString.call(value) == numberTag;
}
const symbolProto = Symbol ? Symbol.prototype : void 0;
symbolProto ? symbolProto.toString : void 0;
const NAN = 0 / 0;
const reTrim = /^\s+|\s+$/g;
const reIsBinary = /^0b[01]+$/i;
const reIsOctal = /^0o[0-7]+$/i;
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    const other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? `${other}` : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, "");
  const isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? Number.parseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
const FUNC_ERROR_TEXT$1 = "Expected a function";
function debounce(func, wait, options) {
  let lastArgs;
  let lastThis;
  let maxWait;
  let result;
  let timerId;
  let lastCallTime;
  let lastInvokeTime = 0;
  let leading = false;
  let maxing = false;
  let trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? Math.max(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    const args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
    return maxing ? Math.max(result2, maxWait - timeSinceLastInvoke) : result2;
  }
  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(Date.now());
  }
  function debounced() {
    const time = Date.now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
const FUNC_ERROR_TEXT = "Expected a function";
function throttle$1(func, wait, options) {
  let leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    leading,
    maxWait: wait,
    trailing
  });
}
const isEmpty = (val) => !val && val !== 0 || isArray(val) && val.length === 0 || isObject(val) && !Object.keys(val).length;
const tnPropKey = "__tnPropKey";
const definePropType = (val) => val;
const isTnProp = (val) => isObject(val) && !!val[tnPropKey];
const buildProp = (prop, key) => {
  if (!isObject(prop) || isTnProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(
        `Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(
          val
        )}.`
      );
    }
    return valid;
  } : void 0;
  const tnProp = {
    type,
    required: !!required,
    validator: _validator,
    [tnPropKey]: true
  };
  if (hasOwn(prop, "default"))
    tnProp.default = defaultValue;
  return tnProp;
};
const buildProps = (props) => fromPairs(
  Object.entries(props).map(([key, option]) => [
    key,
    buildProp(option, key)
  ])
);
const iconPropType = definePropType([String]);
const throttle = (fn, interval, option) => {
  const { leading, trailing } = option;
  let lastTime = 0;
  let timer = null;
  const _throttle = function(thisArg, ...args) {
    const nowTime = Date.now();
    if (!lastTime && !leading)
      lastTime = nowTime;
    const remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.apply(thisArg, args);
      lastTime = nowTime;
      return;
    }
    if (trailing && !timer) {
      timer = setTimeout(() => {
        fn.apply(thisArg, args);
        timer = null;
        lastTime = leading ? Date.now() : 0;
      }, remainTime);
    }
  };
  _throttle.cancel = function() {
    if (timer)
      clearTimeout(timer);
    timer = null;
    lastTime = 0;
  };
  return _throttle;
};
const formatDomSizeValue = (value, unit = "rpx", empty = true) => {
  if (!value)
    return empty ? "" : `0${unit}`;
  if (isString(value) && /(^calc)|(%|vw|vh|px|rpx|auto)$/.test(value))
    return value;
  return `${value}${unit}`;
};
const generateId = () => Math.floor(Math.random() * 1e4);
class TuniaoUIError extends Error {
  constructor(message) {
    super(message);
    this.name = "TuniaoUIError";
  }
}
function throwError(scope, msg) {
  throw new TuniaoUIError(`[${scope}] ${msg}`);
}
function debugWarn(scope, message) {
  {
    const error = isString(scope) ? new TuniaoUIError(`[${scope}] ${message}`) : scope;
    console.warn(error);
  }
}
function tnNavBack(indexUrl, delta = 1) {
  const indexPageUrl = isEmptyVariableInDefault(indexUrl, "/pages/index/index");
  const pages = getCurrentPages();
  if (pages == null ? void 0 : pages.length) {
    const firstPage = pages[0];
    if (pages.length === 1 && (!firstPage.route || (firstPage == null ? void 0 : firstPage.route) != indexPageUrl)) {
      return tnNavPage(indexPageUrl, "reLaunch");
    } else {
      index.navigateBack({
        delta
      });
      return Promise.resolve();
    }
  } else {
    return tnNavPage(indexPageUrl, "reLaunch");
  }
}
function tnNavPage(url, type = "navigateTo") {
  function handelNavFail(err) {
    debugWarn("tnNavPage", `跳转页面失败: ${err}`);
  }
  return new Promise((resolve2, reject) => {
    switch (type) {
      case "navigateTo":
        index.navigateTo({
          url,
          success: () => {
            resolve2();
          },
          fail: (err) => {
            handelNavFail(err);
            reject(err);
          }
        });
        break;
      case "redirectTo":
        index.redirectTo({
          url,
          success: () => {
            resolve2();
          },
          fail: (err) => {
            handelNavFail(err);
            reject(err);
          }
        });
        break;
      case "reLaunch":
        index.reLaunch({
          url,
          success: () => {
            resolve2();
          },
          fail: (err) => {
            handelNavFail(err);
            reject(err);
          }
        });
        break;
      case "switchTab":
        index.switchTab({
          url,
          success: () => {
            resolve2();
          },
          fail: (err) => {
            handelNavFail(err);
            reject(err);
          }
        });
    }
  });
}
const cloneDeep = (value, visited = /* @__PURE__ */ new WeakMap()) => {
  if (value === null || typeof value !== "object") {
    return value;
  }
  if (visited.has(value)) {
    return visited.get(value);
  }
  if (Array.isArray(value)) {
    const clonedArray = value.map((item) => cloneDeep(item, visited));
    visited.set(value, clonedArray);
    return clonedArray;
  }
  if (value instanceof Date) {
    return new Date(value.getTime());
  }
  if (value instanceof RegExp) {
    const flags = value.flags;
    return new RegExp(value.source, flags);
  }
  const clonedObject = {};
  visited.set(value, clonedObject);
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      clonedObject[key] = cloneDeep(value[key], visited);
    }
  }
  const prototype = Object.getPrototypeOf(value);
  Object.setPrototypeOf(clonedObject, cloneDeep(prototype, visited));
  return clonedObject;
};
const defaultNamespace = "tn";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const namespaceContextKey = Symbol("localContextKey");
const useGetDerivedNamespace = () => {
  const derivedNamespace = inject(namespaceContextKey, ref(defaultNamespace));
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};
const useNamespace = (block) => {
  const namespace = useGetDerivedNamespace();
  const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
  const e2 = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `is-${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e: e2,
    m,
    be,
    em,
    bm,
    bem,
    is,
    // css
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
const useComponentColor = (prop, type = "") => {
  const classColor = ref("");
  const styleColor = ref("");
  const innerColorReg = /^(tn-|gradient)/;
  const styleColorReg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{3})$|^rgb\(\d{1,3}(,\s?\d{1,3}){2}\)$|^rgba\(\d{1,3}(,\s?\d{1,3}){2},\s?0?\.?\d{1,}\)|transparent/i;
  const handleColorValue = (value) => {
    classColor.value = "";
    styleColor.value = "";
    if (value === void 0)
      return;
    if (innerColorReg.test(value)) {
      if (type === "bg" && /.*gradient.*/.test(value)) {
        const gradientValue = value.split("__")[1];
        classColor.value = `tn-gradient-bg__${gradientValue}`;
        return;
      }
      classColor.value = `${value}_${type}`;
    }
    if (styleColorReg.test(value)) {
      styleColor.value = value;
    }
  };
  handleColorValue(prop.value);
  watch(
    () => prop.value,
    (val) => {
      handleColorValue(val);
    }
  );
  const updateColor = (value) => {
    handleColorValue(value);
  };
  return [classColor, styleColor, updateColor];
};
const componentSizes = ["", "sm", "lg", "xl"];
const formComponentSizes = ["", "sm", "lg"];
const componentShapes = ["", "circle", "round"];
const componentImgModes = [
  "scaleToFill",
  "aspectFit",
  "aspectFill",
  "widthFix",
  "heightFix",
  "top",
  "bottom",
  "center",
  "left",
  "right",
  "top left",
  "top right",
  "bottom left",
  "bottom right"
];
const componentTypes = [
  "",
  "primary",
  "success",
  "warning",
  "danger",
  "info"
];
const UPDATE_MODEL_EVENT = "update:modelValue";
const CHANGE_EVENT = "change";
const ZIndex = {
  /** navbar */
  navbar: 20090,
  /** tabbar */
  tabbar: 20090,
  /** modal弹框 */
  modal: 20076,
  /** popup 弹出层 */
  popup: 20075,
  /** notify */
  notify: 20074,
  /** 吸顶 */
  sticky: 10030,
  /** 气泡弹框 */
  bubble: 10020,
  /** mask 遮罩 */
  mask: 9999
};
const useComponentSize = (size2) => {
  const sizeType = computed(() => {
    if (!size2)
      return "none";
    return componentSizes.includes(size2) ? "inner" : "custom";
  });
  return {
    sizeType
  };
};
const useSelectorQuery = (instance) => {
  let query = null;
  if (!instance) {
    instance = getCurrentInstance();
  }
  if (!instance) {
    debugWarn("useSelectorQuery", "useSelectorQuery必须在setup函数中使用");
  }
  query = index.createSelectorQuery().in(instance);
  const getSelectorNodeInfo = (selector) => {
    return new Promise((resolve2, reject) => {
      if (query) {
        query.select(selector).boundingClientRect((res) => {
          const selectRes = res;
          if (selectRes) {
            resolve2(selectRes);
          } else {
            reject(new Error(`未找到对应节点: ${selector}`));
          }
        }).exec();
      } else {
        reject(new Error("未找到对应的SelectorQuery实例"));
      }
    });
  };
  const getSelectorNodeInfos = (selector) => {
    return new Promise((resolve2, reject) => {
      if (query) {
        query.selectAll(selector).boundingClientRect((res) => {
          const selectRes = res;
          if (selectRes && selectRes.length > 0) {
            resolve2(selectRes);
          } else {
            reject(new Error(`未找到对应节点: ${selector}`));
          }
        }).exec();
      } else {
        reject(new Error("未找到对应的SelectorQuery实例"));
      }
    });
  };
  return {
    query,
    getSelectorNodeInfo,
    getSelectorNodeInfos
  };
};
const DEFAULT_STATUS_BAR_HEIGHT = 45;
const useUniAppSystemRectInfo = () => {
  const navBarInfo = reactive({
    height: 0,
    statusHeight: DEFAULT_STATUS_BAR_HEIGHT
  });
  const navBarBoundingInfo = reactive({
    width: 0,
    height: 32,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    marginRight: 0
  });
  const systemScreenInfo = reactive({
    width: 0,
    height: 0,
    operationHeight: 0
  });
  const getSystemRectInfo = () => {
    try {
      const uniSystemInfo = index.getSystemInfoSync();
      const { statusBarHeight, windowWidth, windowHeight, titleBarHeight } = uniSystemInfo;
      let height = 0;
      const {
        width: menuButtonWidth,
        height: menuButtonHeight,
        bottom: menuButtonBottom,
        top: menuButtonTop,
        left: menuButtonLeft,
        right: menuButtonRight
      } = index.getMenuButtonBoundingClientRect();
      navBarBoundingInfo.width = menuButtonWidth;
      navBarBoundingInfo.height = menuButtonHeight + 2;
      navBarBoundingInfo.bottom = menuButtonBottom;
      navBarBoundingInfo.top = menuButtonTop;
      navBarBoundingInfo.left = menuButtonLeft;
      navBarBoundingInfo.right = menuButtonRight;
      navBarBoundingInfo.marginRight = windowWidth - navBarBoundingInfo.right;
      const menuButtonMarginTopHeight = menuButtonTop - statusBarHeight;
      height = menuButtonBottom + (menuButtonMarginTopHeight < 4 ? 4 : menuButtonMarginTopHeight);
      navBarInfo.height = height;
      navBarInfo.statusHeight = statusBarHeight;
      systemScreenInfo.width = windowWidth;
      systemScreenInfo.height = windowHeight;
      systemScreenInfo.operationHeight = windowHeight - height;
    } catch (err) {
      debugWarn(
        "useUniAppSystemRectInfo",
        `[TnGetSystemRectInfo]获取系统容器信息失败: ${err}`
      );
    }
  };
  getSystemRectInfo();
  return {
    navBarInfo,
    navBarBoundingInfo,
    systemScreenInfo,
    getSystemRectInfo
  };
};
ref(0);
const useOrderedChildren = () => {
  const children = {};
  const orderedChildren = shallowRef([]);
  const addChild = (child) => {
    children[child.uid] = child;
    orderedChildren.value.push(child);
  };
  const removeChild = (uid2) => {
    delete children[uid2];
    orderedChildren.value = orderedChildren.value.filter(
      (child) => child.uid !== uid2
    );
  };
  return {
    children: orderedChildren,
    addChild,
    removeChild
  };
};
const useObserver = (instance) => {
  if (!instance) {
    instance = getCurrentInstance();
  }
  if (!instance) {
    debugWarn("useObserver", "请在 setup 中使用 useObserver");
  }
  let observerInstance = null;
  const connectObserver = (selector, fn, fnOptions, options) => {
    disconnectObserver();
    observerInstance = index.createIntersectionObserver(instance, options);
    if (fnOptions.type === "relativeTo")
      observerInstance.relativeTo((fnOptions == null ? void 0 : fnOptions.selector) || "", fnOptions.margins);
    else if (fnOptions.type === "relativeToViewport")
      observerInstance.relativeToViewport(fnOptions.margins);
    observerInstance.observe(selector, (res) => {
      fn && fn(res);
    });
  };
  const disconnectObserver = () => {
    if (observerInstance) {
      observerInstance.disconnect();
      observerInstance = null;
    }
  };
  return {
    connectObserver,
    disconnectObserver
  };
};
const useComponentBoolean = buildProp({
  type: [Boolean, void 0],
  default: void 0
});
const useComponentSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false
});
buildProp({
  type: String,
  values: formComponentSizes,
  required: false
});
const useComponentCustomStyleProp = buildProp({
  type: Object,
  default: () => ({})
});
const useComponentIndexProp = buildProp({
  type: definePropType([String, Number]),
  default: () => generateId()
});
const useComponentSafeAreaInsetBottomProp = buildProp({
  type: Boolean,
  default: true
});
const iconProps = buildProps({
  /**
   * @description 图标名称，支持狮业有承内置图标和图片地址(只支持绝对路径)
   */
  name: {
    type: iconPropType,
    required: true
  },
  /**
   * @description 图标颜色类型
   */
  type: {
    type: String,
    values: componentTypes,
    default: ""
  },
  /**
   * @description 图标颜色, 以tn开头则使用狮业有承内置的颜色
   */
  color: String,
  /**
   * @description 图标大小
   */
  size: {
    type: [String, Number]
  },
  /**
   * @description 图标加粗
   */
  bold: Boolean,
  /**
   * @description 图标是否为透明
   */
  transparent: Boolean,
  /**
   * @description 透明图标背景
   */
  transparentBg: String,
  /**
   * @description 图片模式，当name为图片地址时生效
   */
  imgMode: {
    type: String,
    values: componentImgModes,
    default: "aspectFill"
  },
  /**
   * @description 垂直方向上的偏移量
   */
  offsetTop: {
    type: [String, Number]
  },
  /**
   * @description 自定义样式
   */
  customStyle: useComponentCustomStyleProp,
  /**
   * @description 自定义类
   */
  customClass: String
});
const iconEmits = {
  /**
   * @description 点击图标时触发
   */
  click: () => true
};
const useIcon = (props) => {
  const ns = useNamespace("icon");
  const [colorClass, colorStyle] = useComponentColor(
    toRef(props, "color"),
    "text"
  );
  const [transparentBgClass] = useComponentColor(
    toRef(props, "transparentBg"),
    "bg"
  );
  const { sizeType } = useComponentSize(props.size);
  const isImg = computed(
    () => !!(props == null ? void 0 : props.name) && props.name.includes("/")
  );
  const iconClass = computed(() => {
    const cls = [];
    cls.push(ns.b());
    if (isImg.value) {
      cls.push(ns.m("image"));
    } else {
      if (props.type)
        cls.push(`tn-type-${props.type}_text`);
      if (props.transparent) {
        cls.push("tn-text-transparent", transparentBgClass.value);
      } else {
        if (colorClass.value)
          cls.push(colorClass.value);
      }
      if (props.bold)
        cls.push("tn-text-bold");
    }
    if (sizeType.value === "inner")
      cls.push(ns.m(props.size));
    if (props.customClass)
      cls.push(props.customClass);
    return cls.join(" ");
  });
  const iconStyle = computed(() => {
    const style = {};
    if (isImg.value) {
      if (sizeType.value === "custom" && props.size) {
        style.width = style.height = formatDomSizeValue(props.size);
      }
    } else {
      if (colorStyle.value)
        style.color = colorStyle.value;
      if (sizeType.value === "custom" && props.size)
        style.fontSize = formatDomSizeValue(props.size);
    }
    if (props.offsetTop)
      style.transform = `translateY(${formatDomSizeValue(props.offsetTop)})`;
    if (!isEmpty(props.customStyle))
      Object.assign(style, props.customStyle);
    return style;
  });
  return {
    isImg,
    iconClass,
    iconStyle
  };
};
const navBarProps = buildProps({
  /**
   * @description 导航栏高度，如果不传递这个值则会根据系统自动计算
   */
  height: String,
  /**
   * @description 导航栏背景色，如果需要设置毛玻璃的背景颜色，只能传递rgba的颜色值
   */
  bgColor: String,
  /**
   * @description 导航栏字体颜色
   */
  textColor: String,
  /**
   * @description 开启毛玻璃效果
   */
  frosted: Boolean,
  /**
   * @description 导航栏透明度，有效值为0~1
   */
  opacity: {
    type: Number,
    default: 1
  },
  /**
   * @description 返回按钮图标
   */
  backIcon: {
    type: String,
    default: "left"
  },
  /**
   * @description 返回按钮文字
   */
  backText: String,
  /**
   * @description 返回首页图标
   */
  homeIcon: {
    type: String,
    default: "home-capsule-fill"
  },
  /**
   * @description 是否显示底部阴影
   */
  bottomShadow: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否预留右边胶囊安全距离
   */
  safeAreaInsetRight: {
    type: Boolean,
    default: true
  },
  /**
   * @description 居中显示内容
   */
  center: {
    type: Boolean,
    default: true
  },
  /**
   * @description 右边操作区域的宽度
   */
  rightOperationWidth: String,
  /**
   * @description 返回前回调
   */
  beforeBack: {
    type: definePropType(Function)
  },
  /**
   * @description 返回首页前回调
   */
  beforeHome: {
    type: definePropType(Function)
  },
  /**
   * @description 首页地址
   */
  indexUrl: {
    type: String,
    default: "/pages/index/index"
  },
  /**
   * @description 是否固定在顶部
   */
  fixed: Boolean,
  /**
   * @description 在固定模式下是否开启占位
   */
  placeholder: {
    type: Boolean,
    default: true
  },
  /**
   * @description ZIndex
   */
  zIndex: {
    type: Number,
    default: ZIndex.navbar
  }
});
const navbarEmits = {
  /**
   * @description navbar初始化完成
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  initFinish: (info) => true
};
const useNavbarCustomStyle = (props, backButtonType, hasRightOperation) => {
  const ns = useNamespace("navbar");
  const backNs = useNamespace("navbar-back");
  const { navBarInfo, navBarBoundingInfo } = useUniAppSystemRectInfo();
  const [bgColorClass, bgColorStyle] = useComponentColor(
    toRef(props, "bgColor"),
    "bg"
  );
  const [textColorClass, textColorStyle] = useComponentColor(
    toRef(props, "textColor"),
    "text"
  );
  const navbarHeight = computed(
    () => props.height ? formatDomSizeValue(props.height) : `${navBarInfo.height}px`
  );
  const navbarClass = computed(() => {
    const cls = [ns.b()];
    if (props.fixed)
      cls.push(ns.m("fixed"));
    if (props.bottomShadow)
      cls.push("tn-shadow");
    if (textColorClass.value)
      cls.push(textColorClass.value);
    return cls.join(" ");
  });
  const navbarStyle = computed(() => {
    const style = {};
    style.height = navbarHeight.value;
    if (props.zIndex)
      style.zIndex = props.zIndex;
    if ((props == null ? void 0 : props.opacity) !== void 0)
      style.opacity = props.opacity;
    if (textColorStyle.value) {
      style.color = textColorStyle.value;
    } else if (!bgColorClass.value && !textColorClass.value) {
      style.color = "var(--tn-text-color-primary)";
    }
    return style;
  });
  const navbarBgClass = computed(() => {
    const cls = [ns.e("bg")];
    if (bgColorClass.value && !props.frosted)
      cls.push(bgColorClass.value);
    if (props.frosted)
      cls.push(ns.em("bg", "frosted"));
    return cls.join(" ");
  });
  const navbarBgStyle = computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex - 2;
    if (!bgColorClass.value)
      style.backgroundColor = bgColorStyle.value || "var(--tn-color-white)";
    if (props.frosted) {
      style.backgroundColor = bgColorStyle.value || "rgba(255, 255, 255, 0.5)";
    }
    return style;
  });
  const navbarPlaceholderStyle = computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex - 2;
    style.height = navbarHeight.value;
    return style;
  });
  const navbarWrapperStyle = computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex;
    if (!props.height) {
      style.top = `${navBarInfo.statusHeight}px`;
      style.height = `${navBarInfo.height - navBarInfo.statusHeight}px`;
    }
    return style;
  });
  const backStyle = computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex;
    style.width = `${navBarBoundingInfo.width}px`;
    style.height = `${navBarBoundingInfo.height}px`;
    style.left = `${navBarBoundingInfo.marginRight}px`;
    return style;
  });
  const contentStyle = computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex - 1;
    style.height = `${navBarInfo.height - navBarInfo.statusHeight}px`;
    if (props.height)
      style.height = formatDomSizeValue(props.height);
    if (backButtonType.value !== "none") {
      style.paddingLeft = `${navBarBoundingInfo.width + navBarBoundingInfo.marginRight}px`;
    }
    if (hasRightOperation.value && props.rightOperationWidth) {
      style.paddingRight = formatDomSizeValue(props.rightOperationWidth);
    } else if (props.safeAreaInsetRight || hasRightOperation.value) {
      style.paddingRight = `${navBarBoundingInfo.width + navBarBoundingInfo.marginRight}px`;
    }
    return style;
  });
  const rightOperationStyle = computed(() => {
    const style = {};
    style.maxWidth = `${navBarBoundingInfo.width}px`;
    if (props.zIndex)
      style.zIndex = props.zIndex;
    style.height = `${navBarInfo.height - navBarInfo.statusHeight}px`;
    if (props.height)
      style.height = formatDomSizeValue(props.height);
    if (props.rightOperationWidth)
      style.width = formatDomSizeValue(props.rightOperationWidth);
    return style;
  });
  return {
    ns,
    backNs,
    navBarInfo,
    navbarClass,
    navbarStyle,
    navbarBgClass,
    navbarBgStyle,
    navbarPlaceholderStyle,
    navbarWrapperStyle,
    backStyle,
    contentStyle,
    rightOperationStyle
  };
};
const useNavbar = (props) => {
  const { slots } = getCurrentInstance();
  const navbackButtonType = computed(() => {
    if (slots == null ? void 0 : slots.back)
      return "custom";
    if (props == null ? void 0 : props.backText)
      return "text";
    if (!!(props == null ? void 0 : props.backIcon) && !!(props == null ? void 0 : props.homeIcon))
      return "multi";
    else if (!!(props == null ? void 0 : props.backIcon) || !!(props == null ? void 0 : props.homeIcon))
      return "single";
    return "none";
  });
  const hasRightOperation = computed(() => !!(slots == null ? void 0 : slots.right));
  const clickBackEvent = () => {
    const { beforeBack } = props;
    if (!beforeBack) {
      tnNavBack(props.indexUrl);
      return;
    }
    const shouldBack = beforeBack();
    const isPromiseOrBool = [
      isPromise(shouldBack),
      isBoolean(shouldBack)
    ].includes(true);
    if (!isPromiseOrBool) {
      throwError(
        "TnNavbar",
        "beforeBack 返回值必须是 Promise 或者 Boolean 类型"
      );
    }
    if (isPromise(shouldBack)) {
      shouldBack.then((res) => {
        if (res)
          tnNavBack(props.indexUrl);
      }).catch((err) => {
        debugWarn("TnNavbar", `beforeBack 函数执行出错: ${err}`);
      });
    } else {
      if (shouldBack)
        tnNavBack(props.indexUrl);
    }
  };
  const clickHomeEvent = () => {
    const { beforeHome } = props;
    if (!beforeHome) {
      tnNavPage(props.indexUrl, "reLaunch");
      return;
    }
    const shouldBack = beforeHome();
    const isPromiseOrBool = [
      isPromise(shouldBack),
      isBoolean(shouldBack)
    ].includes(true);
    if (!isPromiseOrBool) {
      throwError(
        "TnNavbar",
        "beforeHome 返回值必须是 Promise 或者 Boolean 类型"
      );
    }
    if (isPromise(shouldBack)) {
      shouldBack.then((res) => {
        if (res)
          tnNavPage(props.indexUrl, "reLaunch");
      }).catch((err) => {
        debugWarn("TnNavbar", `beforeHome 函数执行出错: ${err}`);
      });
    } else {
      if (shouldBack)
        tnNavPage(props.indexUrl, "reLaunch");
    }
  };
  return {
    navbackButtonType,
    hasRightOperation,
    clickBackEvent,
    clickHomeEvent
  };
};
const buttonFormTypes = ["submit", "reset"];
const buttonOpenTypes = [
  "feedback",
  "share",
  "contact",
  "getPhoneNumber",
  "launchApp",
  "openSetting",
  "getUserInfo",
  "chooseAvatar",
  "agreePrivacyAuthorization"
];
const buttonProps = buildProps({
  /**
   * @description 按钮宽度
   */
  width: {
    type: [String, Number]
  },
  /**
   * @description 按钮高度
   */
  height: {
    type: [String, Number]
  },
  /**
   * @description 按钮尺寸
   */
  size: useComponentSizeProp,
  /**
   * @description 按钮形状
   */
  shape: {
    type: String,
    values: componentShapes,
    default: ""
  },
  /**
   * @description 按钮颜色类型
   */
  type: {
    type: String,
    values: componentTypes,
    default: "primary"
  },
  /**
   * @description 按钮图标
   */
  icon: {
    type: iconPropType
  },
  /**
   * @description 是否加粗字体
   */
  bold: Boolean,
  /**
   * @description 字体大小
   */
  fontSize: {
    type: [String, Number]
  },
  /**
   * @description 背景颜色，以tn开头则使用狮业有承内置的颜色
   */
  bgColor: String,
  /**
   * @description 文字颜色，以tn开头则使用狮业有承内置的颜色
   */
  textColor: String,
  /**
   * @description 是否显示为文本按钮
   */
  text: Boolean,
  /**
   * @description 是否为朴素按钮
   */
  plain: Boolean,
  /**
   * @description 边框颜色，以tn开头则使用狮业有承内置的颜色
   */
  borderColor: String,
  /**
   * @description 是否加粗边框
   */
  borderBold: Boolean,
  /**
   * @description 是否显示阴影
   */
  shadow: Boolean,
  /**
   * @description 阴影颜色，以tn开头则使用狮业有承内置的颜色
   */
  shadowColor: String,
  /**
   * @description 点击时触发的类
   */
  hoverClass: {
    type: String,
    default: "tn-u-btn-hover"
  },
  /**
   * @description 自定义样式
   */
  customStyle: useComponentCustomStyleProp,
  /**
   * @description 自定义类
   */
  customClass: String,
  /**
   * @description 是否禁用按钮
   */
  disabled: Boolean,
  /**
   * @description 是否只为一个按钮，不作用任何样式
   */
  onlyButton: Boolean,
  /**
   * @description 是否显示加载中
   */
  loading: Boolean,
  /**
   * @description 是否防抖
   */
  debounce: {
    type: Boolean,
    default: false
  },
  /**
   * @description 触发form表单的事件类型
   */
  formType: {
    type: String,
    values: buttonFormTypes
  },
  /**
   * @description 按钮开放能力，具体能力参考官网https://uniapp.dcloud.io/component/button.html
   */
  openType: {
    type: String,
    values: buttonOpenTypes
  },
  /**
   * @description 打开app时向app传递的参数, 在微信、QQ小程序和openType为launchApp时生效
   */
  appParameter: {
    type: String,
    default: ""
  },
  /**
   * @description 会话来源, 在微信小程序和openType为contact时生效
   */
  sessionFrom: {
    type: String,
    default: ""
  },
  /**
   * @description 会话内消息卡片标题, 默认为当前标题, 在微信小程序和openType为contact时生效
   */
  sendMessageTitle: {
    type: String,
    default: ""
  },
  /**
   * @description 会话内消息卡片点击跳转小程序路径, 默认为当前路径, 在微信小程序和openType为contact时生效
   */
  sendMessagePath: {
    type: String,
    default: ""
  },
  /**
   * @description 会话内消息卡片图片, 默认为截图, 在微信小程序和openType为contact时生效
   */
  sendMessageImg: {
    type: String,
    default: ""
  },
  /**
   * @description 是否显示会话内消息卡片, 设置此参数为true, 用户进入客服会话会在右下角显示"可能要发送的小程序"提示, 用户点击后可以快速发送小程序消息, 在微信小程序和openType为contact时生效
   */
  showMessageCard: {
    type: Boolean,
    default: false
  }
});
const buttonEmits = {
  /**
   * @description 按钮点击事件
   */
  click: () => true,
  /**
   * @description 获取用户手机号码回调
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getphonenumber: (e2) => true,
  /**
   * @description 开放能力调用发生错误时回调
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error: (e2) => true,
  /**
   * @description 打开权限设置面板并关闭时回调
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  opensetting: (e2) => true,
  /**
   * @description 打开APP成功时回调
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  launchapp: (e2) => true,
  /**
   * @description 获取用户信息回调
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getuserinfo: (e2) => true,
  /**
   * @description 获取用户头像回调
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  chooseavatar: (e2) => true,
  /**
   * @description 同意隐私授权回调
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  agreeprivacyauthorization: (e2) => true
};
const useButtonCustomStyle = (props) => {
  const ns = useNamespace("button");
  const [bgColorClass, bgColorStyle] = useComponentColor(
    toRef(props, "bgColor"),
    "bg"
  );
  const [textColorClass, textColorStyle] = useComponentColor(
    toRef(props, "textColor"),
    "text"
  );
  const [borderColorClass, borderColorStyle] = useComponentColor(
    toRef(props, "borderColor"),
    "border"
  );
  const [shadowColorClass, shadowColorStyle] = useComponentColor(
    toRef(props, "shadowColor"),
    "shadow"
  );
  const buttonClass = computed(() => {
    const cls = [ns.b()];
    if (props.onlyButton) {
      cls.push(ns.m("only-button"));
      return cls.join(" ");
    }
    if (props.text)
      cls.push(ns.m("text"));
    if (props.plain) {
      cls.push(ns.m("plain"));
      if (props.borderBold)
        cls.push(ns.m("plain-bold"));
    }
    if (props.type) {
      if (props.text) {
        if (!props.textColor)
          cls.push(`tn-type-${props.type}_text`);
      } else if (props.plain) {
        if (!props.borderColor)
          cls.push(`tn-type-${props.type}_border`);
      } else {
        if (!props.bgColor)
          cls.push(`tn-type-${props.type}_bg`);
      }
    }
    if (props.size)
      cls.push(ns.m(props.size));
    if (!props.text && props.shape)
      cls.push(ns.m(props.shape));
    if (props.bold)
      cls.push("tn-text-bold");
    if (!props.text && !props.plain) {
      if (bgColorClass.value)
        cls.push(bgColorClass.value);
    }
    if (textColorClass.value)
      cls.push(textColorClass.value);
    if (props.plain) {
      if (borderColorClass.value)
        cls.push(borderColorClass.value);
    }
    if (props.shadow) {
      cls.push("tn-shadow");
      if (shadowColorClass.value)
        cls.push(shadowColorClass.value);
    }
    if (props.customClass)
      cls.push(props.customClass);
    return cls.join(" ");
  });
  const buttonStyle = computed(() => {
    const style = {};
    if (props.onlyButton)
      return style;
    if (props.width) {
      style.width = formatDomSizeValue(props.width);
      if (props.shape === "circle")
        style.height = style.width;
    }
    if (props.height && props.shape !== "circle")
      style.height = formatDomSizeValue(props.height);
    if (props.fontSize)
      style.fontSize = formatDomSizeValue(props.fontSize);
    if (!props.text && !props.plain) {
      if (bgColorStyle.value)
        style.backgroundColor = bgColorStyle.value;
    }
    if (textColorStyle.value) {
      style.color = textColorStyle.value;
    }
    if (props.plain && borderColorStyle.value) {
      style.borderColor = borderColorStyle.value;
    }
    if (props.shadow && shadowColorStyle.value)
      style.boxShadow = shadowColorStyle.value;
    if (!isEmpty(props.customStyle)) {
      Object.assign(style, props.customStyle);
    }
    return style;
  });
  return {
    ns,
    buttonClass,
    buttonStyle
  };
};
const useButton = (props, emits) => {
  const buttonClickHandle = () => {
    if (props.disabled || props.loading)
      return;
    emits("click");
  };
  const buttonClick = props.debounce ? debounce(buttonClickHandle, 250) : buttonClickHandle;
  const getPhoneNumber = (e2) => {
    emits("getphonenumber", e2);
  };
  const openSetting = (e2) => {
    emits("opensetting", e2);
  };
  const launchApp = (e2) => {
    emits("launchapp", e2);
  };
  const getUserInfo = (e2) => {
    emits("getuserinfo", e2);
  };
  const chooseAvatar = (e2) => {
    emits("chooseavatar", e2);
  };
  const agreePrivacyAuthorization = (e2) => {
    emits("agreeprivacyauthorization", e2);
  };
  const openTypeError = (e2) => {
    emits("error", e2);
  };
  return {
    buttonClick,
    getPhoneNumber,
    openSetting,
    launchApp,
    getUserInfo,
    chooseAvatar,
    agreePrivacyAuthorization,
    openTypeError
  };
};
const tabbarBaseProps = buildProps({
  /**
   * @description 未选中时的颜色
   */
  inactiveColor: String,
  /**
   * @description 选中时的颜色
   */
  activeColor: String,
  /**
   * @description 图标大小
   */
  iconSize: String,
  /**
   * @description 文字大小
   */
  fontSize: String
});
const tabbarProps = buildProps({
  ...tabbarBaseProps,
  /**
   * @description tabbar选中绑定的值
   */
  modelValue: {
    type: [String, Number],
    default: 0
  },
  /**
   * @description tabbar高度
   */
  height: {
    type: String,
    default: "100rpx"
  },
  /**
   * @description tabbar背景颜色，如果需要设置毛玻璃的背景颜色，只能传递rgba的颜色值
   */
  bgColor: String,
  /**
   * @description 开启毛玻璃效果
   */
  frosted: Boolean,
  /**
   * @description 显示顶部阴影
   */
  topShadow: {
    type: Boolean,
    default: true
  },
  /**
   * @description 切换时是否显示动画
   */
  switchAnimation: Boolean,
  /**
   * @description 是否固定在底部
   */
  fixed: Boolean,
  /**
   * @description 在固定之后是否开启占位空间
   */
  placeholder: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否开启底部安全边距
   */
  safeAreaInsetBottom: {
    type: Boolean,
    default: true
  },
  /**
   * @description 切换前回调
   */
  beforeSwitch: {
    type: definePropType(Function)
  },
  /**
   * @description zIndex
   */
  zIndex: {
    type: Number,
    default: ZIndex.tabbar
  }
});
const tabbarEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isNumber(val) || isString(val),
  [CHANGE_EVENT]: (val) => isNumber(val) || isString(val)
};
const useTabbarCustomStyle = (props) => {
  const ns = useNamespace("tabbar");
  const [bgColorClass, bgColorStyle] = useComponentColor(
    toRef(props, "bgColor"),
    "bg"
  );
  const tabbarClass = computed(() => {
    const cls = [ns.b()];
    if (props.fixed)
      cls.push(ns.m("fixed"));
    if (props.safeAreaInsetBottom)
      cls.push("tn-u-safe-area");
    if (props.topShadow)
      cls.push(ns.m("top-shadow"));
    return cls.join(" ");
  });
  const tabbarStyle = computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex;
    if (props.height)
      style.height = formatDomSizeValue(props.height);
    return style;
  });
  const bgClass = computed(() => {
    const cls = [ns.e("bg")];
    if (bgColorClass.value && !props.frosted)
      cls.push(bgColorClass.value);
    if (props.frosted)
      cls.push(ns.em("bg", "frosted"));
    return cls.join(" ");
  });
  const bgStyle = computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex - 1;
    if (!bgColorClass.value)
      style.backgroundColor = bgColorStyle.value || "var(--tn-color-white)";
    if (props.frosted)
      style.backgroundColor = bgColorStyle.value || "rgba(255, 255, 255, 0.5)";
    return style;
  });
  const placeholderStyle = computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex - 2;
    if (props.height)
      style.height = formatDomSizeValue(props.height);
    return style;
  });
  const bulgeClass = computed(() => {
    const cls = [ns.e("bulge")];
    if (props.topShadow) {
      cls.push(ns.em("bulge", "top-shadow"));
    }
    if (bgColorClass.value && !props.frosted)
      cls.push(bgColorClass.value);
    if (props.frosted)
      cls.push(ns.em("bulge", "frosted"));
    return cls.join(" ");
  });
  const bulgeStyle = computed(() => {
    const style = {};
    if (props.zIndex)
      style.zIndex = props.zIndex - 1;
    else
      style.zIndex = "inherit";
    if (!bgColorClass.value)
      style.backgroundColor = bgColorStyle.value || "var(--tn-color-white)";
    if (props.frosted)
      style.backgroundColor = bgColorStyle.value || "rgba(255, 255, 255, 0.5)";
    return style;
  });
  return {
    ns,
    tabbarClass,
    tabbarStyle,
    bgClass,
    bgStyle,
    placeholderStyle,
    bulgeClass,
    bulgeStyle
  };
};
const avatarGroupContextKey = Symbol(
  "avatarGroupContextKey"
);
const tabbarContextKey = Symbol("tabbarContextKey");
const tabsContextKey = Symbol("tabsContextKey");
const noticeBarKey = Symbol("noticeBar");
const useTabbarItemCustomStyle = (props, isActive) => {
  const ns = useNamespace("tabbar-item");
  const tabbarContext = inject(tabbarContextKey);
  const activeColor = computed(
    () => props.activeColor || (tabbarContext == null ? void 0 : tabbarContext.activeColor)
  );
  const inactiveColor = computed(
    () => props.inactiveColor || (tabbarContext == null ? void 0 : tabbarContext.inactiveColor)
  );
  const [inactiveColorClass, inactiveColorStyle] = useComponentColor(
    inactiveColor,
    "text"
  );
  const [activeColorClass, activeColorStyle] = useComponentColor(
    activeColor,
    "text"
  );
  const [inactiveBgClass, inactiveBgStyle] = useComponentColor(
    inactiveColor,
    "bg"
  );
  const [activebgClass, activebgStyle] = useComponentColor(activeColor, "bg");
  const [bulgeBgClass, bulgeBgStyle] = useComponentColor(
    toRef(props, "bulgeBgColor"),
    "bg"
  );
  const [bulgeTextColorClass, bulgeTextColorStyle] = useComponentColor(
    toRef(props, "bulgeTextColor"),
    "text"
  );
  const fontSize = computed(
    () => formatDomSizeValue(props.fontSize || (tabbarContext == null ? void 0 : tabbarContext.fontSize) || "")
  );
  const tabbarItemClass = computed(() => {
    const cls = [ns.b()];
    if (isActive.value) {
      if (activeColorClass.value)
        cls.push(activeColorClass.value);
    } else {
      if (inactiveColorClass.value)
        cls.push(inactiveColorClass.value);
    }
    if (props.icon && props.activeIcon && !props.text || props.text && !props.icon && !props.activeIcon)
      cls.push(ns.is("only-element"));
    if (isActive.value)
      cls.push(ns.is("active"));
    if (tabbarContext == null ? void 0 : tabbarContext.switchAnimation)
      cls.push(ns.is("animation"));
    return cls.join(" ");
  });
  const tabbarItemStyle = computed(() => {
    const style = {};
    if (isActive.value) {
      if (!activeColorClass.value)
        style.color = activeColorStyle.value || "var(--tn-color-primary)";
    } else {
      if (!inactiveColorClass.value)
        style.color = inactiveColorStyle.value || "var(--tn-color-gray)";
    }
    return style;
  });
  const tabbarItemElementStyle = computed(() => {
    return (type) => {
      const style = {};
      if (type === "text") {
        if (fontSize.value)
          style.fontSize = fontSize.value;
      }
      return style;
    };
  });
  const bulgeClass = computed(() => {
    const cls = [ns.e("bulge")];
    if (props.bulgeBgColor) {
      if (bulgeBgClass.value)
        cls.push(bulgeBgClass.value);
    } else {
      if (isActive.value) {
        if (activebgClass.value)
          cls.push(activebgClass.value);
      } else {
        if (inactiveBgClass.value)
          cls.push(inactiveBgClass.value);
      }
    }
    if (bulgeTextColorClass.value)
      cls.push(bulgeTextColorClass.value);
    return cls.join(" ");
  });
  const bulgeStyle = computed(() => {
    return (rectInfo) => {
      const style = {};
      let width = rectInfo.width;
      if (rectInfo == null ? void 0 : rectInfo.maxWidth) {
        width = rectInfo.maxWidth;
      }
      style.width = `${width * 0.5}px`;
      style.height = style.width;
      style.top = `-${width * 0.16}px`;
      if (props.bulgeBgColor) {
        if (!bulgeBgClass.value)
          style.backgroundColor = bulgeBgStyle.value;
      } else {
        if (isActive.value) {
          if (!activebgClass.value) {
            style.backgroundColor = activebgStyle.value || "var(--tn-color-primary)";
          }
        } else {
          if (!inactiveBgClass.value) {
            style.backgroundColor = inactiveBgStyle.value || "var(--tn-color-gray)";
          }
        }
      }
      if (bulgeTextColorStyle.value)
        style.color = bulgeTextColorStyle.value;
      return style;
    };
  });
  return {
    ns,
    tabbarItemClass,
    tabbarItemStyle,
    tabbarItemElementStyle,
    bulgeClass,
    bulgeStyle
  };
};
const useTabbar = (props) => {
  const { emit: emit2 } = getCurrentInstance();
  const {
    children: items,
    addChild,
    removeChild: removeItem
  } = useOrderedChildren();
  const { getSelectorNodeInfo } = useSelectorQuery();
  const rectId = `tt-${generateId()}`;
  const activeUid = ref(-1);
  const addItem = (item) => {
    if (props.modelValue !== void 0 && activeUid.value === -1) {
      if (props.modelValue === item.name || props.modelValue === items.value.length) {
        updateActiveId(item.uid);
        nextTick$1(() => {
          setTimeout(() => {
            if (activeUid.value !== -1)
              return;
            activeUid.value = item.uid;
          }, 50);
        });
      }
    }
    addChild(item);
  };
  const updateActiveId = (uid2, changeEmit = false) => {
    var _a2;
    activeUid.value = uid2;
    const itemIndex = items.value.findIndex((item) => item.uid === uid2);
    const value = ((_a2 = items.value[itemIndex]) == null ? void 0 : _a2.name) || itemIndex;
    emit2(UPDATE_MODEL_EVENT, value);
    if (changeEmit) {
      nextTick$1(() => {
        emit2(CHANGE_EVENT, value);
      });
    }
  };
  const setActiveItem = (uid2) => {
    if (!props.beforeSwitch) {
      updateActiveId(uid2, true);
      return;
    }
    const index2 = items.value.findIndex((item) => item.uid === uid2);
    const shouldSwitch = props.beforeSwitch(index2);
    const isPromiseOrBoolean = [
      isPromise(shouldSwitch),
      isBoolean(shouldSwitch)
    ].includes(true);
    if (!isPromiseOrBoolean) {
      debugWarn(
        "TnTabbar",
        "beforeSwitch切换前拦截函数必须返回Promise或者Boolean"
      );
      return;
    }
    if (isPromise(shouldSwitch)) {
      shouldSwitch.then((res) => {
        if (res)
          updateActiveId(uid2, true);
      });
    } else {
      if (shouldSwitch)
        updateActiveId(uid2, true);
    }
  };
  const setActiveItemByValue = (value) => {
    var _a2;
    if (value === void 0) {
      updateActiveId(items.value[0].uid);
      return;
    }
    let item;
    if (typeof value === "number") {
      item = (_a2 = items.value) == null ? void 0 : _a2[value];
    }
    if (!item) {
      item = items.value.find((item2) => item2.name === value);
    }
    if (!item) {
      updateActiveId(items.value[0].uid);
    } else {
      updateActiveId(item.uid);
    }
  };
  watch(
    () => props.modelValue,
    (val) => {
      nextTick$1(() => {
        setActiveItemByValue(val);
      });
    }
  );
  const bulgeRectInfo = ref({
    width: 0,
    height: 0,
    left: 0
  });
  const hasBulgeButton = ref(false);
  const setBulgeCircle = async (itemRectInfo) => {
    const { left } = itemRectInfo;
    try {
      const rectInfo = await getSelectorNodeInfo(`#${rectId}`);
      const { left: tabbarRectLeft } = rectInfo;
      let width = itemRectInfo.width;
      if (itemRectInfo == null ? void 0 : itemRectInfo.maxWidth) {
        width = itemRectInfo.maxWidth;
      }
      bulgeRectInfo.value.width = width * 0.75;
      bulgeRectInfo.value.height = bulgeRectInfo.value.width;
      bulgeRectInfo.value.left = left - (tabbarRectLeft || 0) + itemRectInfo.width / 2;
      hasBulgeButton.value = true;
    } catch (err) {
      debugWarn("TnTabbar", `获取Tabbar节点信息失败: ${err}`);
    }
  };
  provide(
    tabbarContextKey,
    reactive({
      ...toRefs(props),
      items,
      activeUid,
      addItem,
      removeItem,
      setActiveItem,
      setBulgeCircle
    })
  );
  return {
    rectId,
    hasBulgeButton,
    bulgeRectInfo,
    setActiveItem,
    setActiveItemByValue
  };
};
const useTabbarItem = (props, emit2) => {
  const tabbarContext = inject(tabbarContextKey);
  const instance = getCurrentInstance();
  if (!tabbarContext) {
    debugWarn("TnTabbarItem", "TnTabbarItem必须在TnTabbar中使用");
  }
  if (!instance) {
    debugWarn("TnTabbarItem", "TnTabbarItem必须在setup中使用");
  }
  const uid2 = instance.uid || generateId();
  const itemId = `tti-${uid2}`;
  const { getSelectorNodeInfo } = useSelectorQuery(instance);
  const isActive = computed(() => (tabbarContext == null ? void 0 : tabbarContext.activeUid) === uid2);
  const iconSize = computed(
    () => props.iconSize || (tabbarContext == null ? void 0 : tabbarContext.iconSize) || ""
  );
  const hasBadge = computed(() => !!props.badge);
  const itemClick = () => {
    if (isActive.value || props.disabled)
      return;
    tabbarContext == null ? void 0 : tabbarContext.setActiveItem(uid2);
    emit2("click");
  };
  const itemRectInfo = ref({
    width: 0,
    height: 0,
    left: 0
  });
  let initRectCount = 0;
  const getItemRectInfo = async () => {
    try {
      const rectInfo = await getSelectorNodeInfo(`#${itemId}`);
      if (rectInfo.width && rectInfo.width < 30) {
        throw new Error("获取TabbarItem节点宽度失败");
      }
      initRectCount = 0;
      itemRectInfo.value.width = rectInfo.width || 0;
      itemRectInfo.value.height = rectInfo.height || 0;
      itemRectInfo.value.left = rectInfo.left || 0;
      if (itemRectInfo.value.width > 80) {
        itemRectInfo.value.maxWidth = 80;
      }
      tabbarContext == null ? void 0 : tabbarContext.setBulgeCircle(itemRectInfo.value);
    } catch (err) {
      if (initRectCount > 10) {
        initRectCount = 0;
        debugWarn("TnTabbarItem", `获取TabbarItem节点信息失败: ${err}`);
        return;
      }
      initRectCount++;
      setTimeout(() => {
        getItemRectInfo();
      }, 150);
    }
  };
  tabbarContext == null ? void 0 : tabbarContext.addItem({
    uid: uid2,
    name: props.name
  });
  onMounted(() => {
    nextTick$1(() => {
      if (props.bulge)
        getItemRectInfo();
    });
  });
  onUnmounted(() => {
    tabbarContext == null ? void 0 : tabbarContext.removeItem(uid2);
  });
  return {
    itemId,
    isActive,
    itemRectInfo,
    iconSize,
    hasBadge,
    itemClick
  };
};
const tabbarItemProps = buildProps({
  ...tabbarBaseProps,
  /**
   * @description item的唯一标识，与modelValue对应
   */
  name: {
    type: [String, Number]
  },
  /**
   * @description 图标
   */
  icon: String,
  /**
   * @description 选中时的图标
   */
  activeIcon: String,
  /**
   * @description 文字
   */
  text: String,
  /**
   * @description item是否凸起
   */
  bulge: Boolean,
  /**
   * @description 凸起按钮背景颜色
   */
  bulgeBgColor: String,
  /**
   * @description 凸起按钮字体颜色
   */
  bulgeTextColor: String,
  /**
   * @description 角标的值
   */
  badge: {
    type: [String, Number]
  },
  /**
   * @description 角标配置
   */
  badgeConfig: {
    type: definePropType(Object),
    default: () => ({})
  },
  /**
   * @description 是否禁用
   */
  disabled: Boolean
});
const tabbatItemEmits = {
  /**
   * @description 点击事件
   */
  click: () => true
};
const searchBoxShape = ["square", "round"];
const searchBoxAlign = ["left", "center", "right"];
const searchBoxProps = buildProps({
  /**
   * @description 搜索框绑定的值
   */
  modelValue: {
    type: String,
    default: ""
  },
  /**
   * @description 搜索框的占位符
   */
  placeholder: {
    type: String,
    default: "请输入搜索内容"
  },
  /**
   * @description 搜索框占位符旁边的图标
   */
  placeholderIcon: {
    type: String,
    default: "search"
  },
  /**
   * @description 搜索框的形状
   */
  shape: {
    type: String,
    values: searchBoxShape,
    default: "square"
  },
  /**
   * @description 搜索框的尺寸，可以设置 `sm`、`lg`、`xl`
   */
  size: useComponentSizeProp,
  /**
   * @description 搜索框文字的颜色，以tn开头使用狮业有承的颜色
   */
  textColor: String,
  /**
   * @description 搜索框占位文字颜色，以tn开头使用狮业有承的颜色
   */
  placeholderColor: String,
  /**
   * @description 搜索框文字对齐方式
   */
  textAlign: {
    type: String,
    values: searchBoxAlign,
    default: "left"
  },
  /**
   * @description 显示边框
   */
  border: {
    type: Boolean,
    default: true
  },
  /**
   * @description 边框颜色
   */
  borderColor: String,
  /**
   * @description 获取搜索框焦点
   */
  focus: Boolean,
  /**
   * @description 是否禁用搜索框
   */
  disabled: Boolean,
  /**
   * @description 是否显示清除按钮
   */
  clearable: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否显示搜索按钮
   */
  searchButton: {
    type: Boolean,
    default: true
  },
  /**
   * @description 搜索按钮的文字
   */
  searchButtonText: {
    type: String,
    default: "搜 索"
  },
  /**
   * @description 搜索按钮字体颜色，以tn开头使用狮业有承的颜色
   */
  searchButtonTextColor: String,
  /**
   * @description 搜索按钮背景颜色，以tn开头使用狮业有承的颜色
   */
  searchButtonBgColor: String,
  /**
   * @description 输入是否节流
   */
  throllte: {
    type: Boolean,
    default: true
  },
  /**
   * @description 节流延迟时间，单位毫秒
   */
  throllteTime: {
    type: Number,
    default: 1e3
  }
});
const searchBoxEmits = {
  [UPDATE_MODEL_EVENT]: (value) => isString(value),
  [CHANGE_EVENT]: (value) => isString(value),
  /**
   * @description 搜索框输入时触发
   */
  input: (value) => isString(value),
  /**
   * @description 点击搜索框时触发
   */
  click: () => true,
  /**
   * @description 聚焦搜索输入框时触发
   */
  focus: () => true,
  /**
   * @description 搜索输入框失去焦点时触发
   */
  blur: () => true,
  /**
   * @description 点击搜索按钮时触发
   */
  search: (value) => isString(value),
  /**
   * @description 点击清除按钮时触发
   */
  clear: () => true
};
const useSearchBoxCustomStyle = (props) => {
  const ns = useNamespace("search-box");
  const [textColorClass, textColorStyle] = useComponentColor(
    toRef(props, "textColor"),
    "text"
  );
  const [borderColorClass, borderColorStyle] = useComponentColor(
    toRef(props, "borderColor"),
    "border"
  );
  const [placeholderColorClass, placeholderColorStyle] = useComponentColor(
    toRef(props, "placeholderColor"),
    "text"
  );
  const [searchButtonTextColorClass, searchButtonTextColorStyle] = useComponentColor(toRef(props, "searchButtonTextColor"), "text");
  const [searchButtonBgColorClass, searchButtonBgColorStyle] = useComponentColor(toRef(props, "searchButtonBgColor"), "bg");
  const searchBoxClass = computed(() => {
    const cls = [
      ns.b(),
      ns.m(props.shape),
      ns.is("no-search-btn", !props.searchButton),
      ns.is("disabled", props.disabled)
    ];
    if (props.border) {
      cls.push(ns.m("border"));
      if (borderColorClass.value)
        cls.push(borderColorClass.value);
    }
    if (props.size)
      cls.push(ns.m(props.size));
    if (textColorClass.value)
      cls.push(textColorClass.value);
    return cls.join(" ");
  });
  const searchBoxStyle = computed(() => {
    const style = {};
    if (!textColorClass.value)
      style.color = textColorStyle.value || "var(--tn-text-color-primary)";
    if (props.border) {
      if (!borderColorClass.value) {
        style.borderColor = borderColorStyle.value || "var(--tn-color-gray)";
      }
    }
    return style;
  });
  const placeholderClass = computed(() => {
    const cls = [
      ns.e("placeholder"),
      ns.em("placeholder", props.textAlign)
    ];
    if (placeholderColorClass.value)
      cls.push(placeholderColorClass.value);
    return cls.join(" ");
  });
  const placeholderStyle = computed(() => {
    const style = {};
    if (!placeholderColorClass.value)
      style.color = placeholderColorStyle.value || "var(--tn-text-color-secondary)";
    return style;
  });
  const searchButtonClass = computed(() => {
    const cls = [ns.e("search-button")];
    if (searchButtonBgColorClass.value)
      cls.push(searchButtonBgColorClass.value);
    if (searchButtonTextColorClass.value)
      cls.push(searchButtonTextColorClass.value);
    return cls.join(" ");
  });
  const searchButtonStyle = computed(() => {
    const style = {};
    if (!searchButtonBgColorClass.value)
      style.backgroundColor = searchButtonBgColorStyle.value || "var(--tn-color-primary)";
    if (searchButtonTextColorStyle.value) {
      style.color = searchButtonTextColorStyle.value;
    } else if (!searchButtonBgColorClass.value && !searchButtonTextColorClass.value) {
      style.color = "var(--tn-color-white)";
    }
    return style;
  });
  return {
    ns,
    searchBoxClass,
    searchBoxStyle,
    placeholderClass,
    placeholderStyle,
    searchButtonClass,
    searchButtonStyle
  };
};
const useSearchBox = (props, emits) => {
  const showPlaceholder = ref(!props.modelValue);
  const inputValue = ref(props.modelValue);
  watch(
    () => props.modelValue,
    (val) => {
      if (props.modelValue === inputValue.value)
        return;
      inputValue.value = val;
      showPlaceholder.value = !val;
    }
  );
  const inputFocus = ref(false);
  if (props.focus) {
    showPlaceholder.value = false;
    nextTick$1(() => {
      inputFocus.value = true;
    });
  }
  const searchBoxClickEvent = () => {
    emits("click");
    if (props.disabled)
      return;
    showPlaceholder.value = false;
    inputFocus.value = true;
  };
  const inputFocusEvent = () => {
    emits("focus");
  };
  const inputBlurEvent = () => {
    showPlaceholder.value = !inputValue.value;
    inputFocus.value = false;
    emits("blur");
  };
  const inputHandle = () => {
    emits(UPDATE_MODEL_EVENT, inputValue.value);
    nextTick$1(() => {
      emits(CHANGE_EVENT, inputValue.value);
      emits("input", inputValue.value);
    });
  };
  const inputValueEvent = props.throllte ? throttle$1(inputHandle, props.throllteTime) : inputHandle;
  const clearClickEvent = () => {
    inputValue.value = "";
    emits(UPDATE_MODEL_EVENT, "");
    nextTick$1(() => {
      inputFocus.value = true;
      emits(CHANGE_EVENT, "");
      emits("clear");
    });
  };
  const searchBtnClickEvent = debounce(() => {
    if (props.disabled)
      return;
    emits("search", inputValue.value);
  }, 250);
  return {
    showPlaceholder,
    inputValue,
    inputFocus,
    searchBoxClickEvent,
    inputFocusEvent,
    inputBlurEvent,
    inputValueEvent,
    clearClickEvent,
    searchBtnClickEvent
  };
};
const swiperIndicatorPosition = [
  "left-top",
  "center-top",
  "right-top",
  "left-bottom",
  "center-bottom",
  "right-bottom"
];
const swiperIndicatorType = ["line", "dot", "number"];
const swiperProps = buildProps({
  /**
   * @description 当前选中item的索引值
   */
  modelValue: {
    type: Number,
    default: 0
  },
  /**
   * @description swiper数据源
   */
  data: {
    type: definePropType(Array),
    default: []
  },
  /**
   * @description 空白swiper的数量，如果设置了data则以data的数据为准
   */
  blankCount: Number,
  /**
   * @description 轮播图的宽度，默认单位rpx
   */
  width: String,
  /**
   * @description 轮播图的高度，默认单位rpx
   */
  height: String,
  /**
   * @description 是否自动播放
   */
  autoplay: {
    type: Boolean,
    default: false
  },
  /**
   * @description 自动播放的时间间隔，单位ms
   */
  interval: {
    type: Number,
    default: 5e3
  },
  /**
   * @description 动画时长，单位ms
   */
  duration: {
    type: Number,
    default: 500
  },
  /**
   * @description 是否循环播放
   */
  loop: {
    type: Boolean,
    default: false
  },
  /**
   * @description 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
   */
  previousMargin: {
    type: String,
    default: "0px"
  },
  /**
   * @description 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
   */
  nextMargin: {
    type: String,
    default: "0px"
  },
  /**
   * @description 是否显示指示器
   */
  indicator: Boolean,
  /**
   * @description 指示器的位置
   */
  indicatorPosition: {
    type: String,
    values: swiperIndicatorPosition,
    default: "center-bottom"
  },
  /**
   * @description 指示器的类型
   */
  indicatorType: {
    type: String,
    values: swiperIndicatorType,
    default: "dot"
  },
  /**
   * @description 指示器颜色，以tn开头使用狮业有承内置的颜色
   */
  indicatorBgColor: String,
  /**
   * @description 指示器激活时的颜色，以tn开头使用狮业有承内置的颜色
   */
  indicatorActiveBgColor: String,
  /**
   * @description 指示器文本颜色，以tn开头使用狮业有承内置的颜色
   */
  indicatorTextColor: String
});
const swiperEmits = {
  [UPDATE_MODEL_EVENT]: (value) => isNumber(value),
  /**
   * @description 选项发生改变时触发
   */
  [CHANGE_EVENT]: (value) => isNumber(value),
  /**
   * @description item点击事件
   */
  "item-click": (value) => isNumber(value)
};
const useSwiperCustomStyle = (props) => {
  const ns = useNamespace("swiper");
  const [indicatorBgColorClass, indicatorBgColoeStyle] = useComponentColor(
    toRef(props, "indicatorBgColor"),
    "bg"
  );
  const [indicatorTextColorClass, indicatorTextColorStyle] = useComponentColor(
    toRef(props, "indicatorTextColor"),
    "text"
  );
  const [indicatorActiveBgColorClass, indicatorActiveBgColorStyle] = useComponentColor(toRef(props, "indicatorActiveBgColor"), "bg");
  const swiperStyle = computed(() => {
    const style = {};
    if (props.width !== void 0)
      style.width = formatDomSizeValue(props.width);
    if (props.height !== void 0)
      style.height = formatDomSizeValue(props.height);
    return style;
  });
  const indicatorColorClass = computed(() => {
    return (active) => {
      const cls = [];
      if (props.indicatorType === "number") {
        if (indicatorBgColorClass.value)
          cls.push(indicatorBgColorClass.value);
        if (indicatorTextColorClass.value)
          cls.push(indicatorTextColorClass.value);
      } else {
        if (active) {
          if (indicatorActiveBgColorClass.value)
            cls.push(indicatorActiveBgColorClass.value);
        } else {
          if (indicatorBgColorClass.value)
            cls.push(indicatorBgColorClass.value);
        }
      }
      return cls.join(" ");
    };
  });
  const indicatorColorStyle = computed(() => {
    return (active) => {
      const style = {};
      if (props.indicatorType === "number") {
        if (!indicatorBgColorClass.value) {
          style.backgroundColor = indicatorBgColoeStyle.value || "rgba(0, 0, 0, 0.25)";
        }
        if (indicatorTextColorStyle.value) {
          style.color = indicatorTextColorStyle.value;
        } else if (!indicatorTextColorClass.value && !indicatorBgColorClass.value) {
          style.color = "var(--tn-color-white)";
        }
      } else {
        if (active) {
          if (!indicatorActiveBgColorClass.value)
            style.backgroundColor = indicatorActiveBgColorStyle.value || "var(--tn-color-white)";
        } else {
          if (!indicatorBgColorClass.value)
            style.backgroundColor = indicatorBgColoeStyle.value || "rgba(0, 0, 0, 0.25)";
        }
      }
      return style;
    };
  });
  return {
    ns,
    swiperStyle,
    indicatorColorClass,
    indicatorColorStyle
  };
};
const useSwiper = (props, emits) => {
  const currentSwiperIndex = ref(
    isEmptyVariableInDefault(props == null ? void 0 : props.modelValue, 0)
  );
  watch(
    () => props.modelValue,
    (value) => currentSwiperIndex.value = isEmptyVariableInDefault(value, 0)
  );
  const swiperData = computed(() => {
    var _a2;
    if ((_a2 = props.data) == null ? void 0 : _a2.length)
      return props.data;
    if (props.blankCount)
      return Array.from({ length: props.blankCount }).map((_, i) => i);
    return [];
  });
  const swiperCount = computed(() => {
    var _a2;
    return ((_a2 = swiperData.value) == null ? void 0 : _a2.length) || 0;
  });
  const swiperChangeHandle = (event) => {
    const { current } = event.detail;
    if (props.modelValue === void 0 || props.modelValue === 0)
      currentSwiperIndex.value = current;
    emits(UPDATE_MODEL_EVENT, current);
    nextTick$1(() => {
      emits(CHANGE_EVENT, current);
    });
  };
  const itemClickHandle = () => {
    emits("item-click", currentSwiperIndex.value);
  };
  return {
    swiperData,
    currentSwiperIndex,
    swiperCount,
    swiperChangeHandle,
    itemClickHandle
  };
};
const avatarShape = ["circle", "square"];
const avatarProps = buildProps({
  /**
   * @description 头像地址(url地址和绝对地址)
   */
  url: String,
  /**
   * @descripttion 头像图标
   */
  icon: String,
  /**
   * @description 头像图标配置
   */
  iconConfig: {
    type: definePropType(Object),
    default: () => ({})
  },
  /**
   * @description 头像颜色类型
   */
  type: {
    type: String,
    values: componentTypes,
    default: ""
  },
  /**
   * @description 头像大小
   */
  size: {
    type: [String, Number]
  },
  /**
   * @description 头像形状
   */
  shape: {
    type: String,
    values: avatarShape,
    default: "circle"
  },
  /**
   * @description 头像图片模式
   */
  imgMode: {
    type: String,
    values: componentImgModes,
    default: "aspectFill"
  },
  /**
   * @description 背景颜色
   */
  bgColor: String,
  /**
   * @description 显示边框
   */
  border: useComponentBoolean,
  /**
   * @description 边框颜色
   */
  borderColor: String,
  /**
   * @description 是否加粗边框
   */
  borderBold: useComponentBoolean,
  /**
   * @description 显示阴影
   */
  shadow: useComponentBoolean,
  /**
   * @description 阴影颜色
   */
  shadowColor: String,
  /**
   * @description 角标内容
   */
  badge: {
    type: [String, Number]
  },
  /**
   * @description 角标配置
   */
  badgeConfig: {
    type: definePropType(Object),
    default: () => ({})
  }
});
const avatarEmits = {
  /**
   * @description 点击事件
   */
  click: () => true
};
const useAvatarIconConfig = (config) => {
  const avatarGroup = inject(avatarGroupContextKey, void 0);
  const iconColor = computed(() => {
    var _a2;
    return (config == null ? void 0 : config.color) || ((_a2 = avatarGroup == null ? void 0 : avatarGroup.iconConfig) == null ? void 0 : _a2.color) || "";
  });
  const iconSize = computed(() => {
    var _a2;
    return (config == null ? void 0 : config.size) || ((_a2 = avatarGroup == null ? void 0 : avatarGroup.iconConfig) == null ? void 0 : _a2.size) || "";
  });
  const iconBold = computed(() => {
    var _a2;
    return (config == null ? void 0 : config.bold) || ((_a2 = avatarGroup == null ? void 0 : avatarGroup.iconConfig) == null ? void 0 : _a2.bold) || false;
  });
  return {
    iconColor,
    iconSize,
    iconBold
  };
};
const useAvatarProps = (props) => {
  const avatarGroup = inject(avatarGroupContextKey, void 0);
  const type = computed(() => {
    return isEmptyDoubleVariableInDefault(props == null ? void 0 : props.type, avatarGroup == null ? void 0 : avatarGroup.type, "");
  });
  const size2 = computed(() => {
    return isEmptyDoubleVariableInDefault(props == null ? void 0 : props.size, avatarGroup == null ? void 0 : avatarGroup.size, "");
  });
  const shape = computed(() => {
    return isEmptyDoubleVariableInDefault(
      props == null ? void 0 : props.shape,
      avatarGroup == null ? void 0 : avatarGroup.shape,
      "circle"
    );
  });
  const imgMode = computed(() => {
    return isEmptyDoubleVariableInDefault(
      props == null ? void 0 : props.imgMode,
      avatarGroup == null ? void 0 : avatarGroup.imgMode,
      "aspectFill"
    );
  });
  const bgColor = computed(() => {
    return isEmptyDoubleVariableInDefault(
      props == null ? void 0 : props.bgColor,
      avatarGroup == null ? void 0 : avatarGroup.bgColor,
      "tn-gray-light"
    );
  });
  const border = computed(() => {
    return isEmptyDoubleVariableInDefault(
      props == null ? void 0 : props.border,
      avatarGroup == null ? void 0 : avatarGroup.border,
      false
    );
  });
  const borderColor = computed(() => {
    return isEmptyDoubleVariableInDefault(
      props == null ? void 0 : props.borderColor,
      avatarGroup == null ? void 0 : avatarGroup.borderColor,
      ""
    );
  });
  const borderBold = computed(() => {
    return isEmptyDoubleVariableInDefault(
      props == null ? void 0 : props.borderBold,
      avatarGroup == null ? void 0 : avatarGroup.borderBold,
      false
    );
  });
  const shadow = computed(() => {
    return isEmptyDoubleVariableInDefault(
      props == null ? void 0 : props.shadow,
      avatarGroup == null ? void 0 : avatarGroup.shadow,
      false
    );
  });
  const shadowColor = computed(() => {
    return isEmptyDoubleVariableInDefault(
      props == null ? void 0 : props.shadowColor,
      avatarGroup == null ? void 0 : avatarGroup.shadowColor,
      ""
    );
  });
  const avatarGap = computed(() => {
    let gap = Number(isEmptyVariableInDefault(avatarGroup == null ? void 0 : avatarGroup.gap, 0));
    if (gap < 0)
      gap = 0;
    if (gap > 1)
      gap = 1;
    return gap;
  });
  return {
    type,
    size: size2,
    shape,
    imgMode,
    bgColor,
    border,
    borderColor,
    borderBold,
    shadow,
    shadowColor,
    avatarGap
  };
};
const useAvatarCustomStyle = (props, groupIndex, avatarWidth) => {
  const ns = useNamespace("avatar");
  const {
    type,
    size: size2,
    shape,
    bgColor,
    border,
    borderColor,
    shadow,
    shadowColor,
    avatarGap
  } = useAvatarProps(props);
  const [bgColorClass, bgColorStyle] = useComponentColor(bgColor, "bg");
  const [borderColorClass, borderColorStyle] = useComponentColor(
    borderColor,
    "border"
  );
  const [shadowColorClass] = useComponentColor(shadowColor, "shadow");
  const { sizeType } = useComponentSize(size2.value);
  const avatarClass = computed(() => {
    const cls = [];
    cls.push(ns.b());
    if (type.value)
      cls.push(`tn-type-${type.value}_bg`);
    if (!type.value && bgColorClass.value)
      cls.push(bgColorClass.value);
    if (sizeType.value === "inner")
      cls.push(ns.m(size2.value));
    if (shape.value)
      cls.push(ns.m(shape.value));
    if (border.value) {
      cls.push("tn-border");
      if (borderColorClass.value)
        cls.push(borderColorClass.value);
    }
    if (shadow.value) {
      cls.push("tn-shadow");
      if (shadowColorClass.value)
        cls.push(shadowColorClass.value);
    }
    return cls.join(" ");
  });
  const avatarStyle = computed(() => {
    const style = {};
    if (sizeType.value === "custom") {
      style.width = formatDomSizeValue(size2.value);
      style.height = style.width;
    }
    if (bgColorStyle.value)
      style.backgroundColor = bgColorStyle.value;
    if (border.value && borderColorStyle.value)
      style.borderColor = borderColorStyle.value;
    if (groupIndex.value != -1) {
      style.zIndex = groupIndex.value + 1;
      if (groupIndex.value > 0) {
        style.marginLeft = `calc(-${avatarWidth.value * avatarGap.value}px)`;
      } else {
        style.marginLeft = "0px";
      }
    }
    return style;
  });
  return {
    ns,
    avatarClass,
    avatarStyle
  };
};
const useAvatar = (props, emits) => {
  const instance = getCurrentInstance();
  if (!instance) {
    debugWarn("TnAvatarGroup", "请在 setup 中使用 useAvatarGroup");
  }
  const { uid: uid2 } = instance;
  const avatarGroup = inject(avatarGroupContextKey, void 0);
  avatarGroup == null ? void 0 : avatarGroup.addItem({ uid: uid2 });
  const componentId = `ta-${generateId()}`;
  const { getSelectorNodeInfo } = useSelectorQuery(instance);
  const groupAvatarCount = computed(() => {
    return isEmptyVariableInDefault(avatarGroup == null ? void 0 : avatarGroup.avatarItems.length, 0);
  });
  const avatarGroupIndex = ref(-1);
  nextTick$1(() => {
    const avatarIndex = avatarGroup == null ? void 0 : avatarGroup.avatarItems.findIndex(
      (item) => item.uid === uid2
    );
    avatarGroupIndex.value = isEmptyVariableInDefault(avatarIndex, -1);
    if (!avatarWidth.value && avatarGroupIndex.value !== -1) {
      getAvatarWidthNodeInfo();
    }
  });
  const avatarWidth = ref(0);
  let initCount = 0;
  const getAvatarWidthNodeInfo = async () => {
    try {
      const rectInfo = await getSelectorNodeInfo(`#${componentId}`);
      if (!rectInfo.width) {
        throw new Error("获取头像宽度信息失败");
      }
      avatarWidth.value = rectInfo.width || 0;
    } catch (err) {
      if (initCount > 10) {
        initCount = 0;
        debugWarn("TnAvatar", `获取头像宽度信息失败：${err}`);
        return;
      }
      initCount++;
      setTimeout(() => {
        getAvatarWidthNodeInfo();
      }, 150);
    }
  };
  const avatarClick = () => {
    avatarGroup == null ? void 0 : avatarGroup.handleItemClick(uid2);
    emits("click");
  };
  onUnmounted(() => {
    avatarGroup == null ? void 0 : avatarGroup.removeItem(uid2);
  });
  return {
    componentId,
    groupAvatarCount,
    avatarGroupIndex,
    avatarWidth,
    avatarClick
  };
};
const useAvatarGroup = (props, emits) => {
  const {
    children: avatarItems,
    addChild: addItem,
    removeChild: removeItem
  } = useOrderedChildren();
  const handleItemClick = (uid2) => {
    const index2 = avatarItems.value.findIndex((item) => item.uid === uid2);
    emits("click", index2);
  };
  provide(
    avatarGroupContextKey,
    reactive({
      ...toRefs(props),
      avatarItems,
      addItem,
      removeItem,
      handleItemClick
    })
  );
};
const useAvatarBadgeProps = (props) => {
  const avatarGroup = inject(avatarGroupContextKey, void 0);
  const max = computed(() => {
    var _a2, _b;
    return isEmptyDoubleVariableInDefault(
      (_a2 = props == null ? void 0 : props.badgeConfig) == null ? void 0 : _a2.max,
      (_b = avatarGroup == null ? void 0 : avatarGroup.badgeConfig) == null ? void 0 : _b.max
    );
  });
  const type = computed(() => {
    var _a2, _b;
    return isEmptyDoubleVariableInDefault(
      (_a2 = props == null ? void 0 : props.badgeConfig) == null ? void 0 : _a2.type,
      (_b = avatarGroup == null ? void 0 : avatarGroup.badgeConfig) == null ? void 0 : _b.type,
      "primary"
    );
  });
  const bgColor = computed(() => {
    var _a2, _b;
    return isEmptyDoubleVariableInDefault(
      (_a2 = props == null ? void 0 : props.badgeConfig) == null ? void 0 : _a2.bgColor,
      (_b = avatarGroup == null ? void 0 : avatarGroup.badgeConfig) == null ? void 0 : _b.bgColor
    );
  });
  const textColor = computed(() => {
    var _a2, _b;
    return isEmptyDoubleVariableInDefault(
      (_a2 = props == null ? void 0 : props.badgeConfig) == null ? void 0 : _a2.textColor,
      (_b = avatarGroup == null ? void 0 : avatarGroup.badgeConfig) == null ? void 0 : _b.textColor
    );
  });
  const fontSize = computed(() => {
    var _a2, _b;
    return isEmptyDoubleVariableInDefault(
      (_a2 = props == null ? void 0 : props.badgeConfig) == null ? void 0 : _a2.fontSize,
      (_b = avatarGroup == null ? void 0 : avatarGroup.badgeConfig) == null ? void 0 : _b.fontSize
    );
  });
  const size2 = computed(() => {
    var _a2, _b;
    return isEmptyDoubleVariableInDefault(
      (_a2 = props == null ? void 0 : props.badgeConfig) == null ? void 0 : _a2.size,
      (_b = avatarGroup == null ? void 0 : avatarGroup.badgeConfig) == null ? void 0 : _b.size
    );
  });
  const bold = computed(() => {
    var _a2, _b;
    return isEmptyDoubleVariableInDefault(
      (_a2 = props == null ? void 0 : props.badgeConfig) == null ? void 0 : _a2.bold,
      (_b = avatarGroup == null ? void 0 : avatarGroup.badgeConfig) == null ? void 0 : _b.bold,
      false
    );
  });
  const dot = computed(() => {
    var _a2, _b;
    return isEmptyDoubleVariableInDefault(
      (_a2 = props == null ? void 0 : props.badgeConfig) == null ? void 0 : _a2.dot,
      (_b = avatarGroup == null ? void 0 : avatarGroup.badgeConfig) == null ? void 0 : _b.dot,
      false
    );
  });
  const absolutePosition = computed(() => {
    var _a2, _b;
    return isEmptyDoubleVariableInDefault(
      (_a2 = props == null ? void 0 : props.badgeConfig) == null ? void 0 : _a2.absolutePosition,
      (_b = avatarGroup == null ? void 0 : avatarGroup.badgeConfig) == null ? void 0 : _b.absolutePosition,
      {}
    );
  });
  const absoluteCenter = computed(() => {
    var _a2, _b;
    return isEmptyDoubleVariableInDefault(
      (_a2 = props == null ? void 0 : props.badgeConfig) == null ? void 0 : _a2.absoluteCenter,
      (_b = avatarGroup == null ? void 0 : avatarGroup.badgeConfig) == null ? void 0 : _b.absoluteCenter,
      true
    );
  });
  const badgeConfig = computed(() => {
    return {
      value: props.badge,
      max: max.value,
      type: type.value,
      bgColor: bgColor.value,
      textColor: textColor.value,
      fontSize: fontSize.value,
      size: size2.value,
      bold: bold.value,
      customClass: "",
      customStyle: {},
      dot: dot.value,
      absolute: true,
      absolutePosition: absolutePosition.value,
      absoluteCenter: absoluteCenter.value,
      index: ""
    };
  });
  return {
    badgeConfig
  };
};
const overlayProps = buildProps({
  /**
   * @description 是否显示遮罩层
   */
  show: {
    type: Boolean,
    default: false
  },
  /**
   * @description 动画时间，单位毫秒
   */
  duration: {
    type: Number,
    default: 300
  },
  /**
   * @description 遮罩层透明度，有效值0-1
   */
  opacity: {
    type: Number,
    default: 0.5
  },
  /**
   * @description zIndex
   */
  zIndex: {
    type: Number,
    default: ZIndex.mask
  }
});
const overlayEmits = {
  "update:show": (value) => isBoolean(value),
  click: () => true
};
const useOverlay = (props, emits) => {
  const ns = useNamespace("overlay");
  const overlayClass = computed(() => {
    const cls = [ns.b()];
    if (props.show)
      cls.push(ns.m("show"));
    return cls.join(" ");
  });
  const overlayStyle = computed(() => {
    const style = {};
    style.transitionDuration = `${isEmptyVariableInDefault(
      props.duration,
      300
    )}ms`;
    style.backgroundColor = `rgba(0, 0, 0, ${isEmptyVariableInDefault(
      props.opacity,
      0.5
    )})`;
    if (props.zIndex)
      style.zIndex = props.zIndex;
    return style;
  });
  const overlayClick = () => {
    emits("update:show", false);
    emits("click");
  };
  return {
    ns,
    overlayClass,
    overlayStyle,
    overlayClick
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "overlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(__props, { emit: emits }) {
    const props = __props;
    const { overlayClass, overlayStyle, overlayClick } = useOverlay(props, emits);
    return (_ctx, _cache) => {
      return {
        a: n(unref(overlayClass)),
        b: s(unref(overlayStyle)),
        c: o(
          //@ts-ignore
          (...args) => unref(overlayClick) && unref(overlayClick)(...args)
        ),
        d: o(() => {
        })
      };
    };
  }
});
const Component$1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-40a804f4"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/node_modules/@tuniao/tnui-vue3-uniapp/components/overlay/src/overlay.vue"]]);
withNoopInstall(Component$1);
const popupOpenDirection = [
  "top",
  "bottom",
  "left",
  "right",
  "center"
];
const popupCloseBtnPosition = [
  "left-top",
  "right-top",
  "left-bottom",
  "right-bottom"
];
const popupProps = buildProps({
  /**
   * @description 控制弹框是否显示
   */
  modelValue: Boolean,
  /**
   * @description 弹框打开的方向
   */
  openDirection: {
    type: String,
    values: popupOpenDirection,
    default: "center"
  },
  /**
   * @description 弹窗的宽度，在 openDirection 为 left 或 right 或 center 时生效
   */
  width: {
    type: [String, Number]
  },
  /**
   * @description 弹窗的高度，在 openDirection 为 top 或 bottom 或 center 时生效
   */
  height: {
    type: [String, Number]
  },
  /**
   * @description 弹框的内容的背景颜色
   */
  bgColor: {
    type: String,
    default: "#fff"
  },
  /**
   * @description 弹框的内容的圆角
   */
  radius: {
    type: [String, Number],
    default: 15
  },
  /**
   * @description 是否显示overlay遮罩层
   */
  overlay: {
    type: Boolean,
    default: true
  },
  /**
   * @description overlay遮罩层的透明度
   */
  overlayOpacity: overlayProps["opacity"],
  /**
   * @description 点击overlay关闭弹框
   */
  overlayCloseable: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否显示关闭按钮
   */
  closeBtn: Boolean,
  /**
   * @description 关闭按钮的位置
   */
  closeBtnPosition: {
    type: String,
    values: popupCloseBtnPosition,
    default: "right-top"
  },
  /**
   * @description 底部是否开启安全区域
   */
  safeAreaInsetBottom: useComponentSafeAreaInsetBottomProp,
  /**
   * @description zIndex
   */
  zIndex: {
    type: Number,
    default: ZIndex.popup
  },
  /**
   * @description 距离顶部的距离，在 openDirection 为 top 或 left 或 right 时生效，默认单位为`px`
   */
  top: {
    type: [String, Number]
  }
});
const popupEmits = {
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
  open: () => true,
  close: () => true
};
const usePopup = (props) => {
  const { emit: emit2 } = getCurrentInstance();
  const showOverlay = ref(false);
  const showPopup = ref(false);
  const visiblePopup = ref(false);
  watch(
    () => props.modelValue,
    (value) => {
      if (value) {
        visiblePopup.value = true;
        showPopup.value = true;
        if (props.overlay)
          showOverlay.value = true;
        emit2("open");
      } else {
        showPopup.value = false;
        showOverlay.value = false;
        setTimeout(() => {
          visiblePopup.value = false;
        }, 250);
        emit2("close");
      }
    },
    {
      immediate: true
    }
  );
  const zIndex = computed(() => Number(props.zIndex));
  const overlayZIndex = computed(() => zIndex.value - 1);
  const updateModelValue = (value) => {
    emit2(UPDATE_MODEL_EVENT, value);
    nextTick$1(() => {
      emit2(value ? "open" : "close");
    });
  };
  const onClickCloseBtn = () => {
    updateModelValue(false);
  };
  const onClickOverlay = () => {
    if (props.overlayCloseable)
      updateModelValue(false);
  };
  return {
    showOverlay,
    showPopup,
    visiblePopup,
    zIndex,
    overlayZIndex,
    updateModelValue,
    onClickCloseBtn,
    onClickOverlay
  };
};
const usePopupCustomStyle = (props) => {
  const ns = useNamespace("popup");
  const { zIndex } = usePopup(props);
  const [contentBgColorClass, contentBgColorStyle] = useComponentColor(
    toRef(props, "bgColor"),
    "bg"
  );
  const popupContentClass = computed(() => {
    const cls = [ns.e("content")];
    if (props.openDirection)
      cls.push(ns.em("content", props.openDirection));
    if (props.openDirection === "bottom" && props.safeAreaInsetBottom) {
      cls.push("tn-u-safe-area");
    }
    if (contentBgColorClass.value)
      cls.push(contentBgColorClass.value);
    return cls.join(" ");
  });
  const popupContentStyle = computed(() => {
    const style = {};
    if (contentBgColorStyle.value)
      style.backgroundColor = contentBgColorStyle.value;
    if (props.radius) {
      style.overflow = "hidden";
      if (props.openDirection === "center") {
        style.borderRadius = formatDomSizeValue(props.radius);
      }
      if (props.openDirection === "top") {
        style.borderBottomLeftRadius = formatDomSizeValue(props.radius);
        style.borderBottomRightRadius = formatDomSizeValue(props.radius);
      }
      if (props.openDirection === "left") {
        style.borderTopRightRadius = formatDomSizeValue(props.radius);
        style.borderBottomRightRadius = formatDomSizeValue(props.radius);
      }
      if (props.openDirection === "right") {
        style.borderTopLeftRadius = formatDomSizeValue(props.radius);
        style.borderBottomLeftRadius = formatDomSizeValue(props.radius);
      }
      if (props.openDirection === "bottom") {
        style.borderTopLeftRadius = formatDomSizeValue(props.radius);
        style.borderTopRightRadius = formatDomSizeValue(props.radius);
      }
    }
    if (props.top && (props.openDirection === "top" || props.openDirection === "left" || props.openDirection === "right")) {
      style.top = formatDomSizeValue(props.top, "px");
    }
    if (props.width && (props.openDirection === "left" || props.openDirection === "right" || props.openDirection === "center")) {
      style.width = formatDomSizeValue(props.width);
    }
    if (props.height && (props.openDirection === "top" || props.openDirection === "bottom" || props.openDirection === "center")) {
      style.height = formatDomSizeValue(props.height);
    }
    if (props.openDirection === "left" || props.openDirection === "right") {
      if (props.top)
        style.height = `calc(100% - ${formatDomSizeValue(props.top, "px")})`;
    }
    style.zIndex = zIndex.value;
    return style;
  });
  return {
    ns,
    popupContentClass,
    popupContentStyle
  };
};
const graphicCardProps = buildProps({
  /**
   * @description 头像地址
   */
  avatar: {
    type: String,
    required: true
  },
  /**
   * @description 标题
   */
  title: {
    type: String,
    required: true
  },
  /**
   * @description 描述
   */
  description: {
    type: String,
    required: true
  },
  /**
   * @description 标签
   */
  tags: {
    type: definePropType(Array),
    default: () => []
  },
  /**
   * @description 标签背景颜色，以tn开头使用狮业有承内置的颜色
   */
  tagBgColor: String,
  /**
   * @description 标签文字颜色，以tn开头使用狮业有承内置的颜色
   */
  tagTextColor: String,
  /**
   * @description 内容
   */
  content: String,
  /**
   * @description 图片列表
   */
  images: {
    type: definePropType(Array),
    default: () => []
  },
  /**
   * @description 是否显示更多(是否显示顶部右边操作区域)
   */
  showMore: {
    type: Boolean,
    default: true
  },
  /**
   * @description 显示热度数量
   */
  showHot: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否激活热度
   */
  activeHot: Boolean,
  /**
   * @description 热度数量数据
   */
  hotCount: {
    type: Number,
    default: 0
  },
  /**
   * @description 热度数量图标
   */
  hotIcon: {
    type: String,
    default: "rocket"
  },
  /**
   * @description 激活时热度数量图标
   */
  activeHotIcon: {
    type: String,
    default: "rocket-fill"
  },
  /**
   * @description 热度数量图标颜色
   */
  hotColor: String,
  /**
   * @description 激活时热度数量图标颜色
   */
  activeHotColor: String,
  /**
   * @description 显示评论数量
   */
  showComment: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否激活评论
   */
  activeComment: Boolean,
  /**
   * @description 评论数量数据
   */
  commentCount: {
    type: Number,
    default: 0
  },
  /**
   * @description 评论数量图标
   */
  commentIcon: {
    type: String,
    default: "message"
  },
  /**
   * @description 激活时评论数量图标
   */
  activeCommentIcon: {
    type: String,
    default: "message-fill"
  },
  /**
   * @description 评论数量图标颜色
   */
  commentColor: String,
  /**
   * @description 激活时评论数量图标颜色
   */
  activeCommentColor: String,
  /**
   * @description 显示点赞数量
   */
  showLike: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否激活点赞
   */
  activeLike: Boolean,
  /**
   * @description 点赞数量数据
   */
  likeCount: {
    type: Number,
    default: 0
  },
  /**
   * @description 点赞数量图标
   */
  likeIcon: {
    type: String,
    default: "like-lack"
  },
  /**
   * @description 激活时点赞数量图标
   */
  activeLikeIcon: {
    type: String,
    default: "like-fill"
  },
  /**
   * @description 点赞数量图标颜色
   */
  likeColor: String,
  /**
   * @description 激活时点赞数量图标颜色
   */
  activeLikeColor: String,
  /**
   * @description 显示查看用户信息
   */
  showViewUser: {
    type: Boolean,
    default: true
  },
  /**
   * @description 实际查看数量数据
   */
  viewCount: {
    type: Number,
    default: 0
  },
  /**
   * @description 查看用户头像列表
   */
  viewUserAvatars: {
    type: definePropType(Array),
    default: () => []
  },
  /**
   * @description 最大显示用户头像数量
   */
  maxViewUserAvatarCount: {
    type: Number,
    default: 4
  }
});
const graphicCardEmits = {
  /**
   * @description 点击图文卡片
   */
  click: () => true,
  /**
   * @description 点击用户头像和浏览数量
   */
  "avatar-view-click": () => true,
  /**
   * @description 更多按钮点击
   */
  "more-click": () => true,
  /**
   * @description 点击热度数量
   */
  "hot-click": () => true,
  /**
   * @description 点击评论数量
   */
  "comment-click": () => true,
  /**
   * @description 点击点赞数量
   */
  "like-click": () => true
};
const useGraphicCardCustomStyle = (props) => {
  const ns = useNamespace("graphic-card");
  const [tagBgColorClass, tagBgColorStyle] = useComponentColor(
    toRef(props, "tagBgColor"),
    "bg"
  );
  const [tagTextColorClass, tagTextColorStyle] = useComponentColor(
    toRef(props, "tagTextColor"),
    "text"
  );
  const [hotColorClass, hotColorStyle] = useComponentColor(
    toRef(props, "hotColor"),
    "text"
  );
  const [activeHotColorClass, activeHotColorStyle] = useComponentColor(
    toRef(props, "activeHotColor"),
    "text"
  );
  const [commentColorClass, commentColorStyle] = useComponentColor(
    toRef(props, "commentColor"),
    "text"
  );
  const [activeCommentColorClass, activeCommentColorStyle] = useComponentColor(
    toRef(props, "activeCommentColor"),
    "text"
  );
  const [likeColorClass, likeColorStyle] = useComponentColor(
    toRef(props, "likeColor"),
    "text"
  );
  const [activeLikeColorClass, activeLikeColorStyle] = useComponentColor(
    toRef(props, "activeLikeColor"),
    "text"
  );
  const tagClass = computed(() => {
    const cls = [];
    if (tagBgColorClass.value)
      cls.push(tagBgColorClass.value);
    if (tagTextColorClass.value)
      cls.push(tagTextColorClass.value);
    return cls.join(" ");
  });
  const tagStyle = computed(() => {
    const style = {};
    if (!tagBgColorClass.value) {
      style.backgroundColor = tagBgColorStyle.value || "var(--tn-color-gray-disabled)";
    }
    if (tagTextColorStyle.value) {
      style.color = tagTextColorStyle.value;
    } else if (!tagTextColorClass.value && !tagBgColorClass.value) {
      style.color = "var(--tn-text-color-primary)";
    }
    return style;
  });
  const hotClass = computed(() => {
    const cls = [ns.e("hot")];
    if (props.activeHot) {
      if (activeHotColorClass.value)
        cls.push(activeHotColorClass.value);
    } else {
      if (hotColorClass.value)
        cls.push(hotColorClass.value);
    }
    return cls.join(" ");
  });
  const hotStyle = computed(() => {
    const style = {};
    if (props.activeHot) {
      if (!activeHotColorClass.value) {
        style.color = activeHotColorStyle.value || "var(--tn-color-primary)";
      }
    } else {
      if (!hotColorClass.value) {
        style.color = hotColorStyle.value || "var(--tn-color-gray)";
      }
    }
    return style;
  });
  const commentClass = computed(() => {
    const cls = [ns.e("comment")];
    if (props.activeComment) {
      if (activeCommentColorClass.value)
        cls.push(activeCommentColorClass.value);
    } else {
      if (commentColorClass.value)
        cls.push(commentColorClass.value);
    }
    return cls.join(" ");
  });
  const commentStyle = computed(() => {
    const style = {};
    if (props.activeComment) {
      if (!activeCommentColorClass.value) {
        style.color = activeCommentColorStyle.value || "var(--tn-color-primary)";
      }
    } else {
      if (!commentColorClass.value) {
        style.color = commentColorStyle.value || "var(--tn-color-gray)";
      }
    }
    return style;
  });
  const likeClass = computed(() => {
    const cls = [ns.e("like")];
    if (props.activeLike) {
      if (activeLikeColorClass.value)
        cls.push(activeLikeColorClass.value);
    } else {
      if (likeColorClass.value)
        cls.push(likeColorClass.value);
    }
    return cls.join(" ");
  });
  const likeStyle = computed(() => {
    const style = {};
    if (props.activeLike) {
      if (!activeLikeColorClass.value) {
        style.color = activeLikeColorStyle.value || "var(--tn-color-red)";
      }
    } else {
      if (!likeColorClass.value) {
        style.color = likeColorStyle.value || "var(--tn-color-gray)";
      }
    }
    return style;
  });
  return {
    ns,
    tagClass,
    tagStyle,
    hotClass,
    hotStyle,
    commentClass,
    commentStyle,
    likeClass,
    likeStyle
  };
};
const useGraphicCard = (props, emits) => {
  const viewUserAvatars = ref([]);
  const viewUserCount = ref(0);
  if (props.showViewUser) {
    viewUserAvatars.value = props.viewUserAvatars.slice(
      0,
      props.maxViewUserAvatarCount
    );
    viewUserCount.value = props.viewUserAvatars.length;
  }
  const imageCount = computed(
    () => {
      var _a2;
      return isEmptyVariableInDefault((_a2 = props == null ? void 0 : props.images) == null ? void 0 : _a2.length, 0);
    }
  );
  const previewImageHandle = (index$1) => {
    index.previewImage({
      urls: props.images,
      current: index$1
    });
  };
  const cardClickEvent = () => {
    emits("click");
  };
  const handleAvatarClick = () => {
    emits("avatar-view-click");
  };
  const handleMoreClick = () => {
    emits("more-click");
  };
  const handleHotClick = () => {
    emits("hot-click");
  };
  const handleCommentClick = () => {
    emits("comment-click");
  };
  const handleLikeClick = () => {
    emits("like-click");
  };
  return {
    viewUserAvatars,
    viewUserCount,
    imageCount,
    previewImageHandle,
    cardClickEvent,
    handleAvatarClick,
    handleMoreClick,
    handleHotClick,
    handleCommentClick,
    handleLikeClick
  };
};
const coolIconType = [
  "mimic",
  "circle",
  "square",
  "oval",
  "triangle",
  "flower",
  "capsule",
  "dark-goldborder"
];
const coolIconProps = buildProps({
  /**
   * @description 图标名称
   */
  name: String,
  /**
   * @description 图标颜色，以tn开头使用狮业有承内置的颜色，如果是gradient开头则使用狮业有承内置的渐变色
   */
  color: String,
  /**
   * @description 背景颜色，以tn开头使用狮业有承内置的颜色
   */
  bgColor: String,
  /**
   * @description 图标大小，默认单位为rpx
   */
  size: {
    type: String,
    default: "100"
  },
  /**
   * @description 图标类型
   */
  type: {
    type: definePropType(String),
    values: coolIconType,
    default: "mimic"
  }
});
const coolIconEmits = {
  /**
   * @description 点击事件
   */
  click: () => true
};
const useCoolIconCustomStyle = (props) => {
  const ns = useNamespace("cool-icon");
  const gradientIcon = computed(() => {
    var _a2;
    if (props.type === "dark-goldborder")
      return false;
    return ((_a2 = props.color) == null ? void 0 : _a2.startsWith("gradient")) || false;
  });
  const [bgColorClass, bgColorStyle] = useComponentColor(
    toRef(props, "bgColor"),
    "bg"
  );
  const coolIconStyle = computed(() => {
    const style = {};
    if (props.size) {
      const size2 = formatDomSizeValue(props.size);
      style.height = style.width = size2;
      style.fontSize = `calc(${size2} * 0.6)`;
      if (props.type === "capsule") {
        style.height = `calc(${size2} * 0.75)`;
        style.fontSize = `calc(${size2} * 0.5)`;
        style.borderRadius = `calc(${size2} * 2)`;
      }
      if (props.type === "flower") {
        style.width = `calc(${size2} * 1.2)`;
        style.height = `calc(${size2} * 0.75)`;
        style.borderRadius = `calc(${size2} * 2)`;
      }
    }
    return style;
  });
  const coolIconBgClass = computed(() => {
    const cls = [ns.e("bg")];
    if (props.type !== "mimic" && props.type !== "dark-goldborder" && bgColorClass.value)
      cls.push(bgColorClass.value);
    return cls.join(" ");
  });
  const coolIconBgStyle = computed(() => {
    const style = {};
    if (bgColorStyle.value)
      style.backgroundColor = bgColorStyle.value;
    if (props.type === "mimic")
      style.backgroundColor = "transparent";
    if (props.type === "circle" || props.type === "oval") {
      if (!bgColorClass.value)
        style.backgroundColor = "#fff";
    }
    if (props.type === "dark-goldborder") {
      style.backgroundColor = "var(--tn-color-black)";
      style.border = "3px solid var(--tn-color-orangeyellow)";
      style.boxShadow = "6px 6px 8px var(--tn-color-orangeyellow-light)";
    }
    return style;
  });
  return {
    ns,
    gradientIcon,
    coolIconStyle,
    coolIconBgClass,
    coolIconBgStyle
  };
};
const timeLineKey = Symbol("timeLineKey");
const timeLineProps = buildProps({
  /**
   * @description 显示竖线
   */
  showLine: {
    type: Boolean,
    default: true
  }
});
const timeLineItemProps = buildProps({
  /**
   * @description 标题
   */
  title: String,
  /**
   * @description 标题icon
   */
  titleIcon: String,
  /**
   * @description 节点背景
   */
  dotBgColor: String,
  /**
   * @description 节点字体颜色
   */
  dotTextColor: String
});
const timeLineItemEmits = {
  /**
   * @description 点击事件
   */
  click: () => true
};
const useTimeLineCustomStyle = (props) => {
  const ns = useNamespace("time-line-item");
  const [dotBgColorClass, dotBgColorStyle] = useComponentColor(
    toRef(props, "dotBgColor"),
    "bg"
  );
  const [dotTextColorClass, dotTextColorStyle] = useComponentColor(
    toRef(props, "dotTextColor"),
    "text"
  );
  const dotClass = computed(() => {
    const cls = [];
    if (dotBgColorClass.value)
      cls.push(dotBgColorClass.value);
    if (dotTextColorClass.value)
      cls.push(dotTextColorClass.value);
    return cls.join(" ");
  });
  const dotStyle = computed(() => {
    const style = {};
    if (!dotBgColorClass.value) {
      style.backgroundColor = dotBgColorStyle.value || "var(--tn-color-blue)";
    }
    if (dotTextColorStyle.value) {
      style.color = dotTextColorStyle.value;
    } else if (!dotBgColorClass.value && !dotTextColorClass.value) {
      style.color = "#fff";
    }
    return style;
  });
  return {
    ns,
    dotClass,
    dotStyle
  };
};
const useTimeLineDataCustomStyle = (props) => {
  const ns = useNamespace("time-line-data");
  const [dotColorClass, dotColorStyle] = useComponentColor(
    toRef(props, "dotColor"),
    "text"
  );
  const dotClass = computed(() => {
    const cls = [];
    if (dotColorClass.value)
      cls.push(dotColorClass.value);
    return cls.join(" ");
  });
  const dotStyle = computed(() => {
    const style = {};
    if (!dotColorClass.value) {
      style.color = dotColorStyle.value || "var(--tn-color-red)";
    }
    return style;
  });
  return {
    ns,
    dotClass,
    dotStyle
  };
};
const timeLineDataProps = buildProps({
  /**
   * @description 节点图标
   */
  dotIcon: {
    type: String,
    default: "circle-fill"
  },
  /**
   * @description 节点颜色
   */
  dotColor: String
});
const timeLineDataEmits = {
  /**
   * @description 点击事件
   */
  click: () => true
};
const waterFallModes = ["normal", "calc"];
const waterFallProps = buildProps({
  /**
   * @description 列表数据
   */
  data: {
    type: Array,
    default: () => []
  },
  /**
   * @description 瀑布流模式
   */
  mode: {
    type: String,
    values: waterFallModes,
    default: "normal"
  }
});
const useWaterFall = (props) => {
  const instance = getCurrentInstance();
  if (!instance) {
    debugWarn("TnWaterFall", "请在 setup 中使用 useWaterFall");
  }
  const componentId = `twf-${generateId()}`;
  const { getSelectorNodeInfo } = useSelectorQuery(instance);
  const leftData = ref([]);
  const rightData = ref([]);
  let leftContainerHeight = 0;
  let rightContainerHeight = 0;
  const getContainerHeight = async () => {
    try {
      const leftContainerRectInfo = await getSelectorNodeInfo(
        `#${componentId}-left`
      );
      const rightContainerRectInfo = await getSelectorNodeInfo(
        `#${componentId}-right`
      );
      leftContainerHeight = leftContainerRectInfo.height || leftContainerHeight;
      rightContainerHeight = rightContainerRectInfo.height || rightContainerHeight;
    } catch (err) {
      debugWarn("TnWaterFall", `获取容器高度信息失败：${err}`);
    }
  };
  let oldUserData = [];
  const splitData = async (data) => {
    if (!data || !data.length)
      return;
    if (props.mode === "calc") {
      await getContainerHeight();
      if (leftContainerHeight <= rightContainerHeight) {
        leftData.value.push(data.shift());
      } else {
        rightData.value.push(data.shift());
      }
      nextTick$1(() => {
        setTimeout(() => {
          splitData(data);
        }, 200);
      });
    } else if (props.mode === "normal") {
      let firstLeft = true;
      await getContainerHeight();
      if (leftData.value.length > rightData.value.length) {
        firstLeft = false;
      }
      let leftSmall = false;
      if (leftContainerHeight < rightContainerHeight) {
        leftSmall = true;
      }
      data.forEach((item, index2) => {
        if (index2 % 2 === 0 && firstLeft || leftSmall) {
          leftData.value.push(item);
        } else {
          rightData.value.push(item);
        }
        if (!firstLeft) {
          firstLeft = true;
        }
        if (leftSmall && index2 >= 2) {
          leftSmall = false;
        }
      });
    }
  };
  const resetWaterFall = () => {
    if (!props.data)
      return;
    leftData.value = [];
    rightData.value = [];
    leftContainerHeight = 0;
    rightContainerHeight = 0;
    nextTick$1(() => {
      oldUserData = props.data;
      splitData(props.data);
    });
  };
  watch(
    () => props.data,
    (val) => {
      if (!val)
        return;
      if (oldUserData.length === val.length)
        return;
      const newData = cloneDeep(val.slice(oldUserData.length));
      if (!newData.length) {
        leftData.value = [];
        rightData.value = [];
        leftContainerHeight = 0;
        rightContainerHeight = 0;
      }
      nextTick$1(() => {
        oldUserData = val;
        splitData(newData);
      });
    },
    {
      immediate: true
    }
  );
  return {
    componentId,
    leftData,
    rightData,
    resetWaterFall
  };
};
const lazyLoadProps = buildProps({
  /**
   * @description 图片地址
   */
  src: String,
  /**
   * @description 图片高度
   */
  height: String,
  /**
   * @description 图片宽度
   */
  width: String,
  /**
   * @description 图片裁剪模式
   */
  mode: {
    type: String,
    values: componentImgModes,
    default: "aspectFill"
  },
  /**
   * @description 开始加载图片的位置，单位为 px，如果设置为负数表示距离底部还有多少个像素就开始加载
   */
  threshold: {
    type: Number,
    default: 100
  },
  /**
   * @description 是否开启过度效果
   */
  transition: {
    type: Boolean,
    default: true
  }
});
const lazyLoadEmits = {
  /**
   * @description 图片加载完成
   */
  loaded: () => true,
  /**
   * @description 图片加载失败
   */
  error: () => true
};
const useLazyLoadCustomStyle = (props) => {
  const ns = useNamespace("lazy-load");
  const lazyLoadStyle = computed(() => {
    const style = {};
    if (props.width)
      style.width = formatDomSizeValue(props.width);
    if (props.height)
      style.height = formatDomSizeValue(props.height);
    return style;
  });
  return {
    ns,
    lazyLoadStyle
  };
};
const useLazyLoad = (props) => {
  const instance = getCurrentInstance();
  if (!instance) {
    debugWarn("TnLazyLoad", "请在 setup 中使用 useLazyLoad");
  }
  const { emit: emit2 } = instance;
  const { getSelectorNodeInfo } = useSelectorQuery(instance);
  const { connectObserver, disconnectObserver } = useObserver(instance);
  const componentId = `tll-${generateId()}`;
  const threshold = computed(
    () => isEmptyVariableInDefault(props.threshold, 100)
  );
  const imageStatus = ref("waiting");
  const showImage = ref(false);
  let initCount = 0;
  const initObserver = async () => {
    disconnectObserver();
    try {
      await getSelectorNodeInfo(`#${componentId}`);
      initCount = 0;
      const bottomThreshold = threshold.value < 0 ? -Math.abs(threshold.value) : Math.abs(threshold.value);
      connectObserver(
        `#${componentId}`,
        (res) => {
          if (res.intersectionRatio > 0) {
            showImage.value = true;
            imageStatus.value = "loading";
            disconnectObserver();
          }
        },
        {
          type: "relativeToViewport",
          margins: {
            bottom: bottomThreshold
          }
        }
      );
    } catch (err) {
      if (initCount > 10) {
        initCount = 0;
        debugWarn("TnLazyLoad", `获取图片节点信息失败：${err}`);
        return;
      }
      initCount++;
      setTimeout(() => {
        initObserver();
      }, 150);
    }
  };
  const handleImageLoadedSuccess = () => {
    imageStatus.value = "loaded";
    emit2("loaded");
  };
  const handleImageLoadedFailed = (err) => {
    debugWarn("TnLazyLoad", `图片加载失败: ${err}`);
    imageStatus.value = "error";
    emit2("error");
  };
  onMounted(() => {
    nextTick$1(() => {
      initObserver();
    });
  });
  onUnmounted(() => {
    disconnectObserver();
  });
  return {
    componentId,
    imageStatus,
    showImage,
    handleImageLoadedSuccess,
    handleImageLoadedFailed
  };
};
const avatarGroupProps = buildProps({
  /**
   * @description 头像图标配置
   */
  iconConfig: avatarProps.iconConfig,
  /**
   * @description 头像颜色类型
   */
  type: avatarProps.type,
  /**
   * @description 头像大小
   */
  size: avatarProps.size,
  /**
   * @description 头像形状
   */
  shape: avatarProps.shape,
  /**
   * @description 头像图片模式
   */
  imgMode: avatarProps.imgMode,
  /**
   * @description 背景颜色
   */
  bgColor: avatarProps.bgColor,
  /**
   * @description 显示边框
   */
  border: {
    type: Boolean,
    default: true
  },
  /**
   * @description 边框颜色
   */
  borderColor: {
    type: String,
    default: "tn-white"
  },
  /**
   * @description 是否加粗边框
   */
  borderBold: avatarProps.borderBold,
  /**
   * @description 显示阴影
   */
  shadow: avatarProps.shadow,
  /**
   * @description 阴影颜色
   */
  shadowColor: avatarProps.shadowColor,
  /**
   * @description 头像角标配置
   */
  badgeConfig: avatarProps.badgeConfig,
  /**
   * @description 头像之间遮挡比例
   */
  gap: {
    type: [String, Number],
    default: 0.4
  }
});
const avatarGroupEmits = {
  /**
   * @description 点击头像
   */
  click: (index2) => typeof index2 === "number"
};
const suspendButtonShape = ["circle", "square"];
const suspendButtonProps = buildProps({
  /**
   * @description 按钮显示的图标
   */
  icon: String,
  /**
   * @description 按钮距离顶部的位置，单位rpx
   */
  top: {
    type: [String, Number],
    default: "80%"
  },
  /**
   * @description 按钮距离右侧的位置，单位rpx
   */
  right: {
    type: [String, Number],
    default: "5%"
  },
  /**
   * @description 按钮背景颜色, 以tn开头使用狮业有承内置的颜色
   */
  bgColor: {
    type: String,
    default: "tn-type-primary"
  },
  /**
   * @description 按钮文字颜色, 以tn开头使用狮业有承内置的颜色
   */
  textColor: {
    type: String,
    default: "tn-color-white"
  },
  /**
   * @description 按钮尺寸, 内置尺寸sm、lg、xl, 也可以传入指定尺寸的数值，默认单位为rpx
   */
  size: String,
  /**
   * @description 按钮形状
   */
  shape: {
    type: String,
    values: suspendButtonShape,
    default: "circle"
  },
  /**
   * @description 透明度
   */
  opacity: {
    type: Number,
    default: 0.9
  },
  /**
   * @description 是否显示阴影
   */
  shadow: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否有漂浮动画
   */
  float: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否固定位置
   */
  fixed: {
    type: Boolean,
    default: true
  }
});
const suspendButtonEmits = {
  /**
   * @description 点击按钮时触发
   */
  click: () => true
};
const useSuspendButtonCustomStyle = (props) => {
  const ns = useNamespace("suspend-button");
  const [bgColorClass, bgColorStyle] = useComponentColor(
    toRef(props, "bgColor"),
    "bg"
  );
  const [textColorClass, textColorStyle] = useComponentColor(
    toRef(props, "textColor"),
    "text"
  );
  const { sizeType } = useComponentSize(props.size);
  const buttonClass = computed(() => {
    const cls = [ns.b()];
    if (bgColorClass.value) {
      cls.push(bgColorClass.value);
    }
    if (textColorClass.value) {
      cls.push(textColorClass.value);
    }
    if (props.shape) {
      cls.push(ns.m(props.shape));
    }
    if (props.size && sizeType.value === "inner") {
      cls.push(ns.m(props.size));
    }
    if (props.float) {
      cls.push(ns.m("float"));
    }
    if (props.fixed) {
      cls.push(ns.m("fixed"));
    }
    if (props.shadow) {
      cls.push("tn-shadow");
    }
    return cls.join(" ");
  });
  const buttonStyle = computed(() => {
    const style = {};
    if (!bgColorClass.value) {
      style.backgroundColor = bgColorStyle.value || "var(--tn-color-primary)";
    }
    if (textColorStyle.value) {
      style.color = textColorStyle.value;
    } else if (!bgColorClass.value && !textColorClass.value) {
      style.color = "var(--tn-color-white)";
    }
    if (props.size && sizeType.value === "custom") {
      style.width = style.height = formatDomSizeValue(props.size);
    }
    if ((props == null ? void 0 : props.opacity) !== void 0) {
      style.opacity = props.opacity;
    }
    if ((props == null ? void 0 : props.top) !== void 0) {
      style.top = formatDomSizeValue(props.top);
    }
    if ((props == null ? void 0 : props.right) !== void 0) {
      style.right = formatDomSizeValue(props.right);
    }
    return style;
  });
  const iconClass = computed(() => {
    const cls = [ns.e("icon")];
    return cls.join(" ");
  });
  const iconStyle = computed(() => {
    const style = {};
    if (props.size && sizeType.value === "custom") {
      style.fontSize = `calc(${formatDomSizeValue(props.size)} * 0.7)`;
    }
    return style;
  });
  return {
    buttonClass,
    buttonStyle,
    iconClass,
    iconStyle
  };
};
const useSuspendButton = (emits) => {
  const clickHandle = () => {
    emits("click");
  };
  return {
    clickHandle
  };
};
const pickerBaseProps = buildProps({
  /**
   * @description 显示取消按钮
   */
  showCancel: {
    type: Boolean,
    default: true
  },
  /**
   * @description 取消按钮的文本
   */
  cancelText: {
    type: String,
    default: "取 消"
  },
  /**
   * @description 取消按钮的字体颜色，支持狮业有承内置的字体颜色
   */
  cancelColor: String,
  /**
   * @description 显示确定按钮
   */
  showConfirm: {
    type: Boolean,
    default: true
  },
  /**
   * @description 确定按钮的文本
   */
  confirmText: {
    type: String,
    default: "确 定"
  },
  /**
   * @description 确定按钮的字体颜色，支持狮业有承内置的字体颜色
   */
  confirmColor: String,
  /**
   * @description 显示遮罩
   */
  mask: Boolean,
  /**
   * zIndex
   */
  zIndex: {
    type: Number,
    default: ZIndex.popup
  }
});
const pickerProps = buildProps({
  ...pickerBaseProps,
  /**
   * @description picker绑定的值
   */
  modelValue: {
    type: definePropType([String, Number, Array]),
    default: ""
  },
  /**
   * @description 显示picker选项弹框
   */
  open: Boolean,
  /**
   * @description picker选项的数据
   */
  data: {
    type: definePropType([Array]),
    default: () => []
  },
  /**
   * @description picker选项的数据label属性名
   */
  labelKey: {
    type: String,
    default: "label"
  },
  /**
   * @description picker选项的数据value属性名
   */
  valueKey: {
    type: String,
    default: "value"
  },
  /**
   * @description picker选项的数据children属性名, 在级联选择器模式下生效
   */
  childrenKey: {
    type: String,
    default: "children"
  }
});
const pickerEmits = {
  [UPDATE_MODEL_EVENT]: (value) => isString(value) || isNumber(value) || isArray(value),
  "update:open": (value) => isBoolean(value),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [CHANGE_EVENT]: (value, index2, item) => true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  confirm: (value, item) => true,
  cancel: () => true,
  close: () => true
};
const usePickerCustomStyle = (props) => {
  const ns = useNamespace("picker");
  const [cancelColorClass, cancelColorStyle] = useComponentColor(
    toRef(props, "cancelColor"),
    "text"
  );
  const [confirmColorClass, confirmColorStyle] = useComponentColor(
    toRef(props, "confirmColor"),
    "text"
  );
  const overlayOpacity = computed(() => {
    return props.mask ? 0.5 : 0;
  });
  const operationBtnClass = computed(() => {
    return (type) => {
      const cls = [
        ns.e("operation-btn"),
        ns.em("operation-btn", type)
      ];
      if (type === "cancel") {
        if (cancelColorClass.value)
          cls.push(cancelColorClass.value);
      } else if (type === "confirm") {
        if (confirmColorClass.value)
          cls.push(confirmColorClass.value);
      }
      return cls.join(" ");
    };
  });
  const operationBtnStyle = computed(() => {
    return (type) => {
      const style = {};
      if (type === "cancel") {
        if (!cancelColorClass.value)
          style.color = cancelColorStyle.value || "var(--tn-color-danger)";
      } else if (type === "confirm") {
        if (!confirmColorClass.value)
          style.color = confirmColorStyle.value || "var(--tn-color-primary)";
      }
      return style;
    };
  });
  return {
    ns,
    overlayOpacity,
    operationBtnClass,
    operationBtnStyle
  };
};
const usePicker = (props) => {
  const { emit: emit2 } = getCurrentInstance();
  const openPopup = ref(false);
  const showPicker = ref(true);
  watch(
    () => props.open,
    (value) => {
      openPopup.value = value;
    }
  );
  const _closePopup = () => {
    emit2("update:open", false);
  };
  const closePopupEvent = () => {
    _closePopup();
    _generatePickerViewData(props.modelValue);
    emit2("close");
  };
  let pickerMode = "signle";
  const _generateData = (data) => {
    if (isObject(data)) {
      return {
        label: data[props.labelKey],
        value: data[props.valueKey],
        originalData: data
      };
    } else {
      return {
        label: data,
        value: data,
        originalData: data
      };
    }
  };
  const _generateOrUpdateCascadeData = (data, generateIndex = 1, defaultValue = []) => {
    if (pickerData.value.length < generateIndex) {
      pickerData.value.push(
        ...Array.from(
          { length: generateIndex - pickerData.value.length },
          () => []
        )
      );
    }
    pickerData.value[generateIndex - 1] = [
      ...data.map((item) => _generateData(item))
    ];
    let childrenIndex = 0;
    if (defaultValue.length) {
      childrenIndex = pickerData.value[generateIndex - 1].findIndex(
        (item) => item.value === defaultValue[generateIndex - 1]
      );
      childrenIndex = ~childrenIndex ? childrenIndex : 0;
    }
    if (data[childrenIndex] && Object.prototype.hasOwnProperty.call(
      data[childrenIndex],
      props.childrenKey
    )) {
      _generateOrUpdateCascadeData(
        data[childrenIndex][props.childrenKey],
        generateIndex + 1,
        defaultValue
      );
    }
  };
  const pickerData = ref([]);
  const currentPickerIndex = ref([]);
  const initDefaultPickerIndex = () => {
    let indexValue = [];
    if (props.modelValue === void 0 || isArray(props.modelValue) && !props.modelValue.length) {
      indexValue = Array.from({ length: pickerData.value.length }, () => 0);
    } else {
      if (isArray(props.modelValue)) {
        indexValue = pickerData.value.map((item, index2) => {
          let pickerIndex = 0;
          if (!props.modelValue[index2])
            pickerIndex = 0;
          else {
            pickerIndex = item.findIndex((childItem) => {
              return childItem.value === props.modelValue[index2];
            });
          }
          return ~pickerIndex ? pickerIndex : 0;
        });
      } else {
        indexValue = [
          pickerData.value[0].findIndex(
            (item) => item.value === props.modelValue
          )
        ];
      }
    }
    currentPickerIndex.value = indexValue;
  };
  const splitUserPickerData = () => {
    const { data } = props;
    if (!data)
      return;
    if (!isArray(data)) {
      throwError("TnPicker", "picker选择器数据不正确，请传递数组格式的数据");
    }
    if (data.length === 0)
      return;
    if (isArray(data[0])) {
      pickerMode = "multiple";
      pickerData.value = data.reduce(
        (prev, cur) => {
          prev.push(cur.map((item) => _generateData(item)));
          return prev;
        },
        []
      );
    } else if (!isArray(data[0]) && isObject(data[0]) && Object.prototype.hasOwnProperty.call(data[0], props.childrenKey)) {
      pickerMode = "cascade";
      _generateOrUpdateCascadeData(
        data,
        1,
        props.modelValue
      );
    } else {
      pickerMode = "signle";
      pickerData.value = [data.map((item) => _generateData(item))];
    }
    nextTick$1(() => {
      initDefaultPickerIndex();
    });
  };
  watch(
    () => props.data,
    () => {
      splitUserPickerData();
    },
    {
      immediate: true
    }
  );
  const _getCurrentPickerValue = () => {
    if (pickerMode === "signle" && !isArray(props.data[0])) {
      return pickerData.value[0][currentPickerIndex.value[0]].value;
    } else {
      const pickerIndex = cloneDeep(currentPickerIndex.value);
      pickerIndex.splice(pickerData.value.length);
      return pickerIndex.map(
        (item, index2) => {
          var _a2;
          return isEmptyVariableInDefault((_a2 = pickerData.value[index2][item]) == null ? void 0 : _a2.value, 0);
        }
      );
    }
  };
  const _getCurrentPickerOriginData = () => {
    if (pickerMode === "signle" && !isArray(props.data[0])) {
      return pickerData.value[0][currentPickerIndex.value[0]].originalData;
    } else {
      const pickerIndex = cloneDeep(currentPickerIndex.value);
      pickerIndex.splice(pickerData.value.length);
      return pickerIndex.map(
        (item, index2) => {
          var _a2;
          return isEmptyVariableInDefault(
            (_a2 = pickerData.value[index2][item]) == null ? void 0 : _a2.originalData,
            void 0
          );
        }
      );
    }
  };
  const _generatePickerViewData = (val) => {
    if (pickerMode === "cascade") {
      _generateOrUpdateCascadeData(
        props.data,
        1,
        val
      );
    }
    nextTick$1(() => {
      initDefaultPickerIndex();
    });
  };
  let isInnerUpdate = false;
  watch(
    () => props.modelValue,
    (val) => {
      if (isInnerUpdate) {
        isInnerUpdate = false;
        return;
      }
      _generatePickerViewData(val);
    },
    {
      deep: true
    }
  );
  let changeTimer = null;
  let continuousChangeStatus = false;
  const pickerViewChangeEvent = (e2) => {
    if (continuousChangeStatus) {
      return;
    }
    changeTimer = setTimeout(() => {
      continuousChangeStatus = false;
      changeTimer && clearTimeout(changeTimer);
      changeTimer = null;
    }, 300);
    continuousChangeStatus = true;
    let changePickerColumnIndex = currentPickerIndex.value.findIndex(
      (item, index2) => item !== e2.detail.value[index2]
    );
    changePickerColumnIndex = ~changePickerColumnIndex ? changePickerColumnIndex : 0;
    currentPickerIndex.value = e2.detail.value;
    if (pickerMode === "cascade") {
      let data = props.data;
      for (let i = 0; i < changePickerColumnIndex; i++) {
        data = data[currentPickerIndex.value[i]][props.childrenKey];
      }
      const pickerIndex = currentPickerIndex.value[changePickerColumnIndex];
      pickerData.value.splice(changePickerColumnIndex + 1);
      if (data[pickerIndex] && Object.prototype.hasOwnProperty.call(
        data[pickerIndex],
        props.childrenKey
      )) {
        _generateOrUpdateCascadeData(
          data[pickerIndex][props.childrenKey],
          changePickerColumnIndex + 2
        );
        currentPickerIndex.value = pickerData.value.map((item, index2) => {
          return index2 <= changePickerColumnIndex ? currentPickerIndex.value[index2] : 0;
        });
      }
    }
    isInnerUpdate = true;
    const value = _getCurrentPickerValue();
    const originData = _getCurrentPickerOriginData();
    emit2(CHANGE_EVENT, value, changePickerColumnIndex, originData);
  };
  const resetPickerIndexWithPosition = (start, end) => {
    currentPickerIndex.value = currentPickerIndex.value.map((item, index2) => {
      return index2 >= start && (!end || index2 <= end) ? 0 : item;
    });
  };
  const confirmEvent = () => {
    const value = _getCurrentPickerValue();
    const originData = _getCurrentPickerOriginData();
    isInnerUpdate = true;
    emit2(UPDATE_MODEL_EVENT, value);
    nextTick$1(() => {
      emit2("confirm", value, originData);
    });
    _closePopup();
  };
  const cancelEvent = () => {
    _generatePickerViewData(props.modelValue);
    emit2("cancel");
    _closePopup();
  };
  return {
    openPopup,
    showPicker,
    pickerData,
    currentPickerIndex,
    closePopupEvent,
    pickerViewChangeEvent,
    confirmEvent,
    cancelEvent,
    initDefaultPickerIndex,
    resetPickerIndexWithPosition
  };
};
const dateTimePickerModes = [
  "year",
  "yearmonth",
  "date",
  "datetime",
  "time"
];
const dateTimePickerProps = buildProps({
  ...pickerBaseProps,
  /**
   * @description 日期时间选择器绑定的值，支持的格式2019/12/27 12:00:00 2019-12-27 12:00:00
   */
  modelValue: {
    type: String,
    default: ""
  },
  /**
   * @description 显示隐藏日期时间选择器
   */
  open: Boolean,
  /**
   * @description 日期时间选择器类型
   */
  mode: {
    type: String,
    values: dateTimePickerModes,
    default: "date"
  },
  /**
   * @description 最小可选时间，格式为 YYYY/MM/DD HH:mm:ss 例如 2023/01/04 12:00:00
   */
  minTime: String,
  /**
   * @description 最大可选时间，格式为 YYYY/MM/DD HH:mm:ss 例如 2023/10/01 23:30:00
   */
  maxTime: String,
  /**
   * @description 是否初始化空值为当前时间
   */
  initCurrentDateTime: {
    type: Boolean,
    default: true
  },
  /**
   * @description 日期时间格式化
   */
  format: String
});
const dateTimePickerEmits = {
  [UPDATE_MODEL_EVENT]: (value) => isString(value),
  [CHANGE_EVENT]: (value) => isString(value),
  "update:open": (value) => isBoolean(value),
  confirm: (value) => isString(value),
  cancel: () => true,
  close: () => true
};
var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;
var MS = "millisecond";
var S = "second";
var MIN = "minute";
var H = "hour";
var D = "day";
var W = "week";
var M = "month";
var Q = "quarter";
var Y = "year";
var DATE = "date";
var FORMAT_DEFAULT = "YYYY-MM-DDTHH:mm:ssZ";
var INVALID_DATE_STRING = "Invalid Date";
var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const en = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
  ordinal: function ordinal(n2) {
    var s2 = ["th", "st", "nd", "rd"];
    var v = n2 % 100;
    return "[" + n2 + (s2[(v - 20) % 10] || s2[v] || s2[0]) + "]";
  }
};
var padStart = function padStart2(string, length, pad) {
  var s2 = String(string);
  if (!s2 || s2.length >= length)
    return string;
  return "" + Array(length + 1 - s2.length).join(pad) + string;
};
var padZoneStr = function padZoneStr2(instance) {
  var negMinutes = -instance.utcOffset();
  var minutes = Math.abs(negMinutes);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return (negMinutes <= 0 ? "+" : "-") + padStart(hourOffset, 2, "0") + ":" + padStart(minuteOffset, 2, "0");
};
var monthDiff = function monthDiff2(a, b) {
  if (a.date() < b.date())
    return -monthDiff2(b, a);
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  var anchor = a.clone().add(wholeMonthDiff, M);
  var c = b - anchor < 0;
  var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M);
  return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
};
var absFloor = function absFloor2(n2) {
  return n2 < 0 ? Math.ceil(n2) || 0 : Math.floor(n2);
};
var prettyUnit = function prettyUnit2(u) {
  var special = {
    M,
    y: Y,
    w: W,
    d: D,
    D: DATE,
    h: H,
    m: MIN,
    s: S,
    ms: MS,
    Q
  };
  return special[u] || String(u || "").toLowerCase().replace(/s$/, "");
};
var isUndefined = function isUndefined2(s2) {
  return s2 === void 0;
};
const U = {
  s: padStart,
  z: padZoneStr,
  m: monthDiff,
  a: absFloor,
  p: prettyUnit,
  u: isUndefined
};
var L = "en";
var Ls = {};
Ls[L] = en;
var isDayjs = function isDayjs2(d) {
  return d instanceof Dayjs;
};
var parseLocale = function parseLocale2(preset, object, isLocal) {
  var l;
  if (!preset)
    return L;
  if (typeof preset === "string") {
    var presetLower = preset.toLowerCase();
    if (Ls[presetLower]) {
      l = presetLower;
    }
    if (object) {
      Ls[presetLower] = object;
      l = presetLower;
    }
    var presetSplit = preset.split("-");
    if (!l && presetSplit.length > 1) {
      return parseLocale2(presetSplit[0]);
    }
  } else {
    var name = preset.name;
    Ls[name] = preset;
    l = name;
  }
  if (!isLocal && l)
    L = l;
  return l || !isLocal && L;
};
var dayjs = function dayjs2(date, c) {
  if (isDayjs(date)) {
    return date.clone();
  }
  var cfg = typeof c === "object" ? c : {};
  cfg.date = date;
  cfg.args = arguments;
  return new Dayjs(cfg);
};
var wrapper = function wrapper2(date, instance) {
  return dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset
    // todo: refactor; do not use this.$offset in you code
  });
};
var Utils = U;
Utils.l = parseLocale;
Utils.i = isDayjs;
Utils.w = wrapper;
var parseDate = function parseDate2(cfg) {
  var date = cfg.date, utc = cfg.utc;
  if (date === null)
    return new Date(NaN);
  if (Utils.u(date))
    return new Date();
  if (date instanceof Date)
    return new Date(date);
  if (typeof date === "string" && !/Z$/i.test(date)) {
    var d = date.match(REGEX_PARSE);
    if (d) {
      var m = d[2] - 1 || 0;
      var ms = (d[7] || "0").substring(0, 3);
      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
      }
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }
  return new Date(date);
};
var Dayjs = /* @__PURE__ */ function() {
  function Dayjs2(cfg) {
    this.$L = parseLocale(cfg.locale, null, true);
    this.parse(cfg);
  }
  var _proto = Dayjs2.prototype;
  _proto.parse = function parse(cfg) {
    this.$d = parseDate(cfg);
    this.$x = cfg.x || {};
    this.init();
  };
  _proto.init = function init() {
    var $d = this.$d;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
  };
  _proto.$utils = function $utils() {
    return Utils;
  };
  _proto.isValid = function isValid() {
    return !(this.$d.toString() === INVALID_DATE_STRING);
  };
  _proto.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };
  _proto.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };
  _proto.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };
  _proto.$g = function $g(input, get2, set2) {
    if (Utils.u(input))
      return this[get2];
    return this.set(set2, input);
  };
  _proto.unix = function unix() {
    return Math.floor(this.valueOf() / 1e3);
  };
  _proto.valueOf = function valueOf() {
    return this.$d.getTime();
  };
  _proto.startOf = function startOf(units, _startOf) {
    var _this = this;
    var isStartOf = !Utils.u(_startOf) ? _startOf : true;
    var unit = Utils.p(units);
    var instanceFactory = function instanceFactory2(d, m) {
      var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(D);
    };
    var instanceFactorySet = function instanceFactorySet2(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return Utils.w(_this.toDate()[method].apply(
        // eslint-disable-line prefer-spread
        _this.toDate("s"),
        (isStartOf ? argumentStart : argumentEnd).slice(slice)
      ), _this);
    };
    var $W = this.$W, $M = this.$M, $D = this.$D;
    var utcPad = "set" + (this.$u ? "UTC" : "");
    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
      case M:
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);
      case W: {
        var weekStart = this.$locale().weekStart || 0;
        var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
        return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
      }
      case D:
      case DATE:
        return instanceFactorySet(utcPad + "Hours", 0);
      case H:
        return instanceFactorySet(utcPad + "Minutes", 1);
      case MIN:
        return instanceFactorySet(utcPad + "Seconds", 2);
      case S:
        return instanceFactorySet(utcPad + "Milliseconds", 3);
      default:
        return this.clone();
    }
  };
  _proto.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };
  _proto.$set = function $set(units, _int) {
    var _C$D$C$DATE$C$M$C$Y$C;
    var unit = Utils.p(units);
    var utcPad = "set" + (this.$u ? "UTC" : "");
    var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === D ? this.$D + (_int - this.$W) : _int;
    if (unit === M || unit === Y) {
      var date = this.clone().set(DATE, 1);
      date.$d[name](arg);
      date.init();
      this.$d = date.set(DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else if (name)
      this.$d[name](arg);
    this.init();
    return this;
  };
  _proto.set = function set2(string, _int2) {
    return this.clone().$set(string, _int2);
  };
  _proto.get = function get2(unit) {
    return this[Utils.p(unit)]();
  };
  _proto.add = function add2(number, units) {
    var _this2 = this, _C$MIN$C$H$C$S$unit;
    number = Number(number);
    var unit = Utils.p(units);
    var instanceFactorySet = function instanceFactorySet2(n2) {
      var d = dayjs(_this2);
      return Utils.w(d.date(d.date() + Math.round(n2 * number)), _this2);
    };
    if (unit === M) {
      return this.set(M, this.$M + number);
    }
    if (unit === Y) {
      return this.set(Y, this.$y + number);
    }
    if (unit === D) {
      return instanceFactorySet(1);
    }
    if (unit === W) {
      return instanceFactorySet(7);
    }
    var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[H] = MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1;
    var nextTimeStamp = this.$d.getTime() + number * step;
    return Utils.w(nextTimeStamp, this);
  };
  _proto.subtract = function subtract(number, string) {
    return this.add(number * -1, string);
  };
  _proto.format = function format(formatStr) {
    var _this3 = this;
    var locale = this.$locale();
    if (!this.isValid())
      return locale.invalidDate || INVALID_DATE_STRING;
    var str = formatStr || FORMAT_DEFAULT;
    var zoneStr = Utils.z(this);
    var $H = this.$H, $m = this.$m, $M = this.$M;
    var weekdays = locale.weekdays, months = locale.months, meridiem = locale.meridiem;
    var getShort = function getShort2(arr, index2, full, length) {
      return arr && (arr[index2] || arr(_this3, str)) || full[index2].slice(0, length);
    };
    var get$H = function get$H2(num) {
      return Utils.s($H % 12 || 12, num, "0");
    };
    var meridiemFunc = meridiem || function(hour, minute, isLowercase) {
      var m = hour < 12 ? "AM" : "PM";
      return isLowercase ? m.toLowerCase() : m;
    };
    var matches = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: $M + 1,
      MM: Utils.s($M + 1, 2, "0"),
      MMM: getShort(locale.monthsShort, $M, months, 3),
      MMMM: getShort(months, $M),
      D: this.$D,
      DD: Utils.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String($H),
      HH: Utils.s($H, 2, "0"),
      h: get$H(1),
      hh: get$H(2),
      a: meridiemFunc($H, $m, true),
      A: meridiemFunc($H, $m, false),
      m: String($m),
      mm: Utils.s($m, 2, "0"),
      s: String(this.$s),
      ss: Utils.s(this.$s, 2, "0"),
      SSS: Utils.s(this.$ms, 3, "0"),
      Z: zoneStr
      // 'ZZ' logic below
    };
    return str.replace(REGEX_FORMAT, function(match, $1) {
      return $1 || matches[match] || zoneStr.replace(":", "");
    });
  };
  _proto.utcOffset = function utcOffset() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };
  _proto.diff = function diff2(input, units, _float) {
    var _C$Y$C$M$C$Q$C$W$C$D$;
    var unit = Utils.p(units);
    var that = dayjs(input);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
    var diff3 = this - that;
    var result = Utils.m(this, that);
    result = (_C$Y$C$M$C$Q$C$W$C$D$ = {}, _C$Y$C$M$C$Q$C$W$C$D$[Y] = result / 12, _C$Y$C$M$C$Q$C$W$C$D$[M] = result, _C$Y$C$M$C$Q$C$W$C$D$[Q] = result / 3, _C$Y$C$M$C$Q$C$W$C$D$[W] = (diff3 - zoneDelta) / MILLISECONDS_A_WEEK, _C$Y$C$M$C$Q$C$W$C$D$[D] = (diff3 - zoneDelta) / MILLISECONDS_A_DAY, _C$Y$C$M$C$Q$C$W$C$D$[H] = diff3 / MILLISECONDS_A_HOUR, _C$Y$C$M$C$Q$C$W$C$D$[MIN] = diff3 / MILLISECONDS_A_MINUTE, _C$Y$C$M$C$Q$C$W$C$D$[S] = diff3 / MILLISECONDS_A_SECOND, _C$Y$C$M$C$Q$C$W$C$D$)[unit] || diff3;
    return _float ? result : Utils.a(result);
  };
  _proto.daysInMonth = function daysInMonth() {
    return this.endOf(M).$D;
  };
  _proto.$locale = function $locale() {
    return Ls[this.$L];
  };
  _proto.locale = function locale(preset, object) {
    if (!preset)
      return this.$L;
    var that = this.clone();
    var nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName)
      that.$L = nextLocaleName;
    return that;
  };
  _proto.clone = function clone2() {
    return Utils.w(this.$d, this);
  };
  _proto.toDate = function toDate() {
    return new Date(this.valueOf());
  };
  _proto.toJSON = function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  };
  _proto.toISOString = function toISOString() {
    return this.$d.toISOString();
  };
  _proto.toString = function toString() {
    return this.$d.toUTCString();
  };
  return Dayjs2;
}();
var proto = Dayjs.prototype;
dayjs.prototype = proto;
[["$ms", MS], ["$s", S], ["$m", MIN], ["$H", H], ["$W", D], ["$M", M], ["$y", Y], ["$D", DATE]].forEach(function(g) {
  proto[g[1]] = function(input) {
    return this.$g(input, g[0], g[1]);
  };
});
dayjs.extend = function(plugin2, option) {
  if (!plugin2.$i) {
    plugin2(option, Dayjs, dayjs);
    plugin2.$i = true;
  }
  return dayjs;
};
dayjs.locale = parseLocale;
dayjs.isDayjs = isDayjs;
dayjs.unix = function(timestamp) {
  return dayjs(timestamp * 1e3);
};
dayjs.en = Ls[L];
dayjs.Ls = Ls;
dayjs.p = {};
const innerDefaultDateTimeFormat = "YYYY/MM/DD HH:mm:ss";
const nowDayjs = dayjs();
const generateRangeData = (start, end) => {
  end = end < start ? start : end;
  return Array.from({ length: end - start + 1 }).map((_, index2) => {
    return start + index2;
  });
};
const useDateTimeData = (props) => {
  const yearColumnData = ref([]);
  const monthColumnData = ref([]);
  const dayColumnData = ref([]);
  const hourColumnData = ref([]);
  const minuteColumnData = ref([]);
  const secondColumnData = ref([]);
  const fillDateTime = (value, format) => {
    if (!format)
      format = innerDefaultDateTimeFormat;
    let dateTime = "";
    if (props.mode === "time") {
      const timeReg = /^(\d{1,2})(?::(\d{1,2}))?(?::(\d{1,2}))?$/;
      dateTime = value.replace(timeReg, (_, hour, minute, second) => {
        return `1970/01/01 ${hour}:${minute || "00"}:${second || "00"}`;
      });
    } else {
      value = dayjs(value, format).format(innerDefaultDateTimeFormat);
      const dateTimeReg = /^(\d{4})(?:[-/](\d{1,2}))?(?:[-/](\d{1,2}))?(?:\s?(\d{1,2}))?(?::(\d{1,2}))?(?::(\d{1,2}))?$/;
      dateTime = value.replace(
        dateTimeReg,
        (_, year, month, day, hour, minute, second) => {
          return `${year}/${month || "01"}/${day || "01"} ${hour || "00"}:${minute || "00"}:${second || "00"}`;
        }
      );
    }
    return dayjs(dateTime, format);
  };
  const minTimeDayjs = computed(() => {
    let time = `${nowDayjs.year() - 10}/01/01 00:00:00`;
    if (props.minTime)
      time = props.minTime;
    return fillDateTime(time);
  });
  const maxTimeDayjs = computed(() => {
    let time = `${nowDayjs.year() + 10}/12/31 23:59:59`;
    if (props.maxTime)
      time = props.maxTime;
    return fillDateTime(time);
  });
  const getTimeMaxMinValue = (currentValue, maxMinValue, defaultValue) => {
    const result = { ...defaultValue };
    let currentYear = 0;
    let currentMonth = 0;
    let currentDate = 0;
    let currentHour = 0;
    let currentMinute = 0;
    let maxMinYear = 0;
    let maxMinMonth = 0;
    let maxMinDate = 0;
    let maxMinHour = 0;
    let maxMinMinute = 0;
    let maxMinSecond = 0;
    if (currentValue.toString() === "[object Object]") {
      ({
        year: currentYear,
        month: currentMonth,
        date: currentDate,
        hour: currentHour,
        minute: currentMinute
      } = currentValue);
    } else {
      currentYear = currentValue.year();
      currentMonth = currentValue.month();
      currentDate = currentValue.date();
      currentHour = currentValue.hour();
      currentMinute = currentValue.minute();
    }
    if (maxMinValue.toString() === "[object Object]") {
      ({
        year: maxMinYear,
        month: maxMinMonth,
        date: maxMinDate,
        hour: maxMinHour,
        minute: maxMinMinute,
        second: maxMinSecond
      } = maxMinValue);
    } else {
      maxMinYear = maxMinValue.year();
      maxMinMonth = maxMinValue.month();
      maxMinDate = maxMinValue.date();
      maxMinHour = maxMinValue.hour();
      maxMinMinute = maxMinValue.minute();
      maxMinSecond = maxMinValue.second();
    }
    if (currentYear === maxMinYear) {
      result.month = maxMinMonth;
      if (currentMonth === maxMinMonth) {
        result.date = maxMinDate;
        if (currentDate === maxMinDate) {
          result.hour = maxMinHour;
          if (currentHour === maxMinHour) {
            result.minute = maxMinMinute;
            if (currentMinute === maxMinMinute) {
              result.second = maxMinSecond;
            }
          }
        }
      }
    }
    return result;
  };
  const generatePickerData = (value) => {
    const sameMinYear = value.year() === minTimeDayjs.value.year();
    const sameMaxYear = value.year() === maxTimeDayjs.value.year();
    const sameMinMonth = value.month() === minTimeDayjs.value.month();
    const sameMaxMonth = value.month() === maxTimeDayjs.value.month();
    const sameMinDate = value.date() === minTimeDayjs.value.date();
    const sameMaxDate = value.date() === maxTimeDayjs.value.date();
    const sameMinHour = value.hour() === minTimeDayjs.value.hour();
    const sameMaxHour = value.hour() === maxTimeDayjs.value.hour();
    const sameMinMinute = value.minute() === minTimeDayjs.value.minute();
    const sameMaxMinute = value.minute() === maxTimeDayjs.value.minute();
    const minYear = minTimeDayjs.value.year();
    const maxYear = maxTimeDayjs.value.year();
    const minMonth = sameMinYear ? minTimeDayjs.value.month() + 1 : 1;
    const maxMonth = sameMaxYear ? maxTimeDayjs.value.month() + 1 : 12;
    const minDay = sameMinYear && sameMinMonth ? minTimeDayjs.value.date() : 1;
    const maxDay = sameMaxYear && sameMaxMonth ? maxTimeDayjs.value.date() : value.daysInMonth();
    const minHour = sameMinYear && sameMinMonth && sameMinDate || props.mode === "time" ? minTimeDayjs.value.hour() : 0;
    const maxHour = sameMaxYear && sameMaxMonth && sameMaxDate || props.mode === "time" ? maxTimeDayjs.value.hour() : 23;
    const minMinute = (sameMinYear && sameMinMonth && sameMinDate || props.mode === "time") && sameMinHour ? minTimeDayjs.value.minute() : 0;
    const maxMinute = (sameMaxYear && sameMaxMonth && sameMaxDate || props.mode === "time") && sameMaxHour ? maxTimeDayjs.value.minute() : 59;
    const minSecond = (sameMinYear && sameMinMonth && sameMinDate || props.mode === "time") && sameMinHour && sameMinMinute ? minTimeDayjs.value.second() : 0;
    const maxSecond = (sameMaxYear && sameMaxMonth && sameMaxDate || props.mode === "time") && sameMaxHour && sameMaxMinute ? maxTimeDayjs.value.second() : 59;
    yearColumnData.value = generateRangeData(minYear, maxYear).map((year) => {
      return {
        label: `${year}年`,
        value: year
      };
    });
    monthColumnData.value = generateRangeData(minMonth, maxMonth).map(
      (month) => {
        return {
          label: `${String(month).padStart(2, "0")}月`,
          value: month
        };
      }
    );
    dayColumnData.value = generateRangeData(minDay, maxDay).map((day) => {
      return {
        label: `${String(day).padStart(2, "0")}日`,
        value: day
      };
    });
    hourColumnData.value = generateRangeData(minHour, maxHour).map((hour) => {
      return {
        label: String(hour).padStart(2, "0"),
        value: hour
      };
    });
    minuteColumnData.value = generateRangeData(minMinute, maxMinute).map(
      (minute) => {
        return {
          label: String(minute).padStart(2, "0"),
          value: minute
        };
      }
    );
    secondColumnData.value = generateRangeData(minSecond, maxSecond).map(
      (second) => {
        return {
          label: String(second).padStart(2, "0"),
          value: second
        };
      }
    );
  };
  const pickerData = computed(() => {
    const result = [];
    if (props.mode === "year")
      result.push(yearColumnData.value);
    if (props.mode === "yearmonth")
      result.push(yearColumnData.value, monthColumnData.value);
    if (props.mode === "date")
      result.push(
        yearColumnData.value,
        monthColumnData.value,
        dayColumnData.value
      );
    if (props.mode === "time")
      result.push(
        hourColumnData.value,
        minuteColumnData.value,
        secondColumnData.value
      );
    if (props.mode === "datetime")
      result.push(
        yearColumnData.value,
        monthColumnData.value,
        dayColumnData.value,
        hourColumnData.value,
        minuteColumnData.value,
        secondColumnData.value
      );
    return result;
  });
  return {
    pickerData,
    minTimeDayjs,
    maxTimeDayjs,
    generatePickerData,
    fillDateTime,
    getTimeMaxMinValue
  };
};
const useHandleMinMaxTime = (minTime, maxTime) => {
  const handlePickerChangeMinMaxTime = (mode, timeValue) => {
    switch (mode) {
      case "yearmonth":
        return handlePickerChangeMinMaxTimeForYearMonth(timeValue);
      case "date":
        return handlePickerChangeMinMaxTimeForDate(timeValue);
      case "datetime":
        return handlePickerChangeMinMaxTimeForDateTime(timeValue);
      case "time":
        return handlePickerChangeMinMaxTimeForTime(timeValue);
      default:
        return timeValue;
    }
  };
  const handlePickerChangeMinMaxTimeForYearMonth = (timeValue) => {
    if (timeValue.year() === minTime.value.year()) {
      timeValue = timeValue.set(
        "month",
        Math.max(minTime.value.month(), timeValue.month())
      );
    }
    if (timeValue.year() === maxTime.value.year()) {
      timeValue = timeValue.set(
        "month",
        Math.min(maxTime.value.month(), timeValue.month())
      );
    }
    return timeValue;
  };
  const handlePickerChangeMinMaxTimeForDate = (timeValue) => {
    if (timeValue.year() === minTime.value.year()) {
      timeValue = timeValue.set(
        "month",
        Math.max(minTime.value.month(), timeValue.month())
      );
      if (timeValue.month() === minTime.value.month()) {
        timeValue = timeValue.set(
          "date",
          Math.max(minTime.value.date(), timeValue.date())
        );
      }
    }
    if (timeValue.year() === maxTime.value.year()) {
      timeValue = timeValue.set(
        "month",
        Math.min(maxTime.value.month(), timeValue.month())
      );
      if (timeValue.month() === maxTime.value.month()) {
        timeValue = timeValue.set(
          "date",
          Math.min(maxTime.value.date(), timeValue.date())
        );
      }
    }
    return timeValue;
  };
  const handlePickerChangeMinMaxTimeForDateTime = (timeValue) => {
    if (timeValue.year() === minTime.value.year()) {
      timeValue = timeValue.set(
        "month",
        Math.max(minTime.value.month(), timeValue.month())
      );
      if (timeValue.month() === minTime.value.month()) {
        timeValue = timeValue.set(
          "date",
          Math.max(minTime.value.date(), timeValue.date())
        );
        if (timeValue.date() === minTime.value.date()) {
          timeValue = timeValue.set(
            "hour",
            Math.max(minTime.value.hour(), timeValue.hour())
          );
          if (timeValue.hour() === minTime.value.hour()) {
            timeValue = timeValue.set(
              "minute",
              Math.max(minTime.value.minute(), timeValue.minute())
            );
            if (timeValue.minute() === minTime.value.minute()) {
              timeValue = timeValue.set(
                "second",
                Math.max(minTime.value.second(), timeValue.second())
              );
            }
          }
        }
      }
    }
    if (timeValue.year() === maxTime.value.year()) {
      timeValue = timeValue.set(
        "month",
        Math.min(maxTime.value.month(), timeValue.month())
      );
      if (timeValue.month() === maxTime.value.month()) {
        timeValue = timeValue.set(
          "date",
          Math.min(maxTime.value.date(), timeValue.date())
        );
        if (timeValue.date() === maxTime.value.date()) {
          timeValue = timeValue.set(
            "hour",
            Math.min(maxTime.value.hour(), timeValue.hour())
          );
          if (timeValue.hour() === maxTime.value.hour()) {
            timeValue = timeValue.set(
              "minute",
              Math.min(maxTime.value.minute(), timeValue.minute())
            );
            if (timeValue.minute() === maxTime.value.minute()) {
              timeValue = timeValue.set(
                "second",
                Math.min(maxTime.value.second(), timeValue.second())
              );
            }
          }
        }
      }
    }
    return timeValue;
  };
  const handlePickerChangeMinMaxTimeForTime = (timeValue) => {
    if (timeValue.hour() === minTime.value.hour()) {
      timeValue = timeValue.set(
        "minute",
        Math.max(minTime.value.minute(), timeValue.minute())
      );
      if (timeValue.minute() === minTime.value.minute()) {
        timeValue = timeValue.set(
          "second",
          Math.max(minTime.value.second(), timeValue.second())
        );
      }
    }
    if (timeValue.hour() === maxTime.value.hour()) {
      timeValue = timeValue.set(
        "minute",
        Math.min(maxTime.value.minute(), timeValue.minute())
      );
      if (timeValue.minute() === maxTime.value.minute()) {
        timeValue = timeValue.set(
          "second",
          Math.min(maxTime.value.second(), timeValue.second())
        );
      }
    }
    return timeValue;
  };
  return {
    handlePickerChangeMinMaxTime
  };
};
const MIN_MAX_VALUE = (minValue, maxValue, currentValue) => Math.min(Math.max(minValue, currentValue), maxValue);
const useDateTimePicker = (props) => {
  const { emit: emit2 } = getCurrentInstance();
  const {
    pickerData,
    minTimeDayjs,
    maxTimeDayjs,
    generatePickerData,
    fillDateTime
  } = useDateTimeData(props);
  const { handlePickerChangeMinMaxTime } = useHandleMinMaxTime(
    minTimeDayjs,
    maxTimeDayjs
  );
  const pickerRef = ref();
  const showPicker = ref(false);
  watch(
    () => props.open,
    (val) => {
      showPicker.value = val;
    }
  );
  const _closePicker = () => {
    emit2("update:open", false);
  };
  const handlePickerCloseEvent = () => {
    _closePicker();
    initDateTimePicker(false);
    emit2("close");
  };
  watch(
    () => [props.minTime, props.maxTime, props.modelValue],
    () => {
      initDateTimePicker(false);
    }
  );
  const pickerSelectData = ref([]);
  const getDateTimeValue = (dateTime) => {
    const year = dateTime.year();
    const month = String(dateTime.month() + 1).padStart(2, "0");
    const date = String(dateTime.date()).padStart(2, "0");
    const hour = String(dateTime.hour()).padStart(2, "0");
    const minute = String(dateTime.minute()).padStart(2, "0");
    const second = String(dateTime.second()).padStart(2, "0");
    if (props.mode === "year")
      return `${year}`;
    if (props.mode === "yearmonth")
      return dayjs(`${year}/${month}`).format(props.format || "YYYY/MM");
    if (props.mode === "date")
      return dayjs(`${year}/${month}/${date}`).format(
        props.format || "YYYY/MM/DD"
      );
    if (props.mode === "time")
      return `${hour}:${minute}:${second}`;
    return dayjs(`${year}/${month}/${date} ${hour}:${minute}:${second}`).format(
      props.format || innerDefaultDateTimeFormat
    );
  };
  const setDefaultPickerSelectValue = (dateTime) => {
    const year = dateTime.year();
    const month = dateTime.month() + 1;
    const date = dateTime.date();
    const hour = dateTime.hour();
    const minute = dateTime.minute();
    const second = dateTime.second();
    if (props.mode === "year")
      pickerSelectData.value = [year];
    if (props.mode === "yearmonth")
      pickerSelectData.value = [year, month];
    if (props.mode === "date")
      pickerSelectData.value = [year, month, date];
    if (props.mode === "time")
      pickerSelectData.value = [hour, minute, second];
    if (props.mode === "datetime")
      pickerSelectData.value = [year, month, date, hour, minute, second];
  };
  const initDateTimePicker = (updateModelValue = true) => {
    let defaultTime = dayjs();
    if (props.modelValue) {
      defaultTime = fillDateTime(props.modelValue, props.format);
    }
    if (props.mode !== "time") {
      defaultTime = defaultTime.year(
        MIN_MAX_VALUE(
          minTimeDayjs.value.year(),
          maxTimeDayjs.value.year(),
          defaultTime.year()
        )
      );
      if (defaultTime.year() === minTimeDayjs.value.year()) {
        if (defaultTime.month() < minTimeDayjs.value.month()) {
          defaultTime = defaultTime.month(minTimeDayjs.value.month()).date(minTimeDayjs.value.date()).hour(minTimeDayjs.value.hour()).minute(minTimeDayjs.value.minute()).second(minTimeDayjs.value.second());
        } else if (defaultTime.month() > maxTimeDayjs.value.month()) {
          defaultTime = defaultTime.month(maxTimeDayjs.value.month()).date(1).hour(0).minute(0).second(0);
        } else {
          if (defaultTime.date() < minTimeDayjs.value.date()) {
            defaultTime = defaultTime.date(minTimeDayjs.value.date()).hour(minTimeDayjs.value.hour()).minute(minTimeDayjs.value.minute());
          } else if (defaultTime.date() > maxTimeDayjs.value.date()) {
            defaultTime = defaultTime.date(maxTimeDayjs.value.date()).hour(maxTimeDayjs.value.hour()).minute(maxTimeDayjs.value.minute());
          }
        }
      }
    } else {
      defaultTime = defaultTime.hour(
        MIN_MAX_VALUE(
          minTimeDayjs.value.hour(),
          maxTimeDayjs.value.hour(),
          defaultTime.hour()
        )
      );
      if (defaultTime.hour() === minTimeDayjs.value.hour()) {
        defaultTime = defaultTime.minute(
          Math.max(minTimeDayjs.value.minute(), defaultTime.minute())
        );
        if (defaultTime.minute() === minTimeDayjs.value.minute()) {
          defaultTime = defaultTime.second(
            Math.max(minTimeDayjs.value.second(), defaultTime.second())
          );
        }
      }
      if (defaultTime.hour() === maxTimeDayjs.value.hour()) {
        defaultTime = defaultTime.minute(
          Math.min(maxTimeDayjs.value.minute(), defaultTime.minute())
        );
        if (defaultTime.minute() === maxTimeDayjs.value.minute()) {
          defaultTime = defaultTime.second(0);
        }
      }
    }
    generatePickerData(defaultTime);
    setDefaultPickerSelectValue(defaultTime);
    if (updateModelValue) {
      emit2(UPDATE_MODEL_EVENT, getDateTimeValue(defaultTime));
    }
  };
  const getFillDateTimeDayjs = (value) => {
    let dateTimeValue = "";
    if (props.mode === "year") {
      dateTimeValue = `${value[0]}`;
    }
    if (props.mode === "yearmonth") {
      dateTimeValue = `${value[0]}/${value[1]}`;
    }
    if (props.mode === "date") {
      const year = Number(value[0]);
      const month = Number(value[1]);
      const date = Math.min(
        dayjs().year(year).month(month - 1).daysInMonth(),
        Number(value[2])
      );
      dateTimeValue = `${value[0]}/${month}/${date}`;
    }
    if (props.mode === "time") {
      dateTimeValue = `${value[0]}:${value[1]}:${value[2]}`;
    }
    if (props.mode === "datetime") {
      const year = Number(value[0]);
      const month = Number(value[1]);
      const date = Math.min(
        dayjs().year(year).month(month - 1).daysInMonth(),
        Number(value[2])
      );
      dateTimeValue = `${value[0]}/${month}/${date} ${value[3]}:${value[4]}:${value[5]}`;
    }
    return fillDateTime(dateTimeValue);
  };
  const pickerValueChangeEvent = (value) => {
    let timeValue = getFillDateTimeDayjs(value);
    timeValue = handlePickerChangeMinMaxTime(props.mode, timeValue);
    if (props.mode === "year") {
      pickerSelectData.value = [timeValue.year()];
    }
    if (props.mode === "yearmonth") {
      pickerSelectData.value = [timeValue.year(), timeValue.month() + 1];
    }
    if (props.mode === "date") {
      pickerSelectData.value = [
        timeValue.year(),
        timeValue.month() + 1,
        timeValue.date()
      ];
    }
    if (props.mode === "time") {
      pickerSelectData.value = [
        timeValue.hour(),
        timeValue.minute(),
        timeValue.second()
      ];
    }
    if (props.mode === "datetime") {
      pickerSelectData.value = [
        timeValue.year(),
        timeValue.month() + 1,
        timeValue.date(),
        timeValue.hour(),
        timeValue.minute(),
        timeValue.second()
      ];
    }
    nextTick$1(() => {
      generatePickerData(timeValue);
    });
    const dateTimeValue = getDateTimeValue(timeValue);
    emit2(CHANGE_EVENT, dateTimeValue);
  };
  const handlePickerConfirmEvent = (value) => {
    const timeValue = getFillDateTimeDayjs(value);
    const dateTimeValue = getDateTimeValue(timeValue);
    emit2(UPDATE_MODEL_EVENT, dateTimeValue);
    nextTick$1(() => {
      emit2("confirm", dateTimeValue);
    });
    _closePicker();
  };
  const handlePickerCancelEvent = () => {
    initDateTimePicker(false);
    emit2("cancel");
    _closePicker();
  };
  return {
    pickerRef,
    showPicker,
    pickerData,
    pickerSelectData,
    handlePickerCloseEvent,
    initDateTimePicker,
    pickerValueChangeEvent,
    handlePickerConfirmEvent,
    handlePickerCancelEvent
  };
};
const updateUserInfoPopupProps = buildProps({
  /**
   * @description 控制弹框显示、隐藏
   */
  show: {
    type: Boolean,
    default: false
  },
  /**
   * @description 用户头像地址
   */
  avatar: {
    type: String,
    default: ""
  },
  /**
   * @description 用户昵称
   */
  nickname: {
    type: String,
    default: ""
  },
  /**
   * @description 弹框标题
   */
  title: {
    type: String,
    default: "获取您的昵称、头像"
  },
  /**
   * @description 弹框提示
   */
  tips: {
    type: String,
    default: "获取用户头像、昵称，主要用于向用户提供具有辨识度的用户体验"
  },
  /**
   * @description 弹框确认按钮文案
   */
  confirmText: {
    type: String,
    default: "保 存"
  },
  /**
   * @description 弹框按钮背景颜色，以tn开头使用狮业有承内置的颜色
   */
  confirmBgColor: {
    type: String,
    default: "tn-type-primary"
  },
  /**
   * @description 弹框按钮文字颜色，以tn开头使用狮业有承内置的颜色
   */
  confirmTextColor: {
    type: String,
    default: "tn-white"
  }
});
const updateUserInfoPopupEmits = {
  "update:show": (val) => isBoolean(val),
  "update:avatar": (val) => isString(val),
  "update:nickname": (val) => isString(val),
  /**
   * @description 点击弹框确认按钮时触发
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  confirm: (avatar, nickname) => true,
  /**
   * @description 选择头像后触发
   */
  "choose-avatar": (val) => isString(val)
};
const useUpdateUserInfoPopupCustomStyle = (props) => {
  const ns = useNamespace("update-user-info-popup");
  const [confirmBtnBgColorClass, confirmBtnBgColorStyle] = useComponentColor(
    toRef(props, "confirmBgColor"),
    "bg"
  );
  const [confirmBtnTextColorClass, confirmBtnTextColorStyle] = useComponentColor(toRef(props, "confirmTextColor"), "text");
  const submitBtnClass = computed(() => {
    const cls = [ns.e("submit-btn")];
    if (confirmBtnBgColorClass.value) {
      cls.push(confirmBtnBgColorClass.value);
    }
    if (confirmBtnTextColorClass.value) {
      cls.push(confirmBtnTextColorClass.value);
    }
    return cls.join(" ");
  });
  const submitBtnStyle = computed(() => {
    const style = {};
    if (!confirmBtnBgColorClass.value) {
      style.backgroundColor = confirmBtnBgColorStyle.value || "var(--tn-color-primary)";
    }
    if (confirmBtnTextColorStyle.value) {
      style.color = confirmBtnTextColorStyle.value;
    } else if (!confirmBtnBgColorClass.value) {
      style.color = "var(--tn-color-white)";
    }
    if (!props.avatar || !props.nickname) {
      style.backgroundColor = "var(--tn-color-gray-disabled)";
      style.color = "var(--tn-color-gray-dark)";
    }
    return style;
  });
  return {
    ns,
    submitBtnClass,
    submitBtnStyle
  };
};
const useUpdateUserInfoPopup = (props, emits) => {
  const showUpdatePopup = ref(false);
  const inputNickname = ref(props.nickname);
  watch(
    () => props.show,
    (val) => {
      showUpdatePopup.value = val;
    },
    {
      immediate: true
    }
  );
  const nickNameInputHandle = (e2) => {
    const value = e2.detail.value;
    inputNickname.value = value;
    emits("update:nickname", value);
  };
  const avatarChooseHandle = (e2) => {
    emits("choose-avatar", e2.detail.avatarUrl);
  };
  const submitBtnClickHandle = () => {
    if (!inputNickname.value || !props.avatar) {
      return;
    }
    emits("confirm", props.avatar, inputNickname.value);
    emits("update:show", false);
  };
  const popupCloseHandle = () => {
    emits("update:show", false);
  };
  return {
    showUpdatePopup,
    inputNickname,
    nickNameInputHandle,
    popupCloseHandle,
    submitBtnClickHandle,
    avatarChooseHandle
  };
};
const tabsBaseProps = buildProps({
  /**
   * @description 默认颜色，以tn开头时使用狮业有承内置的颜色
   */
  color: String,
  /**
   * @description 选中颜色，以tn开头时使用狮业有承内置的颜色
   */
  activeColor: String,
  /**
   * @description 字体大小
   */
  fontSize: String,
  /**
   * @description 选中字体大小
   */
  activeFontSize: String
});
const tabsProps = buildProps({
  ...tabsBaseProps,
  /**
   * @description tabs绑定的值，与tabsItem name属性对应值，如果tabsItem没有设置name，则默认为索引值
   */
  modelValue: {
    type: [String, Number],
    default: 0
  },
  /**
   * @description tabs高度
   */
  height: {
    type: String,
    default: "80rpx"
  },
  /**
   * @description 滑块的宽度
   */
  barWidth: {
    type: String,
    default: "40rpx"
  },
  /**
   * @description 背景颜色，以tn开头时使用狮业有承内置的颜色
   */
  bgColor: String,
  /**
   * @description bar滑块颜色，以tn开头时使用狮业有承内置的颜色
   */
  barColor: String,
  /**
   * @description 显示底部阴影
   */
  bottomShadow: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否可以滚动
   */
  scroll: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否显示滑块
   */
  bar: {
    type: Boolean,
    default: true
  },
  /**
   * @description 选中后的字体是否加粗
   */
  activeBold: {
    type: Boolean,
    default: true
  },
  /**
   * @description 距离顶部的距离，默认单位 px
   */
  offsetTop: {
    type: Number,
    default: 0
  },
  /**
   * @description 切换前回调
   */
  beforeSwitch: {
    type: definePropType(Function)
  }
});
const tabsEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val),
  [CHANGE_EVENT]: (val) => isString(val) || isNumber(val)
};
const useTabsCustomStyle = (props) => {
  const ns = useNamespace("tabs");
  const [bgColorClass, bgColorStyle] = useComponentColor(
    toRef(props, "bgColor"),
    "bg"
  );
  const [barColorClass, barColorStyle] = useComponentColor(
    toRef(props, "barColor"),
    "bg"
  );
  const tabsClass = computed(() => {
    const cls = [ns.b()];
    if (props.bottomShadow)
      cls.push(ns.m("bottom-shadow"));
    if (bgColorClass.value)
      cls.push(bgColorClass.value);
    return cls.join(" ");
  });
  const tabsStyle = computed(() => {
    const style = {};
    if (!bgColorClass.value) {
      style.backgroundColor = bgColorStyle.value || "var(--tn-color-white)";
    }
    if (props.height) {
      style.height = formatDomSizeValue(props.height);
      if (props.offsetTop) {
        style.height = `calc(${style.height} + ${props.offsetTop}px)`;
      }
    }
    return style;
  });
  const barClass = computed(() => {
    const cls = [ns.e("bar")];
    if (barColorClass.value)
      cls.push(barColorClass.value);
    return cls.join(" ");
  });
  const barStyle = computed(() => {
    const style = {};
    if (!barColorClass.value) {
      style.backgroundColor = barColorStyle.value || "var(--tn-color-primary)";
    }
    if (props.barWidth)
      style.width = formatDomSizeValue(props.barWidth);
    return style;
  });
  return {
    ns,
    tabsClass,
    tabsStyle,
    barClass,
    barStyle
  };
};
const useTabsItemCustomStyle = (props, isActive) => {
  const ns = useNamespace("tabs-item");
  const tabsContext = inject(tabsContextKey);
  const normalColor = computed(
    () => props.color || (tabsContext == null ? void 0 : tabsContext.color)
  );
  const activeColor = computed(
    () => props.activeColor || (tabsContext == null ? void 0 : tabsContext.activeColor)
  );
  const activeBold = computed(
    () => isEmptyVariableInDefault(tabsContext == null ? void 0 : tabsContext.activeBold, true)
  );
  const activeFontSize = computed(
    () => props.activeFontSize || (tabsContext == null ? void 0 : tabsContext.activeFontSize)
  );
  const [textColorClass, textColorStyle] = useComponentColor(
    normalColor,
    "text"
  );
  const [activeTextColorClass, activeTextColorStyle] = useComponentColor(
    activeColor,
    "text"
  );
  const tabsItemClass = computed(() => {
    const cls = [ns.b()];
    if (isActive.value) {
      if (activeTextColorClass.value) {
        cls.push(activeTextColorClass.value);
      }
      if (activeBold.value) {
        cls.push(ns.m("bold"));
      }
    } else {
      if (textColorClass.value) {
        cls.push(textColorClass.value);
      }
    }
    if (tabsContext == null ? void 0 : tabsContext.scroll)
      cls.push(ns.m("scroll"));
    if (!(tabsContext == null ? void 0 : tabsContext.showBar))
      cls.push(ns.is("no-bar"));
    return cls.join(" ");
  });
  const tabsItemStyle = computed(() => {
    const style = {};
    if (isActive.value) {
      if (!activeTextColorClass.value) {
        style.color = activeTextColorStyle.value || "var(--tn-color-primary)";
      }
      if (activeFontSize.value) {
        style.fontSize = formatDomSizeValue(activeFontSize.value);
      }
    } else {
      if (!textColorClass.value) {
        style.color = textColorStyle.value || "var(--tn-text-color-primary)";
      }
    }
    if (props.fontSize || (tabsContext == null ? void 0 : tabsContext.fontSize)) {
      style.fontSize = formatDomSizeValue(
        props.fontSize || (tabsContext == null ? void 0 : tabsContext.fontSize) || ""
      );
    }
    return style;
  });
  return {
    ns,
    tabsItemClass,
    tabsItemStyle
  };
};
const useTabsItem = (props) => {
  const instance = getCurrentInstance();
  if (!instance) {
    debugWarn("TnTabsItem", "请在 setup 中使用 useTabsItem");
  }
  const { emit: emit2, uid: uid2 } = instance;
  const componentId = `tti-${generateId()}`;
  const tabsContext = inject(tabsContextKey);
  const { getSelectorNodeInfo } = useSelectorQuery(instance);
  const isActive = computed(() => (tabsContext == null ? void 0 : tabsContext.activeUid) === uid2);
  const hasBadge = computed(() => !isEmpty(props.badgeConfig));
  const tabsItemRect = {
    width: 0,
    height: 0,
    left: 0
  };
  let initCount = 0;
  const initTabsItemRectInfo = async () => {
    try {
      const rectInfo = await getSelectorNodeInfo(`#${componentId}`);
      tabsItemRect.width = rectInfo.width || 0;
      tabsItemRect.height = rectInfo.height || 0;
      tabsItemRect.left = rectInfo.left || 0;
      tabsContext == null ? void 0 : tabsContext.addItem({
        uid: uid2,
        elementRect: tabsItemRect,
        name: props.name
      });
    } catch (err) {
      if (initCount > 10) {
        initCount = 0;
        debugWarn("TnTabsItem", `获取tabsItem节点信息失败: ${err}`);
        return;
      }
      initCount++;
      setTimeout(() => {
        initTabsItemRectInfo();
      }, 150);
    }
  };
  const itemClickEvent = () => {
    if (props.disabled)
      return;
    emit2("click");
    tabsContext == null ? void 0 : tabsContext.setActiveItem(uid2);
  };
  onMounted(() => {
    nextTick$1(() => {
      setTimeout(() => {
        initTabsItemRectInfo();
      }, 200);
    });
  });
  onUnmounted(() => {
    tabsContext == null ? void 0 : tabsContext.removeItem(uid2);
  });
  return {
    componentId,
    isActive,
    hasBadge,
    itemClickEvent
  };
};
const useTabs = (props) => {
  const instance = getCurrentInstance();
  if (!instance) {
    debugWarn("TnTabs", "请在 setup 函数中使用 useTabs ");
  }
  const { emit: emit2 } = instance;
  const slots = useSlots();
  const {
    children: items,
    addChild,
    removeChild: removeItem
  } = useOrderedChildren();
  const { getSelectorNodeInfo } = useSelectorQuery(instance);
  const componentId = `tt-${generateId()}`;
  const barComponentId = `${componentId}-b`;
  const showBar = computed(() => props.bar || !!slots.bar);
  const activeUid = ref(-1);
  const addItem = (item) => {
    if (props.modelValue !== void 0 && activeUid.value === -1) {
      if (props.modelValue === item.name || props.modelValue === items.value.length) {
        nextTick$1(() => {
          updateActiveUid(item.uid);
        });
      }
    }
    addChild(item);
  };
  const tabsRect = {
    width: 0,
    height: 0,
    left: 0
  };
  const barRect = {
    width: 0,
    height: 0,
    left: 0
  };
  const barOffsetLeft = ref(0);
  const scrollLeft = ref(0);
  const updateOffsetPosition = (index2) => {
    if (!props.scroll && !props.bar && !slots.bar)
      return;
    const item = items.value[index2].elementRect;
    if (props.bar || slots.bar) {
      barOffsetLeft.value = item.left - tabsRect.left + (item.width - barRect.width) / 2;
    }
    if (props.scroll) {
      const scrollLeftValue = item.left - tabsRect.left - (tabsRect.width - item.width) / 2;
      scrollLeft.value = scrollLeftValue < 0 ? 0 : scrollLeftValue;
    }
  };
  const updateActiveUid = (uid2, changeEmit = false) => {
    activeUid.value = uid2;
    const itemIndex = items.value.findIndex((item) => item.uid === uid2);
    const value = items.value[itemIndex].name ?? itemIndex;
    updateOffsetPosition(itemIndex);
    emit2(UPDATE_MODEL_EVENT, value);
    if (changeEmit) {
      emit2(CHANGE_EVENT, value);
    }
  };
  const setActiveItem = (uid2) => {
    if (!props.beforeSwitch) {
      updateActiveUid(uid2, true);
      return;
    }
    const itemIndex = items.value.findIndex((item) => item.uid === uid2);
    const shouldSwitch = props.beforeSwitch(itemIndex);
    const isPromiseOrBoolean = [
      isPromise(shouldSwitch),
      isBoolean(shouldSwitch)
    ].includes(true);
    if (!isPromiseOrBoolean) {
      debugWarn("TnTabs", "beforeSwitch返回值必须是Promise或者Boolean");
      return;
    }
    if (isPromise(shouldSwitch)) {
      shouldSwitch.then((res) => {
        if (res) {
          updateActiveUid(uid2, true);
        }
      }).catch((err) => {
        debugWarn("TnTabs", `执行beforeSwitch出错：${err}`);
      });
    } else {
      if (shouldSwitch) {
        updateActiveUid(uid2, true);
      }
    }
  };
  const updateActiveItemByValue = (value) => {
    var _a2;
    if (value === void 0) {
      updateActiveUid(items.value[0].uid);
      return;
    }
    let item;
    if (typeof value === "number") {
      item = (_a2 = items.value) == null ? void 0 : _a2[value];
    }
    if (!item) {
      item = items.value.find((item2) => item2.name === value);
    }
    if (!item) {
      updateActiveUid(items.value[0].uid);
    } else {
      updateActiveUid(item.uid);
    }
  };
  watch(
    () => props.modelValue,
    (val) => {
      updateActiveItemByValue(val);
    }
  );
  let initCount = 0;
  const getTabsRectInfo = async () => {
    try {
      const rectInfo = await getSelectorNodeInfo(`#${componentId}`);
      initCount = 0;
      tabsRect.width = rectInfo.width || 0;
      tabsRect.height = rectInfo.height || 0;
      tabsRect.left = rectInfo.left || 0;
    } catch (err) {
      if (initCount > 10) {
        initCount = 0;
        debugWarn("TnTabs", `获取Tabs容器节点信息出错: ${err}`);
        return;
      }
      initCount++;
      setTimeout(() => {
        getTabsRectInfo();
      }, 150);
    }
  };
  const getBarRectInfo = async () => {
    if (!props.bar && !slots.bar)
      return;
    try {
      const rectInfo = await getSelectorNodeInfo(`#${barComponentId}`);
      initCount = 0;
      barRect.width = rectInfo.width || 0;
      barRect.height = rectInfo.height || 0;
      barRect.left = rectInfo.left || 0;
    } catch (err) {
      if (initCount > 10) {
        initCount = 0;
        debugWarn("TnTabs", `获取Bar滑块节点信息出错: ${err}`);
        return;
      }
      initCount++;
      setTimeout(() => {
        getBarRectInfo();
      }, 150);
    }
  };
  onMounted(() => {
    nextTick$1(() => {
      getTabsRectInfo();
      getBarRectInfo();
    });
  });
  provide(
    tabsContextKey,
    reactive({
      ...toRefs(props),
      items,
      activeUid,
      showBar,
      addItem,
      removeItem,
      setActiveItem
    })
  );
  return {
    tabItems: items,
    componentId,
    barComponentId,
    barOffsetLeft,
    scrollLeft,
    showBar
  };
};
const tabsItemProps = buildProps({
  ...tabsBaseProps,
  /**
   * @description 唯一标识
   */
  name: {
    type: [String, Number]
  },
  /**
   * @description 标题
   */
  title: {
    type: String,
    required: true
  },
  /**
   * @description 角标配置
   */
  badgeConfig: {
    type: definePropType(Object),
    default: () => ({})
  },
  /**
   * @description 是否禁用
   */
  disabled: Boolean
});
const tabsItemEmits = {
  /**
   * @description 点击事件
   */
  click: () => true
};
const loadingModes = ["semicircle", "circle", "flower"];
const loadingProps = buildProps({
  /**
   * @description 显示加载状态
   */
  show: Boolean,
  /**
   * @description 加载动画
   */
  animation: Boolean,
  /**
   * @description 加载模式
   */
  mode: {
    type: String,
    values: loadingModes,
    default: "circle"
  },
  /**
   * @description 加载颜色类型
   */
  type: {
    type: String,
    values: componentTypes,
    default: "primary"
  },
  /**
   * @description 颜色，以tn开头则使用狮业有承内置的颜色
   */
  color: String,
  /**
   * @description 加载动画大小
   */
  size: {
    type: [String, Number]
  },
  /**
   * @description 加载动画执行时间，单位s
   */
  duration: {
    type: [String, Number]
  },
  /**
   * @description 加载动画执行时间函数，仅mode为circle和semicircle时有效
   */
  timeFunction: String
});
const useLoadingCustomStyle = (props) => {
  const ns = useNamespace("loading");
  const [colorClass, colorStyle, updateColor] = useComponentColor(
    toRef(props, "color"),
    "bg"
  );
  const { sizeType } = useComponentSize(props.size);
  const loadingClass = computed(() => {
    const cls = [];
    cls.push(ns.b());
    if (props.size && sizeType.value === "inner")
      cls.push(ns.m(props.size));
    return cls.join(" ");
  });
  const loadingStyle = computed(() => {
    const style = {};
    if (props.size && sizeType.value === "custom")
      style.width = style.height = formatDomSizeValue(props.size);
    return style;
  });
  const loadingContentClass = computed(() => {
    const cls = [];
    cls.push(ns.b());
    if (props.animation)
      cls.push(ns.m("animation"));
    return cls.join(" ");
  });
  const loadingContentStyle = computed(() => {
    const style = {};
    if (props.type)
      style["--loading-color"] = `var(--tn-color-${props.type})`;
    if (props.color && colorClass.value) {
      const color = props.color.replace("tn-", "");
      style["--loading-color"] = `var(--tn-color-${color})`;
    }
    if (colorStyle.value)
      style["--loading-color"] = colorStyle.value;
    if (props.duration)
      style.animationDuration = `${props.duration}s`;
    if (props.mode === "circle" || props.mode === "semicircle") {
      if (props.timeFunction)
        style.animationTimingFunction = props.timeFunction;
    }
    return style;
  });
  return {
    ns,
    loadingClass,
    loadingStyle,
    loadingContentClass,
    loadingContentStyle,
    updateColor
  };
};
const badgeProps = buildProps({
  /**
   * @description 徽标内容，可以是数字或者字符串，当为数字时，超过max会显示{max}+，以icon-开头则显示图标
   */
  value: {
    type: [String, Number]
  },
  /**
   * @description 徽标内容最大值，在value为number时有效，超过最大值会显示{max}+
   */
  max: {
    type: [String, Number]
  },
  /**
   * @description 徽标颜色类型
   */
  type: {
    type: String,
    values: componentTypes,
    default: "primary"
  },
  /**
   * @description 徽标背景颜色, 以tn开头则使用狮业有承内置的颜色
   */
  bgColor: String,
  /**
   * @description 徽标文字颜色, 以tn开头则使用狮业有承内置的颜色
   */
  textColor: String,
  /**
   * @description 徽标大小
   */
  size: {
    type: [String, Number]
  },
  /**
   * @description 字体大小
   */
  fontSize: {
    type: [String, Number]
  },
  /**
   * @description 徽标加粗
   */
  bold: Boolean,
  /**
   * @description 自定义徽标样式
   */
  customStyle: useComponentCustomStyleProp,
  /**
   * @description 自定义徽标类
   */
  customClass: String,
  /**
   * @description 是否显示点徽标
   */
  dot: Boolean,
  /**
   * @description 是否绝对定位徽标
   */
  absolute: {
    type: Boolean,
    default: true
  },
  /**
   * @description 绝对定位的位置
   */
  absolutePosition: {
    type: definePropType(Object),
    default: () => ({})
  },
  /**
   * @description 绝对居中对齐
   */
  absoluteCenter: {
    type: Boolean,
    default: true
  },
  /**
   * @description 点击标识
   */
  index: useComponentIndexProp
});
const badgeEmits = {
  /**
   * @description 点击事件
   */
  click: (index2) => typeof index2 === "number" || typeof index2 === "string"
};
const useBadge = (props, emits) => {
  const showBadge = computed(() => {
    return !!props.dot || props.value !== "" && props.value !== void 0;
  });
  const contentType = computed(() => {
    let type = "string";
    if (isNumber(props.value))
      type = "number";
    if (isString(props.value) && props.value.startsWith("icon-"))
      type = "icon";
    return type;
  });
  const content = computed(() => {
    if (props.dot)
      return "";
    if (contentType.value === "number" && props.max) {
      const value = Number(props.value || 0);
      const max = Number(props.max || 0);
      return value > max ? `${max}+` : `${value}`;
    }
    if (contentType.value === "icon")
      return props.value.replace("icon-", "");
    return props.value;
  });
  const badgeClick = () => {
    if (emits)
      emits("click", props.index);
  };
  return {
    showBadge,
    contentType,
    content,
    badgeClick
  };
};
const useBadgeCustomStyle = (props) => {
  const ns = useNamespace("badge");
  const contentNs = useNamespace("badge-content");
  const { contentType } = useBadge(props);
  const [bgColorClass, bgColorStyle] = useComponentColor(
    toRef(props, "bgColor"),
    "bg"
  );
  const [textColorClass, textColorStyle] = useComponentColor(
    toRef(props, "textColor"),
    "text"
  );
  const { sizeType } = useComponentSize(props.size);
  const badgeContentClass = computed(() => {
    const cls = [];
    cls.push(contentNs.b());
    if (props.dot)
      cls.push(contentNs.m("dot"));
    if (contentType.value === "icon")
      cls.push(contentNs.m("icon"));
    if (props.absolute) {
      cls.push(contentNs.e("absolute"));
      if (props.absoluteCenter)
        cls.push(contentNs.em("absolute", "center"));
    }
    if (props.type)
      cls.push(`tn-type-${props.type}_bg`);
    if (bgColorClass.value)
      cls.push(bgColorClass.value);
    if (textColorClass.value)
      cls.push(textColorClass.value);
    if (props.size && sizeType.value === "inner")
      cls.push(contentNs.m(props.size));
    if (props.bold)
      cls.push("tn-text-bold");
    if (props.customClass)
      cls.push(props.customClass);
    return cls.join(" ");
  });
  const badgeContentStyle = computed(() => {
    const style = {};
    if (bgColorStyle.value)
      style.backgroundColor = bgColorStyle.value;
    if (textColorStyle.value)
      style.color = textColorStyle.value;
    if (props.size && (sizeType.value === "custom" || contentType.value === "icon"))
      style.width = style.height = formatDomSizeValue(props.size);
    if (props.fontSize)
      style.fontSize = formatDomSizeValue(props.fontSize);
    if (props.absolutePosition.top)
      style.top = formatDomSizeValue(props.absolutePosition.top);
    if (props.absolutePosition.right)
      style.right = formatDomSizeValue(props.absolutePosition.right);
    if (!isEmpty(props.customStyle)) {
      Object.assign(style, props.customStyle);
    }
    return style;
  });
  return {
    ns,
    contentNs,
    badgeContentClass,
    badgeContentStyle
  };
};
const noticeBarScrollDirection = ["horizontal", "vertical"];
const noticeBarProps = buildProps({
  /**
   * @description 是否显示通知栏
   */
  show: {
    type: Boolean,
    default: true
  },
  /**
   * @description 通知栏显示的数据
   */
  data: {
    type: definePropType(Array),
    default: () => []
  },
  /**
   * @description 背景颜色，以tn开头则使用狮业有承内置的颜色
   */
  bgColor: String,
  /**
   * @description 文字颜色，以tn开头则使用狮业有承内置的颜色
   */
  textColor: String,
  /**
   * @description 字体大小
   */
  fontSize: String,
  /**
   * @description 通知栏左边显示的图标
   */
  leftIcon: String,
  /**
   * @description 左图标颜色，以tn开头则使用狮业有承内置的颜色
   */
  leftIconColor: String,
  /**
   * @description 左图标大小，默认单位rpx
   */
  leftIconSize: String,
  /**
   * @description 通知栏右边显示的图标
   */
  rightIcon: String,
  /**
   * @description 右图标颜色，以tn开头则使用狮业有承内置的颜色
   */
  rightIconColor: String,
  /**
   * @description 右图标大小，默认单位rpx
   */
  rightIconSize: String,
  /**
   * @description 通知暂停播放
   */
  pause: Boolean,
  /**
   * @description 自动播放
   */
  autoPlay: {
    type: Boolean,
    default: true
  },
  /**
   * @description 滚动方向
   */
  direction: {
    type: String,
    values: noticeBarScrollDirection,
    default: "horizontal"
  },
  /**
   * @description 是否采用衔接滚动，在 direction 为 horizontal 时有效
   */
  loop: {
    type: Boolean,
    default: true
  },
  /**
   * @description 滚动速度，在 direction 为 horizontal 以及 loop 为 true 时表示 每秒滚动的像素数，在 direction 为 vertical 或者 direction 为 horizontal 且 loop 为 false 时表示 切换的时间间隔单位ms
   */
  speed: Number,
  /**
   * @description 在data为空时是否自动隐藏
   */
  autoHide: {
    type: Boolean,
    default: true
  }
});
const noticeBarEmits = {
  /**
   * @description 点击通知栏
   */
  click: (index2) => isNumber(index2),
  /**
   * @description 左图标点击事件
   */
  "left-icon-click": () => true,
  /**
   * @description 右图标点击事件
   */
  "right-icon-click": () => true
};
const useNoticeBarCommonProps = (props) => {
  const [bgColorClass, bgColorStyle] = useComponentColor(
    toRef(props, "bgColor"),
    "bg"
  );
  const [textColorClass, textColorStyle] = useComponentColor(
    toRef(props, "textColor"),
    "text"
  );
  const [leftIconColorClass, leftIconColorStyle] = useComponentColor(
    toRef(props, "leftIconColor"),
    "text"
  );
  const [rightIconColorClass, rightIconColorStyle] = useComponentColor(
    toRef(props, "rightIconColor"),
    "text"
  );
  const commonClass = computed(() => {
    return (type = "normal") => {
      const cls = [];
      if (type === "normal") {
        if (bgColorClass.value)
          cls.push(bgColorClass.value);
        if (textColorClass.value)
          cls.push(textColorClass.value);
      } else if (type === "leftIcon") {
        if (leftIconColorClass.value)
          cls.push(leftIconColorClass.value);
      } else if (type === "rightIcon") {
        if (rightIconColorClass.value)
          cls.push(rightIconColorClass.value);
      }
      return cls.join(" ");
    };
  });
  const commonStyle = computed(() => {
    return (type = "normal") => {
      const style = {};
      if (type === "normal") {
        if (!bgColorClass.value) {
          style.backgroundColor = bgColorStyle.value || "var(--tn-color-white)";
        }
        if (textColorStyle.value) {
          style.color = textColorStyle.value;
        } else if (!bgColorClass.value && !textColorClass.value) {
          style.color = "var(--tn-text-color-primary)";
        }
        if (props.fontSize)
          style.fontSize = formatDomSizeValue(props.fontSize);
      } else if (type === "leftIcon") {
        if (!leftIconColorClass.value) {
          style.color = leftIconColorStyle.value || "var(--tn-text-color-primary)";
        }
        if (props.fontSize)
          style.fontSize = formatDomSizeValue(props.fontSize);
        if (props.leftIconSize)
          style.fontSize = formatDomSizeValue(props.leftIconSize);
      } else if (type === "rightIcon") {
        if (!rightIconColorClass.value) {
          style.color = rightIconColorStyle.value || "var(--tn-text-color-secondary)";
        }
        if (props.fontSize)
          style.fontSize = `calc(${formatDomSizeValue(props.fontSize)} * 1.2)`;
        if (props.rightIconSize)
          style.fontSize = formatDomSizeValue(props.rightIconSize);
      }
      return style;
    };
  });
  return {
    commonClass,
    commonStyle
  };
};
const useNoticeBar = (props, emits) => {
  const showNoticeBar = computed(() => {
    return props.show && !(props.autoHide && props.data.length === 0);
  });
  const play = computed(() => !props.pause);
  const click = (index2) => {
    emits("click", index2);
  };
  const leftIconClick = () => {
    emits("left-icon-click");
  };
  const rightIconClick = () => {
    emits("right-icon-click");
  };
  provide(
    noticeBarKey,
    reactive({
      ...toRefs(props),
      play,
      click
    })
  );
  return {
    showNoticeBar,
    leftIconClick,
    rightIconClick
  };
};
const useRowNoticeBar = () => {
  const instance = getCurrentInstance();
  const noticeBar = inject(noticeBarKey, null);
  const { getSelectorNodeInfo } = useSelectorQuery(instance);
  const componentId = `trnb-${generateId()}`;
  const componentTextId = `${componentId}-text`;
  const data = computed(() => {
    var _a2;
    if (!((_a2 = noticeBar == null ? void 0 : noticeBar.data) == null ? void 0 : _a2.length))
      return "";
    return noticeBar.data.join(" ");
  });
  const speed = computed(
    () => isEmptyVariableInDefault(noticeBar == null ? void 0 : noticeBar.speed, 80)
  );
  let animationDuration = 0;
  let animation = null;
  const animationData = ref(null);
  let animationLoopTimer = null;
  const createAnimation = () => {
    animation = index.createAnimation({
      duration: animationDuration,
      timingFunction: "linear"
    });
    animation.translateX(
      -(contentWidth + contentTextWidth) + Number(Math.random() * 10)
    ).step({
      duration: animationDuration
    });
    animation.translateX(0).step({
      duration: 0
    });
    animationData.value = animation.export();
  };
  const createLoopAnimation = () => {
    createAnimation();
    animationLoopTimer = setInterval(() => {
      createAnimation();
    }, animationDuration + 80);
  };
  const stopAnimation = () => {
    animation = null;
    animationData.value = null;
    if (animationLoopTimer) {
      clearInterval(animationLoopTimer);
      animationLoopTimer = null;
    }
  };
  watch(
    () => noticeBar == null ? void 0 : noticeBar.play,
    (newVal) => {
      if (newVal) {
        createLoopAnimation();
      } else {
        stopAnimation();
      }
    }
  );
  let initCount = 0;
  let contentWidth = 0;
  let contentTextWidth = 0;
  const getContentRectInfo = async () => {
    try {
      const contentRectInfo = await getSelectorNodeInfo(`#${componentId}`);
      const contentTextRectInfo = await getSelectorNodeInfo(
        `#${componentTextId}`
      );
      initCount = 0;
      contentWidth = contentRectInfo.width || 0;
      contentTextWidth = contentTextRectInfo.width || 0;
      animationDuration = (contentWidth + contentTextWidth) / speed.value * 1e3;
      if ((noticeBar == null ? void 0 : noticeBar.play) && (noticeBar == null ? void 0 : noticeBar.autoPlay)) {
        setTimeout(() => {
          createLoopAnimation();
        }, 50);
      }
    } catch (err) {
      if (initCount > 10) {
        initCount = 0;
        debugWarn("TnNoticeBar", `获取通知栏容器信息失败: ${err}`);
        return;
      }
      initCount++;
      setTimeout(() => {
        getContentRectInfo();
      }, 150);
    }
  };
  watch(
    () => noticeBar == null ? void 0 : noticeBar.speed,
    () => {
      stopAnimation();
      getContentRectInfo();
    }
  );
  const noticeClickEvent = () => {
    noticeBar == null ? void 0 : noticeBar.click(0);
  };
  onMounted(() => {
    nextTick$1(() => {
      getContentRectInfo();
    });
  });
  return {
    componentId,
    componentTextId,
    data,
    animationData,
    noticeClickEvent
  };
};
const useColumnNoticeBar = () => {
  const noticeBar = inject(noticeBarKey, null);
  const data = computed(
    () => isEmptyVariableInDefault(noticeBar == null ? void 0 : noticeBar.data, [])
  );
  const interval = computed(
    () => isEmptyVariableInDefault(noticeBar == null ? void 0 : noticeBar.speed, 3e3)
  );
  const play = computed(
    () => isEmptyVariableInDefault(noticeBar == null ? void 0 : noticeBar.play, true)
  );
  const vertical = computed(() => (noticeBar == null ? void 0 : noticeBar.direction) === "vertical");
  const noticeClickEvent = (index2) => {
    noticeBar == null ? void 0 : noticeBar.click(index2);
  };
  return {
    data,
    interval,
    play,
    vertical,
    noticeClickEvent
  };
};
const footerFixedMode = ["page", "container"];
const footerProps = buildProps({
  /**
   * @description 页脚内容
   */
  content: String,
  /**
   * @description 页脚导航信息
   */
  navigator: {
    type: definePropType(Array),
    default: () => []
  },
  /**
   * @description 内容字体颜色，以tn开头使用狮业有承内置的颜色
   */
  textColor: String,
  /**
   * @description 页脚字体尺寸大小，内置了 `sm` 、 `lg` 、 `xl` 三种尺寸，可以传递指定的尺寸设置
   */
  size: String,
  /**
   * @description 导航信息字体颜色，以tn开头使用狮业有承内置的颜色
   */
  navigatorTextColor: String,
  /**
   * @description 页脚距离底部的距离，默认单位 rpx
   */
  offsetBottom: String,
  /**
   * @description 是否固定在底部
   */
  fixed: {
    type: Boolean,
    default: true
  },
  /**
   * @description 固定在底部的方式，`page`  固定在页面底部，`container`  固定在容器底部
   */
  fixedMode: {
    type: String,
    values: footerFixedMode,
    default: "container"
  },
  /**
   * @description 是否开启底部安全边距
   */
  safeAreaInsetBottom: {
    type: Boolean,
    default: true
  }
});
const footerEmits = {
  /**
   * @description 点击页脚内容
   */
  click: () => true,
  /**
   * @description 点击页脚导航
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigatorClick: (navigator) => true
};
const useFooterCustomStyle = (props) => {
  const ns = useNamespace("footer");
  const [textColorClass, textColorStyle] = useComponentColor(
    toRef(props, "textColor"),
    "text"
  );
  const { sizeType } = useComponentSize(props.size);
  const footerClass = computed(() => {
    const cls = [ns.b()];
    if (props.size && sizeType.value === "inner")
      cls.push(ns.m(props.size));
    if (props.fixed) {
      cls.push(ns.e("fixed"), ns.em("fixed", props.fixedMode));
      if (props.safeAreaInsetBottom) {
        cls.push("tn-u-safe-area");
      }
    }
    return cls.join(" ");
  });
  const footerStyle = computed(() => {
    const style = {};
    if (props.offsetBottom)
      style.bottom = formatDomSizeValue(props.offsetBottom);
    if (props.size && sizeType.value === "custom") {
      style.fontSize = formatDomSizeValue(props.size);
    }
    return style;
  });
  const contentClass = computed(() => {
    const cls = [ns.e("content")];
    if (textColorClass.value)
      cls.push(textColorClass.value);
    return cls.join(" ");
  });
  const contentStyle = computed(() => {
    const style = {};
    if (!textColorClass.value)
      style.color = textColorStyle.value || "var(--tn-text-color-secondary)";
    return style;
  });
  const navigatorClass = computed(() => {
    return (item) => {
      const cls = [ns.e("navigator")];
      if (item.color.class)
        cls.push(item.color.class);
      return cls.join(" ");
    };
  });
  const navigatorStyle = computed(() => {
    return (item) => {
      const style = {};
      if (!item.color.class)
        style.color = item.color.style || "var(--tn-color-primary)";
      return style;
    };
  });
  return {
    ns,
    footerClass,
    footerStyle,
    contentClass,
    contentStyle,
    navigatorClass,
    navigatorStyle
  };
};
const useFooter = (props, emits) => {
  const navigatorData = computed(() => {
    return props.navigator.map((nav) => {
      const textColor = ref(
        isEmptyDoubleVariableInDefault(nav.textColor, props.navigatorTextColor)
      );
      const [textColorClass, textColorStyle] = useComponentColor(
        textColor,
        "text"
      );
      return {
        title: nav.title || "",
        url: (nav == null ? void 0 : nav.url) || "",
        color: {
          class: textColorClass.value,
          style: textColorStyle.value
        }
      };
    });
  });
  const footerClickEvent = () => {
    emits("click");
  };
  const navigatorClickEvent = (item) => {
    emits("navigatorClick", item);
  };
  return {
    navigatorData,
    footerClickEvent,
    navigatorClickEvent
  };
};
const photoAlbumProps = buildProps({
  /**
   * @description 图片地址列表
   */
  data: {
    type: definePropType(Array),
    default: () => []
  },
  /**
   * @description 最大允许显示图片的数量
   */
  max: {
    type: Number,
    default: 9
  },
  /**
   * @description 一行显示的图片数量
   */
  column: {
    type: Number,
    default: 3
  },
  /**
   * @description 图片模式
   */
  imgMode: {
    type: String,
    values: componentImgModes,
    default: "aspectFill"
  },
  /**
   * @description 是否开启懒加载
   */
  lazyLoad: {
    type: Boolean,
    default: true
  },
  /**
   * @description 点击图片进行预览
   */
  preview: {
    type: Boolean,
    default: true
  }
});
const photoAlbumEmits = {
  /**
   * @description 点击图片时触发
   */
  click: (index2) => isNumber(index2)
};
const usePhotoAlbum = (props, emits) => {
  const imageData = computed(() => {
    const maxLength = Math.min(props.data.length, props.max);
    return props.data.slice(0, maxLength);
  });
  const imageClickEvent = (index$1) => {
    emits("click", index$1);
    if (!props.preview)
      return;
    index.previewImage({
      urls: imageData.value,
      current: index$1
    });
  };
  return {
    imageData,
    imageClickEvent
  };
};
const emptyDefaultTips = {
  cart: "购物车为空",
  page: "页面不存在",
  search: "搜索结果为空",
  address: "地址为空",
  network: "网络不通",
  order: "订单为空",
  coupon: "优惠券为空",
  favor: "暂无收藏",
  permission: "无权限",
  history: "历史记录为空",
  message: "暂无消息",
  list: "列表为空",
  data: "暂无数据",
  comment: "暂无评论"
};
const emptyMode = [
  "cart",
  "page",
  "search",
  "address",
  "network",
  "order",
  "coupon",
  "favor",
  "permission",
  "history",
  "message",
  "list",
  "data",
  "comment"
];
const emptyProps = buildProps({
  /**
   * @description 空白提示类型
   */
  mode: {
    type: String,
    values: emptyMode,
    required: true
  },
  /**
   * @description 内容颜色，以tn开头使用狮业有承内置的颜色
   */
  color: String,
  /**
   * @description 内容尺寸，可以传递尺寸或者`sm` `lg` `xl`
   */
  size: String,
  /**
   * @description 是否显示提示
   */
  showTips: {
    type: Boolean,
    default: true
  }
});
const useEmptyCustomStyle = (props, customIconContent, customTipsContent) => {
  const ns = useNamespace("empty");
  const [textColorClass, textColorStyle] = useComponentColor(
    toRef(props, "color"),
    "text"
  );
  const { sizeType } = useComponentSize(props.size);
  const emptyClass = computed(() => {
    const cls = [ns.b()];
    if (textColorClass.value)
      cls.push(textColorClass.value);
    if (props.size && sizeType.value === "inner")
      cls.push(ns.m(props.size));
    return cls.join(" ");
  });
  const emptyStyle = computed(() => {
    const style = {};
    if (!textColorClass.value) {
      style.color = textColorStyle.value || "var(--tn-color-gray-disbaled)";
    }
    return style;
  });
  const iconTextStyle = computed(() => {
    return (type) => {
      const style = {};
      if (props.size && sizeType.value === "custom") {
        if (type === "icon" && !customIconContent.value) {
          style.fontSize = formatDomSizeValue(props.size);
          style.width = style.height = formatDomSizeValue(props.size);
        }
        if (type === "tips" && !customTipsContent.value) {
          style.fontSize = `calc(${formatDomSizeValue(props.size)} * 0.35)`;
        }
      }
      return style;
    };
  });
  return {
    ns,
    emptyClass,
    emptyStyle,
    iconTextStyle
  };
};
exports.Component = Component$1;
exports._export_sfc = _export_sfc;
exports.avatarEmits = avatarEmits;
exports.avatarGroupEmits = avatarGroupEmits;
exports.avatarGroupProps = avatarGroupProps;
exports.avatarProps = avatarProps;
exports.badgeEmits = badgeEmits;
exports.badgeProps = badgeProps;
exports.buttonEmits = buttonEmits;
exports.buttonProps = buttonProps;
exports.computed = computed;
exports.coolIconEmits = coolIconEmits;
exports.coolIconProps = coolIconProps;
exports.createSSRApp = createSSRApp;
exports.dateTimePickerEmits = dateTimePickerEmits;
exports.dateTimePickerProps = dateTimePickerProps;
exports.debugWarn = debugWarn;
exports.defineComponent = defineComponent;
exports.e = e;
exports.emptyDefaultTips = emptyDefaultTips;
exports.emptyProps = emptyProps;
exports.f = f;
exports.footerEmits = footerEmits;
exports.footerProps = footerProps;
exports.formatDomSizeValue = formatDomSizeValue;
exports.generateId = generateId;
exports.getCurrentInstance = getCurrentInstance;
exports.graphicCardEmits = graphicCardEmits;
exports.graphicCardProps = graphicCardProps;
exports.iconEmits = iconEmits;
exports.iconProps = iconProps;
exports.index = index;
exports.inject = inject;
exports.isRef = isRef;
exports.lazyLoadEmits = lazyLoadEmits;
exports.lazyLoadProps = lazyLoadProps;
exports.loadingProps = loadingProps;
exports.n = n;
exports.navBarProps = navBarProps;
exports.navbarEmits = navbarEmits;
exports.nextTick$1 = nextTick$1;
exports.noticeBarEmits = noticeBarEmits;
exports.noticeBarProps = noticeBarProps;
exports.o = o;
exports.onLaunch = onLaunch;
exports.onLoad = onLoad;
exports.onMounted = onMounted;
exports.onPageScroll = onPageScroll;
exports.onReachBottom = onReachBottom;
exports.onReady = onReady;
exports.p = p;
exports.photoAlbumEmits = photoAlbumEmits;
exports.photoAlbumProps = photoAlbumProps;
exports.pickerEmits = pickerEmits;
exports.pickerProps = pickerProps;
exports.popupEmits = popupEmits;
exports.popupProps = popupProps;
exports.provide = provide;
exports.r = r;
exports.reactive = reactive;
exports.ref = ref;
exports.resolveComponent = resolveComponent;
exports.s = s;
exports.searchBoxEmits = searchBoxEmits;
exports.searchBoxProps = searchBoxProps;
exports.sr = sr;
exports.suspendButtonEmits = suspendButtonEmits;
exports.suspendButtonProps = suspendButtonProps;
exports.swiperEmits = swiperEmits;
exports.swiperProps = swiperProps;
exports.t = t;
exports.tabbarEmits = tabbarEmits;
exports.tabbarItemProps = tabbarItemProps;
exports.tabbarProps = tabbarProps;
exports.tabbatItemEmits = tabbatItemEmits;
exports.tabsEmits = tabsEmits;
exports.tabsItemEmits = tabsItemEmits;
exports.tabsItemProps = tabsItemProps;
exports.tabsProps = tabsProps;
exports.throttle = throttle;
exports.timeLineDataEmits = timeLineDataEmits;
exports.timeLineDataProps = timeLineDataProps;
exports.timeLineItemEmits = timeLineItemEmits;
exports.timeLineItemProps = timeLineItemProps;
exports.timeLineKey = timeLineKey;
exports.timeLineProps = timeLineProps;
exports.tnNavPage = tnNavPage;
exports.toRef = toRef;
exports.unref = unref;
exports.updateUserInfoPopupEmits = updateUserInfoPopupEmits;
exports.updateUserInfoPopupProps = updateUserInfoPopupProps;
exports.useAvatar = useAvatar;
exports.useAvatarBadgeProps = useAvatarBadgeProps;
exports.useAvatarCustomStyle = useAvatarCustomStyle;
exports.useAvatarGroup = useAvatarGroup;
exports.useAvatarIconConfig = useAvatarIconConfig;
exports.useAvatarProps = useAvatarProps;
exports.useBadge = useBadge;
exports.useBadgeCustomStyle = useBadgeCustomStyle;
exports.useButton = useButton;
exports.useButtonCustomStyle = useButtonCustomStyle;
exports.useColumnNoticeBar = useColumnNoticeBar;
exports.useComponentColor = useComponentColor;
exports.useCoolIconCustomStyle = useCoolIconCustomStyle;
exports.useDateTimePicker = useDateTimePicker;
exports.useEmptyCustomStyle = useEmptyCustomStyle;
exports.useFooter = useFooter;
exports.useFooterCustomStyle = useFooterCustomStyle;
exports.useGraphicCard = useGraphicCard;
exports.useGraphicCardCustomStyle = useGraphicCardCustomStyle;
exports.useIcon = useIcon;
exports.useLazyLoad = useLazyLoad;
exports.useLazyLoadCustomStyle = useLazyLoadCustomStyle;
exports.useLoadingCustomStyle = useLoadingCustomStyle;
exports.useNamespace = useNamespace;
exports.useNavbar = useNavbar;
exports.useNavbarCustomStyle = useNavbarCustomStyle;
exports.useNoticeBar = useNoticeBar;
exports.useNoticeBarCommonProps = useNoticeBarCommonProps;
exports.useOrderedChildren = useOrderedChildren;
exports.usePhotoAlbum = usePhotoAlbum;
exports.usePicker = usePicker;
exports.usePickerCustomStyle = usePickerCustomStyle;
exports.usePopup = usePopup;
exports.usePopupCustomStyle = usePopupCustomStyle;
exports.useRowNoticeBar = useRowNoticeBar;
exports.useSearchBox = useSearchBox;
exports.useSearchBoxCustomStyle = useSearchBoxCustomStyle;
exports.useSelectorQuery = useSelectorQuery;
exports.useSlots = useSlots;
exports.useSuspendButton = useSuspendButton;
exports.useSuspendButtonCustomStyle = useSuspendButtonCustomStyle;
exports.useSwiper = useSwiper;
exports.useSwiperCustomStyle = useSwiperCustomStyle;
exports.useTabbar = useTabbar;
exports.useTabbarCustomStyle = useTabbarCustomStyle;
exports.useTabbarItem = useTabbarItem;
exports.useTabbarItemCustomStyle = useTabbarItemCustomStyle;
exports.useTabs = useTabs;
exports.useTabsCustomStyle = useTabsCustomStyle;
exports.useTabsItem = useTabsItem;
exports.useTabsItemCustomStyle = useTabsItemCustomStyle;
exports.useTimeLineCustomStyle = useTimeLineCustomStyle;
exports.useTimeLineDataCustomStyle = useTimeLineDataCustomStyle;
exports.useUniAppSystemRectInfo = useUniAppSystemRectInfo;
exports.useUpdateUserInfoPopup = useUpdateUserInfoPopup;
exports.useUpdateUserInfoPopupCustomStyle = useUpdateUserInfoPopupCustomStyle;
exports.useWaterFall = useWaterFall;
exports.w = w;
exports.waterFallProps = waterFallProps;
