
// ==UserScript==
// @name         April Fools Minecraft Commands Allies
// @namespace    http://tampermonkey.net/
// @version      3.21
// @description  Keep the canvas beautiful!
// @author       Adapted by u/jan00bl for Minecraft Commands, Original author oralekin from osu! /r/osuplace
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/jan00bl/MinecraftCommandsPlaceOverlay/raw/main/script.user.js
// @downloadURL  https://github.com/jan00bl/MinecraftCommandsPlaceOverlay/raw/main/script.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/jan00bl/MinecraftCommandsPlaceOverlay/57b6bb483db88133e4e62ff54f768794980a362b/commands_place.png";
            i.style = "position: absolute;left: 0px;top: 0px;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
