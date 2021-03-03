var pattern = ["*://*.reddit.com/*","*://*.nytimes.com/*","*://*.vox.com/*",
"*://*.youtube.com/*"];

function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  return {
    redirectUrl: "https://www.duolingo.com/"
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:pattern},
  ["blocking"]
);
