---
title: How to Switch from Vundle to vim-plug
tags:
- vim
---

I just switched over from vundle to [vim-plug](https://github.com/junegunn/vim-plug). Part of the reason why is because I'm now trying out [Neovim](http://neovim.org/), which allows for asynchronous plugins, and vim-plug supports installing plugins ascynchronously. Another reason is that it supports post-update hooks, which means that I can install [YouCompleteMe](http://valloric.github.io/YouCompleteMe/), without having to manually go and run the install script after installing it.

Here's what I did.

## Install vim-plug.

```bash
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

## Update vimrc

Then update your `.vimrc` by removing the old vundle stuff:

```bash
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'gmarik/Vundle.vim'

" Plugins go here

call vundle#end()
filetype plugin indent on
```

And add the vim-plug stuff before and after your list of plugins:

```bash
call plug#begin('~/.vim/plugged')

" Plugins go here

call plug#end()
```

Then change all the Plugins from `Plugin` to `Plug`:

```bash
call plug#begin('~/.vim/plugged')

Plug 'junegunn/seoul256.vim'
Plug 'junegunn/vim-easy-align'

call plug#end()
```

## Add Post-Update Hooks

If you have plugins (like YouCompleteMe), you can add a post-update hook to run any additional commands after they install.

```bash
function! BuildYCM(info)
  if a:info.status == 'installed' || a:info.force
    !./install.sh
  endif
endfunction
Plug 'Valloric/YouCompleteMe', { 'do': function('BuildYCM') }
```

This is what I have for Tern:

```bash
function! BuildTern(info)
  if a:info.status == 'installed' || a:info.force
    !npm install
  endif
endfunction
Plug 'marijnh/tern_for_vim', { 'do': function('BuildTern') }
```

And this is what I have for syntastic, since it requires jshint:

```bash
function! Installjshint(info)
  if a:info.status == 'installed' || a:info.force
    !npm install -g jshint
  endif
endfunction
Plug 'scrooloose/syntastic', { 'do': function('Installjshint') }
```

## Install Plugins

Open vim and run `:PlugInstall`

## Remove Vundle Plugins

You can remove the plugins installed with vundle, which are in the bundle directory, since vim-plug installs them in the plugged directory.

```bash
rm -rf ~/.vim/bundle
```

## Update gitmodules

If you get a message saying that you have modified content, you can update your `.gitmodules` file to ignore them.

```bash
[submodule "nvim/plugged/YouCompleteMe"]
	path = nvim/plugged/YouCompleteMe
 	url = https://github.com/Valloric/YouCompleteMe
 	ignore = dirty
```
