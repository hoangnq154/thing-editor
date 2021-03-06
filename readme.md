# Thing-editor

Visual game editor for pixi.js 4.

![Editor screenshot](https://raw.githubusercontent.com/wiki/Megabyteceer/thing-editor/img/full-editor.jpg)

Project in experimental **beta-version**.

## Installation

Please check if you have latest **nodejs**, **npm**, **chrome**, and **ffmpeg** on your computer, **before installlation**.
Use next script to install editor and example project.
After succesfull installation editor should start automaticly as chrome page.
To start editor manually use **npm start** in **thing-editor** folder

```

mkdir game_editor_here
cd game_editor_here
git clone https://github.com/Megabyteceer/thing-editor.git
git clone https://github.com/Megabyteceer/thing-engine.git
git clone https://github.com/Megabyteceer/thing-project-example.git games/thing-project-example
cd thing-engine
npm i
cd ../thing-editor
npm i
npm start

```

## What is ready:
 - Scene tree editor (no drag and drop yet);
 - Property editor;
 - MovieClip component with physic-based timeline;
 - Portrait/landscape switching;
 - multilanguage text;
 - build project as release folder;
 - load custom user components form project's js folder
 - postponed resources loading for each scene

## What is need to do:
 - atlases packing for projects created in thing-editor.
 - drag and drop for "scene-tree" and "classes list"
 - examples and documentation
 
### How it is works:
Editor uses nodejs as local server to access project's filesystem, and chrome as UI.

Documentation is coming-soon. Use example project to understand beginigs.
Use double click on component in scene tree - to open component's source file to view and edit.
Work still in progress.

## Sponsored:

[![BGaming](https://www.bgaming.com/img/b-gaming-logo-color.svg)](https://www.bgaming.com/)


### Projects made with thing-engine
 - [Zombie Hunters](http://zh.pixel-cave.com)
 - [Handless Millionaire](http://hm.pixel-cave.com)

### Documentation
For detailed documentation please check our [Wiki](https://github.com/Megabyteceer/thing-editor/wiki).