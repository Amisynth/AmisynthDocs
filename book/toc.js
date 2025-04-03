// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="prefacio.html">Prefacio</a></li><li class="chapter-item expanded affix "><a href="cambios.html">Cambios</a></li><li class="chapter-item expanded affix "><a href="terminos.html">Términos de servicio</a></li><li class="chapter-item expanded "><a href="guias.html"><strong aria-hidden="true">1.</strong> Guías</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Introduccion/intro.html"><strong aria-hidden="true">1.1.</strong> Introducción</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Introduccion/comenzar.html"><strong aria-hidden="true">1.1.1.</strong> Comenzar</a></li><li class="chapter-item expanded "><a href="Introduccion/tipos.html"><strong aria-hidden="true">1.1.2.</strong> Tipos de usos</a></li></ol></li><li class="chapter-item expanded "><a href="General/general.html"><strong aria-hidden="true">1.2.</strong> General</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="General/divicion-texto.html"><strong aria-hidden="true">1.2.1.</strong> División de Texto</a></li><li class="chapter-item expanded "><a href="General/json-funciones.html"><strong aria-hidden="true">1.2.2.</strong> JSON Funciones</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="funciones/index.html"><strong aria-hidden="true">2.</strong> Funciones</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="funciones/addButton.html"><strong aria-hidden="true">2.1.</strong> $addButton[]</a></li><li class="chapter-item expanded "><a href="funciones/addField.html"><strong aria-hidden="true">2.2.</strong> $addField[]</a></li><li class="chapter-item expanded "><a href="funciones/title.html"><strong aria-hidden="true">2.3.</strong> $title[]</a></li><li class="chapter-item expanded "><a href="funciones/titleURL.html"><strong aria-hidden="true">2.4.</strong> $titleURL[]</a></li><li class="chapter-item expanded "><a href="funciones/description.html"><strong aria-hidden="true">2.5.</strong> $description[]</a></li><li class="chapter-item expanded "><a href="funciones/color.html"><strong aria-hidden="true">2.6.</strong> $color[]</a></li><li class="chapter-item expanded "><a href="funciones/image.html"><strong aria-hidden="true">2.7.</strong> $image[]</a></li><li class="chapter-item expanded "><a href="funciones/thumbnail.html"><strong aria-hidden="true">2.8.</strong> $thumbnail[]</a></li><li class="chapter-item expanded "><a href="funciones/author.html"><strong aria-hidden="true">2.9.</strong> $author[]</a></li><li class="chapter-item expanded "><a href="funciones/authorIcon.html"><strong aria-hidden="true">2.10.</strong> $authorIcon[]</a></li><li class="chapter-item expanded "><a href="funciones/authorURL.html"><strong aria-hidden="true">2.11.</strong> $authorURL[]</a></li><li class="chapter-item expanded "><a href="funciones/footer.html"><strong aria-hidden="true">2.12.</strong> $footer[]</a></li><li class="chapter-item expanded "><a href="funciones/footerIcon.html"><strong aria-hidden="true">2.13.</strong> $footerIcon[]</a></li><li class="chapter-item expanded "><a href="funciones/sendMessage.html"><strong aria-hidden="true">2.14.</strong> $sendMessage[]</a></li><li class="chapter-item expanded "><a href="funciones/channelID.html"><strong aria-hidden="true">2.15.</strong> $channelID[]</a></li><li class="chapter-item expanded "><a href="funciones/username.html"><strong aria-hidden="true">2.16.</strong> $username[]</a></li><li class="chapter-item expanded "><a href="funciones/channelNames.html"><strong aria-hidden="true">2.17.</strong> $channelNames[]</a></li><li class="chapter-item expanded "><a href="funciones/categoryNames.html"><strong aria-hidden="true">2.18.</strong> $categoryNames[]</a></li><li class="chapter-item expanded "><a href="funciones/customID.html"><strong aria-hidden="true">2.19.</strong> $customID[]</a></li><li class="chapter-item expanded "><a href="funciones/editMessageAfter.html"><strong aria-hidden="true">2.20.</strong> $editMessageAfter[]</a></li><li class="chapter-item expanded "><a href="funciones/editMessageBefore.html"><strong aria-hidden="true">2.21.</strong> $editMessageBefore[]</a></li><li class="chapter-item expanded "><a href="funciones/roleGrant.html"><strong aria-hidden="true">2.22.</strong> $roleGrant[]</a></li><li class="chapter-item expanded "><a href="funciones/sendEmbedMessage.html"><strong aria-hidden="true">2.23.</strong> $sendEmbedMessage[]</a></li><li class="chapter-item expanded "><a href="funciones/textSplit.html"><strong aria-hidden="true">2.24.</strong> $textSplit[]</a></li><li class="chapter-item expanded "><a href="funciones/getTextSplitLength.html"><strong aria-hidden="true">2.25.</strong> $getTextSplitLength[]</a></li><li class="chapter-item expanded "><a href="funciones/splitText.html"><strong aria-hidden="true">2.26.</strong> $splitText[]</a></li><li class="chapter-item expanded "><a href="funciones/getTextSplitIndex.html"><strong aria-hidden="true">2.27.</strong> $getTextSplitIndex[]</a></li><li class="chapter-item expanded "><a href="funciones/joinSplitText.html"><strong aria-hidden="true">2.28.</strong> $joinSplitText[]</a></li><li class="chapter-item expanded "><a href="funciones/removeSplitTextElement.html"><strong aria-hidden="true">2.29.</strong> $removeSplitTextElement[]</a></li><li class="chapter-item expanded "><a href="funciones/editSplitText.html"><strong aria-hidden="true">2.30.</strong> $editSplitText[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonParse.html"><strong aria-hidden="true">2.31.</strong> $jsonParse[]</a></li><li class="chapter-item expanded "><a href="funciones/json.html"><strong aria-hidden="true">2.32.</strong> $json[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonSet.html"><strong aria-hidden="true">2.33.</strong> $jsonSet[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonSetString.html"><strong aria-hidden="true">2.34.</strong> $jsonSetString[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonUnset.html"><strong aria-hidden="true">2.35.</strong> $jsonUnset[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonClear.html"><strong aria-hidden="true">2.36.</strong> $jsonClear[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonExists.html"><strong aria-hidden="true">2.37.</strong> $jsonExists[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonStringify.html"><strong aria-hidden="true">2.38.</strong> $jsonStringify[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonPretty.html"><strong aria-hidden="true">2.39.</strong> $jsonPretty[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonArray.html"><strong aria-hidden="true">2.40.</strong> $jsonArray[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonArrayCount.html"><strong aria-hidden="true">2.41.</strong> $jsonArrayCount[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonArrayIndex.html"><strong aria-hidden="true">2.42.</strong> $jsonArrayIndex[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonArrayAppend.html"><strong aria-hidden="true">2.43.</strong> $jsonArrayAppend[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonArrayPop.html"><strong aria-hidden="true">2.44.</strong> $jsonArrayPop[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonArrayShift.html"><strong aria-hidden="true">2.45.</strong> $jsonArrayShift[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonArrayUnshift.html"><strong aria-hidden="true">2.46.</strong> $jsonArrayUnshift[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonArraySort.html"><strong aria-hidden="true">2.47.</strong> $jsonArraySort[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonArrayReverse.html"><strong aria-hidden="true">2.48.</strong> $jsonArrayReverse[]</a></li><li class="chapter-item expanded "><a href="funciones/jsonJoinArray.html"><strong aria-hidden="true">2.49.</strong> $jsonJoinArray[]</a></li><li class="chapter-item expanded "><a href="funciones/let.html"><strong aria-hidden="true">2.50.</strong> $let[]</a></li><li class="chapter-item expanded "><a href="funciones/get.html"><strong aria-hidden="true">2.51.</strong> $get[]</a></li><li class="chapter-item expanded "><a href="funciones/reactionEvent.html"><strong aria-hidden="true">2.52.</strong> $reactionEvent[]</a></li><li class="chapter-item expanded "><a href="funciones/if.html"><strong aria-hidden="true">2.53.</strong> $if[]</a></li><li class="chapter-item expanded "><a href="funciones/checkCondition.html"><strong aria-hidden="true">2.54.</strong> $checkCondition[]</a></li></ol></li><li class="chapter-item expanded "><a href="Eventos/index.html"><strong aria-hidden="true">3.</strong> Eventos</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Eventos/onJoinMember.html"><strong aria-hidden="true">3.1.</strong> $onJoinMember</a></li><li class="chapter-item expanded "><a href="Eventos/onLeaveMember.html"><strong aria-hidden="true">3.2.</strong> $onLeaveMember</a></li><li class="chapter-item expanded "><a href="Eventos/onMessage.html"><strong aria-hidden="true">3.3.</strong> $onMessage</a></li><li class="chapter-item expanded "><a href="Eventos/onMessageDelete.html"><strong aria-hidden="true">3.4.</strong> $onMessageDelete</a></li><li class="chapter-item expanded "><a href="Eventos/onMessageEdit.html"><strong aria-hidden="true">3.5.</strong> $onMessageEdit</a></li><li class="chapter-item expanded "><a href="Eventos/onReactionRemove.html"><strong aria-hidden="true">3.6.</strong> $onReactionRemove</a></li><li class="chapter-item expanded "><a href="Eventos/onReactionAdd.html"><strong aria-hidden="true">3.7.</strong> $onReactionAdd</a></li><li class="chapter-item expanded "><a href="Eventos/onInteraction.html"><strong aria-hidden="true">3.8.</strong> $onInteraction</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
