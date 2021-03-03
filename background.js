
// function listener(details) {
//     let filter = browser.webRequest.filterResponseData(details.requestId);
//     let decoder = new TextDecoder("utf-8");
//     let encoder = new TextEncoder();
  
//     filter.ondata = event => {
//       let str = decoder.decode(event.data, {stream: true});
//       // Just change any instance of Example in the HTTP response
//       // to WebExtension Example.
//       document.body.style.border = "5px solid red";
//       str = str.replace(/Example/g, 'WebExtension Example');
//       filter.write(encoder.encode(str));
//       filter.disconnect();
//     }
  
//     return {};
//   }
  
//   browser.webRequest.onBeforeRequest.addListener(
//     listener,
//     {urls: ["https://example.com/*"], types: ["main_frame"]},
//     ["blocking"]
//   );

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
