---
title: How to Run Vim with Minimal Settings
tags:
- vim
---

Sometimes I just need to run a very simple version of vim to check something out, to test for a bug in Neovim, [to make an animated gif](../how-to-create-vim-animated-gif/), or maybe to pair program with someone who doesn't know all of the customizations I have in my vimrc. So, here is a simple method of running a very simple version of vim without messing up all of your customizations.

## Create Essential Vimrc

Create `essential.vim` and save it in your `~/.vim` directory. It will only contain the bare minimum you need for the gif:

```bash
set nocompatible
filetype plugin on

syntax on
set background=dark
let g:solarized_termcolors=256
colorscheme solarized
set tabstop=2 softtabstop=2 shiftwidth=2 expandtab
```

Then you can run vim with this basic configuration by running `vim -u ~/.vim/essential.vim`

Or you can also set an alias to easily open vim with this configuration. Just put something like this in your `.bashrc` or `.zshrc` file. Now when I run `vi` instead of vim, it will run vim with the `essential.vim` configuration.

```bash
alias vi='vim -u ~/.vim/essential.vim'
```

You could also make multiple vimrc files for different purposes if you wanted.
