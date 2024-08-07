import fetchLocations from "./api/fetchLocations.js";

chrome.runtime.onInstalled.addListener((details) => {
  fetchLocations();
});

chrome.runtime.onMessage.addListener((data) => {
  const { event, prefs } = data;

  switch (event) {
    case "onStop":
      handleOnStop();
      break;

    case "onStart":
      handleOnStart(prefs);
      break;

    default:
      break;
  }
});

const handleOnStop = () => {
  console.log("on stop in background");
};

const handleOnStart = (prefs) => {
  console.log("on start in background", prefs);
  chrome.storage.local.set(prefs);
};
