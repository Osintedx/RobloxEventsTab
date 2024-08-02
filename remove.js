// ==UserScript==
// @name         Remove Roblox Events Tab
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Remove the "Events" tab from the Roblox website
// @author       Osintedx
// @match        https://www.roblox.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeEventsTab() {
        const tabs = document.querySelectorAll('a.rbx-tab-heading span.text-lead.ng-binding');
        tabs.forEach(tab => {
            if (tab.textContent.trim() === 'Events') {
                tab.closest('a.rbx-tab-heading').remove();
                console.log('%cRemoved Events tab', 'font-size: 20px; color: red; font-weight: bold;');
            }
        });
    }

    window.addEventListener('load', () => {
        removeEventsTab();

        const observer = new MutationObserver(() => {
            removeEventsTab();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
})();
