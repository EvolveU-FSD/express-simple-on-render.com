# README

This is the web service used by the ***Intro to HTTP*** session for InceptionU

The app in this repo is deployed at [https://evolveu-fsd-express-simple-on-render-com.onrender.com/](https://evolveu-fsd-express-simple-on-render-com.onrender.com/).

It supports simple GET and POST pages, allowing the students to inspect the Request and Response values from both methods.

## To Deploy

1. Edit the project as appropriate (likely just editing `app.js`)
1. Go to the [deployment page](https://dashboard.render.com/web/srv-cd36elmn6mpqnrgh1os0/deploys/dep-cd37r6o2i3mvvgcgmojg)
1. Manual Deploy >> Deploy a specific commit >> (paste the commit SHA for the commit in the InceptionU repo that has your desired changes)
1. Wait for the deploy to complete (5-10 minutes)
1. Test your changes at the [published URL](https://evolveu-fsd-express-simple-on-render-com.onrender.com/)

NOTE: currently there seems to be some type of load balancing/caching issue.  I am getting errors every 2nd or 3rd attempt to use the newly deployed code, with complaints being about missing functions (that are actually checked in).  Simply refreshing or trying the HTTP call again seems to return proper results.
