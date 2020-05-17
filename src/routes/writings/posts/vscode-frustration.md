---
title: VSCode frustration to VSCode love ♥
summary: Was not happy with VSCode themes, so made my own !
date: 2019-06-22
---

# The frustration 😖

This story starts in your (at least mine) favorite code editor: VSCode.
What's great about VSCode is all the tools available to the community to enable you to make your code editor like your own little bubble.

✨ You can download a tons of **extensions**, add **snippets**, change the layout and of course, change the **theme** ! ✨

So here was my VSCode:
![vscode before](/posts/vscode-frustration/um2y9r4qyg2rgo0r7bqc.png)

I used Material Theme Palenight High Contrast, really loved the colors but I had one problem:
Highlight selection was hard to see, when I wanted to quickly select a typo or change a name, I quickly selected the entire word and got frustrated from it.

Here is it while selecting 'commander' on line 15 with Material Theme Palenight High Contrast:
![selecting commander](/posts/vscode-frustration/highlight-before.png)

Here is it while selecting 'ander' on line 15 with Material Theme Palenight High Contrast:
![selecting ander](/posts/vscode-frustration/highlight-before-ander.png)


As you can "see", the difference is very low and it's hard to notice what you are currently selecting. 🧐

To avoid this, I switched to the High Contrast theme built in VSCode and I know, you might criticize it and saying that your design eyes are bleeding but hey, at least I now can see what I was selecting.

Here is it while selecting 'commander' on line 15 with the High Contrast Theme:
![HC Theme selecting commander](/posts/vscode-frustration/hc-commander.png)

Here is it while selecting 'ander' on line 15 with the High Contrast Theme:
![HC Theme selecting ander](/posts/vscode-frustration/hc-ander.png)

After a while, you are accustomed to the theme and your eyes stop bleeding don't worry. 🤩

But what I mainly noticed, was that the High Contrast was very well made to avoid visual conflicts.

# The research 💻

I had my highlight issue fixed but colors where not really my taste. So I looked on the marketplace for a nice theme with a great highlight contrast but couldn't find one that fit my taste.

Instead, I found an article from [Sarah Drasner](https://twitter.com/sarah_edo) on how to [create a VS Code theme](https://css-tricks.com/creating-a-vs-code-theme/).

Loved this article and so I decided to make my own theme: a nice looking High Contrast Theme.

So first I had some issues to register as a developer on the Azure DevOps platform.

So maybe it took me more 20-30 minutes to understand what I needed instead of 5-10min but here I am now, I can publish on it. ⏱

So if you follow the css-tricks article, you easely find how to generate a theme template and start to create.
Also, the VS Code documentation is really well made to customize everything and you can inspect VSCode like a browser, because it's just an Electron app ! 👌

I wanted my theme High Contrast and I picked the colors on [colorsafe.com](http://colorsafe.co/) to have AAA level colors on WCAG Standard. Only one was AA level to make my theme prettier.

So here is it: **Save Eyes HC Theme**  👁!
![Save Eyes HC Theme](/posts/vscode-frustration/save-eyes-theme.png)

You can find it here on the marketplace: [Save Eyes HC Theme](https://marketplace.visualstudio.com/items?itemName=alexlab.save-eyes-hc).

And of course, you can see what you are selecting ! 🔥

Here is it while selecting 'commander' on line 15 with the Save Eyes HC Theme:
![Save Eyes HC Theme selecting commander](/posts/vscode-frustration/save-eyes-commander.png)

Here is it while selecting 'ander' on line 15 with the Save Eyes HC Theme:
![Save Eyes HC Theme selecting ander](/posts/vscode-frustration/save-eyes-ander.png)

# The light theme 💡

On a slack channel of my company, I saw a link about the [dark side of dark mode](https://tidbits.com/2019/05/31/the-dark-side-of-dark-mode/) where tldr; was: for most of us light themes are better

Well, I made one and use it now everyday and it's awesome !

Here is a little preview:
![Save Eyes Light](/posts/vscode-frustration/save-eyes-light.png)

Of course it's on the marketplace: [Save Eyes Light](https://marketplace.visualstudio.com/items?itemName=alexlab.save-eyes-light)  👁

# Contribute 💪

Of course a theme is made to be used, improved for the needs.

If you use it, you may encounter issues in specific cases I didn't encounter so **I would love an issue** so I can fix it, or maybe you know want to tackle it a **made a PR** !

All repos are available in the theme page on the marketplace !

And yes, also if you don't like it, I would love to hear why so maybe I can make *the theme of your dreams* :)

**Happy coding VSCode friends !** 💻✨
