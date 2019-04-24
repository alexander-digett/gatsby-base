---
title: 'How Google Calculates AdWords Quality Score'
templateKey: blog-post
date: 2013-11-22T15:05:55.000Z
category: 
  -Analytics, SEM and SEO
alias: how-google-calculates-adwords-quality-score
summary: > 
 The almighty Quality Score. The number that means nothing and everything all at the same time. It balances the interests of advertisers, Google, and the user. On the surface, it seems far too complicated. But armed with the basics, you’ll have enough to perform well.
author: Wes Mills
image: /assets/how-google-calculates-adwords-quality-score.png
---

The almighty Quality Score. The number that means nothing and everything all at the same time. It balances the interests of advertisers, Google, and the user. On the surface, it seems far too complicated. But armed with the basics, you’ll have enough to perform well.

Quality Score matters
---------------------

Before I delve in to the factors that go into calculating Quality Scores, it’s important to understand what exactly Quality Score influences.

**Eligibility -** This is the building block of AdWords success. If your ad doesn’t have a high Quality Score and isn’t eligible to show, then nothing else matters.

**Position -** Once your ad is eligible to show, Google has to determine where your ad will show on the results page, relative to other advertisers (Ad Rank). Until recently, Ad Rank was calculated by multiplying your Quality Score by your max cost-per-click. Now, Ad Rank is determined by your bid, Quality Score, and ad extensions.

**Extensions -** Ad extensions don’t show on every ad. In most auctions, ad extensions will show on the top three positions. Because Quality Score can impact your Ad Rank, it also impacts your ad’s ability to show extensions.

**Price -** This is arguably the most important thing Quality Score can have an effect on because the lower prices are, the easier a positive return on your investment is. The higher your Quality Score, the less you’ll have to pay for your ad’s position.

**Top Slot -** The top spot is only reserved for those ads with a high Quality Score. Even if you have an incredibly high cost-per-click, you won’t be getting in the top slot without a high Quality Score. Google will show another ad with a higher Quality Score and a lower cost-per-click.

**Dynamic Keyword Insertion -** Dynamic keyword insertion is a tool Google gives advertisers that allows the headline of an ad to become whatever keyword the user searched for. For example, if I search for _purple widgets_, this will become the headline of an ad that has the dynamic keyword insertion tool. Generally speaking, these ads have a higher click-through rate because they appear to be more relevant. If a keyword has a low Quality Score, Google won’t put that keyword in the ad, and will use your other ad group ads instead.

To sum that up a bit, Quality Score has an impact on nearly everything in your AdWords account. The higher Quality Score your keywords have, the better your account performance will be.

Now let's look and see how Google comes up with this number.

The Quality Score calculation
-----------------------------

Quality Score is calculated from three main factors. While these are in order from importance, it’s anyone’s best guess on the exact numbers.

1.  Click-through rate
2.  Ad relevancy
3.  Landing page

