---
title: 'Dealing With Query Overload in Drupal'
templateKey: blog-post
date: 2008-10-03T14:13:23.000Z
category: 
  -Development, Drupal, Tools of the Trade
alias: dealing-query-overload-drupal
summary: > 
 So, you've got 10-20 Drupal sites under your belt and are feeling pretty good about how far you've come in your ability to leverage the Drupal content management system. You're even helping newbies out on the support forums on drupal.org, whistling to the tune of "It's a wonderful day in the neighborhood" and "Won't you be my neighbor" all the while. You're a viable, competent part of the community, and life is good.
author: Luke
image: /assets/drupal.jpg
---

So, you've got 10-20 [Drupal](http://www.drupal.org) sites under your belt and are feeling pretty good about how far you've come in your ability to leverage the Drupal content management system. You're even helping newbies out on the support forums on drupal.org, whistling to the tune of "It's a wonderful day in the neighborhood" and "Won't you be my neighbor" all the while. You're a viable, competent part of the community, and life is good.

Then the phone rings. Someone is complaining that their site is crawling. You finish the call, and before you can look into the matter, the phone rings again. It's another client, and their site is crawling. Another calls, but this time their site is totally down.

Your stomach is in knots as you confirm that, yes, all sites hosted on that particular server are very slow or inaccessible.

What went wrong?

Well, if you're like me, it isn't the way you write and use database queries, because you carefully craft each query with thoughtful consideration as to the scalability and efficiency of what you are writing. You then load test your applications to ensure they perform great under worse-than-expected conditions. The best practices of our industry are a lighthouse unto you, serving to guide you away from the sharp, jagged rocks of slipshod coding, against which you might otherwise find yourself bashed.

Otherwise, it is very possible that some of your sites are suffering from bloated database usage due to writing inconsiderate queries and lacing them heavily throughout your site. This can be upsetting to even think about. Let's focus on identifying where the problems are and what solutions are available to us.

To aid with digestion, I will break down possible problem areas into two categories. I'll touch on the first in this blog post, and finish up with a follow-up blog post next week which will address the second item.

### Code You Didn't Write

Anytime you install a module, additional overhead is introduced. Take the [Views](http://drupal.org/project/views) module, for example. Views is a very powerful and useful module, as it allows you to write queries using its convenient and intuitive interface to presents lists of content in a variety of ways.

I recently looked at a Drupal 5 site's query log using the [devel](http://drupal.org/project/devel) module and saw there were about 300 queries running on the home page. There were two views on that page: one that randomly featured an article in the main content area, and another that created a list of three or four products in another spot on the page.

I disabled the Views module, and the query count went down to less than 200. Some of those weren't directly Views related, but I could see based on what the query log showed that many of them were.

Think about it. Views has to query the database just to extract the query, which it then has to run as another query. In many cases, the various features provided by the Views module make its overhead well worthwhile—but this was not one of those cases. I could have gotten the  
same results in 2-3 queries if I had written it myself. Absorbing around 100 queries from a module to save yourself writing two queries and a little bit of code is not a trade off you want to habitually make.

I love the Views module. It is enormously popular and enjoys almost universal renown amongst the Drupal community, and that makes it a good example to use here. Like many popular modules, it is very useful and has its place, but should only be used appropriately and with full knowledge of its benefits vs. its cost-of-use. Make the effort to identify the impact of each module you employ (the devel module is great for viewing query overhead, processing time and php memory usage) and test its effects on scalability (with something like [JMeter](http://jakarta.apache.org/jmeter/)) before committing yourself to that approach.

Do not simply slap on resource-intensive-contributed module after resource-intensive-contributed module every time you have a problem you need to solve. Doing that will quickly result in a bloated site that may not function well once it has many nodes and users. When it's "Go Time" and the site can't handle a spike in traffic, your client most likely won't be interested in how well the site ran on your pristine staging server with three nodes and two test users.

Next week we'll get into the really fun stuff by covering "Code You Did Write." We'll be taking a look at some code and query examples, and I'll present several valuable tips on more efficient database usage. We'll even delve into some good, ol' fashion runtime analysis! See you then!