---
date: "2015-08-21"
title: "Dead or Finished Libraries?"
excerptQuote:
  name: "Mark Jason Dominus"
  quote: "People seem to think that all software requires new features or frequent bug fixes. Apparently, the idea of software that doesn't get updated because it's finished is inconceivable."
---

[Twelve Views of Mark Jason Dominus](http://perl.plover.com/yak/12views/samples/notes.html):

> I released the Text::Template module several years ago, and it was immediately very successful. It's small, simple, fast, and it does a lot of things well. At the time, there were not yet 29 templating systems available on CPAN.
>
> Anyway, the module quickly stabilized. I would get bug reports, and they would turn out to be bugs in the module's users, not in the module; I would get feature requests, and usually it turned out that what the requester wanted was possible, or even easy, without any changes to the module. Since the module was perfect, there was no need to upload new versions of it to CPAN.
>
> But then I started to get disturbing emails. "Hi, I notice you have not updated Text::Template for nine months. Are you still maintaining it?" "Hi, I notice you seem to have stopped work on Text::Template. Have you decided to abandon this approach?" "Hi, I was thinking of using Text::Template, but I saw it wasn't being maintained any more, so I decided to use Junk::CrappyTemplate, because I need wanted to be sure of getting support for it."
>
> I started wondering if maybe the thing to do was to release a new version of Text::Template every month, with no changes, but with an incremented version number. Of course, that's ridiculous. But it seems that people assume that if you don't update the module every month, it must be dead. People seem to think that all software requires new features or frequent bug fixes. Apparently, the idea of software that doesn't get updated because it's finished is inconceivable.
>
> I blame Microsoft.

I must confess that I tend to look at the date of the last commit when I choose a library over another (along with other metrics, hopefully).

Well, I also think that a "perfect library" might not exist, but the author is making a really good point in his talk.

(via [What if we had more finished libraries?](http://www.drmaciver.com/2015/08/what-if-we-had-more-finished-libraries/))
