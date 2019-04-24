---
title: 'Building forms with cck, actions and workflow'
templateKey: blog-post
date: 2007-07-03T05:00:00.000Z
category: 
  -Development, Drupal, Tools of the Trade
alias: building-forms-cck-actions-and-workflow
summary: > 
 We just finished building a simple form application for a client. Previously we have been big fans of webform.module, but this time we decided to go another route. After seeing some posts around drupal.org about using a combination of cck, actions and workflow to accomplish some of this same functionality, I decided to give it a shot.
author: Digett
image: /assets/post-placeholder.png
---

We just finished building a simple form application for a client. Previously we have been big fans of [webform.module](http://drupal.org/project/webform), but this time we decided to go another route. After seeing some posts around drupal.org about using a combination of cck, actions and workflow to accomplish some of this same functionality, I decided to give it a shot.

First some background on what we're trying to accomplish. Users should be able to create an account, login and create a new application. The user should be able to update and save this application without actually submitting it. Once the user decides to submit the application, an email should be sent to a specified email address and the user shouldn't be able to edit it after this point. Then the reviewer should be able to see these submissions and mark them as reviewed. No one but admins and reviewers should be able to see any one else's application at any point.

Here is a break down of what I did to accomplish it.

First I created a new content type named Application. I set the default settings for this type to be unpublished by default and also to create new revisions. I then proceeded to create all the necessary fields (about a million of them!). This seemed much easier than webform's way of creating fields. More than once have I created a bunch of fields on a webform and then mistakenly hit the back button or clicked an errant link without submitting the webform node form, and subsequently lost all my work.

I then noticed that I really had no use for the title and body fields. Simple enough. I removed the body field from the content type settings page. For the title, i used a nifty little module called [auto\_nodetitle](http://drupal.org/project/auto_nodetitle) to give titles a default value and hide the title field. The title I used was "Application for \[username\]", using \[username\] to insert the name of the current user. If the [token](http://drupal.org/project/token) module is installed, then you can use many different tokens in your replacement title. Pretty cool.

Next up.. Actions and Workflow. I installed and enabled [actions](http://drupal.org/project/actions), [workflow](http://drupal.org/project/workflow) and workflow access (included in the workflow package) modules. I started off by creating a few simple actions (admin/build/actions), one to send an email, one to display a "Saved" message to the user and one to display a "Submitted" message to the user.

Then I created a workflow (admin/build/workflow) called Application Submission, set my Application content type to use this workflow and added 3 states (Saved, Submitted, Reviewed). The allowed transitions were (creation)->saved, (creation)->submitted, saved->submitted for authors, and submitted->reviewed for the reviewers role. I then hooked up the actions I created earlier to these transitions. The saved message was attached to the (creation)->saved transition, the submitted message to the Saved->Submitted transition, and the email action also to the saved->submitted transition.

Next up was workflow actions. First off, this module is awesome! It allows you to set up access control to nodes based on workflow states. I allowed node authors (form submitters) to view their applications in the saved and submitted states, edit only in the saved state and never delete. I allowed the reviewer role to view applications in submitted and review state, but only edit in the submitted state. I also disallowed regular users from viewing/editing any applications but their own.

The last thing I did, was to enable the [bio](http://drupal.org/project/bio) module. This module lets you specify a content type as a user's "bio". What this actually means is that each user can have only 1 node of the specified content type. I wanted each user to only be able to create a single application, and be able to get back to edit that application easily.

I also created a view for the reviewers to easily see a list of all outstanding applications. This was simply a table view with workflow state, node title, modified time, and edit link for fields. I used node type and workflow state as filters and exposed the workflow state filter so the reviewers could do their own filtering.

So without writing any code, I was able to create this somewhat advanced form functionality. I did end up writing some code, basically to theme the form and node pages to look more appropriate. Thanks to the authors of all these wonderful modules for making my work easier.