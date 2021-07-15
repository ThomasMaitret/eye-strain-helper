// eslint-disable-next-line unicorn/prefer-module
"use strict";

const twenty_minutes_in_ms = 20 * 60 * 1000;

setInterval(() => {
  chrome.notifications.create({
    type: "basic",
    title: "Fais une pause chef !",
    message: "Repose un peu tes yeux",
    iconUrl: "icon.png",
  });
}, twenty_minutes_in_ms);