**Click-through rate** is undoubtedly the most important factor in determining a Quality Score. This makes perfect sense from Google’s standpoint because they only want to show ads that people will likely click on (it’s how they make money). [This is also normalized for your ad's position, too](http://searchengineland.com/what-the-heck-is-adwords-quality-score-169320). This means if your ad is in a lower position but has a higher click-through rate, it will impact your Quality Score much more than it would if you were in one of the top spots. Adversely, if your ad is in a top position but has a poor click-through rate, this will bring down your Quality Score much more than if it was in a lower position.

**Ad relevancy** is the easiest of the three to control. When writing ad copy, I always try to insert keywords into the headline and the body. Not only does this make the ad more relevant, but Google will also bold these keywords when the user searches on them. When you have a low Quality Score but a decent click-through rate, altering your ad copy will likely increase your Quality Score.

Your **landing page** will also be a factor in determining your Quality Score. The way Google looks at your landing page goes beyond keywords and relevant text on your page. Google also looks at the user’s behavior on that page, too. If your landing page has a high bounce rate, Google will interpret this as a landing page that isn’t relevant — thus negatively impacting your Quality Score.

After Google looks at all of this and runs it through their algorithm, you’re given a Quality Score of one to 10, 10 being the highest and one being the lowest. Generally speaking, an average Quality Score is 7/10.

Quality Score means everything and nothing at the same time
-----------------------------------------------------------

A lot of advertisers look at their Quality Score as one of their key performance indicators (KPI). But if you’ve noticed from reading above, the calculation of the Quality Score seems somewhat paradoxical. Account performance determines the Quality Score, while the Quality Score determines account performance. Confusing, right?

While I do think Quality Score is an important metric, it’s not something that I would spend time into analyzing as a KPI. Instead, focus on the more meaningful metrics like click-through rate, search impression share, conversion metrics, average cost-per-click, and so on.

(It’s important to note that the Quality Score you see in your account is only an approximation. Also, no matter the date range you define, that is the Quality Score for your keyword at the current point in time. There is no historical tracking of Quality Score through AdWords.)

Why am I advocating spending less time focusing on your Quality Score and more time on the above metrics? Because in essence, those metrics make up your Quality Score — especially your click-through rate. By trying to improve your click-through rate, you’re working to improve your Quality Score at the same time. If you have a solid grasp on AdWords best practices and implement them correctly, your Quality Score shouldn’t be anything below average.

Common Quality Score questions and answers
------------------------------------------

Hopefully the above rhetoric didn’t confuse you in your quest to understand the mysterious Quality Score. But just in case it did, here are some common questions and answers that may elucidate things a bit better.

_**How is Quality Score calculated for new accounts?**_

Because new accounts have no previous performance metrics to look at, Google will look at the historical metrics from other advertisers who have bid on that keyword.

_**Do conversions play a role in determining Quality Score?**_

The answer here is no. Because conversions are user defined, they’re too easy to fabricate. If conversions were used in determining Quality Score, many advertisers would likely inflate their own Quality Scores.

_**Does campaign or ad group performance have an effect on Quality Score?**_

No, Google doesn’t look at any other part of your account to determine Quality Score other than the keyword.

_**How is Quality Score determined for different keyword match types (broad, phrase, exact, etc.)?**_

No matter the match type, the Quality Score is only calculated when the keyword match is exact. So for instance, if you have a broad match keyword of _purple shirt_, Quality Score is calculated only when the user’s search query is _purple shirt_.

_**Can Quality Score be tracked over time?**_

Yes, but not directly through AdWords. The most common way is to [use a use a script to do it for you](http://www.ppc-epiphany.com/2012/08/14/an-adwords-script-to-track-quality-scores/). I have that set up because it’s nice to track, but the metric isn’t actionable. Tracking the other metrics I mentioned above is a better use of time.

_**Do other accounts in MCC (My Client Center) have any effect on Quality Scores?**_

Other accounts in your MCC have no bearing whatsoever on each other’s Quality Scores. So if you take on a new client that has had poor account performance, don’t worry.

_**Is having the same keyword with different match types bad for Quality Score?**_

This has been asked probably more than the others above, and the answer could be its own blog post. Simply put, if you use the different match types correctly and have a thorough understanding of different match types, then no. Take some time and [read about different match types](https://support.google.com/adwords/answer/2497828?hl=en&ref_topic=3122868) and be smart about how you implement them. You may find that if you have a tight control on your keywords, you don’t have to use multiple match types. Every account is different.

Be successful with PPC
----------------------

If you’re just getting into the world of pay-per-click advertising, or having trouble getting your account in tip-top shape, let Digett help! We help businesses of all sizes get the most out of PPC. **So feel free to [contact us today for a free consultation](/website-consultation) to get started!**

_\[Image: [Joao Trindade](http://www.flickr.com/photos/joao_trindade/)\] _