// ==UserScript==
// @name         iTa'LeEm
// @version      1.0
// @description  iTa'leem Dark Mode
// @author       ammh
// @match        https://italeemc.iium.edu.my/*
// @icon         https://i.imgur.com/apmcjmQ.png
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function(html) {

})();

(function(jquery) {
    $("a[role='menuitem']").attr('id', 'idhover')
    $('table[class="table table-hover"]').attr('class', 'table')
    $('img[class="user-image"]').remove()
    $('#section-0').attr('id', '')
    $('h4[class="sectionname"]').attr('class', '')
    $('.navbar-brand-logo').attr('src', 'https://i.imgur.com/DlWonkC.png')
    $('.img-fluid').attr('src', 'https://i.imgur.com/DlWonkC.png')
})();

(function(css) {
    GM_addStyle("body { cursor: default !important; }")
    GM_addStyle("#page { background: url(https://i.imgur.com/Rl0Clag.png) repeat center }")
    GM_addStyle(".p-3, #page-footer, .course-summaryitem, .fp-filename, .moodle-dialogue-base, .moodle-dialogue-wrap, legend, .dropdown-toggle, .navbar-brand, .panel, .navbar-options, .btn, .dropdown-menu, .dropdown-item, .nav-tabs, .list-group-item, .calendar_event_course, .popover-header, .popover-region-footer-container, [data-region=drawer], .bg-light, select, .overlay-icon-container, modal-header, th, [data-region=blocks-column], .alert-info  { color: white !important; background: #161616 !important; border: none !important; outline: none !important; transition: 0.3s !important; }")
    GM_addStyle("h1, li, a, strong, h3, th, td, h2, b, h4, label, p, h5, h6 { color: white !important; font-weight: 500 !important; }")
    GM_addStyle(".block-region, .popover-body, .content, #site-news-forum  { box-shadow: 1px 2px 5px #040404 !important; background-color: #242424 !important; border: none !important; outline: none !important; }")
    GM_addStyle("p[style='color:#de0e0e'], font { color: #ff8989 !important; font-weight: 500 !important; }")
    GM_addStyle(".with-border, th, td { border-bottom: 1px solid #8f8f8f !important; }")
    GM_addStyle("#idhover:hover, .btn:hover, .form-control:hover { background: #090909 !important; transition: 0.3s !important; }")
    GM_addStyle(".small-box { box-shadow: 1px 2px 5px #040404 !important; }")
    GM_addStyle(".form-control { color: white !important; background-color: #484848 !important; outline: none !important; border: none !important; transition: 0.3s; }")
    GM_addStyle('img[class="img-circle"] { height: 80px !important; width: 60px !important; border-radius: 25% !important; }')
    GM_addStyle('a[data-toggle="tab"], .modal-content, .card, .card-img-top, .w-100, .bg-white, .message-app, .modal-body, .modal-footer, .modal-header, .card-item, .popover-region-content-container, .popover-region-container, .card-block, .card-footer  { background-color: #242424 !important; border: none !important; }')
    GM_addStyle('div, .dimmed_text, span, .closebutton { color: white !important }')
    GM_addStyle('td, .fcontainer, .preference-table, .qtext { background: #404040 !important; border: none !important; }')
    GM_addStyle(".forumpost { border: none !important; outline: none !important; }")
    GM_addStyle(".outcome { background-color: #4a4a4a !important; }")

    GM_addStyle('.panel { left: 50px !important; }')
    GM_addStyle('.slick-next, .slick-prev { filter: brightness(2) !important; }')
    })()
