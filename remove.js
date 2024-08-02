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
        var tabs = document.querySelectorAll('a.rbx-tab-heading span.text-lead.ng-binding');
        tabs.forEach(function(tab) {
            if (tab.textContent.trim() === 'Events') {
                tab.closest('a.rbx-tab-heading').remove();
                console.log('Removed Events tab');
            }
        });
    }

    window.addEventListener('load', function() {
        removeEventsTab();

        var observer = new MutationObserver(function(mutations) {
            removeEventsTab();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
})();
