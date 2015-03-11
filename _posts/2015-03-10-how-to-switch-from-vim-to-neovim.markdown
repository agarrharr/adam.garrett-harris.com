---
layout: post
title: How to Switch from Vim to Neovim
categories:
- vim
tags: []
type: post
published: true
comments: true
---

I just switched over from vim to neovim, and it's really easy, in fact it's actually so easy that you can fit it in a [tweet](https://twitter.com/adamCoder/status/575067310123147264), but I wanted to explain the steps I took to switch over.

You can read more about Neovim at the following links:

* [Differences from Vim](https://github.com/neovim/neovim/wiki/Differences-from-vim)
* [NeoVim vs. Vim](http://usevim.com/2015/01/16/neovim-better/)
* [Why Neovim is Better than Vim](http://geoff.greer.fm/2015/01/15/why-neovim-is-better-than-vim/)

All you have to do is:

{% highlight bash %}
brew tap neovim/homebrew-neovim
brew install --HEAD neovim
cp -rf ~/.vim ~/.nvim
cp ~/.vimrc ~/.nvimrc
{% endhighlight %}

But since I have [my dotfiles version controlled](https://github.com/aharris88/dotfiles), I had to do this slightly differently:

{% highlight bash %}
brew tap neovim/homebrew-neovim
brew install --HEAD neovim
cp -rf ~/dotfiles/vim ~/dotfiles/nvim
cp ~/dotfiles/vim/vimrc ~/dotfiles/nvim/nvimrc
{% endhighlight %}

Then I had to go into my `setup.sh` and add nvim and nvimrc to the files variable:

{% highlight bash %}
files="bin config editorconfig gitconfig gitignore hushlogin oh-my-zsh mutt muttrc nvim nvimrc tmux tmux.conf ttytterrc vim vimrc zshrc zlogin"
{% endhighlight %}

Then I ran my setup script to create the symlinks:

{% highlight bash %}
./setup.py
{% endhighlight %}

Then to launch Neovim, just run:

{% highlight bash %}
nvim
{% endhighlight %}

Also, you can remove `set nocompatible` from your `.nvimrc` because Neovim is always set to nocompatible.
