# Userscripts

## Invidious Chapters

1. Install [invidious-chapters.user.js](https://raw.githubusercontent.com/Elcaten/userscripts/refs/heads/main/invidious-chapters.user.js) with Violentmonkey.
2. Open the script's settings in the Violentmonkey dashboard.
3. Add your Invidious instance as a custom match/include rule, for example `https://inv.myvps.com/*`.

The script's built-in match uses the reserved `example.invalid` domain, so it does not run on any site until a custom rule is added. Violentmonkey stores custom rules separately and preserves them when the script updates.

The Chapters control parses timestamped lines in the video description, such as `0:00 Intro` or `1:07 First topic`. Selecting a chapter seeks the video to its timestamp.
