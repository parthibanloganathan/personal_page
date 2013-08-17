---
title: Winning the Facebook Hackathon
date: 2013-08-04
layout: post
---

My friends and I recently won first place at Facebook Summer of Hack 2013 hosted by Facebook NYC. We made a chrome extension to interactively teach users a foreign language by dynamically replacing words and sentences while they browse the web. It also supports various difficulty levels and text-to-speech in native voices. The night went by in a blur of coding and Gatorade, but here are a few highlights:

+ We spent 4 hours deciding on an idea while everyone else had already started coding.
+ I spent way too much time figuring out how to effectively parse and replace the DOM. I ended up probabilistically choosing &#60;p&#62; elements to modify and then taking the weighted probability of words/sentences depending on length of the text.
+ We discovered that the Google Translate API wasn't free, so we used Bing instead. We had trouble generating an access token for Microsoft's API from the client side, so we found a deprecated (but still active) access token which someone posted on Stack Overflow. (Best moment of the night!)
+ One of my teammates force pushed to the git repository, deleting an hour's worth of commits.
+ Google Translate's text-to-speech API had a 100 character limit, so we demoed the feature on Twitter where most posts were under 100 characters long. Sneaky.
+ One of my teammates had his birthday on the same day that we won. Talk about a great birthday present.  
  
Hopefully, we will release this extension on the Chrome Web Store in the near future. We have to make the extension scalable and rectify all the hacks we made.  
  
<img src="/img/facebook_hackathon.jpg" class="img-thumbnail" style="width: 400px; margin: 20px auto 20px auto; display: block;"/>  
  
Check out Facebook's coverage on the hackathon at [Facebook Engineering NYC](https://www.facebook.com/media/set/?set=a.554286037965737.1073741830.248745975186413&type=1).
