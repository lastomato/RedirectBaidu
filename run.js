var requestListener = function(details) {
  var re = /.*wd=([^&]+).*/;
  var se = re.exec(details.url);
  return { redirectUrl: "https://cn.bing.com/search?q=" + se[1] };
}

chrome.webRequest.onBeforeRequest.addListener(
  requestListener,
  { urls: ["*://*.baidu.com/s*"] },
  ["blocking"]
)