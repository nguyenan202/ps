// eslint-disable-next-line no-unused-vars
var atOffer = {
    settings: {
        requiredElements: {
            '/products/photoshop.html': {
                marquee: '#marquee',
                riverflow: '#riverflow',
                promobar: '#promobar',
            },
            '/products/illustrator.html': {
                riverflow: '#riverflow',
                newSubstanceBladeAdded: '#root_content_position>.aem-Grid>div:nth-child(7)',
            },
            '/products/photoshop-lightroom': {
                marquee: '#marquee',
                quizBanner: '#root_content_position > .aem-Grid > .aem-GridColumn--tablet--12',
                riverFlow: '#riverflow',
                riverFlowChildren: '#riverflow > .page > .xf-content-height > .aem-Grid > .position > .dexter-Position > .aem-Grid > .aem-GridColumn',
            },
            '/creativecloud/plans.html': {
                filterAll: '#filterlist-react-spectrum-1',
            },
            'else': false,
        },
    },
    main: function() {
        const app = this;
        if (this.page === 'photoshop') {
            this.multiBlade(this.cpro.photoshop[this.country].marquee, this.usedRequiredElements.marquee, 'innerHTML', 'cproMarquee');

            this.multiBlade(this.cpro.photoshop[this.country].riverflow1, this.usedRequiredElements.riverflow, 'innerHTML', 'cproRiverflow1');
            this.multiBlade(this.cpro.photoshop[this.country].riverflow2, this.usedRequiredElements.riverflow, 'beforeEnd', 'cproRiverflow2');
            this.multiBlade(this.cpro.photoshop[this.country].riverflow3, this.usedRequiredElements.riverflow, 'beforeEnd', 'cproRiverflow3');
            this.multiBlade(this.cpro.photoshop[this.country].riverflow4, this.usedRequiredElements.riverflow, 'beforeEnd', 'cproRiverflow4');
            this.multiBlade(this.cpro.photoshop[this.country].riverflow5, this.usedRequiredElements.riverflow, 'beforeEnd', 'cproRiverflow5');
            /* videos for mobile breakpoint */
            this.insertHTML({
                templateHtml: this.html.photoshopRiverflow1MobileVideo,
                position: 'innerHTML',
                element: '#tt_blade_wrapper_cproRiverflow1>[data-tt-id="tt_container_heroImage"]',
            });
            this.insertHTML({
                templateHtml: this.html.photoshopRiverflow2MobileVideo,
                position: 'innerHTML',
                element: '#tt_blade_wrapper_cproRiverflow2>[data-tt-id="tt_container_heroImage"]',
            });
            this.insertHTML({
                templateHtml: this.html.photoshopRiverflow3MobileVideo,
                position: 'innerHTML',
                element: '#tt_blade_wrapper_cproRiverflow3>[data-tt-id="tt_container_heroImage"]',
            });
            this.insertHTML({
                templateHtml: this.html.photoshopRiverflow4MobileVideo,
                position: 'innerHTML',
                element: '#tt_blade_wrapper_cproRiverflow4>[data-tt-id="tt_container_heroImage"]',
            });
            this.insertHTML({
                templateHtml: this.html.photoshopRiverflow5MobileVideo,
                position: 'innerHTML',
                element: '#tt_blade_wrapper_cproRiverflow5>[data-tt-id="tt_container_heroImage"]',
            });
            this.insertHTML({
                templateHtml: this.html.photoshopCproCSS,
            });
        } else if (this.page === 'illustrator') {
            this.multiBlade(this.cpro.illustrator[this.country].riverflow1, this.usedRequiredElements.riverflow, 'innerHTML', 'cproRiverflow1');
            this.multiBlade(this.cpro.illustrator[this.country].riverflow2, this.usedRequiredElements.riverflow, 'beforeEnd', 'cproRiverflow2');
            this.multiBlade(this.cpro.illustrator[this.country].riverflow3, this.usedRequiredElements.riverflow, 'beforeEnd', 'cproRiverflow3');
            this.multiBlade(this.cpro.illustrator[this.country].riverflow4, this.usedRequiredElements.riverflow, 'beforeEnd', 'cproRiverflow4');
            this.multiBlade(this.cpro.illustrator[this.country].substanceBlade, this.usedRequiredElements.newSubstanceBladeAdded, 'afterEnd', 'cproSubstance');
            this.insertHTML({
                templateHtml: this.html.substanceBladeFix,
            });
            this.insertHTML({
                templateHtml: this.html.illustratorRiverflow1MobileVideo,
                position: 'innerHTML',
                element: '#tt_blade_wrapper_cproRiverflow1>[data-tt-id="tt_container_heroImage"]',
            });
            this.insertHTML({
                templateHtml: this.html.illustratorRiverflow2MobileVideo,
                position: 'innerHTML',
                element: '#tt_blade_wrapper_cproRiverflow2>[data-tt-id="tt_container_heroImage"]',
            });
            this.insertHTML({
                templateHtml: this.html.illustratorRiverflow3MobileVideo,
                position: 'innerHTML',
                element: '#tt_blade_wrapper_cproRiverflow3>[data-tt-id="tt_container_heroImage"]',
            });
            this.insertHTML({
                templateHtml: this.html.illustratorRiverflow4MobileVideo,
                position: 'innerHTML',
                element: '#tt_blade_wrapper_cproRiverflow4>[data-tt-id="tt_container_heroImage"]',
            });
            this.insertHTML({
                templateHtml: this.html.illustratorSubstanceBladeMobileVideo,
                position: 'innerHTML',
                element: '#tt_blade_wrapper_cproSubstance>[data-tt-id="tt_container_heroImage"]',
            });

            this.insertHTML({
                templateHtml: this.html.illustratorCproCSS,
            });
        } else if (this.page === 'plans') {
            app.addPlansCSS();
            //Watch for changes in class on the All filter
            let observer = new MutationObserver(function(mutations) {
                for (let mutation of mutations) {
                    if (mutation.type === 'attributes') {
                        app.addPlansCSS();
                    }
                }
            });
            observer.observe(app.$(app.usedRequiredElements.filterAll), {
                attributes: true,
                attributeFilter: ['class']
            });
        } else if (this.page === 'photography') {
            this.$('body', (element) => element.setAttribute('data-country', this.country));

            this.insertHTML({
                templateHtml: this.html.photographyCSS,
            });

            const updatePhotoCTAs = () => {
                this.$$('a[href*=mini-plans-web-cta-photoshop-lightroom]', (element) => {
                    element.setAttribute('href', this.cpro[this.page][this.country].trialCTA);
                });
            };

            this.$$('#marquee .cmp-text p', (element) => (element.innerHTML = this.cpro[this.page][this.country].marqueeCopy));
            this.$$('.stickypromobar p:not(.hide-all)', (element) => (element.innerHTML = this.cpro[this.page][this.country].stickyCopy));

            updatePhotoCTAs();
            this.observeElement('.root.responsivegrid', updatePhotoCTAs);

            this.hidePromoModal();
        } else if (this.page === 'photoshop-lightroom') {
            const updateCSS = () => {
                this.insertHTML({
                    templateHtml: this.html['photoshop-lightroomCSS'],
                });

                this.$$('body', (element) => element.setAttribute('tt-country', this.country));

                if (this.$$('[data-adobe-target-testid="return_visitor"]').length < 1) {
                    this.$$('body', (element) => element.setAttribute('tt-marquee', true));
                }
            };
            const repositionQuiz = () => {
                const child = this.$(this.usedRequiredElements.quizBanner);
                child.classList.add('tt-quiz-banner');
                this.$(`${ this.usedRequiredElements.riverFlow } > *:last-child`).after(child);
            };
            const updateRiverFlow = () => {
                this.$$(`${ this.usedRequiredElements.riverFlowChildren }:not(:first-child) > .dexter-FlexContainer`, (element, i) => {
                    this.multiBlade(this.cpro[this.page][this.country][`blade${ i }`], element, 'innerHTML', `${ this.id }-blade-${ i }`);
                });
            };
            const updatePayOptions = () => {
                if (this.platform === 'android') {
                    // || Chrome
                    this.$('.tt_content_applePayImage div.dexter-Image img').setAttribute('src', '/content/dam/cc/us/en/products/illustrator/mobile-pay-marks/Non-official-google-pay-mark.svg');
                    this.$('.tt_content_applePayImageElement').classList.add('googlePayImage');
                    this.$('.tt_content_applePayText').innerText = 'Google Pay';
                    this.$('.tt_content_applePayText').classList.add('googlePayText');
                }

                if (this.platform === 'mac' || this.platform === 'windows') {
                    this.$$('[data-tt-id="tt_content_applePay"]', (element) => (element.style.display = 'none'));
                }
            };
            const addVideoLoop = () => {
                this.$$(`#riverflow video`, (element) => (element.loop = true));
            };
            const addVideoModal = () => {
                this.$$('a[daa-ll="Edit-Anywhere-Video"]', (element) => {
                    element.setAttribute('href', '#videoModal');
                });

                this.buildModal({
                        modalType: 'dexter',
                        modalLabel: 'Edit Anywhere Video',
                        contentType: 'iframe',
                        contentSrc: 'https://video.tv.adobe.com/v/3416686/',
                        track: true,
                    },
                    'videoModal'
                );
            };

            updateCSS();
            repositionQuiz();
            updateRiverFlow();
            updatePayOptions();
            addVideoLoop();
            addVideoModal();
        } else if (this.page === 'compare-plans') {
            this.insertHTML({
                templateHtml: this.html.compareplansCSS,
            });

            const sanitizeLink = (element) => {
                ['data-feds-element', 'data-navlink-dynamiclinktype', 'data-feds-personalization', 'data-feds-action'].forEach((attribute) => element.removeAttribute(attribute));
            };

            const updateCompareCTAs = () => {
                this.$$('.globalnavheader a[href*=mini-plans-web-cta-photoshop-lightroom], .globalnavheader a[href*="298BD31C897C91C3CDFACF5F8BD74E0A"]', (element) => {
                    sanitizeLink(element);
                    ['data-feds-element', 'data-navlink-dynamiclinktype', 'data-feds-personalization'].forEach((attribute) => element.removeAttribute(attribute));
                    element.setAttribute('href', this.cpro[this.page][this.country].trialCTA);
                });

                this.$$('.globalnavheader a[data-navlink-dynamiclinktype="buy-now"], .globalnavheader a[href*="3BBF389F3FD81F200C799D617672E7E1"]', (element) => {
                    sanitizeLink(element);
                    element.setAttribute('href', this.cpro[this.page][this.country].gnavBuyCTA);
                });
            };

            updateCompareCTAs();
            this.observeElement('.root.responsivegrid', updateCompareCTAs);
        }

        this.insertHTML({
            templateHtml: this.html.hideExpressCSS, // hide express blade on all pages: ps, ai, pr
        });
    },
    addPlansCSS: function() {
        const app = this;
        app.removePlansCSS();
        // Add style tag only if All filter on the Individuals tab is active
        if (app.$(app.usedRequiredElements.filterAll).classList.contains('is-selected')) {
            app.insertHTML({
                templateHtml: app.html.plansCproCSS,
            });
        }
    },
    removePlansCSS: function() {
        const app = this;
        // Remove style tag
        app.$$('[data-tt-id="plansCproCSS"]', (el) => {
            el.remove();
        });
    },
    observeElement: function(selector, callback) {
        (mutationList) => {
            mutationList.forEach((mutation, i) => {
                if (i === mutationList.length - 1) {
                    callback();
                }
            });
        };

        this.$$(selector, (element) => {
            new MutationObserver(callback).observe(element, {
                subtree: true,
                childList: true,
            });
        });
    },
    hidePromoModal: function() {
        const app = this;
        app.$$('#promo-modal-text-image', (el) => {
            el.parentElement.style.display = 'none';
        });
        app.$$('div[aria-label="promo-modal-text-image"].dexter-Modal_overlay.is-Open', (el) => {
            el.classList.remove('is-Open');
        });
        app.$$('body', (el) => {
            el.classList.remove('u-noScroll');
        });
    },
};

atOffer.html = {
    "substanceBladeFix": "<style data-tt-id=\"substanceBladeFix\" data-adobe-target-testid=\"cpro\">\n    #tt_blade_wrapper_cproSubstance {\n        display: block !important;\n    }\n    @media screen and (max-width: 599px) {\n        #tt_blade_cproSubstance .tt_container_copyFlex .tt_container_buttonsAnchor {\n            order: 5 !important;\n        }\n    }\n    @media screen and (max-width: 1199px) {\n        #tt_blade_wrapper_cproSubstance .tt_container_bladeContents {\n            display: flex !important;\n            justify-content: center !important;\n        }\n    }\n    @media screen and (max-width: 1199px) and (min-width: 599px) {\n        #tt_blade_wrapper_cproSubstance .tt_container_copyContents {\n            padding-right: 36px !important;\n        }\n    }\n</style>\n",
    "hideExpressCSS": "<style data-tt-id=\"hideExpressCSS\" data-adobe-target-testid=\"cpro\">\n    #express,\n    #adobe-express {\n        display: none;\n    }\n</style>\n",
    "photographyCSS": "<style data-tt-id=\"photographyCSS\" data-adobe-target-testid=\"cpro\">\n    [data-adobe-target-testid='cpro'] [data-tt-id='card'] .blade-card,\n    [data-adobe-target-testid='cpro'] [data-tt-id='card'] .blade-card > .aem-Grid,\n    [data-adobe-target-testid='cpro'] [data-tt-id='card'] .tt-flex-container {\n        height: 100%;\n    }\n\n    [data-country='us'] #merch-bar .experiencefragment:nth-child(2),\n    [data-adobe-target-testid='cpro'][data-card-id='id-card_2'] .tt-price-column:first-child {\n        display: none !important;\n    }\n\n    @media screen and (max-width: 1199px) {\n        [data-adobe-target-testid='cpro'] [data-tt-id='ttCardContent'] .tt-price-column:not(:first-child) {\n            margin-top: 0px !important;\n        }\n    }\n</style>\n",
    "photoshop-lightroomCSS": "<style data-tt-id=\"photoshop-lightroomCSS\" data-adobe-target-testid=\"cpro\">\n    #riverflow > .page > .xf-content-height > .aem-Grid > .position > .dexter-Position > .aem-Grid > .aem-GridColumn:first-child {\n        display: none !important;\n    }\n\n    #root_content_position > div > div.flex.aem-GridColumn.aem-GridColumn--default--12 {\n        display: none !important;\n    }\n    #tt_blade_cpro-blade-3 [data-tt-id='tt_container_contentImage'] {\n        display: none;\n    }\n\n    #marquee .tt-tablet-hero,\n    #marquee .tt-mobile-hero {\n        display: none;\n        width: 100%;\n        height: auto;\n    }\n\n    #tt_blade_cpro-blade-3 .tt_container_contentImage {\n        visibility: hidden;\n    }\n\n    .tt_container_copyContents .cmp-text p {\n        line-height: 1.5 !important;\n    }\n\n    .tt_content_addedVideo > .video-Wrapper {\n        min-height: initial !important;\n        max-height: initial !important;\n    }\n\n    @media screen and (min-width: 1200px) {\n        #tt_blade_cpro-blade-1 .tt_content_addedVideo .video-Wrapper {\n            padding-left: 0 !important;\n            padding-right: 224px !important;\n        }\n\n        #riverflow .tt_blade_wrapper:not(#tt_blade_wrapper_cpro-blade-1) [data-tt-id='tt_container_contentVideo'] {\n            display: none !important;\n        }\n    }\n\n    @media screen and (max-width: 1199px) {\n        #tt_blade_cpro-blade-0 .video-Wrapper,\n        #tt_blade_cpro-blade-2 .video-Wrapper,\n        #tt_blade_cpro-blade-4 .video-Wrapper {\n            padding-left: 0px !important;\n            padding-right: 30px !important;\n        }\n\n        #tt_blade_cpro-blade-1 .video-Wrapper,\n        #tt_blade_cpro-blade-3 .video-Wrapper {\n            padding-left: 30px !important;\n            padding-right: 0px !important;\n        }\n\n        [data-tt-id='tt_content_icon'] .tt_content_iconImage {\n            height: 100px !important;\n            width: 100px !important;\n        }\n\n        #tt_blade_cpro-blade-3 [data-tt-id='tt_container_contentImage'] {\n            display: block;\n        }\n\n        #marquee [data-tt-id='tt_component_videoWrapper'],\n        #tt_blade_cpro-blade-3 .tt_container_contentImage,\n        [tt-country='us'] #riverflow > .page > .xf-content-height > .aem-Grid > .position > .dexter-Position > .aem-Grid > .aem-GridColumn:first-child {\n            display: none !important;\n        }\n    }\n    @media screen and (min-width: 600px) and (max-width: 1199px) {\n        .tt-quiz-banner,\n        #tt_blade_cpro-Marquee [data-tt-id='tt_content_icon'] {\n            display: none !important;\n        }\n\n        #tt_blade_wrapper_cpro-blade-0 .tt_container_copy,\n        #tt_blade_wrapper_cpro-blade-2 .tt_container_copy,\n        #tt_blade_wrapper_cpro-blade-4 .tt_container_copy {\n            order: 3 !important;\n        }\n\n        #tt_blade_cpro-blade-1 .tt_container_copy,\n        #tt_blade_wrapper_cpro-blade-3 .tt_container_copy {\n            order: -1 !important;\n        }\n\n        body[tt-marquee] #marquee .tt-tablet-hero {\n            display: block;\n        }\n\n        #tt_blade_cpro-Marquee .tt_container_copyFlex .tt_container_buttons {\n            order: 2 !important;\n        }\n\n        #tt_blade_cpro-Marquee .tt_container_copyFlex br {\n            display: none;\n        }\n\n        #tt_blade_cpro-Marquee .tt_container_bladeContents {\n            background-size: auto !important;\n            background-position: center !important;\n        }\n    }\n    @media screen and (max-width: 599px) {\n        .tt-quiz-banner,\n        #tt_blade_cpro-Marquee [data-tt-id='tt_content_icon'] {\n            display: none !important;\n        }\n\n        #tt_blade_cpro-Marquee .tt_container_bladeContents {\n            padding-left: 0 !important;\n            padding-right: 0 !important;\n        }\n\n        #tt_blade_cpro-Marquee .tt_container_copyFlex .tt_container_buttonsAnchor,\n        #tt_blade_cpro-Marquee .tt_container_copyFlex .tt_content_applePay {\n            order: 5 !important;\n        }\n\n        #tt_blade_cpro-Marquee .tt_container_buttonsFlex .dexter-FlexContainer-Items {\n            flex-wrap: initial !important;\n        }\n\n        body[tt-marquee] #marquee .tt-mobile-hero {\n            display: block;\n        }\n\n        #tt_blade_cpro-Marquee .tt_container_bladeContents {\n            background-size: auto !important;\n            background-position: center !important;\n        }\n\n        .tt_buttons_container .dexter-FlexContainer-Items > * {\n            width: auto !important;\n            flex: 0 0 auto !important;\n        }\n\n        [data-tt-id='tt_blade_main']:not(#tt_blade_cpro-Marquee) .tt_container_copyFlex .tt_container_buttonsAnchor {\n            display: none;\n        }\n    }\n</style>\n",
    "compareplansCSS": "<style data-tt-id=\"compareplansCSS\" data-adobe-target-testid=\"cpro\">\n    .content.responsivegrid .position:nth-child(3) .tablet-container > *:not(:last-child) {\n        width: 33.3% !important;\n        max-width: 33.3% !important;\n    }\n\n    .content.responsivegrid .position:nth-child(3) .tablet-container > .flex:nth-child(4n-2),\n    [data-country='us'] .content.responsivegrid .position:nth-child(3) .tablet-container > .position:nth-child(29) .text:last-child p:first-child,\n    [data-country='ca'] .content.responsivegrid .position:nth-child(3) .tablet-container > .position:nth-child(25) .text:last-child p:first-child {\n        display: none !important;\n    }\n\n    @media screen and (max-width: 599px) {\n        .content.responsivegrid .position:nth-child(3) .tablet-container > *:not(:last-child) {\n            width: 50% !important;\n            max-width: 50% !important;\n        }\n\n        .content.responsivegrid .position:nth-child(3) .tablet-container > .position {\n            width: 100% !important;\n            max-width: 100% !important;\n        }\n\n        .content.responsivegrid > .aem-Grid > .position:nth-child(3) > .dexter-Position > .aem-Grid > .xfreference:first-child [data-animations] .dexter-FlexContainer--mobileAlignItemCenter {\n            flex-direction: column;\n            align-content: center;\n        }\n    }\n</style>\n",
    "plansCproCSS": "<style data-tt-id=\"plansCproCSS\" data-adobe-target-testid=\"cpro\">\n    #plans-card-270718776 {\n        /* CC All Apps */\n        order: 1 !important;\n    }\n\n    #plans-card--2080709194 {\n        /* Acrobat Pro */\n        order: 2 !important;\n    }\n\n    #plans-card--601395100 {\n        /* Photoshop */\n        order: 3 !important;\n    }\n\n    #plans-card-2071886452 {\n        /* Photography 1TB */\n        order: 4 !important;\n    }\n\n    #plans-card-1309252305 {\n        /* Illustrator */\n        order: 5 !important;\n    }\n\n    #plans-card--748083784 {\n        /* Premiere Pro */\n        order: 6 !important;\n    }\n\n    #plans-card-1774348179 {\n        /* InDesign */\n        order: 7 !important;\n    }\n\n    #plans-card-784467494 {\n        /* Stock */\n        order: 8 !important;\n    }\n\n    #plans-card--353408209 {\n        /* Firefly */\n        order: 9 !important;\n    }\n\n    #plans-card--2126264528 {\n        /* After Effects */\n        order: 10 !important;\n    }\n\n    #plans-card-499538217 {\n        /* Audition */\n        order: 11 !important;\n    }\n\n    #plans-card-2056970619 {\n        /* Lightroom (1TB) */\n        order: 12 !important;\n    }\n\n    #plans-card--661452515 {\n        /* Substance 3D Texturing */\n        order: 13 !important;\n    }\n\n    #plans-card-1261249099 {\n        /* Animate */\n        order: 14 !important;\n    }\n\n    #plans-card-1698793017 {\n        /* Dreamweaver */\n        order: 15 !important;\n    }\n\n    #plans-card--1794687505 {\n        /* Substance 3D Collection */\n        order: 16 !important;\n    }\n\n    #plans-card-1790939644 {\n        /* InCopy */\n        order: 17 !important;\n    }\n\n    #plans-card-1553824371 {\n        /* Express */\n        order: 18 !important;\n    }\n</style>\n",
    "photoshopCproCSS": "<style data-tt-id=\"photoshopCproCSS\" data-adobe-target-testid=\"cpro\">\n    #ps-web {\n        display: none;\n    }\n    ${ this.usedRequiredElements.promobar },\n    body.ttPage-photoshop #marquee-mb {\n        display: none !important;\n    }\n\n    [id*=\"tt_blade_cproRiverflow\"] .tt_content_bodyCopy p {\n        font-size: 18px;\n    }\n\n    [data-tt-id=\"tt_container_heroImage\"] video.video-mobile {\n        width: 100vw;\n        margin-bottom: -7px;\n    }\n    #tt_blade_cproMarquee .tt_content_icon > div:after {\n        font-size: 24px;\n        font-weight: bold;\n        position: absolute;\n        top: 20px;\n        left: 50px;\n    }\n    #tt_blade_cproMarquee .tt_content_icon > div:after {\n        content: 'Photoshop';\n    }\n    @media screen and (max-width: 599px) {\n        [id*=\"tt_blade_cproRiverflow\"] div[data-tt-id=\"tt_content_icon\"],\n        body.ttPage-photoshop .stickypromobar-marquee {\n            display: block !important;\n        }\n\n        #tt_blade_cproRiverflow5 .tt_container_bladeContents {\n            background: linear-gradient(180deg, rgba(100, 43, 149, 1) 0%, rgba(196, 63, 130, 1) 100%);\n        }\n    }\n    @media screen and (min-width: 600px) {\n        [data-tt-id=\"tt_container_heroImage\"] video.video-mobile {\n            display: none;\n        }\n    }\n    @media screen and (max-width: 1199px) {\n        [id*=\"tt_blade_cproRiverflow\"] .tt_content_icon .tt_content_iconImage {\n            height: 80px !important;\n        }\n    }\n    @media screen and (min-width: 1200px) {\n        [id*=\"tt_blade_cproRiverflow\"] .tt_content_icon .tt_content_iconImage {\n            height: 120px !important;\n        }\n    }\n</style>\n",
    "photoshopRiverflow1MobileVideo": "<div data-tt-id=\"photoshopRiverflow1MobileVideo\" data-adobe-target-testid=\"cpro\">\n    <video class=\"video-mobile dexter-LazyImage\" preload=\"metadata\" playsinline=\"\" muted=\"\" loop=\"true\" autoplay=\"true\" data-poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/Blade-1-mb?$pjpeg$&amp;jpegSize=200&amp;wid=360\" poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/Blade-1-mb?$pjpeg$&amp;jpegSize=200&amp;wid=360\">\n        <source src=\"https://images-tv.adobe.com/mpcv3/5234/645cf98c-7ea6-4585-b46e-47897410f201_1670535576.1280x720at2000_h264.mp4\" type=\"video/mp4\">\n    </video>\n</div>\n",
    "photoshopRiverflow2MobileVideo": "<div data-tt-id=\"photoshopRiverflow2MobileVideo\" data-adobe-target-testid=\"cpro\">\n    <video class=\"video-mobile dexter-LazyImage\" preload=\"metadata\" playsinline=\"\" muted=\"\" loop=\"true\" autoplay=\"true\" data-poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/Blade-2-mb?$pjpeg$&amp;jpegSize=200&amp;wid=360\" poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/Blade-2-mb?$pjpeg$&amp;jpegSize=200&amp;wid=360\">\n        <source src=\"https://images-tv.adobe.com/mpcv3/5234/557759b4-f99f-45d7-aece-caae19d2658a_1670535961.1280x720at2000_h264.mp4\" type=\"video/mp4\">\n    </video>\n</div>\n",
    "photoshopRiverflow3MobileVideo": "<div data-tt-id=\"photoshopRiverflow3MobileVideo\" data-adobe-target-testid=\"cpro\">\n    <video class=\"video-mobile dexter-LazyImage\" preload=\"metadata\" playsinline=\"\" muted=\"\" loop=\"true\" autoplay=\"true\" data-poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/Blade-3-mb?$pjpeg$&amp;jpegSize=200&amp;wid=360\" poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/Blade-3-mb?$pjpeg$&amp;jpegSize=200&amp;wid=360\">\n        <source src=\"https://images-tv.adobe.com/mpcv3/5234/33a35304-aefd-4f8d-9e00-cd7516719dc6_1670536179.1280x720at2000_h264.mp4\" type=\"video/mp4\">\n    </video>\n</div>\n",
    "photoshopRiverflow4MobileVideo": "<div data-tt-id=\"photoshopRiverflow4MobileVideo\" data-adobe-target-testid=\"cpro\">\n    <video class=\"video-mobile dexter-LazyImage\" preload=\"metadata\" playsinline=\"\" muted=\"\" loop=\"true\" autoplay=\"true\" data-poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/Blade-4-mb?$pjpeg$&amp;jpegSize=200&amp;wid=360\" poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/Blade-4-mb?$pjpeg$&amp;jpegSize=200&amp;wid=360\">\n        <source src=\"https://images-tv.adobe.com/mpcv3/5234/f1ab40a5-0f37-4e01-988a-2d434db90f7e_1670536299.1280x720at2000_h264.mp4\" type=\"video/mp4\">\n    </video>\n</div>\n",
    "photoshopRiverflow5MobileVideo": "<div data-tt-id=\"photoshopRiverflow5MobileVideo\" data-adobe-target-testid=\"cpro\">\n    <video class=\"video-mobile dexter-LazyImage\" preload=\"metadata\" playsinline=\"\" muted=\"\" loop=\"true\" autoplay=\"true\" data-poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/Blade-5-mb?$pjpeg$&amp;jpegSize=200&amp;wid=360\" poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/Blade-5-mb?$pjpeg$&amp;jpegSize=200&amp;wid=360\">\n        <source src=\"https://images-tv.adobe.com/mpcv3/5234/c79c83cb-4d8d-4dff-a0f3-f27df70808db_1670536428.1280x720at2000_h264.mp4\" type=\"video/mp4\">\n    </video>\n</div>\n",
    "illustratorRiverflow1MobileVideo": "<div data-tt-id=\"illustratorRiverflow1MobileVideo\" data-adobe-target-testid=\"cpro\">\n    <video class=\"video-mobile dexter-LazyImage\" preload=\"metadata\" playsinline=\"\" muted=\"\" loop=\"true\" autoplay=\"\" data-poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/mb-ai-blade1-720x720-2x-2?$pjpeg$&amp;jpegSize=200&amp;wid=720\" poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/mb-ai-blade1-720x720-2x-2?$pjpeg$&amp;jpegSize=200&amp;wid=720\">\n        <source src=\"https://images-tv.adobe.com/mpcv3/7061/480ee18b-c479-4008-b75e-b178cb20d76b_1664407538.1920x1080at3000_h264.mp4\" type=\"video/mp4\">\n    </video>\n</div>\n",
    "illustratorRiverflow2MobileVideo": "<div data-tt-id=\"illustratorRiverflow2MobileVideo\" data-adobe-target-testid=\"cpro\">\n    <video class=\"video-mobile dexter-LazyImage\" preload=\"metadata\" playsinline=\"\" muted=\"\" loop=\"true\" autoplay=\"\" data-poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/mb-ai-blade2-720x720-2x?$pjpeg$&amp;jpegSize=200&amp;wid=720\" poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/mb-ai-blade2-720x720-2x?$pjpeg$&amp;jpegSize=200&amp;wid=720\">\n        <source src=\"https://images-tv.adobe.com/mpcv3/1041/4e326d05-0518-4d8a-8816-c8b02c05abdb_1651867934.854x480at800_h264.mp4\" type=\"video/mp4\">\n    </video>\n</div>\n",
    "illustratorRiverflow3MobileVideo": "<div data-tt-id=\"illustratorRiverflow3MobileVideo\" data-adobe-target-testid=\"cpro\">\n    <video class=\"video-mobile dexter-LazyImage\" preload=\"metadata\" playsinline=\"\" muted=\"\" loop=\"true\" autoplay=\"\" data-poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/mb-ai-blade3-720x720-2x1?$pjpeg$&amp;jpegSize=200&amp;wid=720\" poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/mb-ai-blade3-720x720-2x1?$pjpeg$&amp;jpegSize=200&amp;wid=720\">\n        <source src=\"https://images-tv.adobe.com/mpcv3/7062/bf5fdeef-6bc7-4048-892a-ba551d6034dc_1681764109.1920x1080at3000_h264.mp4\" type=\"video/mp4\">\n    </video>\n</div>\n",
    "illustratorRiverflow4MobileVideo": "<div data-tt-id=\"illustratorRiverflow4MobileVideo\" data-adobe-target-testid=\"cpro\">\n    <video class=\"video-mobile dexter-LazyImage\" preload=\"metadata\" playsinline=\"\" muted=\"\" loop=\"true\" autoplay=\"\" data-poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/mb-ai-blade4-720x720-2x1?$pjpeg$&amp;jpegSize=200&amp;wid=720\" poster=\"https://cc-prod.scene7.com/is/image/CCProdAuthor/mb-ai-blade4-720x720-2x1?$pjpeg$&amp;jpegSize=200&amp;wid=720\">\n        <source src=\"https://images-tv.adobe.com/mpcv3/7062/b6d704e7-33df-4a4e-93d6-6ab8ecf0a824_1681763682.1920x1080at3000_h264.mp4\" type=\"video/mp4\">\n    </video>\n</div>\n",
    "illustratorSubstanceBladeMobileVideo": "<div data-tt-id=\"illustratorSubstanceBladeMobileVideo\" data-adobe-target-testid=\"cpro\">\n    <video class=\"video-mobile dexter-LazyImage\" preload=\"metadata\" playsinline=\"\" muted=\"\" loop=\"true\" autoplay=\"\">\n        <source src=\"https://images-tv.adobe.com/mpcv3/7062/671d725d-b28d-47f6-985b-97b0f32b83d3_1697494515.1920x1080at3000_h264.mp4\" type=\"video/mp4\">\n    </video>\n</div>\n",
    "illustratorCproCSS": "<style data-tt-id=\"illustratorCproCSS\" data-adobe-target-testid=\"cpro\">\n    #express,\n    #adobe-express {\n        display: none;\n    }\n    [id*='tt_blade_cproRiverflow'] .tt_content_icon .tt_content_iconImage {\n        height: 80px !important;\n    }\n    [data-tt-id='tt_container_heroImage'] video.video-mobile {\n        width: 100vw;\n        margin-bottom: -7px;\n    }\n    @media screen and (max-width: 599px) {\n        #tt_blade_wrapper_cproRiverflow4 .tt_container_copyFlex {\n            color: #fff !important;\n        }\n    }\n    @media screen and (min-width: 600px) {\n        [data-tt-id='tt_container_heroImage'] video.video-mobile {\n            display: none;\n        }\n    }\n    @media screen and (min-width: 600px) and (max-width: 1199px) {\n        .tt_container_bladeContents {\n            min-height: 505px;\n        }\n        #tt_blade_proMarquee .tt_container_bladeContents {\n            min-height: auto;\n        }\n        [id*='tt_blade_cproRiverflow'] .tt_container_bladeContents {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n    }\n    @media screen and (max-width: 1199px) {\n        #tt_blade_cproMarquee .tt_content_icon {\n            display: none;\n        }\n    }\n    @media screen and (min-width: 1200px) {\n        [id*='tt_blade_cproRiverflow'] .tt_content_icon .tt_content_iconImage {\n            height: 100px !important;\n        }\n    }\n</style>\n",
    "ttDexterModalContainer": "<div data-tt-id=\"ttDexterModalContainer\" class=\"modalContainer parsys\" data-adobe-target-testid=\"cpro\">\n</div>\n",
    "ttDexterModal": "<div data-tt-id=\"ttDexterModal\" class=\"modal\" id=\"[[data.modalId]]-tt\" data-adobe-target-testid=\"cpro\">\n    <style>\n        @media (min-width:968px) {\n            [data-tt-id=\"ttDexterModal\"] #[[data.modalId]] {\n                height: auto;\n                height: [[data.modalHeight]];\n                min-height: [[data.modalHeight]];\n                max-height: 4000px;\n            }\n        }\n    </style>\n\t<div class=\"dexter-Modal_overlay mobile-place-center mobile-place-middle tablet-inherit tablet-inherit desktop-inherit desktop-inherit closePlacement-insideTopRight\" data-conf-display=\"onHashChange\" data-page-name=\"[[this.page]]\" aria-modal=\"true\" aria-label=\"View Demo\" role=\"dialog\">\n\t\t<div class=\"dexter-Modal  mobile-width-100 mobile-height-100 tablet-width-100 tablet-height-100 desktop-width-1024 desktop-height-auto\" id=\"[[data.modalId]]\" role=\"document\">\n\t\t\t<p id=\"[[data.modalId]]-modalTitle\" class=\"hide-all\">[[data.modalLabel]]</p>\n\t\t\t<p id=\"[[data.modalId]]-modalDescription\" class=\"hide-all\">[[data.modalLabel]]</p>\n\t\t\t<div id=\"[[data.modalId]]-modalContent\" class=\"aem-Grid aem-Grid--12 aem-Grid--default--12 \">\n                <!-- iframe or modal content -->\n\t\t\t</div>\n\t\t\t<a href=\"#\" class=\"dexter-CloseButton\" aria-label=\"Close\" role=\"button\" tabindex=\"0\" data-modal-id=\"[[data.modalId]]-tt\"> <i class=\"dexter-CloseButton_icon spectrum-close-circle-dark\"></i> </a>\n\t\t</div>\n\t</div>\n</div>\n",
    "ttModalIframe": "<div data-tt-id=\"ttModalIframe\" class=\"iframe aem-GridColumn aem-GridColumn--default--12\" data-adobe-target-testid=\"cpro\">\n    <style>\n        @media (min-width:968px) {\n            #[[data.modalId]]-tt .frame-container.frame-container-modalContainer_modal_iframe {\n                height: auto;\n                height: [[data.modalHeight]] !important;\n            }\n        }\n    </style>\n    <div class=\"frame-container frame-container-modalContainer_modal_iframe\" tabindex=\"0\">\n        <iframe data-no-reload=\"\" data-src=\"[[data.iframeSrc]]\" frameborder=\"0\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\"></iframe>\n    </div>\n</div>\n",
    "tt_blade_generalCss": "<style data-tt-id=\"tt_blade_generalCss\" data-adobe-target-testid=\"cpro\">\n    /* Main container that holds heroContainer and mainContent are flex boxes */\n    #tt_blade_wrapper_[[data.uniqueId]] {\n        display: flex !important; \n        flex-direction: column;\n    }\n\n    /* Makes content containers 100% min-width */\n    #tt_blade_[[data.uniqueId]] .tt_content_eyebrowCopy>.cmp-text,\n    #tt_blade_[[data.uniqueId]] .tt_content_headlineCopy>.cmp-title,\n    #tt_blade_[[data.uniqueId]] .tt_content_bodyCopy>.cmp-text,{\n        width: 100%\n    }\n\n    #tt_blade_[[data.uniqueId]] .tt_content_eyebrowCopy,\n    #tt_blade_[[data.uniqueId]] .tt_content_headlineCopy,\n    #tt_blade_[[data.uniqueId]] .tt_content_bodyCopy,\n    #tt_blade_[[data.uniqueId]] .tt_container_buttonsAnchor {\n        display: flex;\n    }\n\n    /*Button container csettings - NEW */\n    #tt_blade_[[data.uniqueId]] .tt_container_buttonsAnchor {\n        flex-direction: [[data.buttonContainer_flexDirection]];\n    }\n\n    @media screen and (max-width: 599px) {\n        /*max width for content container*/\n        #tt_blade_[[data.uniqueId]] .tt_container_mainFlex {\n            max-width: [[data.mobile_container_maxWidth]];\n            min-width: [[data.mobile_container_minWidth]];\n        }\n\n        /*General hide on mobile*/\n        #tt_blade_[[data.uniqueId]] .mobile-hideItem {\n            display: none !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex {\n            color: [[data.content_textColor_mobile]] !important;\n        }\n\n        .invisible-mobile {\n            visibility: hidden;\n        }\n\n        /* text and button alignment for all content container items mobile */\n        #tt_blade_[[data.uniqueId]] .tt_container_copyContents > div:not(.tt_buttons_container) {\n            text-align: [[data.content_textAlign_mobile]] !important;\n        }\n        #tt_blade_[[data.uniqueId]] .tt_container_copyContents > .tt_container_copyFlex  > div {\n            justify-content: [[data.textAlignJustify_mobile]] !important;  \n        }\n\n\n    }\n\n    @media screen and (min-width: 600px) and (max-width: 1199px) {\n\n        /*max width for content container*/\n        #tt_blade_[[data.uniqueId]] .tt_container_mainFlex {\n            max-width: [[data.tablet_container_maxWidth]];\n            min-width: [[data.tablet_container_minWidth]];\n        }\n\n        /*General hide on tablet*/\n        #tt_blade_[[data.uniqueId]] .tablet-hideItem {\n            display: none !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex {\n            color: [[data.content_textColor_tablet]] !important;\n        }\n\n        .invisible-tablet {\n            visibility: hidden;\n        }\n\n        /* text and button alignment for all content container items tablet */\n        #tt_blade_[[data.uniqueId]] .tt_container_copyContents > div:not(.tt_buttons_container) {\n            text-align: [[data.content_textAlign_tablet]] !important;\n        }\n        #tt_blade_[[data.uniqueId]] .tt_container_copyContents > .tt_container_copyFlex > div {\n            justify-content: [[data.textAlignJustify_tablet]] !important;  \n        }\n    }\n\n    @media screen and (min-width: 1200px) {\n\n        /*max width for content container*/\n        #tt_blade_[[data.uniqueId]] .tt_container_mainFlex {\n            max-width: [[data.desktop_container_maxWidth]];\n            min-width: [[data.desktop_container_minWidth]]\n        }\n\n        /*General hide on desktop*/\n        #tt_blade_[[data.uniqueId]] .desktop-hideItem {\n            display: none !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_mainFlex {\n            /* max-width: 1440px; */\n            max-width: [[data.bladeContentMaxWidth]]\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents {\n            /* padding-right: 50px;\n            padding-left: 50px; */\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex {\n            color: [[data.content_textColor]] !important;\n        }\n\n        .invisible-desktop {\n            visibility: hidden;\n        }\n\n        /* text and button alignment for all content container items desktop */\n        #tt_blade_[[data.uniqueId]] .tt_container_copyContents > div:not(.tt_buttons_container) {\n            text-align: [[data.content_textAlign]] !important;\n        }\n        #tt_blade_[[data.uniqueId]] .tt_container_copyContents > .tt_container_copyFlex > div { \n            justify-content: [[data.textAlignJustify]] !important;  \n        }\n    }\n</style>\n",
    "tt_blade_staticFontCss": "<style data-tt-id=\"tt_blade_staticFontCss\" class=\"tt_blade_[[data.uniqueId]]_staticFontCss\" data-adobe-target-testid=\"cpro\">\n    /*Tee shirt sizing for headlines */\n    #tt_blade_[[data.uniqueId]] .heading-XXL h1,\n    #tt_blade_[[data.uniqueId]] .heading-XXL h2 {\n        font-size: 44px !important;\n        font-weight: 400 !important;\n    }\n\n    #tt_blade_[[data.uniqueId]] .heading-XL h1,\n    #tt_blade_[[data.uniqueId]] .heading-XL h2 {\n        font-size: 36px !important;\n        font-weight: 400 !important;\n    }\n\n    #tt_blade_[[data.uniqueId]] .headling-L h1,\n    #tt_blade_[[data.uniqueId]] .heading-L h2 {\n        font-size: 28px !important;\n        font-weight: 400 !important;\n    }\n\n    #tt_blade_[[data.uniqueId]] .heading-M h1,\n    #tt_blade_[[data.uniqueId]] .heading-M h2 {\n        font-size: 24px !important;\n        font-weight: 400 !important;\n    }\n\n    #tt_blade_[[data.uniqueId]] .headling-S h1,\n    #tt_blade_[[data.uniqueId]] .heading-S h2 {\n        font-size: 20px !important;\n        font-weight: 400 !important;\n    }\n\n    #tt_blade_[[data.uniqueId]] .headling-XS h1,\n    #tt_blade_[[data.uniqueId]] .heading-XS h2 {\n        font-size: 18px !important;\n        font-weight: 400 !important;\n    }\n\n    /*Tee shirt sizing for p copy */\n    #tt_blade_[[data.uniqueId]] .body-XXL p {\n        font-size: 28px !important;\n    }\n\n    #tt_blade_[[data.uniqueId]] .body-XL p {\n        font-size: 22px !important;\n    }\n\n    #tt_blade_[[data.uniqueId]] .body-L p {\n        font-size: 20px !important;\n    }\n\n    #tt_blade_[[data.uniqueId]] .body-M p {\n        font-size: 18px !important;\n    }\n\n    #tt_blade_[[data.uniqueId]] .body-S p {\n        font-size: 16px !important;\n    }\n\n    #tt_blade_[[data.uniqueId]] .body-XS p {\n        font-size: 14px !important;\n    }\n\n    /*Apply bold to headline, #tt_blade_[[data.uniqueId]] [class*=\"body-\"] selector for body copy if needed */\n    #tt_blade_[[data.uniqueId]] [class*=\"heading-\"].bold h1,\n    #tt_blade_[[data.uniqueId]] [class*=\"heading-\"].bold h2 {\n        font-weight: 700 !important;\n    }\n\n    #tt_blade_[[data.uniqueId]] [class*=\"body-\"].bold p {\n        font-weight: 700 !important;\n    }\n</style>\n",
    "tt_blade_responsiveFontCss": "<style data-tt-id=\"tt_blade_responsiveFontCss\" class=\"tt_blade_[[data.uniqueId]]_responsiveFontCss\" data-adobe-target-testid=\"cpro\">\n    /*Tee shirt sizing for headlines on mobile*/\n\n    @media screen and (max-width: 599px) {\n\n        #tt_blade_[[data.uniqueId]] .heading-XXL h1,\n        #tt_blade_[[data.uniqueId]] .heading-XXL h2 {\n            font-size: 36px !important;\n            font-weight: 400 !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .heading-XL h1,\n        #tt_blade_[[data.uniqueId]] .heading-XL h2 {\n            font-size: 28px !important;\n            font-weight: 400 !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .headling-L h1,\n        #tt_blade_[[data.uniqueId]] .heading-L h2 {\n            font-size: 24px !important;\n            font-weight: 400 !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .heading-M h1,\n        #tt_blade_[[data.uniqueId]] .heading-M h2 {\n            font-size: 20px !important;\n            font-weight: 400 !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .headling-S h1,\n        #tt_blade_[[data.uniqueId]] .heading-S h2 {\n            font-size: 18px !important;\n            font-weight: 400 !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .headling-XS h1,\n        #tt_blade_[[data.uniqueId]] .heading-S h2 {\n            font-size: 16px !important;\n            font-weight: 400 !important;\n        }\n\n        /*Tee shirt sizing for p copy  on mobile*/\n        #tt_blade_[[data.uniqueId]] .body-XXL p {\n            font-size: 28px !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .body-XL p {\n            font-size: 22px !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .body-L p {\n            font-size: 20px !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .body-M p {\n            font-size: 18px !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .body-S p {\n            font-size: 16px !important;\n        }\n    }\n\n    @media screen and (min-width: 600px) and (max-width: 1199px) {\n\n        /*Tee shirt sizing for headlines on tablet*/\n        #tt_blade_[[data.uniqueId]] .heading-XXL h1,\n        #tt_blade_[[data.uniqueId]] .heading-XXL h2 {\n            font-size: 36px !important;\n            font-weight: 400 !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .heading-XL h1,\n        #tt_blade_[[data.uniqueId]] .heading-XL h2 {\n            font-size: 28px !important;\n            font-weight: 400 !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .headling-L h1,\n        #tt_blade_[[data.uniqueId]] .heading-L h2 {\n            font-size: 24px !important;\n            font-weight: 400 !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .heading-M h1,\n        #tt_blade_[[data.uniqueId]] .heading-M h2 {\n            font-size: 20px !important;\n            font-weight: 400 !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .headling-S h1,\n        #tt_blade_[[data.uniqueId]] .heading-S h2 {\n            font-size: 18px !important;\n            font-weight: 400 !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .headling-XS h1,\n        #tt_blade_[[data.uniqueId]] .heading-XS h2 {\n            font-size: 16px !important;\n            font-weight: 400 !important;\n        }\n\n        /*Tee shirt sizing for p copy  on tablet*/\n        #tt_blade_[[data.uniqueId]] .body-XXL p {\n            font-size: 28px !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .body-XL p {\n            font-size: 22px !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .body-L p {\n            font-size: 20px !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .body-M p {\n            font-size: 18px !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .body-S p {\n            font-size: 16px !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .body-XS p {\n            font-size: 14px !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .body-XXS p {\n            font-size: 12px !important;\n        }\n    }\n\n    @media screen and (min-width: 1200px) {\n\n        /*Tee shirt sizing for headlines on desktop*/\n        #tt_blade_[[data.uniqueId]] .heading-XXL h1,\n        #tt_blade_[[data.uniqueId]] .heading-XXL h2 {\n            font-size: 44px !important;\n            font-weight: 400 !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .heading-XL h1,\n        #tt_blade_[[data.uniqueId]] .heading-XL h2 {\n            font-size: 36px !important;\n            font-weight: 400 !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .headling-L h1,\n        #tt_blade_[[data.uniqueId]] .heading-L h2 {\n            font-size: 28px !important;\n            font-weight: 400 !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .heading-M h1,\n        #tt_blade_[[data.uniqueId]] .heading-M h2 {\n            font-size: 24px !important;\n            font-weight: 400 !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .headling-S h1,\n        #tt_blade_[[data.uniqueId]] .heading-S h2 {\n            font-size: 20px !important;\n            font-weight: 400 !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .headling-XS h1,\n        #tt_blade_[[data.uniqueId]] .heading-XS h2 {\n            font-size: 18px !important;\n            font-weight: 400 !important;\n        }\n\n        /*Tee shirt sizing for p copy  on desktop*/\n        #tt_blade_[[data.uniqueId]] .body-XXL p {\n            font-size: 28px !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .body-XL p {\n            font-size: 22px !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .body-L p {\n            font-size: 20px !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .body-M p {\n            font-size: 18px !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .body-S p {\n            font-size: 16px !important;\n        }\n\n        #tt_blade_[[data.uniqueId]] .body-XS p {\n            font-size: 14px !important;\n        }\n    }\n\n    /*Apply bold to headline, #tt_blade_[[data.uniqueId]] [class*=\"body-\"] selector for body copy if needed */\n    #tt_blade_[[data.uniqueId]] [class*=\"heading-\"].bold h1,\n    #tt_blade_[[data.uniqueId]] [class*=\"heading-\"].bold h2 {\n        font-weight: 700 !important;\n    }\n\n    #tt_blade_[[data.uniqueId]] [class*=\"body-\"].bold p {\n        font-weight: 700 !important;\n    }\n</style>\n",
    "tt_blade_wrapper": "<div id=\"tt_blade_wrapper_[[data.uniqueId]]\" data-tt-id=\"tt_blade_wrapper\" class=\"tt_blade_wrapper\" data-adobe-target-testid=\"cpro\">\n    <!-- Mobile only container here-->\n    <!-- Main blade container -->\n    <div id=\"tt_blade_[[data.uniqueId]]\" data-tt-id=\"tt_blade_main\" class=\"flex aem-GridColumn aem-GridColumn--default--12 marquee-standard-medium-left\">\n        <style>\n\n        </style>\n        <div class=\"tt_container_bladeContents dexter-FlexContainer [[data.container_marginPaddingClasses]]\">\n            <div class=\"tt_container_mainFlex dexter-FlexContainer-Items container dexter-FlexContainer--mobileJustifyStretch dexter-FlexContainer--mobileAlignAlignmentStretch dexter-FlexContainer--mobileAlignContentStretch dexter-FlexContainer--mobileAlignItemContentStart dexter-FlexContainer--tabletJustify[[data.tablet_container_alignment]] dexter-FlexContainer--tabletAlignItemCenter  dexter-FlexContainer--desktopJustify[[data.desktop_container_alignment]] dexter-FlexContainer--desktopAlignItemCenter\">\n                <style></style>\n                <div class=\"tt_container_copy position\">\n                    <style></style>\n                    <div class=\"tt_container_copyContents dexter-Position mobile-place-relative mobile-place-left mobile-place-top [[data.copyContainer_marginPaddingClasses]] is-Editor-false\" data-animations=\"[]\">\n                        <div class=\"tt_container_copyFlex aem-Grid aem-Grid--12 aem-Grid--default--12 \">\n                            <!-- ***** Insert image icons start ***** -->\n                            <!-- COPY CONTENT INSERTED HERE-->\n                        </div>\n                    </div>\n                </div>\n                <!-- IMAGE INSERTED HERE-->\n            </div>\n        </div>\n    </div>\n    <!-- Main blade container end -->\n</div>\n",
    "tt_blade_wrapper_CSS": "<style data-tt-id=\"tt_blade_wrapper_CSS\" id=\"tt_blade_[[data.uniqueId]]_CSS\" data-adobe-target-testid=\"cpro\">\n    /*CONTAINER BACKGROUNDS*/\n\n    @media screen and (max-width: 599px) {\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents {\n            background: [[data.mobile_container_backgroundSetting]]\n        }\n    }\n\n    @media screen and (min-width: 600px) and (max-width: 1199px) {\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents {\n            background: [[data.tablet_container_backgroundSetting]]\n        }\n    }\n\n    @media screen and (min-width: 1200px) {\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents {\n            background: [[data.desktop_container_backgroundSetting]]\n        }\n    }\n\n    /*General Content CSS*/\n    #tt_blade_[[data.uniqueId]] .tt_container_bladeContents .tt_container_copy {\n        z-index: 2;\n    }\n\n    #tt_blade_[[data.uniqueId]] .tt_container_copyFlex {\n        display: flex;\n        flex-direction: column;\n    }\n\n    /*HEIGHTS AND CONTAINER ORDERS*/\n    @media screen and (max-width: 599px) {\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents>.tt_container_mainFlex {\n            min-height: [[data.mobile_container_minHeight]];\n            max-height: [[data.mobile_container_maxHeight]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents {\n            color: #2C2C2C;\n        }\n\n        /*inline image content*/\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents>.tt_container_mainFlex>.tt_container_contentImage {\n            width: [[data.mobile_mediaContainer_widthPercent]];\n            max-width: [[data.mobile_mediaContainer_widthPercent]];\n            flex: 1 1 auto;\n            min-height: auto;\n            order: 1;\n        }\n\n        /*inline video content*/\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents>.tt_container_mainFlex>.tt_container_contentVideo {\n            width: [[data.mobile_mediaContainer_widthPercent]];\n            max-width: [[data.mobile_mediaContainer_widthPercent]];\n            order: 1;\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents>.tt_container_mainFlex>.tt_container_copy {\n            width: [[data.mobile_copyContainer_widthPercent]];\n            max-width: [[data.mobile_copyContainer_widthPercent]];\n            flex: 1 1 auto;\n            min-height: auto;\n            order: 2;\n        }\n    }\n\n    @media screen and (min-width: 600px) and (max-width: 1199px) {\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents>.tt_container_mainFlex {\n            min-height: [[data.tablet_container_minHeight]];\n            max-height: [[data.tablet_container_maxHeight]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents>.tt_container_mainFlex>.tt_container_contentImage {\n            width: [[data.tablet_mediaContainer_widthPercent]];\n            max-width: [[data.tablet_mediaContainer_widthPercent]];\n            flex: 1 1 auto;\n            min-height: auto;\n            order: [[data.tablet_mediaContainer_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents>.tt_container_mainFlex>.tt_container_contentVideo {\n            width: [[data.tablet_mediaContainer_widthPercent]];\n            max-width: [[data.tablet_mediaContainer_widthPercent]];\n            order: [[data.tablet_mediaContainer_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents>.tt_container_mainFlex>.tt_container_copy {\n            width: [[data.tablet_copyContainer_widthPercent]];\n            max-width: [[data.tablet_copyContainer_widthPercent]];\n            flex: 1 1 auto;\n            min-height: auto;\n            order: [[data.tablet_copyContainer_order]];\n        }\n    }\n\n    @media screen and (min-width: 1200px) {\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents>.tt_container_mainFlex {\n            min-height: [[data.desktop_container_minHeight]];\n            max-height: [[data.desktop_container_maxHeight]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents>.tt_container_mainFlex>.tt_container_contentImage {\n            width: [[data.desktop_mediaContainer_widthPercent]];\n            max-width: [[data.desktop_mediaContainer_widthPercent]];\n            flex: 1 1 auto;\n            min-height: auto;\n            order: [[data.desktop_mediaContainer_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents>.tt_container_mainFlex>.tt_container_contentVideo {\n            width: [[data.desktop_mediaContainer_widthPercent]];\n            max-width: [[data.desktop_mediaContainer_widthPercent]];\n            order: [[data.desktop_mediaContainer_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_bladeContents>.tt_container_mainFlex>.tt_container_copy {\n            width: [[data.desktop_copyContainer_widthPercent]];\n            max-width: [[data.desktop_copyContainer_widthPercent]];\n            flex: 1 1 auto;\n            min-height: auto;\n            order: [[data.desktop_copyContainer_order]];\n        }\n    }\n\n    /*COPY CONTENTS ORDER*/\n    @media screen and (max-width: 599px) {\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_eyebrowCopy {\n            order: [[data.mobile_eyebrow_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_headlineCopy {\n            order: [[data.mobile_headlineCopy_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_bodyCopy {\n            order: [[data.mobile_bodyCopy_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_container_buttonsAnchor {\n            order: [[data.mobile_buttonBox_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_applePay {\n            order: [[data.mobile_applePay_order]];\n        }\n        /* google pLay --- important  for debugging*/\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_googlePlay {\n            order: [[data.mobile_googlePay_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_extraContainer {\n            order: [[data.mobile_extraContainer_order]]\n        }\n\n        /*shortcut - places button to bottom of blade when not a marquee*/\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_container_buttons.typeBlade {\n            order: 9;\n        }\n    }\n\n    @media screen and (min-width: 600px) and (max-width: 1199px) {\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_eyebrowCopy {\n            order: [[data.tablet_eyebrow_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_headlineCopy {\n            order: [[data.tablet_headlineCopy_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_bodyCopy {\n            order: [[data.tablet_bodyCopy_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_container_buttonsAnchor {\n            order: [[data.tablet_buttonBox_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_extraContainer {\n            order: [[data.tablet_extraContainer_order]]\n        }\n    }\n\n    @media screen and (min-width: 1200px) {\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_eyebrowCopy {\n            order: [[data.desktop_eyebrow_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_headlineCopy {\n            order: [[data.desktop_headlineCopy_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_bodyCopy {\n            order: [[data.desktop_bodyCopy_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_buttonsAnchor {\n            order: [[data.desktop_buttonBox_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_extraContainer {\n            order: [[data.desktop_extraContainer_order]]\n        }\n    }\n</style>\n",
    "tt_content_icon": "<div data-tt-id=\"tt_content_icon\" class=\"tt_content_icon image parbase aem-GridColumn aem-GridColumn--default--12\" data-adobe-target-testid=\"cpro\">\n    <div class=\"dexter-Image mobile-padding-bottom-24\">\n        <style>\n            #tt_blade_[[data.uniqueId]] .tt_content_icon .tt_content_iconImage {\n                height: [[data.content_iconHeight]];\n            }\n        </style>\n        <img class=\"tt_content_iconImage\" src=\"[[data.content_iconUrl]]\" alt=\"\">\n    </div>\n</div>\n",
    "tt_content_eyebrowCopy": "<div data-tt-id=\"tt_content_eyebrowCopy\" class=\"tt_content_eyebrowCopy text NoMargin detail-M aem-GridColumn aem-GridColumn--default--12\" data-adobe-target-testid=\"cpro\">\n    <div class=\"cmp-text mobile-padding-bottom-8 \">\n        <p style=\"font-size:[[data.content_eyebrowCopySize]];font-weight:[[data.content_eyebrowCopyFontWeight]]; padding: [[data.content_eyebrowCopyPadding]]\">\n            [[data.content_eyebrowCopy]]</p>\n    </div>\n</div>\n",
    "tt_content_headlineCopy": "<div data-tt-id=\"tt_content_headlineCopy\" class=\"tt_content_headlineCopy title NoMargin heading-[[data.content_headlineCopySize]]  aem-GridColumn aem-GridColumn--default--12\" data-adobe-target-testid=\"cpro\">\n    <div class=\"cmp-title\" style=\"padding: [[data.content_headlineCopyPadding]]\">\n        <h1 class=\"cmp-title__text\">[[data.content_headlineCopy]]</h1>\n    </div>\n</div>\n",
    "tt_content_headlineCopyH2": "<div data-tt-id=\"tt_content_headlineCopyH2\" class=\"tt_content_headlineCopy title NoMargin heading-[[data.content_headlineCopySize]]  aem-GridColumn aem-GridColumn--default--12\" data-adobe-target-testid=\"cpro\">\n    <div class=\"cmp-title \" style=\"padding: [[data.content_headlineCopyPadding]]\">\n        <h2 class=\"cmp-title__text\">[[data.content_headlineCopy]]</h2>\n    </div>\n</div>\n",
    "tt_content_iconHeadline": "<div data-tt-id=\"tt_content_iconHeadline\" class=\"tt_content_iconHeadline image parbase aem-GridColumn aem-GridColumn--default--12\" data-adobe-target-testid=\"cpro\">\n    <div class=\"dexter-Image mobile-padding-bottom-0 mobile-margin-right-[[data.content_iconHeadlinePaddingRight]]\">\n        <style>\n            #tt_blade_[[data.uniqueId]] .tt_content_iconHeadline .tt_content_iconHeadlineImage {\n                height: [[data.content_iconHeadlineHeight]];\n            }\n        </style>\n        <img class=\"tt_content_iconHeadlineImage\" src=\"[[data.content_iconHeadlineUrl]]\" alt=\"\">\n    </div>\n</div>\n",
    "tt_content_bodyCopy": "<div data-tt-id=\"tt_content_bodyCopy\" class=\"tt_content_bodyCopy text NoMargin body-[[data.content_bodyCopySize]] aem-GridColumn aem-GridColumn--default--12\" data-adobe-target-testid=\"cpro\">\n    <div class=\"cmp-text \" style=\"padding: [[data.content_bodyCopyPadding]]\">\n        <p style=\"line-height:[[data.content_bodyCopyLineHeight]]\">[[data.content_bodyCopy]]</p>\n    </div>\n</div>\n",
    "tt_content_bodyCopyHtml": "<div data-tt-id=\"tt_content_bodyCopyHtml\" class=\"tt_content_bodyCopy aem-GridColumn aem-GridColumn--default--12 \" data-adobe-target-testid=\"cpro\">\n    <div class=\"aem-GridColumn aem-GridColumn--default--12 \" style=\"padding: [[data.content_bodyCopyPadding]]\">\n        <!-- [[data.content_bodyCopy]] insert here-->\n    </div>\n</div>\n",
    "tt_content_bodyCopyHtmlInline": "<div data-tt-id=\"tt_content_bodyCopyHtmlInline\" class=\"tt_content_bodyCopy aem-GridColumn aem-GridColumn--default--12 \" data-adobe-target-testid=\"cpro\">\n    <div class=\"aem-GridColumn aem-GridColumn--default--12\" style=\"padding: [[data.content_bodyCopyPadding]]\">\n        [[data.content_bodyCopy]]\n    </div>\n</div>\n",
    "tt_container_buttonsAnchor": "<div data-tt-id=\"tt_container_buttonsAnchor\" class=\"tt_container_buttonsAnchor singleWidth flex aem-GridColumn aem-GridColumn--default--12 [[data.buttonContainer_marginPaddingClasses]]\" data-adobe-target-testid=\"cpro\">\n    <!-- Button Placement here -->\n</div>\n",
    "tt_content_applePay": "<div data-tt-id=\"tt_content_applePay\" class=\"tt_content_applePay flex dx-parlite [[data.applePay_addedClasses]]\" data-adobe-target-testid=\"cpro\">\n    <style>       \n    </style>\n    <div class=\"tt_content_applePayContents dexter-FlexContainer dexter-Background mobile-padding-top-20\">\n        <div class=\"tt_container_applePayFlex dexter-FlexContainer-Items   dexter-FlexContainer--mobileJustifyStart dexter-FlexContainer--mobileAlignItemCenter dexter-FlexContainer--mobileAlignContentCenter dexter-FlexContainer--mobileAlignItemContentCenter\">\n            <div class=\"tt_content_applePayImage image parbase\">\n                <div class=\"dexter-Image\">\n                    <style>\n                    </style>\n                    <img src=\"[[data.applePay_imageUrl]]\" class=\"tt_content_applePayImageElement dexter-LazyImage \" alt=\"Apple Pay Logo\">\n                </div>\n            </div>\n            <div class=\"tt_content_applePayText\" style=\"padding-left:12px\">[[data.applePay_message]]</div>\n        </div>\n    </div>\n</div>\n",
    "tt_content_applePay_CSS": "<style data-tt-id=\"tt_content_applePay_CSS\" id=\"tt_content_applePay_[[data.uniqueId]]_CSS\" data-adobe-target-testid=\"cpro\">\n    #tt_blade_[[data.uniqueId]] .tt_content_applePay {\n        width: [[data.applePay_width]];\n        height: [[data.applePay_height]];;\n    }\n\n    #tt_blade_[[data.uniqueId]] .tt_content_applePayImageElement {\n        width: [[data.applePay_imageWidth]];\n    }\n\n    #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_applePayContents>.dexter-FlexContainer-Items>.tt_content_applePayImage {\n        flex: 0 0 auto;\n        width: auto;\n        min-height: auto;\n    }\n\n    #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_applePayContents>.dexter-FlexContainer-Items>.tt_content_applePayCopy {\n        width: 75%;\n        flex: 1 1 auto;\n        min-height: auto;\n    }\n\n    #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_applePayContents {\n        /* color: #000000;  */\n        color: [[data.content_textColor_mobile]]\n    }\n\n    #tt_blade_[[data.uniqueId]] .tt_content_applePayText {\n        font-size: [[data.applePay_messageTextSize]] !important;\n    }\n</style>\n",
    "tt_content_googlePlay": "<div data-tt-id=\"tt_content_googlePlay\" class=\"tt_content_googlePlay flex dx-parlite [[data.googlePay_addedClasses]]\" data-adobe-target-testid=\"cpro\">\n    <style>\n    </style>\n    <div class=\"tt_content_googlePlayContents dexter-FlexContainer dexter-Background mobile-padding-top-20\">\n        <div class=\"tt_container_googlePlayFlex dexter-FlexContainer-Items dexter-FlexContainer--mobileJustifyStart dexter-FlexContainer--mobileAlignItemCenter dexter-FlexContainer--mobileAlignContentCenter dexter-FlexContainer--mobileAlignItemContentCenter\">\n            <div class=\"tt_content_googlePlayImage image parbase\">\n                <div class=\"dexter-Image\">\n                    <style>\n                    </style>\n                    <img src=\"[[data.googlePay_imageUrl]]\" class=\"tt_content_googleplayImageElement dexter-LazyImage \" alt=\"Google Play Logo\">\n                </div>\n            </div>\n            <div class=\"tt_content_googlePlayText\">[[data.googlePay_message]]</div>\n        </div>\n    </div>\n</div>\n",
    "tt_content_googlePlay_CSS": "<style data-tt-id=\"tt_content_googlePlay_CSS\" id=\"tt_content_googlePlay_[[data.uniqueId]]_CSS\" data-adobe-target-testid=\"cpro\">\n    #tt_blade_[[data.uniqueId]] .tt_content_googleplayImageElement {\n        width: [[data.googlePay_imageWidth]];\n    }\n\n    #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_googlePlayContents > .dexter-FlexContainer-Items > .tt_content_googlePlayImage {\n        flex: 0 0 auto;\n        width: auto;\n        min-height: auto;\n    }\n\n    #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_googlePlayContents >.dexter-FlexContainer-Items> .tt_content_googlePlayText {\n        width: 75%;\n        flex: 1 1 auto;\n        min-height: auto;\n    }\n\n    #tt_blade_[[data.uniqueId]] .tt_container_copyFlex .tt_content_googlePlayContents {\n        /* color: #000000;  */\n        color: [[data.content_textColor_mobile]]\n    }\n\n    #tt_blade_[[data.uniqueId]] .tt_content_googlePlayText {\n        font-size: [[data.googlePay_messageTextSize]] !important;\n    }\n</style>\n",
    "tt_component_videoWrapper": "<div data-tt-id=\"tt_component_videoWrapper\" class=\"tt_videoWrapper video-Wrapper crop-video \" data-adobe-target-testid=\"cpro\">\n    <video class=\"[[data.video_playOnBreakpoints]]\" preload=\"metadata\" data-poster=\"[[data.video_posterUrl]]\" poster=\"[[data.video_posterUrl]]\" playsinline=\"true\" muted=\"true\">\n        <source src=\"[[data.video_sourceUrl]] \" type=\"video/mp4\">\n    </video>\n</div>\n",
    "tt_container_contentImage": "<div data-tt-id=\"tt_container_contentImage\" class=\"tt_container_contentImage image parbase\" data-adobe-target-testid=\"cpro\">\n    <div class=\"dexter-Image dexter-Image-center dexter-Image-tablet-center dexter-Image-desktop-right [[data.mediaContainer_marginPaddingClasses]]\">\n        <picture>\n            <img class=\"tt_content_addedImage [[data.addedImage_addedClasses]]\" src=\"[[data.addedImage_url]]\" alt=\"[[data.addedImage_altCopy]]\">\n        </picture>\n    </div>\n</div>\n",
    "tt_content_addedImage_CSS": "<style data-tt-id=\"tt_content_addedImage_CSS\" id=\"tt_content_addedImage_[[data.uniqueId]]_CSS\" data-adobe-target-testid=\"cpro\">\n    #tt_blade_[[data.uniqueId]] .tt_container_contentImage {\n        z-index: 2;\n    }\n\n    @media (max-width: 599px) {\n        #tt_blade_[[data.uniqueId]] .tt_container_contentImage {\n            display: [[data.addedImage_display_mobile]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_content_addedImage {\n            width: auto;\n            padding: [[data.addedImage_padding_mobile]];\n            min-height: [[data.addedImage_minHeight_mobile]];\n            max-height: [[data.addedImage_maxHeight_mobile]];\n            min-width: [[data.addedImage_minWidth_mobile]];\n            max-width: [[data.addedImage_maxWidth_mobile]];\n        }\n    }\n\n    @media screen and (min-width: 600px) and (max-width: 1199px) {\n        #tt_blade_[[data.uniqueId]] .tt_container_contentImage {\n            width: 50%;\n            max-width: 50%;\n            flex: 1 1 auto;\n            min-height: auto;\n            order: [[data.tablet_mediaContainer_order]];\n            display: [[data.addedImage_display_tablet]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_content_addedImage {\n            width: auto;\n            padding: [[data.addedImage_padding_tablet]];\n            min-height: [[data.addedImage_minHeight_tablet]];\n            max-height: [[data.addedImage_maxHeight_tablet]];\n            min-width: [[data.addedImage_minWidth_tablet]];\n            max-width: [[data.addedImage_maxWidth_tablet]];\n        }\n    }\n\n    @media screen and (min-width: 1200px) {\n        #tt_blade_[[data.uniqueId]] .tt_container_contentImage {\n            order: [[data.desktop_mediaContainer_order]];\n            display: [[data.addedImage_display_desktop]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_content_addedImage {\n            width: auto;\n            padding: [[data.addedImage_padding_desktop]];\n            min-height: [[data.addedImage_minHeight_desktop]];\n            max-height: [[data.addedImage_maxHeight_desktop]];\n            min-width: [[data.addedImage_minWidth_desktop]];\n            max-width: [[data.addedImage_maxWidth_desktop]];\n        }\n    }\n</style>\n",
    "tt_container_contentVideo": "<div data-tt-id=\"tt_container_contentVideo\" class=\"tt_container_contentVideo flex\" data-adobe-target-testid=\"cpro\">\n    <div class=\"tt_content_addedVideo dexter-FlexContainer has-video \">\n        <div class=\"video-Wrapper crop-content has-playOnView [[data.mediaContainer_marginPaddingClasses]]\">\n            <video class=\"[[data.addedContentVideo_playOnBreakpoints]]\" preload=\"metadata\" playsinline=\"\" muted=\"\">\n                <source src=\"[[data.addedContentVideo_url]]\" type=\"video/mp4\">\n            </video>\n        </div>\n        <div class=\"dexter-FlexContainer-Items crop-content  dexter-FlexContainer--mobileJustifyStretch dexter-FlexContainer--mobileAlignAlignmentStretch dexter-FlexContainer--mobileAlignContentStretch dexter-FlexContainer--mobileAlignItemContentStart\">\n        </div>\n    </div>\n</div>\n",
    "tt_content_addedVideo_CSS": "<style data-tt-id=\"tt_content_addedVideo_CSS\" id=\"tt_content_addedVideo_[[data.uniqueId]]_CSS\" data-adobe-target-testid=\"cpro\">\n    @media screen and (max-width: 599px) {\n        #tt_blade_[[data.uniqueId]] .tt_container_contentVideo {\n            display: [[data.addedContentVideo_display_mobile]];\n            padding: [[data.addedContentVideo_padding_mobile]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_content_addedVideo> .video-Wrapper {\n            height: auto;\n            min-height: [[data.addedContentVideo_minHeight_mobile]];\n            max-height: [[data.addedContentVideo_maxHeight_mobile]];\n            min-width: [[data.addedContentVideo_minWidth_mobile]];\n            max-width: [[data.addedContentVideo_maxWidth_mobile]];\n        }\n    }\n\n    @media screen and (min-width: 600px) and (max-width: 1199px) {\n        #tt_blade_[[data.uniqueId]] .tt_container_contentVideo {\n            display: [[data.addedContentVideo_display_tablet]];\n            padding: [[data.addedContentVideo_padding_tablet]];\n            width: 50%;\n            max-width: 50%;\n            order: [[data.tablet_mediaContainer_order]];\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_content_addedVideo> .video-Wrapper {\n            height: auto;\n            min-height: [[data.addedContentVideo_minHeight_tablet]];\n            max-height: [[data.addedContentVideo_maxHeight_tablet]];\n            min-width: [[data.addedContentVideo_minWidth_tablet]];\n            max-width: [[data.addedContentVideo_maxWidth_tablet]];\n        }\n    }\n\n    @media screen and (min-width: 1200px) {\n        #tt_blade_[[data.uniqueId]] .tt_container_contentVideo {\n            display: [[data.addedContentVideo_display_desktop]];\n            padding: [[data.addedContentVideo_padding_desktop]];\n            order: [[data.desktop_mediaContainer_order]];\n            z-index: 2;\n        }\n\n        #tt_blade_[[data.uniqueId]] .tt_content_addedVideo> .video-Wrapper {\n            height: auto;\n            min-height: [[data.addedContentVideo_minHeight_desktop]];\n            max-height: [[data.addedContentVideo_maxHeight_desktop]];\n            min-width: [[data.addedContentVideo_minWidth_desktop]];\n            max-width: [[data.addedContentVideo_maxWidth_desktop]];\n        }\n    }\n</style>\n",
    "tt_content_extraContainer": "<div data-tt-id=\"tt_content_extraContainer\" class=\"tt_content_extraContainer text NoMargin aem-GridColumn aem-GridColumn--default--12\" data-adobe-target-testid=\"cpro\">\n    <div class=\"cmp-text mobile-padding-top-16\">\n        [[data.content_extraContainerContent]]\n    </div>\n</div>\n",
    "tt_container_heroImage": "<div data-tt-id=\"tt_container_heroImage\" class=\"tt_container_heroImage image parbase aem-GridColumn--tablet--hide aem-GridColumn--offset--tablet--0 aem-GridColumn--phone--none aem-GridColumn--default--hide aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--hide aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0 aem-GridColumn--tablet--hide dexter-Background\" data-adobe-target-testid=\"cpro\">\n    <div class=\"dexter-Image dexter-Image-center dexter-Image-tablet-center\">\n        <style>\n\n        </style>\n        <picture class=\"dexter-LazyImage\">\n            <source data-srcset=\"[[data.heroImage_imageUrl]]\" srcset=\"[[data.heroImage_imageUrl]]\" media=\"(min-width: 1200px)\">\n            <source data-srcset=\"[[data.heroImage_imageUrl_tablet]]\" srcset=\"[[data.heroImage_imageUrl_tablet]]\" media=\"(min-width: 600px)\">\n            <source data-srcset=\"[[data.heroImage_imageUrl_mobile]]\" srcset=\"[[data.heroImage_imageUrl_mobile]]\" media=\"(max-width: 599px)\">\n            <img class=\"tt_content_heroImageImage\" src=\"[[data.heroImage_imageUrl]]\" alt=\"\">\n        </picture>\n    </div>\n</div>\n",
    "tt_container_heroImage_CSS": "<style data-tt-id=\"tt_container_heroImage_CSS\" id=\"tt_container_heroImage_[[data.uniqueId]]_CSS\" data-adobe-target-testid=\"cpro\">\n    /*addNew -this container is empty, but should be selected per breakpoint*/\n    /* #tt_blade_wrapper_[[data.uniqueId]] .tt_container_heroImage {} */\n\n    @media screen and (max-width: 599px) {\n\n        /*addNew -added background setting to heroImage container per brakpoint*/\n        #tt_blade_wrapper_[[data.uniqueId]] .tt_container_heroImage {\n            background: [[data.heroImage_backgroundSetting_mobile]];\n            order: [[data.mobile_heroImageContainer_order]];\n        }\n\n        #tt_blade_wrapper_[[data.uniqueId]] .tt_content_heroImageImage {\n            width: 100vw;\n            padding: [[data.heroImage_imagePadding_mobile]];\n        }\n    }\n\n    @media (min-width: 600px) and (max-width: 1199px) {\n\n        /*addNew -added background setting to heroImage container per brakpoint*/\n        #tt_blade_wrapper_[[data.uniqueId]] .tt_container_heroImage {\n            background: [[data.heroImage_backgroundSetting_tablet]]; \n            order: [[data.tablet_heroImageContainer_order]];\n        }\n\n        #tt_blade_wrapper_[[data.uniqueId]] .tt_content_heroImageImage {\n            display: [[data.heroImage_displayOnTablet]] !important;\n            width: 100vw;\n            padding: [[data.heroImage_imagePadding_tablet]];\n        }\n    }\n\n    @media (min-width: 1200px) {\n\n        /*addNew -added background setting to heroImage container per brakpoint*/\n        #tt_blade_wrapper_[[data.uniqueId]] .tt_container_heroImage {\n            background: [[data.heroImage_backgroundSetting_desktop]]; \n            order: [[data.desktop_heroImageContainer_order]];\n        }\n\n        #tt_blade_wrapper_[[data.uniqueId]] .tt_content_heroImageImage {\n            display: none !important;\n            width: 100vw;\n            padding: [[data.heroImage_imagePadding]];\n        }\n    }\n</style>\n",
    "tt_container_heroVideo": "<div data-tt-id=\"tt_container_heroVideo\" class=\"tt_container_heroVideo video-Wrapper crop-video \" data-adobe-target-testid=\"cpro\">\n    <video class=\"[[data.heroImageVideo_playOnBreakpoints]]\" preload=\"metadata\" data-poster=\"[[data.video_posterUrl]]\" poster=\"[[data.video_posterUrl]]\">\n        <source src=\"[[data.heroImageVideo_videoUrl]]\" type=\"video/mp4\">\n    </video>\n</div>\n",
    "tt_buttons_CSS": "<style data-tt-id=\"tt_buttons_CSS\" data-adobe-target-testid=\"cpro\">\n    .desktop-show, .tablet-show, .mobile-show {display: none;}\n    .tt_buttons_container {\n        margin: -10px;\n        font-smoothing: antialiased;\n        -moz-font-smoothing: antialiased;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    .tt_buttons_container .spectrum-Button-label { white-space: nowrap; }\n    .tt_buttons_container .dexter-FlexContainer-Items { align-items:center; /*width:fit-content;*/ }\n    .tt_buttons_container .dexter-FlexContainer-Items > * {\n        border: 0 solid transparent;\n        border-width: 10px!important;\n        width: 100%;\n        max-width: 100%;\n        flex: 0 0 auto;\n        min-height: auto;\n    }\n    /*.tt_buttons_container .horizontal > * { width:auto; }\n    .tt_buttons_container .horizontal .dexter-Cta > * { display: inline-flex; }*/\n\n    .tt_buttons_container .pill-button .dexter-Cta > * {\n        border-radius: 15px;\n        border-style: solid;\n        border-width: 2px;\n        font-size: 15px;\n        line-height: 19px;\n        font-weight: 700;\n        height: auto;\n        min-height: 30px;\n        min-width: 72px;\n        padding: 0 13px;\n        padding-bottom: 2px!important;\n        border-color: transparent;\n        -webkit-appearance: none;\n        user-select: none;\n        cursor: pointer;\n        transition: background .13s ease-out,border-color .13s ease-out,color .13s ease-out,box-shadow .13s ease-out;\n        display: flex;\n    }\n    .tt_buttons_container .pill-button a:focus,\n    .tt_buttons_container .pill-button a:visited {\n        text-decoration: none;\n    }\n    .tt_buttons_container .horizontal { flex-direction: row; align-items: center; justify-content: flex-start; }\n    .tt_buttons_container .horizontal-center { flex-direction: row; align-items: center; justify-content: center; }\n    .tt_buttons_container .horizontal-right { flex-direction: row; align-items: center; justify-content: flex-end; width: auto !important; }\n    .tt_buttons_container .vertical { flex-direction: column; align-items: flex-start; justify-content: flex-start; }\n    .tt_buttons_container .vertical-center { flex-direction: column; align-items: center; justify-content: center; width: auto; }\n    \n    .tt_buttons_container .cta.regular-width { width:fit-content; }\n    .tt_buttons_container .regular-width > * { width:auto; }\n    .tt_buttons_container .regular-width .dexter-Cta > * { display: inline-flex; }\n    .tt_buttons_container .cta.full-width { width:100%; }\n    .tt_buttons_container .full-width { width:auto; }\n    .tt_buttons_container .full-width > * { width:100% !important; }\n    .tt_buttons_container .full-width .dexter-Cta > * { display: flex; }\n\n    .tt_buttons_container .size-small .dexter-Cta > * { font-size:15px; line-height:19px; }\n    .tt_buttons_container .size-small .pill-button .dexter-Cta > *,\n    .tt_buttons_container .size-small.pill-button .dexter-Cta > * {border-radius:15px; padding:0 13px; min-height:30px;}\n    .tt_buttons_container .size-medium .dexter-Cta > * { font-size:17px; line-height:21px; }\n    .tt_buttons_container .size-medium .pill-button .dexter-Cta > *,\n    .tt_buttons_container .size-medium.pill-button .dexter-Cta > * {border-radius:20px; padding:0 18px; min-height:40px;}\n    .tt_buttons_container .size-large .dexter-Cta > * { font-size:19px; line-height:24px; }\n    .tt_buttons_container .size-large .pill-button .dexter-Cta > *,\n    .tt_buttons_container .size-large.pill-button .dexter-Cta > * {border-radius:25px; padding:0 23px; min-height:50px;}\n    .tt_buttons_container .size-xlarge .dexter-Cta > * { font-size:22px; line-height:27px; }\n    .tt_buttons_container .size-xlarge .pill-button .dexter-Cta > *,\n    .tt_buttons_container .size-xlarge.pill-button .dexter-Cta > * {border-radius:30px; padding:0 28px; min-height:60px;}\n\n    .tt_buttons_container .dexter-FlexContainer-Items > .white-link .dexter-Cta > * { color: #fff;}\n    .tt_buttons_container .dexter-FlexContainer-Items > .black-link .dexter-Cta > * { color: #000;}\n    .tt_buttons_container .dexter-FlexContainer-Items > .blue-button .dexter-Cta > * { background-color: #0469e3; color: #fff; }\n    .tt_buttons_container .dexter-FlexContainer-Items > .blue-button .dexter-Cta > *:hover { background-color: #0057be; text-decoration: none; }\n    .tt_buttons_container .dexter-FlexContainer-Items > .black-button .dexter-Cta > * { background-color: #000; color: #fff; }\n    .tt_buttons_container .dexter-FlexContainer-Items > .black-button .dexter-Cta > *:hover { /*background-color: transparent; border-color:#000; color:#000;*/ text-decoration: none; }\n    .tt_buttons_container .dexter-FlexContainer-Items > .white-button .dexter-Cta > * { background-color: #fff; color: #000; }\n    .tt_buttons_container .dexter-FlexContainer-Items > .white-button .dexter-Cta > *:hover { /*background-color: #d9d9d9;*/ text-decoration: none; }\n    .tt_buttons_container .dexter-FlexContainer-Items > .black-outline-button .dexter-Cta > * { background-color: transparent; border-color:#000; color:#000; }\n    .tt_buttons_container .dexter-FlexContainer-Items > .black-outline-button .dexter-Cta > *:hover { background-color: rgba(0,0,0,.25); text-decoration: none; }\n    .tt_buttons_container .dexter-FlexContainer-Items > .white-outline-button-v2 .dexter-Cta > *,\n    .tt_buttons_container .dexter-FlexContainer-Items > .white-outline-button .dexter-Cta > * { background-color: transparent; border-color:#fff; color:#fff; }\n    .tt_buttons_container .dexter-FlexContainer-Items > .white-outline-button-v2 .dexter-Cta > *:hover { background-color: #fff; color: #000; text-decoration: none; }\n    .tt_buttons_container .dexter-FlexContainer-Items > .white-outline-button .dexter-Cta > *:hover { background-color: hsla(0,0%,100%,.25);; text-decoration: none; }\n    .tt_buttons_container .dexter-FlexContainer-Items > .grey-outline-button .dexter-Cta > * { background-color: transparent; border-color:#505050; color:#505050; }\n    .tt_buttons_container .dexter-FlexContainer-Items > .grey-outline-button .dexter-Cta > *:hover { background-color: #505050; color: #fff; text-decoration: none; }\n    \n    /* Tablet and bigger only styling */\n    @media screen and (min-width: 600px) {\n        .tablet-show {display: inherit;}\n        .tablet-hide {display: none;}\n        .tt_buttons_container .dexter-FlexContainer-Items > * {\n            width: auto;\n            flex: 0 0 auto;\n        }\n    }\n    /* Phone only styling */\n    @media screen and (max-width: 599px) {\n        .mobile-hide {display: none;}\n        .mobile-show {display: inherit;}\n        .tt_buttons_container .mobile-horizontal { flex-direction: row; align-items: center; justify-content: flex-start; /*width: fit-content;*/ }\n        .tt_buttons_container .mobile-horizontal-center { flex-direction: row; align-items: center; justify-content: center; width: auto; /*width: fit-content; margin-left:auto; margin-right: auto;*/}\n        .tt_buttons_container .mobile-horizontal-right { flex-direction: row; align-items: center; justify-content: flex-end; width: auto !important; /*width: fit-content; margin-left:auto;*/ }\n        .tt_buttons_container .mobile-vertical { flex-direction: column; align-items: flex-start; justify-content: flex-start; }\n        .tt_buttons_container .mobile-vertical-center { flex-direction: column; align-items: center; justify-content: center; width: auto; }\n\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-order-1 { order:1 !important; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-order-2 { order:2 !important; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-order-3 { order:3 !important; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-order-4 { order:4 !important; }\n\n        .tt_buttons_container .cta.mobile-regular-width { width:fit-content; } /*Needed to make sure buttons are not stacked if regular width set on button level*/\n        .tt_buttons_container .mobile-regular-width > * { width:auto; }\n        .tt_buttons_container .mobile-regular-width .dexter-Cta > * { display: inline-flex; }\n        .tt_buttons_container .mobile-full-width { width:auto; }\n        .tt_buttons_container .mobile-full-width > * { width:100% !important; }\n        .tt_buttons_container .mobile-full-width .dexter-Cta > * { display: flex; }\n\n        .tt_buttons_container .mobile-size-small .dexter-Cta > * { font-size:15px; line-height:19px; }\n        .tt_buttons_container .mobile-size-small .pill-button .dexter-Cta > *,\n        .tt_buttons_container .mobile-size-small.pill-button .dexter-Cta > * {border-radius:15px; padding:0 13px; min-height:30px;}\n        .tt_buttons_container .mobile-size-medium .dexter-Cta > * { font-size:17px; line-height:21px; }\n        .tt_buttons_container .mobile-size-medium .pill-button .dexter-Cta > *,\n        .tt_buttons_container .mobile-size-medium.pill-button .dexter-Cta > * {border-radius:20px; padding:0 18px; min-height:40px;}\n        .tt_buttons_container .mobile-size-large .dexter-Cta > * { font-size:19px; line-height:24px; }\n        .tt_buttons_container .mobile-size-large .pill-button .dexter-Cta > *,\n        .tt_buttons_container .mobile-size-large.pill-button .dexter-Cta > * {border-radius:25px; padding:0 23px; min-height:50px;}\n        .tt_buttons_container .mobile-size-xlarge .dexter-Cta > * { font-size:22px; line-height:27px; }\n        .tt_buttons_container .mobile-size-xlarge .pill-button .dexter-Cta > *,\n        .tt_buttons_container .mobile-size-xlarge.pill-button .dexter-Cta > * {border-radius:30px; padding:0 28px; min-height:60px;}\n\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-white-link .dexter-Cta > * { color: #fff;}\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-black-link .dexter-Cta > * { color: #000;}\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-blue-button .dexter-Cta > * { background-color: #0469e3; color: #fff; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-blue-button .dexter-Cta > *:hover { background-color: #0057be; text-decoration: none; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-black-button .dexter-Cta > * { background-color: #000; color: #fff; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-black-button .dexter-Cta > *:hover { background-color: transparent; border-color:#000; color:#000; text-decoration: none; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-black-outline-button .dexter-Cta > * { background-color: transparent; border-color:#000; color:#000; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-black-outline-button .dexter-Cta > *:hover { background-color: rgba(0,0,0,.25); text-decoration: none; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-white-outline-button-v2 .dexter-Cta > *,\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-white-outline-button .dexter-Cta > * { background-color: transparent; border-color:#fff; color:#fff; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-white-outline-button-v2 .dexter-Cta > *:hover { background-color: #fff; color: #000; text-decoration: none; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-white-outline-button .dexter-Cta > *:hover { background-color: hsla(0,0%,100%,.25);; text-decoration: none; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-grey-outline-button .dexter-Cta > * { background-color: transparent; border-color:#505050; color:#505050; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .mobile-grey-outline-button .dexter-Cta > *:hover { background-color: #505050; color: #fff; text-decoration: none; }\n    }\n    /* Tablet only styling */\n    @media screen and (min-width: 600px) and (max-width: 1199px) {\n        .tt_buttons_container .tablet-horizontal { flex-direction: row; align-items: center; justify-content: flex-start; }\n        .tt_buttons_container .tablet-horizontal-center { flex-direction: row; align-items: center; justify-content: center; width: auto; }\n        .tt_buttons_container .tablet-horizontal-right { flex-direction: row; align-items: center; justify-content: flex-end; width: auto !important; }\n        .tt_buttons_container .tablet-vertical { flex-direction: column; align-items: flex-start; justify-content: flex-start; }\n        .tt_buttons_container .tablet-vertical-center { flex-direction: column; align-items: center; justify-content: center; width: auto; }\n\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-order-1 { order:1 !important; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-order-2 { order:2 !important; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-order-3 { order:3 !important; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-order-4 { order:4 !important; }\n\n        .tt_buttons_container .cta.tablet-regular-width { width:fit-content; }\n        .tt_buttons_container .tablet-regular-width > * { width:auto; }\n        .tt_buttons_container .tablet-regular-width .dexter-Cta > * { display: inline-flex; }\n        .tt_buttons_container .tablet-full-width { width:auto; }\n        .tt_buttons_container .tablet-full-width > * { width:100% !important; }\n        .tt_buttons_container .tablet-full-width .dexter-Cta > * { display: flex; }\n\n        .tt_buttons_container .tablet-size-small .dexter-Cta > * { font-size:15px; line-height:19px; }\n        .tt_buttons_container .tablet-size-small .pill-button .dexter-Cta > *,\n        .tt_buttons_container .tablet-size-small.pill-button .dexter-Cta > * {border-radius:15px; padding:0 13px; min-height:30px;}\n        .tt_buttons_container .tablet-size-medium .dexter-Cta > * { font-size:17px; line-height:21px; }\n        .tt_buttons_container .tablet-size-medium .pill-button .dexter-Cta > *,\n        .tt_buttons_container .tablet-size-medium.pill-button .dexter-Cta > * {border-radius:20px; padding:0 18px; min-height:40px;}\n        .tt_buttons_container .tablet-size-large .dexter-Cta > * { font-size:19px; line-height:24px; }\n        .tt_buttons_container .tablet-size-large .pill-button .dexter-Cta > *,\n        .tt_buttons_container .tablet-size-large.pill-button .dexter-Cta > * {border-radius:25px; padding:0 23px; min-height:50px;}\n        .tt_buttons_container .tablet-size-xlarge .dexter-Cta > * { font-size:22px; line-height:27px; }\n        .tt_buttons_container .tablet-size-xlarge .pill-button .dexter-Cta > *,\n        .tt_buttons_container .tablet-size-xlarge.pill-button .dexter-Cta > * {border-radius:30px; padding:0 28px; min-height:60px;}\n        \n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-white-link .dexter-Cta > * { color: #fff;}\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-black-link .dexter-Cta > * { color: #000;}\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-blue-button .dexter-Cta > * { background-color: #0469e3; color: #fff; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-blue-button .dexter-Cta > *:hover { background-color: #0057be; text-decoration: none; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-black-button .dexter-Cta > * { background-color: #000; color: #fff; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-black-button .dexter-Cta > *:hover { background-color: transparent; border-color:#000; color:#000; text-decoration: none; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-black-outline-button .dexter-Cta > * { background-color: transparent; border-color:#000; color:#000; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-black-outline-button .dexter-Cta > *:hover { background-color: rgba(0,0,0,.25); text-decoration: none; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-white-outline-button-v2 .dexter-Cta > *,\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-white-outline-button .dexter-Cta > * { background-color: transparent; border-color:#fff; color:#fff; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-white-outline-button-v2 .dexter-Cta > *:hover { background-color: #fff; color: #000; text-decoration: none; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-white-outline-button .dexter-Cta > *:hover { background-color: hsla(0,0%,100%,.25);; text-decoration: none; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-grey-outline-button .dexter-Cta > * { background-color: transparent; border-color:#505050; color:#505050; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .tablet-grey-outline-button .dexter-Cta > *:hover { background-color: #505050; color: #fff; text-decoration: none; }\n    }\n\n    /* Desktop only styling */\n    @media screen and (min-width: 1200px) {\n        .desktop-hide, .tablet-show {display: none;}\n        .tablet-hide, .desktop-show {display: inherit;}\n        .tt_buttons_container .desktop-horizontal { flex-direction: row; align-items: center; justify-content: flex-start; }\n        .tt_buttons_container .desktop-horizontal-center { flex-direction: row; align-items: center; justify-content: center; width: auto; }\n        .tt_buttons_container .desktop-horizontal-right { flex-direction: row; align-items: center; justify-content: flex-end; width: auto!important; }\n        .tt_buttons_container .desktop-vertical { flex-direction: column; align-items: flex-start; justify-content: flex-start; }\n        .tt_buttons_container .desktop-vertical-center { flex-direction: column; align-items: center; justify-content: center; width: auto; }\n\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-order-1 { order:1 !important; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-order-2 { order:2 !important; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-order-3 { order:3 !important; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-order-4 { order:4 !important; }\n\n        .tt_buttons_container .cta.desktop-regular-width { width:fit-content; }\n        .tt_buttons_container .desktop-regular-width > * { width:auto; }\n        .tt_buttons_container .desktop-regular-width .dexter-Cta > * { display: inline-flex; }\n        .tt_buttons_container .desktop-full-width { width:auto; }\n        .tt_buttons_container .desktop-full-width > * { width:100% !important; }\n        .tt_buttons_container .desktop-full-width .dexter-Cta > * { display: flex; }\n\n        .tt_buttons_container .desktop-size-small .dexter-Cta > * { font-size:15px; line-height:19px; }\n        .tt_buttons_container .desktop-size-small .pill-button .dexter-Cta > *,\n        .tt_buttons_container .desktop-size-small.pill-button .dexter-Cta > * {border-radius:15px; padding:0 13px; min-height:30px;}\n        .tt_buttons_container .desktop-size-medium .dexter-Cta > * { font-size:17px; line-height:21px; }\n        .tt_buttons_container .desktop-size-medium .pill-button .dexter-Cta > *,\n        .tt_buttons_container .desktop-size-medium.pill-button .dexter-Cta > * {border-radius:20px; padding:0 18px; min-height:40px;}\n        .tt_buttons_container .desktop-size-large .dexter-Cta > * { font-size:19px; line-height:24px; }\n        .tt_buttons_container .desktop-size-large .pill-button .dexter-Cta > *,\n        .tt_buttons_container .desktop-size-large.pill-button .dexter-Cta > * {border-radius:25px; padding:0 23px; min-height:50px;}\n        .tt_buttons_container .desktop-size-xlarge .dexter-Cta > * { font-size:22px; line-height:27px; }\n        .tt_buttons_container .desktop-size-xlarge .pill-button .dexter-Cta > *,\n        .tt_buttons_container .desktop-size-xlarge.pill-button .dexter-Cta > * {border-radius:30px; padding:0 28px; min-height:60px;}\n\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-white-link .dexter-Cta > * { color: #fff;}\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-black-link .dexter-Cta > * { color: #000;}\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-blue-button .dexter-Cta > * { background-color: #0469e3; color: #fff; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-blue-button .dexter-Cta > *:hover { background-color: #0057be; text-decoration: none; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-black-button .dexter-Cta > * { background-color: #000; color: #fff; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-black-button .dexter-Cta > *:hover { background-color: transparent; border-color:#000; color:#000; text-decoration: none; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-black-outline-button .dexter-Cta > * { background-color: transparent; border-color:#000; color:#000; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-black-outline-button .dexter-Cta > *:hover { background-color: rgba(0,0,0,.25); text-decoration: none; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-white-outline-button-v2 .dexter-Cta > *,\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-white-outline-button .dexter-Cta > * { background-color: transparent; border-color:#fff; color:#fff; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-white-outline-button-v2 .dexter-Cta > *:hover { background-color: #fff; color: #000; text-decoration: none; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-white-outline-button .dexter-Cta > *:hover { background-color: hsla(0,0%,100%,.25);; text-decoration: none; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-grey-outline-button .dexter-Cta > * { background-color: transparent; border-color:#505050; color:#505050; }\n        .tt_buttons_container .dexter-FlexContainer-Items > .desktop-grey-outline-button .dexter-Cta > *:hover { background-color: #505050; color: #fff; text-decoration: none; }\n    }\n</style>\n"
};

// eslint-disable-next-line no-undef
atOffer.buildModal = function(settings, modalId, mutationObserver) {
    var app = this;
    var pageHash = window.location.hash;
    //var registeredEvents = ['click', 'touchstart'];
    //this.log('modalId = '+ modalId);
    if (this.$('.dexter-Modal_overlay #' + modalId)) {
        this.log('found existing modal ' + modalId + ' - not updating or creating a new modal.');
    } else {
        createModal();
        attachLinkEvents();
        attachModalEvents();
        lazyLoad();
    }
    if (mutationObserver) {
        var array = mutationObserver;
        //this.log('mutation0 = '+ array[0]);
        //this.log('mutation1 = '+ array[1]);
        this.$$(array[0], (el) => {
            attachMutationObserver(el, array[1], modalId);
        });
    }

    function createModal() {
        //if(settings.modalType === 'dexter'){
        if (!app.$('.modalContainer.parsys')) {
            app.insertHTML({
                templateHtml: app.html.ttDexterModalContainer
            });
        }
        app.insertHTML({
            templateHtml: app.html.ttDexterModal,
            position: 'beforeEnd',
            element: '.modalContainer.parsys',
            data: {
                modalId: modalId,
                modalLabel: settings.modalLabel,
                modalHeight: (settings.modalHeight && settings.modalHeight !== '' ? settings.modalHeight : '680px')
            }
        });
        if (settings.contentType === 'iframe') {
            app.insertHTML({
                templateHtml: app.html.ttModalIframe,
                position: 'afterBegin',
                element: '#' + modalId + '-modalContent',
                data: {
                    modalId: modalId,
                    iframeSrc: settings.contentSrc,
                    modalHeight: (settings.modalHeight && settings.modalHeight !== '' ? settings.modalHeight : '680px')
                }
            });
        } else {
            app.insertHTML({
                templateHtml: app.html[settings.contentSrc],
                position: 'afterBegin',
                element: '#' + modalId + '-modalContent',
            });
        }
        //}
    }

    function attachLinkEvents() {
        // Search for links to modal and add eventListener
        app.$$('a[href="#' + modalId + '"], [data-modal-link="' + modalId + '"]', (elem) => {
            //registeredEvents.forEach((evnt) => {
            elem.addEventListener('click', (event) => {
                pageHash = window.location.hash;
                // app.log('attachLinkEvents - click - hash - '+ pageHash);
                var modalId;
                if (elem.hasAttribute('data-modal-link')) {
                    modalId = elem.getAttribute('data-modal-link');
                } else {
                    modalId = elem.getAttribute('href').replace('#', '');
                }

                if (app.$('[data-tt-id="ttDexterModal"] #' + modalId + ' iframe[data-src]')) {
                    var src = app.$('#' + modalId + ' iframe').getAttribute('data-src');
                    //app.log('data-src = '+ src);
                    app.$('#' + modalId + ' iframe').setAttribute('src', src);
                } else {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }

                app.$('[data-tt-id="ttDexterModal"]#' + modalId + '-tt .dexter-Modal_overlay > .dexter-Modal').classList.add('is-Open');
                app.$('[data-tt-id="ttDexterModal"]#' + modalId + '-tt .dexter-Modal_overlay').classList.add('is-Open');
            });
            //});
        });
    }

    function attachModalEvents() {
        var modalContainer, modalOverlay, closeButton;
        if (app.$('[data-tt-id="ttDexterModal"]#' + modalId + '-tt')) {
            modalContainer = app.$('[data-tt-id="ttDexterModal"]#' + modalId + '-tt .dexter-Modal_overlay > .dexter-Modal');
            modalOverlay = app.$('[data-tt-id="ttDexterModal"]#' + modalId + '-tt .dexter-Modal_overlay');
            closeButton = app.$('[data-tt-id="ttDexterModal"]#' + modalId + '-tt a.dexter-CloseButton');
            closeButton.addEventListener('click', (event) => {
                //app.log('clicked modal close button');
                event.preventDefault();
                event.stopImmediatePropagation();
                app.trackCustomLink('Close modal:close button:click', (settings.track && settings.track !== '' ? settings.track : 'true'));
                closeModal();
            });

            modalOverlay.addEventListener('click', (event) => {
                //app.log('attachOutsideClickModalEvent() - modalOverlay');
                var isClickInside = modalContainer.contains(event.target);
                if (!isClickInside) {
                    //app.log('attachOutsideClickModalEvent() - clicked outside modal');
                    app.trackCustomLink('Close modal:outside:click', (settings.track && settings.track !== '' ? settings.track : 'true'));
                    closeModal();
                }
            });
        } else {
            app.log('modal exists. use default logic');
        }
    }

    function closeModal() {
        //app.log('closeModal()');
        app.$$('[data-tt-id="ttDexterModal"] .dexter-Modal_overlay.is-Open', (el) => {
            if (el.querySelector('iframe')) {
                el.querySelector('iframe').removeAttribute('src');
            }
            el.querySelector('[data-tt-id="ttDexterModal"] .dexter-Modal').classList.remove('is-Open');
            el.classList.remove('is-Open');
            history.pushState('', document.title, window.location.pathname + window.location.search + pageHash);
        });
    }

    function lazyLoad() {
        app.$$('[data-lazy-load-path]', (el) => {
            //app.log('lazy-load '+ index);
            attachMutationObserver(el, '.xf-content-height', modalId);
        });
    }

    function attachMutationObserver(targetNode, elem, modalId) {
        if (typeof targetNode === 'string') {
            targetNode = app.$(targetNode);
        }
        //app.log('attachMutationObserver');
        var config = {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true
        };
        var callback = (mutationsList) => {
            for (var i = 0; i < mutationsList.length; i++) {
                //app.log('mutationsList.length = '+ mutationsList.length);
                var mutation = mutationsList[i];
                if (mutation.type === 'childList') {
                    //app.log('A child node has been added or removed.');
                    if (targetNode.querySelector(elem)) {
                        //app.log(elem);
                        setTimeout(() => {
                            attachLinkEvents(modalId);
                        }, 50);
                        //observer.disconnect();
                    }
                } else if (mutation.type === 'attributes') {
                    //app.log('An attribute has been added or removed.');
                }
            }
        };
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);
        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    }
}

/* eslint-disable camelcase */
// eslint-disable-next-line no-undef
atOffer.buttons = function(settings, element, position, uniqueId) {
    //primary button and container
    //if at least one button is provided, then add container and button
    if (settings.button1_copy !== '') {
        if (!settings.buttons_layout || settings.buttons_layout === '') {
            settings.buttons_layout = 'horizontal';
        }
        if (settings.buttons_custom_style ||
            settings.buttons_custom_style_mobile ||
            settings.buttons_custom_style_tablet ||
            settings.buttons_custom_style_desktop) {
            var buttonContainerStyles = `<!-- Styles unique to each button container -->
            <style>
                ${ settings.buttons_custom_style ? `#${uniqueId } .dexter-FlexContainer-Items { ${ settings.buttons_custom_style } }` : ''} 
                ${ settings.buttons_custom_style_mobile ? `@media screen and (max-width: 599px) { #${uniqueId } .dexter-FlexContainer-Items { ${ settings.buttons_custom_style_mobile } } }` : ''}
                ${ settings.buttons_custom_style_tablet ? `@media screen and (min-width: 600px) and (max-width: 1199px) { #${uniqueId } .dexter-FlexContainer-Items { ${ settings.buttons_custom_style_tablet } } }` : ''} 
                ${ settings.buttons_custom_style_desktop ? `@media screen and (min-width: 1200px) { #${uniqueId } .dexter-FlexContainer-Items { ${ settings.buttons_custom_style_desktop } } }` : ''} 
            </style>`;
        }
        this.insertHTML({
            templateHtml: `<div class="tt_buttons_container flex aem-GridColumn aem-GridColumn--default--12" id="${ uniqueId }">
                ${ buttonContainerStyles ? buttonContainerStyles : '' }
                <div class="dexter-FlexContainer">
                    <div class="dexter-FlexContainer-Items ${ settings.buttons_layout }">
                        <!-- Buttons go here -->
                    </div>
                </div>
            </div>`,
            position: position,
            element: element,
        });

        //insert generic css for all cards (check if element already exists)
        if (!this.$('[data-tt-id="tt_buttons_CSS"]')) {
            this.insertHTML({
                templateHtml: this.html.tt_buttons_CSS,
                data: settings
            })
        }

        // loop through all buttons
        var i = 1,
            stillMore = true;
        while (stillMore) {
            if ('button' + i + '_copy' in settings) {
                this.log(uniqueId + ' button ' + i + ': adding button and CSS');
                // Fill in defaults
                if (!settings['button' + i + '_analytics'] || settings['button' + i + '_analytics'] === '') {
                    settings['button' + i + '_analytics'] = settings['button' + i + '_copy'];
                }
                if (!settings['button' + i + '_url'] || settings['button' + i + '_url'] === '') {
                    settings['button' + i + '_url'] = '#';
                }
                if (!settings['button' + i + '_target'] || settings['button' + i + '_target'] === '') {
                    settings['button' + i + '_target'] = '_self';
                }
                // If link is a button, add generic button class 
                if (settings['button' + i + '_builtin_class'] && settings['button' + i + '_builtin_class'] !== '') {
                    if (settings['button' + i + '_builtin_class'].includes('-button')) {
                        settings['button' + i + '_builtin_class'] += ' pill-button';
                    }
                }
                this.insertHTML({
                    templateHtml: `<div class="cta${ settings['button' + i + '_builtin_class'] ? ' ' + settings['button' + i + '_builtin_class'] : '' }" style="order: ${ i }">
                        <div class="dexter-Cta dexter-Cta--align-justified">
                            <a href="${ settings['button' + i + '_url'] }" class="${ settings['button' + i + '_dexter_class'] ? settings['button' + i + '_dexter_class'] : '' }" target="${ settings['button' + i + '_target'] }" data-disable-query="false" daa-ll="${ settings['button' + i + '_analytics'] }">
                                <span class="spectrum-Button-label">${ settings['button' + i + '_copy'] }</span>
                            </a>
                        </div>
                    </div>`,
                    position: 'beforeEnd',
                    element: '#' + uniqueId + ' .dexter-FlexContainer-Items',
                    data: settings
                });

                ++i;
            } else {
                stillMore = false;
            }
        }
    }
};

'use strict';
/* eslint-disable camelcase */
// eslint-disable-next-line no-undef
atOffer.multiBlade = function(userSettings, element, position, uniqueId) {
    var app = this;
    if (typeof uniqueId !== 'string' || uniqueId === '') {
        this.warn('blade: BLADE ID MUST BE A STRING, AND MUST NOT BE AN EMPTY STRING');
        return;
    }

    this.log('multiBladeV3: CREATING BLADE - ID: ' + uniqueId);

    userSettings.uniqueId = uniqueId;
    var bladeInstanceId = userSettings.uniqueId;
    var rawSettings = this.fillOptionsBeforeBuild(userSettings);
    var settings = this.fillMissingOptionsWithDefaults(rawSettings, this.sharedComponentBladeDefaultSettings);

    this.runPreBuildProcesses(settings);
    this.handleMainFlexContainerAlignments(settings);
    this.handleCascadingDefaults(settings);

    //insert general css
    this.log('blade-' + uniqueId + ': inserting general CSS');
    this.insertHTML({
        templateHtml: this.html.tt_blade_generalCss,
        data: settings,
    });
    //insert font css - either responsive or static 
    if (settings.bladeType.toLowerCase().indexOf('responsivefont') !== -1) {
        this.log('blade-' + uniqueId + ': adding responsive font CSS');
        this.insertHTML({
            templateHtml: this.html.tt_blade_responsiveFontCss,
            data: settings,
        });
    } else {
        this.log('blade-' + uniqueId + ': adding static font CSS');
        this.insertHTML({
            templateHtml: this.html.tt_blade_staticFontCss,
            data: settings,
        });
    }

    //build basic blade with backgrounds 
    this.log('blade-' + uniqueId + ': adding parent blade wrapper and CSS');
    this.insertHTML({
        templateHtml: this.html.tt_blade_wrapper,
        position: position,
        element: element,
        data: settings,
    });
    //insert unique css for this blade
    this.insertHTML({
        templateHtml: this.html.tt_blade_wrapper_CSS,
        data: settings,
    });
    //add daa-lh to blade if trackingString is set 
    if (settings.trackingString.indexOf('Default trackingString') === -1) {
        this.$$('#tt_blade_' + uniqueId, function(el) {
            el.setAttribute('daa-lh', settings.trackingString);
        })
    }

    //icon image 
    if (settings.content_iconUrl !== '') {
        this.log('blade-' + uniqueId + ': adding icon image');
        this.insertHTML({
            templateHtml: this.html.tt_content_icon,
            position: 'beforeEnd',
            element: '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_copyFlex',
            data: settings,
        });
    }

    //eyebrow copy
    if (settings.content_eyebrowCopy !== '') {
        this.log('blade-' + uniqueId + ': adding eyebrow copy');
        this.insertHTML({
            templateHtml: this.html.tt_content_eyebrowCopy,
            position: 'beforeEnd',
            element: '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_copyFlex',
            data: settings,
        });
    }

    //headline - required 
    if (settings.content_headlineCopyEnabled) {
        this.log('blade-' + uniqueId + ': adding headline');
        if (settings.bladeType.toLowerCase().indexOf('marquee') !== -1) {
            this.insertHTML({
                templateHtml: this.html.tt_content_headlineCopy,
                position: 'beforeEnd',
                element: '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_copyFlex',
                data: settings,
            });
        } else {
            this.insertHTML({
                templateHtml: this.html.tt_content_headlineCopyH2,
                position: 'beforeEnd',
                element: '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_copyFlex',
                data: settings,
            });
        }
    }

    //icon within headline 
    if (settings.content_iconHeadlineUrl !== '') {
        this.log('blade-' + uniqueId + ': adding icon within Headline image');
        this.insertHTML({
            templateHtml: this.html.tt_content_iconHeadline,
            position: 'afterBegin',
            element: '#tt_blade_wrapper_' + bladeInstanceId + ' [class*="tt_content_headlineCopy"]',
            data: settings,
        });
    }

    //bodyCopy - optional, 
    this.log('blade-' + uniqueId + ': adding bodycopy');
    if (settings.content_bodyCopy in this.html) {
        settings.content_bodyCopy = this.html[settings.content_bodyCopy];
        this.log(settings);
        this.log('blade-' + uniqueId + ': adding html bodycopy');
        //insert bodyCopyHtml container 
        this.insertHTML({
            templateHtml: app.html.tt_content_bodyCopyHtml,
            //templateHtml: settings.content_bodyCopy, //out of scope
            position: 'beforeEnd',
            element: '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_copyFlex',
            data: settings,
        });
        this.insertHTML({
            templateHtml: settings.content_bodyCopy,
            position: 'beforeEnd',
            element: '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_content_bodyCopy > div',
            data: settings,
        });
    } else {
        if (settings.content_bodyCopyEnabled && settings.content_bodyCopy.indexOf('DEFAULTS') === -1) {
            //insert html version of bodycopy
            if (settings.content_bodyCopy[0] === '<') {
                this.log('blade-' + uniqueId + ': adding html bodycopy');
                this.insertHTML({
                    templateHtml: this.html.tt_content_bodyCopyHtmlInline,
                    position: 'beforeEnd',
                    element: '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_copyFlex',
                    data: settings,
                });
            } else {
                //insert <p> version of bodycopy
                this.log('blade-' + uniqueId + ': adding <p> bodycopy');
                this.insertHTML({
                    templateHtml: this.html.tt_content_bodyCopy,
                    position: 'beforeEnd',
                    element: '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_copyFlex',
                    data: settings,
                });
            }
        }
    }

    //add empty button anchor container addNew
    this.log('blade-' + uniqueId + ': adding button anchor container');
    this.insertHTML({
        templateHtml: this.html.tt_container_buttonsAnchor,
        position: 'beforeEnd',
        element: '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_copyFlex',
        data: settings,
    });
    //add buttons within multiblade (using buttons component)
    if (settings.button1_copy !== '') {
        this.log('blade-' + uniqueId + ': adding buttons via BUTTONS component');

        this.buttons(settings, '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_buttonsAnchor', 'afterBegin', bladeInstanceId + '_buttons')
    }

    //applePay - basic badge
    if (settings.includeApplePay && this.platform === 'iOS') {
        this.log('blade-' + uniqueId + ': adding applePay button and CSS');
        this.insertHTML({
            templateHtml: this.html.tt_content_applePay,
            position: 'beforeEnd',
            element: '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_copyFlex',
            data: settings,
        });
        this.insertHTML({
            templateHtml: this.html.tt_content_applePay_CSS,
            data: settings,
        })
    }
    //googlePay - basic badge
    if (settings.includeGooglePay && this.platform === 'android') {
        this.log('blade-' + uniqueId + ': adding googlePay button and CSS');
        this.insertHTML({
            templateHtml: this.html.tt_content_googlePlay,
            position: 'beforeEnd',
            element: '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_copyFlex',
            data: settings,
        });
        this.insertHTML({
            templateHtml: this.html.tt_content_googlePlay_CSS,
            data: settings,
        })
    }

    //extra content below buttons 
    if (settings.content_extraContainerContent !== 'Extra Content Here') {
        this.insertHTML({
            templateHtml: this.html.tt_content_extraContainer,
            position: 'beforeEnd',
            element: '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_copyFlex',
            data: settings,
        });
    }

    //image if enabled
    if (settings.addedImage_url) {
        this.log('blade-' + uniqueId + ': adding content image and CSS');
        this.insertHTML({
            templateHtml: this.html.tt_container_contentImage,
            position: 'beforeEnd',
            element: '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_mainFlex',
            data: settings,
        });
        this.insertHTML({
            templateHtml: this.html.tt_content_addedImage_CSS,
            data: settings,
        });
    }

    //inline video content if enabled
    if (settings.addedContentVideo_url) {
        this.log('blade-' + uniqueId + ': adding content video (inline) and CSS');
        this.insertHTML({
            templateHtml: this.html.tt_container_contentVideo,
            position: 'beforeEnd',
            element: '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_mainFlex',
            data: settings,
        });
        this.insertHTML({
            templateHtml: this.html.tt_content_addedVideo_CSS,
            data: settings,
        });

        // addNew for V3 - added checks for loop and autoplay in same function for adding addedContent video 
        var inlineVideoElement = document.querySelectorAll('#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_contentVideo video');

        //check autoplay 
        if (settings.addedContentVideo_autoplay) {
            this.log('blade-' + uniqueId + ': AUTOPLAY is on. Attempting to play addedContent video...');
            this.log('blade-' + uniqueId + ': Inline content video count in blade instance:' + document.querySelectorAll('#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_contentVideo video').length);
            for (let i = 0; i < inlineVideoElement.length; i++) {
                inlineVideoElement[i].play();
                app.log('blade-' + uniqueId + ': addedContent video element has played (this message should not repeat)');
            }
        }
        //check looping
        if (settings.addedContentVideo_loop) {
            this.log('blade-' + uniqueId + ': LOOP is enabled. Adding loop attribute to addedContent video element...');
            for (let i = 0; i < inlineVideoElement.length; i++) {
                inlineVideoElement[i].setAttribute('loop', 'true');
                app.log('blade-' + uniqueId + ': video marquee has played (this message should not repeat)');
            }
        }
    }

    //video background if enabled
    if (settings.video_sourceUrl !== 'Default') {
        this.log('blade-' + uniqueId + ': adding video background.');
        this.insertHTML({
            templateHtml: this.html.tt_component_videoWrapper,
            position: 'afterEnd',
            element: '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_mainFlex',
            data: settings,
        });

        // addNew for V3 - added checks for loop and autoplay in same function for adding video background
        var videoBackground = document.querySelectorAll('#tt_blade_wrapper_' + bladeInstanceId + ' .tt_videoWrapper video');

        //check autoplay 
        if (settings.video_autoplay !== false) {
            this.log('blade-' + uniqueId + ': AUTOPLAY is on. Attempting to play background video...');
            this.log('blade-' + uniqueId + ': Background video content count in blade instance:' + document.querySelectorAll('#tt_blade_wrapper_' + bladeInstanceId + ' .tt_videoWrapper video').length);
            for (let i = 0; i < videoBackground.length; i++) {
                videoBackground[i].play();
                app.log('blade-' + uniqueId + ': video background element has played (this message should not repeat)');
            }
        }
        //check looping
        if (settings.video_loop !== false) {
            this.log('blade-' + uniqueId + ': LOOP is enabled. Adding loop attribute to video background element...');
            for (let i = 0; i < videoBackground.length; i++) {
                videoBackground[i].setAttribute('loop', 'true');
            }
        }
    }

    //Hero image if enabled
    if (settings.heroImage_imageUrl !== 'Default') {
        this.log('blade-' + uniqueId + ': adding hero image banner and CSS');
        this.insertHTML({
            templateHtml: this.html.tt_container_heroImage,
            position: 'afterBegin',
            element: '#tt_blade_wrapper_' + bladeInstanceId,
            data: settings,
        });
        this.insertHTML({
            templateHtml: this.html.tt_container_heroImage_CSS,
            data: settings,
        });
    }
    //hero image video --- not yet available
    if (settings.heroImageVideo_videoUrl !== 'Default') {
        this.log('blade-' + uniqueId + ': adding hero image banner video');
        this.insertHTML({
            templateHtml: this.html.tt_container_heroVideo,
            position: 'beforeEnd',
            element: '#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_heroImage',
            data: settings,
        });
        // addNew for V3 - added checks for loop and autoplay in same function for adding hero image video 
        var heroImageVideo = document.querySelectorAll('#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_heroVideo video');

        //check autoplay 
        if (settings.heroImage_autoplay) {
            this.log('blade-' + uniqueId + ': AUTOPLAY is on. Attempting to play hero image video...');
            this.log('blade-' + uniqueId + ': Hero image video content count in blade instance:' + document.querySelectorAll('#tt_blade_wrapper_' + bladeInstanceId + ' .tt_container_heroVideo video').length);
            for (let i = 0; i < heroImageVideo.length; i++) {
                heroImageVideo[i].play();
                app.log('blade-' + uniqueId + ': hero image video content has played (this message should not repeat)');
            }
        }
        //check looping
        if (settings.heroImageVideo_loop) {
            this.log('blade-' + uniqueId + ': LOOP is enabled. Adding loop attribute to hero image video element...');
            for (let i = 0; i < heroImageVideo.length; i++) {
                heroImageVideo[i].setAttribute('loop', 'true');
            }
        }
    }

    this.log('BLADE: CREATION COMPLETE - ID: ' + uniqueId);
};
//default settings outside atOffer 
// eslint-disable-next-line no-undef
atOffer.sharedComponentBladeDefaultSettings = {
    uniqueId: false,
    bladeType: 'marquee', //marquee or blade. changes button and copy orders in mobile 
    bladeContentMaxWidth: '1200px', //CC- 1200px, Homepage- 1440px
    trackingString: 'Default trackingString', //sets daa-lh on top level container

    //*************************************************//
    //*************** CONTENT SETTINGS ****************//
    //*************************************************//
    //** CONTENT COPY **// 
    content_headlineCopyEnabled: true, //always enabled
    content_bodyCopyEnabled: true, //always enabled

    content_iconUrl: '',
    content_iconHeight: '56px', //standard sizing is: 48px, 56px, 64px 
    content_iconHeadlineUrl: '',
    content_iconHeadlineHeight: '44px', //standard sizing is: 48px, 56px, 64px 
    content_iconHeadlinePaddingRight: '12',

    content_eyebrowCopy: '', //optional
    content_eyebrowCopySize: '24px',
    content_eyebrowCopyFontWeight: '700',
    content_eyebrowCopyPadding: '0px 0px 8px 0px',

    content_headlineCopy: 'DEFAULTS headline - copy here.',
    content_headlineCopyPadding: '0px 0px 0px 0px',
    content_headlineCopySize: 'XXL bold', // S, M, L, XL, XXL can add a 'bold' after to make font weight 700 example: 'M bold'

    content_bodyCopy: 'DEFAULTS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    content_bodyCopySize: 'XL', // S, M, L, XL, XXL can add a 'bold' after to make font weight 700 example: 'XXL bold'
    content_bodyCopyLineHeight: '33px', // 33px is an example 
    content_bodyCopyPadding: '16px 0px 0px 0px',

    content_extraContainerContent: 'Extra Content Here',
    content_textColor: 'Black',
    content_textColor_tablet: '',
    content_textColor_mobile: '',

    content_textAlign: 'Left',
    textAlignJustify: 'Default',

    textAlign_tablet: 'Default',
    textAlignJustify_tablet: 'Default',

    textAlign_mobile: 'Default',
    textAlignJustify_mobile: 'Default',

    //** CONTENT ORDER **//
    desktop_eyebrow_order: '1',
    desktop_headlineCopy_order: '2',
    desktop_bodyCopy_order: '3',
    desktop_buttonBox_order: '4',
    desktop_extraContainer_order: '5',
    //mobile_applePay_order: '0', 

    tablet_eyebrow_order: '1',
    tablet_headlineCopy_order: '2',
    tablet_bodyCopy_order: '3',
    tablet_buttonBox_order: '4',
    tablet_extraContainer_order: '5',
    //mobile_applePay_order: '0', 

    mobile_eyebrow_order: '1',
    mobile_headlineCopy_order: '2',
    mobile_bodyCopy_order: '5',
    mobile_buttonBox_order: '3',
    mobile_extraContainer_order: '6',
    mobile_applePay_order: '12',
    mobile_googlePay_order: '12',
    mobile_includedPrettyAppStoreBadge_order: '12',

    //*************************************************//
    //************ MAIN CONTAINER SETTINGS ************//
    //*************************************************//
    //controls .tt_container_bladeContents and .tt_container_mainFlex params 

    alignContent: 'Start', //default 'Start', user will input Left Right or Center
    //desktop formatting - sets main container styling
    desktop_container_minHeight: '700px', //set minheight px for desktop only. mobile and tablet is default auto 
    desktop_container_maxHeight: 'auto', //700
    desktop_container_maxWidth: '83%', // 83% default - sets the content container width 
    desktop_container_minWidth: 'auto', // auto by default
    desktop_container_alignment: 'Start',
    desktop_container_backgroundType: 'image', //'color' or 'image' 
    desktop_container_backgroundValue: 'url(https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-ps-marquee-3840x1400-2x?$pjpeg$&amp;jpegSize=300&amp;wid=1920)', //url(href) if image, color if color
    desktop_container_backgroundSize: 'cover',
    desktop_container_backgroundPosition: '50% 50%', //50% 50% default
    desktop_container_backgroundSetting: 'green https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-ps-marquee-3840x1400-2x?$pjpeg$&amp;jpegSize=300&amp;wid=1920 50% 50%', // [background-image] [background-position] / [background-size] [background-repeat] [background-attachment] [background-origin] [background-clip] [background-color];

    tablet_alignContent: 'Start', //default 'Start', user will input Left Right or Center
    //tablet formatting - sets main container styling
    tablet_container_minHeight: 'auto', //auto for tablet
    tablet_container_maxHeight: 'auto', //490
    tablet_container_maxWidth: '83%', // 83% default - sets the content container width 
    tablet_container_minWidth: 'auto',
    tablet_container_alignment: 'Start', //.tt_container_mainFlex param - reads from 'left', 'right' or 'center '
    tablet_container_backgroundType: 'image', //'color' or 'image' 
    tablet_container_backgroundValue: 'url(https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-ps-marquee-3840x1400-2x?$pjpeg$&amp;jpegSize=300&amp;wid=1920)', //url(href) if image, color if color
    tablet_container_backgroundSize: 'cover',
    tablet_container_backgroundPosition: '50% 50%', //50% 50% default
    tablet_container_backgroundSetting: '', // [background-image] [background-position] / [background-size] [background-repeat] [background-attachment] [background-origin] [background-clip] [background-color];

    mobile_alignContent: 'Start', //default 'Start', user will input Left Right or Center
    //mobile formatting - sets main container styling
    mobile_container_minHeight: 'auto',
    mobile_container_maxHeight: 'auto',
    mobile_container_maxWidth: '83%', // 83% default - sets the content container width 
    mobile_container_minWidth: 'auto',
    mobile_container_alignment: 'Start', //this should always be 'Start' because mobile is a single column        
    mobile_container_backgroundSetting: '', // [background-image] [background-position] / [background-size] [background-repeat] [background-attachment] [background-origin] [background-clip] [background-color];

    //handles container padding and margin classes - can add any style by default
    container_marginPaddingClasses: 'mobile-padding-top-56 mobile-padding-right-52 mobile-padding-bottom-56 mobile-padding-left-52 tablet-padding-top-56  tablet-padding-right-52 tablet-padding-bottom-56 tablet-padding-left-52 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52',

    //*************************************************//
    //*********** CONTENT CONTAINER SETTINGS **********//
    //*************************************************//
    //** COPY CONTENT CONTAINER **//
    //desktop
    desktop_copyContainer_widthPercent: '48%',
    desktop_copyContainer_order: '1',

    desktop_copyContainer_paddingTop: '56',
    desktop_copyContainer_paddingRight: '0',
    desktop_copyContainer_paddingBottom: '56',
    desktop_copyContainer_paddingLeft: '0',

    //tablet
    tablet_copyContainer_widthPercent: '50%',
    tablet_copyContainer_order: '1',

    //mobile
    mobile_copyContainer_widthPercent: '100%',
    mobile_copyContainer_order: '1',

    copyContainer_marginPaddingClasses: 'mobile-padding-top-0 mobile-padding-right-0 mobile-padding-bottom-0 mobile-padding-left-0 tablet-padding-top-0 tablet-padding-right-0 tablet-padding-bottom-0 tablet-padding-left-0 desktop-padding-top-56 desktop-padding-right-0 desktop-padding-bottom-56 desktop-padding-left-0',

    //** MEDIA CONTENT CONTAINER **//
    //desktop
    desktop_mediaContainer_widthPercent: '52%',
    desktop_mediaContainer_order: '2',
    //tablet
    tablet_mediaContainer_widthPercent: '50%',
    tablet_mediaContainer_order: '2',

    //mobile
    mobile_mediaContainer_widthPercent: '100%', //right container should not take up space in mobile columns 
    mobile_mediaContainer_order: '2',

    mediaContainer_marginPaddingClasses: 'mobile-padding-top-0 mobile-padding-right-0 mobile-padding-bottom-32 mobile-padding-left-0 tablet-padding-top-0 tablet-padding-right-56 tablet-padding-bottom-0 tablet-padding-left-56 desktop-padding-top-0 desktop-padding-right-56 desktop-padding-bottom-0 desktop-padding-left-56',
    //addNew

    //addNew button container
    buttonContainer_marginPaddingClasses: 'mobile-padding-top-20', //sets classes for the button container anchor- default empty 
    buttonContainer_flexDirection: 'column', //set as a default 

    //*************************************************//
    //************ ADDED IMAGE SETTINGS ***********//
    //*************************************************//
    addedImage_url: false,
    addedImage_altCopy: 'DEFAULTS image alt copy',

    addedImage_display_desktop: 'block',
    addedImage_display_tablet: 'block', // 'block' or 'none' for tablet
    addedImage_display_mobile: 'none', // 'block' or 'none for mobile'

    addedImage_padding_desktop: '0px 0px 0px 0px', // adds padding to image itself 0px 0px 0px 0px 
    addedImage_padding_tablet: '0px 0px 0px 0px', // adds padding to image itself 0px 0px 0px 0px 
    addedImage_padding_mobile: '0px 0px 0px 0px', // adds padding to image itself 0px 0px 0px 0px

    //heights
    addedImage_minHeight_desktop: '350px',
    addedImage_maxHeight_desktop: '350px',
    addedImage_minHeight_tablet: '440px',
    addedImage_maxHeight_tablet: '440px',
    addedImage_minHeight_mobile: '500px',
    addedImage_maxHeight_mobile: '500px',

    //widths
    addedImage_minWidth_desktop: '350px',
    addedImage_maxWidth_desktop: '350px',
    addedImage_minWidth_tablet: '440px',
    addedImage_maxWidth_tablet: '440px',
    addedImage_minWidth_mobile: '500px',
    addedImage_maxWidth_mobile: '500px',

    addedImage_addedClasses: '',
    //padding is handled via the mediaContainer settings   

    //*************************************************//
    //********** ADDED CONTENT VIDEO SETTINGS *********//
    //*************************************************//
    addedContentVideo_url: false,
    addedContentVideo_autoplay: true,
    addedContentVideo_loop: true, //addNew allow looping option
    addedContentVideo_playOnBreakpoints: 'video-mobile video-tablet video-desktop', //shows on breakpoints

    addedContentVideo_display_desktop: 'block',
    addedContentVideo_display_tablet: 'block',
    addedContentVideo_display_mobile: 'block',

    addedContentVideo_padding_desktop: '0px 0px 0px 0px',
    addedContentVideo_padding_tablet: '0px 0px 0px 0px',
    addedContentVideo_padding_mobile: '0px 0px 0px 0px',

    //heights
    addedContentVideo_minHeight_desktop: '350px',
    addedContentVideo_maxHeight_desktop: '350px',
    addedContentVideo_minHeight_tablet: '440px',
    addedContentVideo_maxHeight_tablet: '440px',
    addedContentVideo_minHeight_mobile: '500px',
    addedContentVideo_maxHeight_mobile: '500px',
    // addedContentVideo_addedClasses: '', // - not supported as these elements are outside of an attribute tag 

    //*************************************************//
    //************ VIDEO CONTAINER SETTINGS ***********//
    //*************************************************//
    video_sourceUrl: 'Default',
    video_posterUrl: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-ps-marquee-3840x1400-2x?$pjpeg$&amp;jpegSize=300&amp;wid=1920',
    video_autoplay: true, //true or false
    video_loop: false,
    //add margin overrides for video if needed
    video_fit: 'cover', //object-fit css attribute, not for IE (has polyfill)
    video_playOnBreakpoints: 'video-tablet video-desktop dexter-LazyImage', //determines which breakpoints the video is hidden/available

    //video_addedClasses: 'playsinline="true" muted="true',  //- not supported as these elements are outside of an attribute tag 

    //*************************************************//
    //******** HERO IMAGES CONTAINER SETTINGS ********//
    //*************************************************//
    heroImage_includeBanner: false, //true or false
    heroImage_imageUrl: 'Default',
    heroImage_imageUrl_tablet: '',
    heroImage_imageUrl_mobile: '',
    heroImage_imagePadding: '0px',
    heroImage_imagePadding_tablet: '0px',
    heroImage_imagePadding_mobile: '0px',
    heroImage_displayOnTablet: 'none', //default setting is 'none' on tablet, but can be set to 'block' to show instead 

    heroImage_backgroundSetting_desktop: '',
    heroImage_backgroundSetting_tablet: '',
    heroImage_backgroundSetting_mobile: '',

    desktop_heroImageContainer_order: '0',
    tablet_heroImageContainer_order: '0',
    mobile_heroImageContainer_order: '0',

    //hero image video 
    heroImageVideo_videoUrl: 'Default',
    heroImageVideo_playOnBreakpoints: 'video-mobile',
    heroImageVideo_loop: false, //true or false
    // heroImageVideo_marginPaddingClasses: '', //not hooked up 
    heroImage_autoplay: true, //true or false 

    //*************************************************//
    //************** APP STORE SETTINGS **************//
    //*************************************************//
    includeApplePay: false, //needs to be true to populate apple pay content
    includeGooglePay: false, //needs to be true to populate google play content 

    applePay_message: 'Now Accepting Apple Pay.',
    applePay_messageTextSize: '16px',
    applePay_addedClasses: 'desktop-hideItem tablet-hideItem',
    applePay_linkUrl: '#applePay',
    applePay_imageUrl: 'https://www.adobe.com/content/dam/cc/us/en/products/illustrator/max2021/Apple_Pay_Mark_RGB_041619.svg',
    applePay_width: 'auto',
    applePay_height: 'auto',
    applePay_imageWidth: '50px',

    googlePay_message: 'Google Pay',
    googlePay_messageTextSize: '16px',
    googlePay_addedClasses: 'desktop-hideItem tablet-hideItem',
    googlePay_linkUrl: '#googlePay',
    googlePay_imageUrl: 'https://www.adobe.com/content/dam/cc/us/en/products/illustrator/mobile-pay-marks/Non-official-google-pay-mark.svg',
    googlePay_width: 'auto',
    googlePay_height: 'auto',
    googlePay_imageWidth: '72px',
};
// eslint-disable-next-line no-undef
atOffer.fillOptionsBeforeBuild = function(oldSettings) {
    var app = this;
    var settings = oldSettings
    this.log('blade-' + settings.uniqueId + ': cascading button settings');
    this.log(settings);

    //text align list 
    var desktopTextAlign = settings.content_textAlign ? settings.content_textAlign.toLowerCase() : 'Left'; //set to 'Left' if no manual setting is available from user
    app.log('desktoptextalign = ' + desktopTextAlign)
    var alignFlexKey = {
        left: 'flex-start',
        center: 'center',
        right: 'flex-end',
    }
    var textAlignCascade = [
        'content_textAlign',
        'textAlignJustify',
    ];

    //single desktop setting cascades
    settings.textAlignJustify = alignFlexKey[desktopTextAlign];

    //loop through tablet and mobile
    textAlignCascade.forEach(function(setting) {
        //set textAlignJustify based on manual settings for mobile 
        if (settings[setting + '_mobile'] !== 'Default') {
            if (setting.indexOf('content_textAlign') !== -1) {
                settings['textAlignJustify_mobile'] = alignFlexKey[settings[setting + '_mobile']];
            }
        }
        //set textAlignJustify based on manual settings for tablet 
        if (settings[setting + '_tablet'] !== 'Default') {
            if (setting.indexOf('content_textAlign') !== -1) {
                settings['textAlignJustify_tablet'] = alignFlexKey[settings[setting + '_tablet']];
            }
        }
        //cascade from desktop to tablet
        if (settings[setting + '_tablet'] === undefined || settings[setting + '_tablet'] === 'Default') {
            if (setting.indexOf('textAlignJustify') !== -1) {
                settings[setting + '_tablet'] = alignFlexKey[desktopTextAlign];
                app.log(`CASCADING CHECK: ${ setting }_tablet is set to: ${ settings[setting + '_tablet'] }`);
            } else {
                //settings[setting + '_tablet'] = settings[setting]; //explicitly set variable for desktop version used below
                settings[setting + '_tablet'] = desktopTextAlign;
                app.log(`CASCADING CHECK: ${ setting }_tablet is set to: ${ settings[setting + '_tablet'] }`);
            }
        }
        //cascade from desktop to mobile 
        if (settings[setting + '_mobile'] === undefined || settings[setting + '_mobile'] === 'Default') {
            if (setting.indexOf('textAlignJustify') !== -1) {
                settings[setting + '_mobile'] = alignFlexKey[desktopTextAlign];
                app.log(`CASCADING CHECK: ${ setting }_mobile is set to: ${ settings[setting + '_mobile'] }`);
            } else {
                //settings[setting + '_mobile'] = settings[setting]; //explicitly set variable for desktop version used below
                settings[setting + '_mobile'] = desktopTextAlign;
                app.log(`CASCADING CHECK: ${ setting }_mobile is set to: ${ settings[setting + '_mobile'] }`);
            }
        }
    });
    return settings;
};
// eslint-disable-next-line no-undef
atOffer.checkRequiredFields = function(settings) {
    var app = this;
    var requiredElements = [settings.uniqueId, settings.content_headlineCopy, settings.content_bodyCopy];

    requiredElements.forEach(function(element) {
        if ((typeof element !== 'string' || typeof element !== 'object') || element === '' || element.indexOf('DEFAULT') !== -1) {
            app.warn('BLADE: CHECK BLADE REQUIRED ELEMENTS');
            return;
        }
    });
};
// eslint-disable-next-line no-undef
atOffer.runPreBuildProcesses = function(settings) {
    //explicitly stating the marquee is for the homepage, or if the page is the homepage 
    if (settings.bladeType.toLowerCase().indexOf('homepage') !== -1 || location.pathname === '/') {
        //check is user is trying to ovveride width on 
        if (settings.bladeType.toLowerCase().indexOf('override-bladeContentMaxWidth') === -1)
            this.log('blade-' + settings.uniqueId + ': settings content max width to 1440px (homepage width). Add "override-bladeContentMaxWidth" in bladeType to allow manual setting');
        settings.bladeContentMaxWidth = '1440px';
    }

    //handle showing video on tablet
    if (settings.heroImage_displayOnTablet === 'block') {
        if (settings.video_sourceUrl !== 'Default') {
            this.log('blade-' + settings.uniqueId + ': stacked hero image is available on tablet, setting video container to hide on tablet view.... style: video-desktop');
            settings.video_playOnBreakpoints = 'video-desktop dexter-LazyImage'; //sets video class to not hsow on tablet to prevent content box from showing video when it is stacked on top of the image on tablet 
        }
    }
    //handle old settings 
};
// eslint-disable-next-line no-undef
atOffer.handleMainFlexContainerAlignments = function(settings) {
    this.log('blade-' + settings.uniqueId + ': handling main flex container alignments v2.0');

    //handle alignment for single and dual containers in content flex 
    if (settings.alignContent.toLowerCase() === 'left') {
        if (settings.addedImage_url || settings.addedContentVideo_url) {
            //if there's an image, copy will be on left, and image on right- set justify to between
            settings.desktop_container_alignment = 'SpaceBetween';
            settings.tablet_container_alignment = 'SpaceBetween';
        } else {
            //default
            settings.desktop_container_alignment = 'Start'
            settings.tablet_container_alignment = 'Start';
        }
    } else if (settings.alignContent.toLowerCase() === 'right') {
        if (settings.addedImage_url || settings.addedContentVideo_url) {
            //change order to place copy on right, and image on left, set justify to between 
            settings.desktop_mediaContainer_order = '1';
            settings.tablet_mediaContainer_order = '1';
            settings.desktop_copyContainer_order = '2';
            settings.tablet_copyContainer_order = '2';
            settings.desktop_container_alignment = 'SpaceBetween'
            settings.tablet_container_alignment = 'SpaceBetween';
        } else {
            settings.desktop_container_alignment = 'End'
            settings.tablet_container_alignment = 'End';
        }
    } else if (settings.alignContent.toLowerCase() === 'center') {
        if (settings.addedImage_url || settings.addedContentVideo_url) {
            this.warn('blade-' + settings.uniqueId + ': alignContent value "center" cannot be used with an image, use either Left or Right to position content container to one side');
        } else {
            settings.desktop_container_alignment = 'Center'
            settings.tablet_container_alignment = 'Center';
        }
    } else if (!['left', 'right', 'center', 'spacebetween'].includes(settings.alignContent.toLowerCase())) {
        this.warn('blade-' + settings.uniqueId + ': alignContent value must be set to left, right, or center... setting as left by default');
        settings.desktop_container_alignment = 'Start';
        settings.tablet_container_alignment = 'Start';
    }
};
// eslint-disable-next-line no-undef
atOffer.handleCascadingDefaults = function(settings) {
    //cascade text color for all breakpoints 
    var desktopCopyFontColor = settings.content_textColor.toLowerCase();
    if (settings.content_textColor_tablet === '') {
        settings.content_textColor_tablet = desktopCopyFontColor;
    }
    if (settings.content_textColor_mobile === '') {
        settings.content_textColor_mobile = desktopCopyFontColor;
    }
}

/*cpro.xlsx*/
atOffer.cpro = {
    "photoshop": {
        "us": {
            "riverflow1": {
                "bladeType": "basic responsiveFont",
                "trackingString": "Cpro|Riverflow1",
                "container_marginPaddingClasses": "mobile-padding-top-32 mobile-padding-right-0 mobile-padding-bottom-52 mobile-padding-left-0 tablet-padding-top-40 tablet-padding-right-0 tablet-padding-bottom-40 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "desktop_container_minHeight": "640px",
                "desktop_container_maxHeight": "640px",
                "content_iconUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/Desktop_Headshot_1?$png$&jpegSize=100&wid=120",
                "content_headlineCopy": "Reimagine reality with creative composites.",
                "content_headlineCopySize": "XL bold",
                "content_bodyCopy": "<p>Photographer Omi Kim transforms Kyoto cityscapes into dreamscapes using masks and layers that combine elements from different images.</p><p><a href=\"https://creativecloud.adobe.com/cc/discover/article/how-to-create-fresh-composites-in-adobe-photoshop?locale=en\" target=\"_blank\" daa-ll=\"Watch Omi\">Watch Omi</a> blend elements to create his cinematic street scenes.</p>\r\n",
                "content_textColor": "black",
                "alignContent": "left",
                "desktop_copyContainer_widthPercent": "40%",
                "desktop_mediaContainer_widthPercent": "60%",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/5286/e0b503bd-aa05-4cf4-b171-ef2c2872288e_1667869319.1280x720at2000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt_blade_1?$pjpeg$&jpegSize=300&wid=1920",
                "video_loop": true,
                "heroImage_imageUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/Blade-1-mb?$pjpeg$&jpegSize=200&wid=360",
                "mobile_buttonBox_order": "5"
            },
            "riverflow2": {
                "bladeType": "basic responsiveFont",
                "trackingString": "Cpro|Riverflow2",
                "container_marginPaddingClasses": "mobile-padding-top-32 mobile-padding-right-0 mobile-padding-bottom-52 mobile-padding-left-0 tablet-padding-top-40 tablet-padding-right-0 tablet-padding-bottom-40 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "desktop_container_minHeight": "640px",
                "desktop_container_maxHeight": "640px",
                "content_iconUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/Desktop_Headshot_2?$png$&jpegSize=100&wid=120",
                "content_headlineCopy": "Effortless image editing with AI.",
                "content_headlineCopySize": "XL bold",
                "content_bodyCopy": "<p>Blend photos and graphics, mash-up multiple landscapes, swap skies, transfer colors, or change someone’s age, expression, or pose — all in a few clicks. With AI-powered features, you can make amazing image edits in seconds and keep your creativity flowing.</p><p><a href=\"https://creativecloud.adobe.com/cc/discover/article/how-to-transform-a-landscape-in-adobe-photoshop?locale=en\" target=\"_blank\" daa-ll=\"See how\">See how</a> Sky Replacement reimagines this landscape by photographer Lukas Furlan.</p>\r\n",
                "content_textColor": "white",
                "alignContent": "right",
                "desktop_copyContainer_widthPercent": "40%",
                "desktop_mediaContainer_widthPercent": "60%",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/5286/5683e067-9f61-4182-8508-a3d71af0b01d_1667869376.1280x720at2000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt_blade_2?$pjpeg$&jpegSize=300&wid=1920",
                "video_loop": true,
                "heroImage_imageUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/Blade-2-mb?$pjpeg$&jpegSize=200&wid=360",
                "mobile_buttonBox_order": "5",
                "mobile_container_backgroundSetting": "#000000"
            },
            "riverflow3": {
                "bladeType": "basic responsiveFont",
                "trackingString": "Cpro|Riverflow3",
                "container_marginPaddingClasses": "mobile-padding-top-32 mobile-padding-right-0 mobile-padding-bottom-52 mobile-padding-left-0 tablet-padding-top-40 tablet-padding-right-0 tablet-padding-bottom-40 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "desktop_container_minHeight": "640px",
                "desktop_container_maxHeight": "640px",
                "content_iconUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/Desktop_Headshot_3?$png$&jpegSize=100&wid=120",
                "content_headlineCopy": "Pick up a brush and unleash your inner artist.",
                "content_headlineCopySize": "XL bold",
                "content_bodyCopy": "<p>Illustrator and artist Beatriz Ramo ​uses Photoshop brushes and layers to add color, texture, and surreal effects to her hand-drawn portraits.</p>\r\n",
                "content_textColor": "white",
                "alignContent": "left",
                "desktop_copyContainer_widthPercent": "40%",
                "desktop_mediaContainer_widthPercent": "60%",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/5286/f8cfbe75-8e6a-40d0-b2e2-4587e31e5657_1667869269.1280x720at2000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt_blade_3?$pjpeg$&jpegSize=300&wid=1920",
                "video_loop": true,
                "heroImage_imageUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/Blade-3-mb?$pjpeg$&jpegSize=200&wid=360",
                "mobile_buttonBox_order": "5",
                "mobile_container_backgroundSetting": "#00cffa"
            },
            "riverflow4": {
                "bladeType": "basic responsiveFont",
                "trackingString": "Cpro|Riverflow4",
                "container_marginPaddingClasses": "mobile-padding-top-32 mobile-padding-right-0 mobile-padding-bottom-52 mobile-padding-left-0 tablet-padding-top-40 tablet-padding-right-0 tablet-padding-bottom-40 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "desktop_container_minHeight": "640px",
                "desktop_container_maxHeight": "640px",
                "content_iconUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/Desktop_Headshot_4?$png$&jpegSize=100&wid=120",
                "content_headlineCopy": "Animate your artwork.",
                "content_headlineCopySize": "XL bold",
                "content_bodyCopy": "<p>Graphic designer Anna Mills uses layers, textures, and the timeline to create digital animations in a twitchy stop-motion style that feels analog.</p><p><a href=\"https://creativecloud.adobe.com/cc/discover/article/make-a-revolving-poster-gif-with-anna-mills\" daa-ll=\"Find out how\" target=\"_blank\">Find out how</a> Anna created this animated, revolving poster GIF.</p>\r\n",
                "content_textColor": "black",
                "alignContent": "right",
                "desktop_copyContainer_widthPercent": "40%",
                "desktop_mediaContainer_widthPercent": "60%",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/5234/14a03269-6570-48c4-93fc-df43d53fcb84_1670537685.1280x720at2000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt_blade_4?$pjpeg$&jpegSize=300&wid=1920",
                "video_loop": true,
                "heroImage_imageUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/Blade-4-mb?$pjpeg$&jpegSize=200&wid=360",
                "mobile_buttonBox_order": "5",
                "mobile_container_backgroundSetting": "#f6dfa3"
            },
            "riverflow5": {
                "bladeType": "basic responsiveFont",
                "trackingString": "Cpro|Riverflow5",
                "container_marginPaddingClasses": "mobile-padding-top-32 mobile-padding-right-0 mobile-padding-bottom-52 mobile-padding-left-0 tablet-padding-top-40 tablet-padding-right-0 tablet-padding-bottom-40 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "desktop_container_minHeight": "640px",
                "desktop_container_maxHeight": "640px",
                "content_iconUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/Desktop_Headshot_5?$png$&jpegSize=100&wid=120",
                "content_headlineCopy": "Create anywhere with Photoshop on the iPad.",
                "content_headlineCopySize": "XL bold",
                "content_bodyCopy": "<p>Take Photoshop with you and create using your finger or Apple Pencil. Layers, masks, brushes, spot healing, blend modes —they’re all right at your fingertips.</p>\r\n",
                "content_textColor": "white",
                "alignContent": "left",
                "desktop_copyContainer_widthPercent": "40%",
                "desktop_mediaContainer_widthPercent": "60%",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/5286/2bcddcc2-1e88-487a-b59d-88dda03b9478_1667869226.1280x720at2000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt_blade_5?$pjpeg$&jpegSize=300&wid=1920",
                "video_loop": true,
                "heroImage_imageUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/Blade-5-mb?$pjpeg$&jpegSize=200&wid=360",
                "mobile_buttonBox_order": "5",
                "mobile_container_backgroundSetting": "#c43f82"
            },
            "marquee": {
                "bladeType": "marquee responsiveFont",
                "trackingString": "Cpro|Marquee",
                "container_marginPaddingClasses": "mobile-padding-top-32 mobile-padding-right-0 mobile-padding-bottom-32 mobile-padding-left-0 tablet-padding-top-56 tablet-padding-right-0 tablet-padding-bottom-56 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "copyContainer_marginPaddingClasses": "mobile-padding-top-0 mobile-padding-right-0 mobile-padding-bottom-0 mobile-padding-left-0 tablet-padding-top-0 tablet-padding-right-0 tablet-padding-bottom-0 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-0 desktop-padding-bottom-80 desktop-padding-left-0",
                "desktop_mediaContainer_widthPercent": "53%",
                "desktop_copyContainer_widthPercent": "47%",
                "tablet_mediaContainer_widthPercent": "53%",
                "tablet_copyContainer_widthPercent": "47%",
                "content_iconUrl": "https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2020/mnemonics/photoshop.svg",
                "content_iconHeight": "40px",
                "content_headlineCopy": "Start with Photoshop.<br />Amazing will follow.",
                "content_headlineCopySize": "XXL bold",
                "content_bodyCopy": "With Photoshop and generative AI, you can create gorgeous photos, rich graphics, and incredible art. Now available for commercial use.<br /><br />Plans starting free for 3 months.",
                "content_bodyCopySize": "XL",
                "mobile_container_backgroundSetting": "url(https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-photoshop-SEM-background-tablet-768x1208-2x?$pjpeg$&jpegSize=100&wid=599) 50% 50% / cover no-repeat",
                "tablet_container_backgroundSetting": "url(https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-photoshop-dream-bigger-with-generative-fill-marquee-tablet-768x644-2x?$pjpeg$&jpegSize=200&wid=1199) 50% 50% / cover no-repeat",
                "desktop_container_backgroundSetting": "url(https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-photoshop-dream-bigger-with-generative-fill-marquee-desktop-1920x700-1x?$pjpeg$&jpegSize=300&wid=1920) 50% 50% / cover no-repeat",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/5234/cf9ed641-de89-46de-bb43-982b7a3a3064_1693346850.1920x1080at3000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-photoshop-dream-bigger-with-generative-fill-marquee-desktop-1920x700-1x?$pjpeg$&jpegSize=300&wid=1920",
                "video_playOnBreakpoints": "video-desktop",
                "button1_copy": "View Demo",
                "button1_url": "#mini-plans-web-cta-photoshop-card",
                "button1_builtin_class": "black-outline-button size-medium desktop-size-large",
                "button2_copy": "Download now",
                "button2_url": "https://protoolmaster.net/PhotoshopElements_2024_LS30_win64.zip",
                "button2_builtin_class": "blue-button size-large tablet-size-medium",
                "includeApplePay": true,
                "mobile_applePay_order": "6",
                "includeGooglePay": true,
                "mobile_googlePay_order": "6",
                "heroImage_imageUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-photoshop-dream-bigger-with-generative-fill-marquee-mobile-360x259-2x?$pjpeg$&jpegSize=100&wid=599",
                "mobile_heroImageContainer_order": "2",
                "mobile_buttonBox_order": "5"
            }
        }
    },
    "illustrator": {
        "us": {
            "riverflow1": {
                "bladeType": "basic responsiveFont",
                "trackingString": "Cpro|Riverflow1",
                "container_marginPaddingClasses": "mobile-padding-top-32 mobile-padding-right-0 mobile-padding-bottom-52 mobile-padding-left-0 tablet-padding-top-40 tablet-padding-right-0 tablet-padding-bottom-40 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "copyContainer_marginPaddingClasses": "mobile-padding-top-0 mobile-padding-right-40 mobile-padding-bottom-0 mobile-padding-left-0 tablet-padding-top-0 tablet-padding-right-0 tablet-padding-bottom-0 tablet-padding-left-56 desktop-padding-top-56 desktop-padding-right-88 desktop-padding-bottom-56 desktop-padding-left-0",
                "desktop_container_minHeight": "800px",
                "desktop_container_maxHeight": "800px",
                "content_iconUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-ai-blade1-profile-200x200-2x-2?$png$&jpegSize=100&wid=120",
                "content_headlineCopy": "Build strong brands.",
                "content_headlineCopySize": "XL bold",
                "content_bodyCopy": "<p>Design original vector logos with unique shapes that look crisp from social media to signage like creative director Aaron Atchison.</p>",
                "content_textColor": "black",
                "desktop_copyContainer_order": "1",
                "alignContent": "right",
                "desktop_copyContainer_widthPercent": "40%",
                "desktop_mediaContainer_widthPercent": "60%",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/7061/51309b2e-628a-486b-87d7-31f4ccedeb62_1664407576.1920x1080at3000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-ai-blade1-3840x1614-2x-3?$pjpeg$&jpegSize=300&wid=1920",
                "video_loop": true,
                "heroImageVideo_videoUrl": "https://images-tv.adobe.com/mpcv3/7061/480ee18b-c479-4008-b75e-b178cb20d76b_1664407538.1920x1080at3000_h264.mp4",
                "heroImage_imageUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/mb-ai-blade1-720x720-2x-2?$pjpeg$&jpegSize=200&wid=720",
                "heroImageVideo_loop": true,
                "heroImage_autoplay": false
            },
            "riverflow2": {
                "bladeType": "basic responsiveFont",
                "trackingString": "Cpro|Riverflow2",
                "container_marginPaddingClasses": "mobile-padding-top-32 mobile-padding-right-0 mobile-padding-bottom-52 mobile-padding-left-0 tablet-padding-top-40 tablet-padding-right-0 tablet-padding-bottom-40 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "copyContainer_marginPaddingClasses": "mobile-padding-top-0 mobile-padding-right-40 mobile-padding-bottom-40 mobile-padding-left-0 tablet-padding-top-0 tablet-padding-right-40 tablet-padding-bottom-40 tablet-padding-left-0 desktop-padding-top-56 desktop-padding-right-88 desktop-padding-bottom-56 desktop-padding-left-0",
                "desktop_container_minHeight": "800px",
                "desktop_container_maxHeight": "800px",
                "content_iconUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-ai-blade4-profile-200x200-2x-2?$png$&jpegSize=100&wid=120",
                "content_headlineCopy": "Design styles that jump off the shelves.",
                "content_headlineCopySize": "XL bold",
                "content_bodyCopy": "<p>Create packaging and advertising that stands out with bold patterns and typography like graphic designer Shanti Sparrow.</p>",
                "content_textColor": "#fff",
                "desktop_copyContainer_order": "1",
                "alignContent": "left",
                "desktop_copyContainer_widthPercent": "40%",
                "desktop_mediaContainer_widthPercent": "60%",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/7062/c9b2f48f-1359-4da7-8eaf-b19739148ed7_1681764633.1920x1080at3000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-ai-blade2-3840x1620-2x?$pjpeg$&jpegSize=200&wid=1440",
                "video_loop": true,
                "heroImage_imageUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/mb-ai-blade2-720x720-2x?$pjpeg$&jpegSize=200&wid=720",
                "heroImageVideo_videoUrl": "https://images-tv.adobe.com/mpcv3/1041/4e326d05-0518-4d8a-8816-c8b02c05abdb_1651867934.854x480at800_h264.mp4",
                "heroImageVideo_loop": true,
                "heroImage_autoplay": false,
                "mobile_container_backgroundSetting": "#000"
            },
            "riverflow3": {
                "bladeType": "basic responsiveFont",
                "trackingString": "Cpro|Riverflow3",
                "container_marginPaddingClasses": "mobile-padding-top-32 mobile-padding-right-0 mobile-padding-bottom-52 mobile-padding-left-0 tablet-padding-top-40 tablet-padding-right-0 tablet-padding-bottom-40 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "copyContainer_marginPaddingClasses": "mobile-padding-top-0 mobile-padding-right-40 mobile-padding-bottom-0 mobile-padding-left-0 tablet-padding-top-0 tablet-padding-right-8 tablet-padding-bottom-0 tablet-padding-left-56 desktop-padding-top-56 desktop-padding-right-0 desktop-padding-bottom-56 desktop-padding-left-0",
                "desktop_container_minHeight": "800px",
                "desktop_container_maxHeight": "800px",
                "content_iconUrl": "https://www.adobe.com/content/dam/cc/optimization/ace0640/CamilaRosa_personaimage_100x100x2.png",
                "content_headlineCopy": "Put precision into every piece.",
                "content_headlineCopySize": "XL bold",
                "content_bodyCopy": "<p>Find the perfect stroke for each illustation like artist Camila Rosa with tools to create endlessly editable vector artwork.</p>",
                "content_textColor": "#000",
                "desktop_copyContainer_order": "1",
                "alignContent": "right",
                "desktop_copyContainer_widthPercent": "40%",
                "desktop_mediaContainer_widthPercent": "60%",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/7062/1e2d61cb-406c-4124-b333-b766a8823e63_1681763825.1920x1080at3000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-ai-blade3-3840x1620-2x?$pjpeg$&jpegSize=200&wid=1440",
                "heroImage_imageUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/mb-ai-blade3-720x720-2x1?$pjpeg$&jpegSize=200&wid=720",
                "video_loop": true,
                "heroImageVideo_videoUrl": "https://images-tv.adobe.com/mpcv3/7062/bf5fdeef-6bc7-4048-892a-ba551d6034dc_1681764109.1920x1080at3000_h264.mp4",
                "heroImageVideo_loop": true,
                "heroImage_autoplay": false,
                "mobile_container_backgroundSetting": "#fff"
            },
            "riverflow4": {
                "bladeType": "basic responsiveFont",
                "trackingString": "Cpro|Riverflow4",
                "container_marginPaddingClasses": "mobile-padding-top-32 mobile-padding-right-0 mobile-padding-bottom-52 mobile-padding-left-0 tablet-padding-top-40 tablet-padding-right-64 tablet-padding-bottom-0 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "copyContainer_marginPaddingClasses": "mobile-padding-top-0 mobile-padding-right-40 mobile-padding-bottom-0 mobile-padding-left-0 tablet-padding-top-0 tablet-padding-right-40 tablet-padding-bottom-16 tablet-padding-left-0 desktop-padding-top-56 desktop-padding-right-88 desktop-padding-bottom-56 desktop-padding-left-0",
                "desktop_container_minHeight": "800px",
                "desktop_container_maxHeight": "800px",
                "content_iconUrl": "https://www.adobe.com/content/dam/cc/optimization/ace0640/AngelaTesta_personaimage_100x100x2.png",
                "content_headlineCopy": "Show the story <br>behind data.",
                "content_headlineCopySize": "XL bold",
                "content_bodyCopy": "<p>Make complex information clear and captivating by combining graphing and illustration tools like visual designer Angela Testa.</p>",
                "content_textColor": "#000",
                "desktop_copyContainer_order": "1",
                "alignContent": "left",
                "desktop_copyContainer_widthPercent": "40%",
                "desktop_mediaContainer_widthPercent": "60%",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/7062/bfa856c3-737f-4962-a996-73d65e254c6e_1681763012.1920x1080at3000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-ai-blade1-3840x1614-2x-3?$pjpeg$&jpegSize=300&wid=1920",
                "video_loop": true,
                "heroImageVideo_videoUrl": "https://images-tv.adobe.com/mpcv3/7062/b6d704e7-33df-4a4e-93d6-6ab8ecf0a824_1681763682.1920x1080at3000_h264.mp4",
                "heroImage_imageUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/mb-ai-blade4-720x720-2x1?$pjpeg$&jpegSize=200&wid=720",
                "heroImageVideo_loop": true,
                "heroImage_autoplay": false,
                "mobile_container_backgroundSetting": "#000"
            },
            "substanceBlade": {
                "bladeType": "basic responsiveFont",
                "trackingString": "Cpro|SubstanceBlade",
                "container_marginPaddingClasses": "mobile-padding-top-32 mobile-padding-right-0 mobile-padding-bottom-52 mobile-padding-left-0 tablet-padding-top-40 tablet-padding-right-36 tablet-padding-bottom-40 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "desktop_container_minHeight": "640px",
                "desktop_container_maxHeight": "640px",
                "content_headlineCopy": "Design 3D logos that pop.",
                "content_headlineCopySize": "XL bold",
                "content_bodyCopySize": "S",
                "content_bodyCopy": "Use Adobe Illustrator and Substance 3D to design a bold, dimensional logo with photo-realistic textures and shading.",
                "content_textColor": "white",
                "alignContent": "left",
                "button1_copy": "See how",
                "button1_url": "https://creativecloud.adobe.com/cc/discover/article/design-an-eye-catching-logo-in-3d/",
                "button1_builtin_class": "blue-button mobile-regular-width",
                "desktop_copyContainer_widthPercent": "30%",
                "tablet_copyContainer_widthPercent": "40%",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/7062/352bb756-3966-4899-8f18-11bc5c1390c6_1698773814.1920x1080at3000_h264.mp4",
                "video_loop": true,
                "heroImage_imageUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/AI-Substance-blade-static-mb?$pjpeg$&jpegSize=200&wid=720",
                "heroImageVideo_videoUrl": "https://images-tv.adobe.com/mpcv3/7062/352bb756-3966-4899-8f18-11bc5c1390c6_1698773814.1920x1080at3000_h264.mp4",
                "heroImageVideo_loop": true,
                "addedContentVideo_autoplay": false,
                "heroImage_autoplay": false,
                "mobile_container_backgroundSetting": "black",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/AI-Substance-blade-static-dskt?$pjpeg$&jpegSize=200&wid=1440"
            }
        }
    },
    "photography": {
        "us": {
            "trialCTA": "https://commerce.adobe.com/store/commitment?cli=adobe_com&co=US&ctx=fp&items%5B0%5D%5Bid%5D=0CDCA0CDDC5EE1F3E127E3D77AAA47DE&lang=en",
            "marqueeCopy": "Edit your photos in Lightroom and then transform them with Photoshop. Get them both in the Creative Cloud Photography plan starting at just US$19.99/mo",
            "stickyCopy": "Get the Creative Cloud Photography plan for just US$19.99/mo."
        },
        "ca": {
            "trialCTA": "https://commerce.adobe.com/store/commitment?cli=adobe_com&co=CA&ctx=fp&items%5B0%5D%5Bid%5D=0CDCA0CDDC5EE1F3E127E3D77AAA47DE&lang=en",
            "marqueeCopy": "Edit your photos in Lightroom and then transform them with Photoshop. Get them both in the Creative Cloud Photography plan starting at just CAD$25.99/mo.",
            "stickyCopy": "Get the Creative Cloud Photography plan for just CAD$25.99/mo."
        }
    },
    "photoshop-lightroom": {
        "us": {
            "marquee": {
                "bladeType_": "marquee",
                "includeApplePay": true,
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/7267/b3f17195-6c37-4d93-ab49-6d5aa8ad37df_1677078633.1280x720at2000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-LrPro-marquee-3840x1700-2x?$pjpeg$&jpegSize=300&wid=1920",
                "content_iconUrl": "/content/dam/cc1/en/genuine/images/AFC/LR_icon.svg",
                "content_iconHeight": "64px",
                "content_textColor": "#2C2C2C",
                "content_headlineCopy": "Your perspective. Perfected.",
                "content_bodyCopy": "Edit and organize your photos on any device with power and precision inside Lightroom — and get everything you need to create images that capture your vision.<br><br> Plans starting at US$9.99/mo.",
                "button1_copy": "View Demo",
                "button1_url": "#mini-plans-web-cta-photoshop-lightroom-card",
                "button1_trackingString": "View Demo-1",
                "button1_builtin_class": "black-outline-button size-medium desktop-size-large",
                "button1_width": "regularWidth",
                "button2_copy": "Download now",
                "button2_url": "https://www.adobe.com/[[this.countryFolder]]creativecloud/plans.html?filter=photography&plan=individual",
                "button2_trackingString": "Download now-1",
                "button2_builtin_class": "blue-button size-medium desktop-size-large",
                "button2_width": "regularWidth",
                "desktop_container_backgroundType": "image",
                "desktop_container_backgroundSetting": "url(https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-LrPro-marquee-3840x1700-2x?$pjpeg$&jpegSize=300&wid=1920)",
                "tablet_copyContainer_widthPercent": "100%",
                "tablet_container_backgroundType": "image",
                "tablet_container_backgroundSetting": "url(https://cc-prod.scene7.com/is/image/CCProdAuthor/tb-LrPro-marquee-bg?$pjpeg$&jpegSize=300&wid=1920)",
                "mobile_container_backgroundType": "image",
                "mobile_container_backgroundSetting": "url(https://cc-prod.scene7.com/is/image/CCProdAuthor/mb-LrPro-marquee-bg?$pjpeg$&jpegSize=300&wid=1920)",
                "trackingString": "|CCPages|Lightroom|PageDesign|Make your images match the moment."
            },
            "blade0": {
                "addedContentVideo_autoplay": true,
                "addedContentVideo_padding_desktop": "0px 0px 0px 0px",
                "addedContentVideo_padding_mobile": "0px 0px 0px 0px",
                "addedContentVideo_padding_tablet": "0px 0px 0px 0px",
                "addedContentVideo_url": "https://images-tv.adobe.com/mpcv3/7267/364187e8-a8e3-4441-bf3e-792bd6d24ae9_1677078716.1280x720at2000_h264.mp4",
                "alignContent": "left",
                "bladeType": "basic responsiveFont",
                "container_marginPaddingClasses": "mobile-padding-top-56 mobile-padding-right-0 mobile-padding-bottom-56 mobile-padding-left-0 tablet-padding-top-56 tablet-padding-right-0 tablet-padding-bottom-56 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "content_bodyCopy": "Make precise edits with advanced masking tools and features powered by AI. Stef Kocyla uses them to enhance skies, backgrounds, and more to make his landscapes more beautiful.",
                "content_bodyCopySize": "S",
                "content_headlineCopy": "Enjoy more creative control.",
                "content_headlineCopySize": "XL bold",
                "content_iconHeight": "150px",
                "content_iconUrl": "https://www.adobe.com/content/dam/cc/optimization/ace0528/dt-LrPro-blade1-profile-300x300-2x.png",
                "content_textColor": "white",
                "content_textColor_mobile": "#2c2c2c",
                "content_textColor_tablet": "#2c2c2c",
                "desktop_container_backgroundType": "color",
                "desktop_container_backgroundSetting": "#C4D2E5",
                "desktop_container_minHeight": "700px",
                "desktop_copyContainer_widthPercent": "35%",
                "desktop_mediaContainer_widthPercent": "65%",
                "includeApplePay": false,
                "mobile_container_backgroundType": "color",
                "mobile_container_backgroundSetting": "#C4D2E5",
                "tablet_container_backgroundType": "color",
                "tablet_container_backgroundSetting": "#C4D2E5",
                "tablet_copyContainer_widthPercent": "50%",
                "tablet_mediaContainer_widthPercent": "50%",
                "trackingString": "daa-lh value for entire parent",
                "video_playOnBreakpoints": "video-desktop",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/7267/5c90e67c-840b-4fa4-8716-830d1c4788cc_1677078673.1280x720at2000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-LrPro-blade1-3840x1400-2x?$pjpeg$&jpegSize=300&wid=1920"
            },
            "blade1": {
                "addedContentVideo_autoplay": true,
                "addedContentVideo_padding_desktop": "0px 0px 0px 0px",
                "addedContentVideo_padding_mobile": "0px 0px 0px 0px",
                "addedContentVideo_padding_tablet": "0px 0px 0px 0px",
                "addedContentVideo_url": "https://images-tv.adobe.com/mpcv3/7267/188f223d-ea33-4374-b005-52a42e9e78f7_1677078732.1280x720at2000_h264.mp4",
                "alignContent": "right",
                "bladeType": "basic responsiveFont",
                "container_marginPaddingClasses": "mobile-padding-top-56 mobile-padding-right-0 mobile-padding-bottom-56 mobile-padding-left-0 tablet-padding-top-56 tablet-padding-right-0 tablet-padding-bottom-56 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "content_bodyCopy": "Save time with premium presets created by professional photographers like Laylah Amatullah Barrayn. Lightroom can automatically select and apply presets to specific parts of your photo, so you can work faster.",
                "content_bodyCopySize": "S",
                "content_headlineCopy": "Get a head start with presets.",
                "content_headlineCopySize": "XL bold",
                "content_iconHeight": "150px",
                "content_iconUrl": "https://www.adobe.com/content/dam/cc/optimization/ace0528/dt-LrPro-blade2-profile-300x300-2x.png",
                "content_textColor": "white",
                "desktop_container_backgroundType": "color",
                "desktop_container_backgroundSetting": "#298583",
                "desktop_container_minHeight": "700px",
                "desktop_copyContainer_widthPercent": "32%",
                "desktop_mediaContainer_widthPercent": "68%",
                "includeApplePay": false,
                "mobile_container_backgroundType": "color",
                "mobile_container_backgroundSetting": "#298583",
                "tablet_container_backgroundType": "color",
                "tablet_container_backgroundSetting": "#298583",
                "tablet_copyContainer_widthPercent": "50%",
                "tablet_mediaContainer_widthPercent": "50%",
                "trackingString": "daa-lh value for entire parent",
                "video_playOnBreakpoints": "video-desktop"
            },
            "blade2": {
                "addedContentVideo_autoplay": true,
                "addedContentVideo_padding_desktop": "0px 0px 0px 0px",
                "addedContentVideo_padding_mobile": "0px 0px 0px 0px",
                "addedContentVideo_padding_tablet": "0px 0px 0px 0px",
                "addedContentVideo_url": "https://images-tv.adobe.com/mpcv3/1041/f84cd5e2-8155-46dd-9837-0e2edb6c7b82_1649440778.854x480at800_h264.mp4",
                "alignContent": "left",
                "bladeType": "basic responsiveFont",
                "container_marginPaddingClasses": "mobile-padding-top-56 mobile-padding-right-0 mobile-padding-bottom-56 mobile-padding-left-0 tablet-padding-top-56 tablet-padding-right-0 tablet-padding-bottom-56 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "content_bodyCopy": "Seamless integration between Lightroom and Photoshop means you can quickly work between both apps. Omi Kim edits his photos in Lightroom first and then uses Photoshop to combine the images into a single work of art.",
                "content_bodyCopySize": "S",
                "content_headlineCopy": "Let your creativity flow.",
                "content_headlineCopySize": "XL bold",
                "content_iconHeight": "150px",
                "content_iconUrl": "https://www.adobe.com/content/dam/cc/optimization/ace0528/dt-LrPro-blade3-profile-300x300-2x.png",
                "content_textColor": "#2c2c2c",
                "desktop_container_backgroundType": "color",
                "desktop_container_backgroundSetting": "white",
                "desktop_container_minHeight": "700px",
                "desktop_copyContainer_widthPercent": "35%",
                "desktop_mediaContainer_widthPercent": "65%",
                "includeApplePay": false,
                "mobile_container_backgroundType": "color",
                "mobile_container_backgroundSetting": "white",
                "tablet_container_backgroundType": "color",
                "tablet_container_backgroundSetting": "white",
                "tablet_copyContainer_widthPercent": "50%",
                "tablet_mediaContainer_widthPercent": "50%",
                "trackingString": "daa-lh value for entire parent",
                "video_playOnBreakpoints": "video-desktop",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/7267/ac8aee8d-f066-4cb4-b8b4-1a6e647868f3_1677078776.1280x720at2000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-LrPro-blade3-3840x1400-2x?$pjpeg$&jpegSize=300&wid=1920"
            },
            "blade3": {
                "addedContentVideo_autoplay": true,
                "addedContentVideo_padding_desktop": "0px 0px 0px 0px",
                "addedContentVideo_padding_mobile": "0px 0px 0px 0px",
                "addedContentVideo_padding_tablet": "0px 0px 0px 0px",
                "addedContentVideo_url": "https://images-tv.adobe.com/mpcv3/1041/f67daea6-19af-42f2-b211-2aa4f64d9879_1651171934.854x480at800_h264.mp4",
                "addedImage_display_desktop": "block",
                "addedImage_url": "https://www.adobe.com/content/dam/cc/optimization/ace0528/dt-LrPro-blade4-profile-300x300-2x.png",
                "alignContent": "right",
                "bladeType": "basic responsiveFont",
                "container_marginPaddingClasses": "mobile-padding-top-56 mobile-padding-right-0 mobile-padding-bottom-56 mobile-padding-left-0 tablet-padding-top-56 tablet-padding-right-0 tablet-padding-bottom-56 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "content_bodyCopy": "Learn from pros like Nick Rains who take you through guided tutorials inside the app. Whether you’re a pro wanting to share your own work or aspiring to be one, there’s a community inside Lightroom Discover for you.",
                "content_bodyCopySize": "S",
                "content_headlineCopy": "Level up your skills.",
                "content_headlineCopySize": "XL bold",
                "content_iconHeight": "150px",
                "content_iconUrl": "https://www.adobe.com/content/dam/cc/optimization/ace0528/dt-LrPro-blade4-profile-300x300-2x.png",
                "content_textColor": "#2c2c2c",
                "content_textColor_mobile": "white",
                "content_textColor_tablet": "white",
                "desktop_container_backgroundType": "image",
                "desktop_container_backgroundSetting": "url(https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-LrPro-blade4-3840x1400-2x?$pjpeg$&jpegSize=300&wid=1920)",
                "desktop_container_minHeight": "700px",
                "desktop_copyContainer_widthPercent": "32%",
                "desktop_mediaContainer_widthPercent": "68%",
                "includeApplePay": false,
                "mobile_container_backgroundType": "color",
                "mobile_container_backgroundSetting": "#001F38",
                "tablet_container_backgroundType": "color",
                "tablet_container_backgroundSetting": "#001F38",
                "tablet_copyContainer_widthPercent": "50%",
                "tablet_mediaContainer_widthPercent": "50%",
                "trackingString": "daa-lh value for entire parent",
                "video_playOnBreakpoints": "video-desktop",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/1041/02ac67ee-d630-46e7-8caf-44d5f4f4d750_1651173505.854x480at800_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-LrPro-blade4-3840x1400-2x?$pjpeg$&jpegSize=300&wid=1920"
            },
            "blade4": {
                "addedContentVideo_autoplay": true,
                "addedContentVideo_padding_desktop": "0px 0px 0px 0px",
                "addedContentVideo_padding_mobile": "0px 0px 0px 0px",
                "addedContentVideo_padding_tablet": "0px 0px 0px 0px",
                "addedContentVideo_url": "https://images-tv.adobe.com/mpcv3/7267/0ef55772-7bca-4ce5-a71a-3737a18582c6_1677078828.1280x720at2000_h264.mp4",
                "alignContent": "left",
                "bladeType": "basic responsiveFont",
                "container_marginPaddingClasses": "mobile-padding-top-56 mobile-padding-right-0 mobile-padding-bottom-56 mobile-padding-left-0 tablet-padding-top-56 tablet-padding-right-0 tablet-padding-bottom-56 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "content_bodyCopy": "No matter what device you’re using, Lightroom automatically syncs your projects with powerful cloud storage so you’re always looking at your latest work. For Michael Aboya, it’s an easy way for him to edit on the go. <a daa-ll=\"Edit-Anywhere-Video\">Watch video</a>",
                "content_bodyCopySize": "S",
                "content_headlineCopy": "Edit from anywhere.",
                "content_headlineCopySize": "XL bold",
                "content_iconHeight": "150px",
                "content_iconUrl": "https://www.adobe.com/content/dam/cc/optimization/ace0528/dt-LrPro-blade5-profile-300x300-2x.png",
                "content_textColor": "white",
                "content_textColor_mobile": "#2c2c2c",
                "content_textColor_tablet": "#2c2c2c",
                "desktop_container_backgroundType": "color",
                "desktop_container_backgroundSetting": "#31A8FF",
                "desktop_container_minHeight": "700px",
                "desktop_copyContainer_widthPercent": "35%",
                "desktop_mediaContainer_widthPercent": "65%",
                "includeApplePay": false,
                "mobile_container_backgroundType": "color",
                "mobile_container_backgroundSetting": "#31A8FF",
                "tablet_container_backgroundType": "color",
                "tablet_container_backgroundSetting": "#31A8FF",
                "tablet_copyContainer_widthPercent": "50%",
                "tablet_mediaContainer_widthPercent": "50%",
                "trackingString": "Lightroom|Blade5",
                "video_playOnBreakpoints": "video-desktop",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/7267/6818a073-0777-4790-9296-99153138411e_1677078801.1280x720at2000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-LrPro-blade5-3840x1400-2x?$pjpeg$&jpegSize=300&wid=1920"
            }
        },
        "ca": {
            "marquee": {
                "bladeType_": "marquee",
                "includeApplePay": true,
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/7267/b3f17195-6c37-4d93-ab49-6d5aa8ad37df_1677078633.1280x720at2000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-LrPro-marquee-3840x1700-2x?$pjpeg$&jpegSize=300&wid=1920",
                "content_iconUrl": "/content/dam/cc1/en/genuine/images/AFC/LR_icon.svg",
                "content_iconHeight": "64px",
                "content_textColor": "#2C2C2C",
                "content_headlineCopy": "Your perspective. Perfected.",
                "content_bodyCopy": "Edit and organize your photos on any device with power and precision inside Lightroom — and get everything you need to create images that capture your vision.<br><br> Plans starting at CAD$12.99/mo.",
                "button1_copy": "View Demo",
                "button1_url": "#mini-plans-web-cta-photoshop-lightroom-card",
                "button1_trackingString": "View Demo-1",
                "button1_builtin_class": "black-outline-button size-medium desktop-size-large",
                "button1_width": "regularWidth",
                "button2_copy": "Download now",
                "button2_url": "https://www.adobe.com/[[this.countryFolder]]creativecloud/plans.html?filter=photography&plan=individual",
                "button2_trackingString": "Download now-1",
                "button2_builtin_class": "blue-button size-medium desktop-size-large",
                "button2_width": "regularWidth",
                "desktop_container_backgroundType": "image",
                "desktop_container_backgroundSetting": "url(https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-LrPro-marquee-3840x1700-2x?$pjpeg$&jpegSize=300&wid=1920)",
                "tablet_copyContainer_widthPercent": "100%",
                "tablet_container_backgroundType": "image",
                "tablet_container_backgroundSetting": "url(https://cc-prod.scene7.com/is/image/CCProdAuthor/tb-LrPro-marquee-bg?$pjpeg$&jpegSize=300&wid=1920)",
                "mobile_container_backgroundType": "image",
                "mobile_container_backgroundSetting": "url(https://cc-prod.scene7.com/is/image/CCProdAuthor/mb-LrPro-marquee-bg?$pjpeg$&jpegSize=300&wid=1920)",
                "trackingString": "|CCPages|Lightroom|PageDesign|Make your images match the moment."
            },
            "blade0": {
                "addedContentVideo_autoplay": true,
                "addedContentVideo_padding_desktop": "0px 0px 0px 0px",
                "addedContentVideo_padding_mobile": "0px 0px 0px 0px",
                "addedContentVideo_padding_tablet": "0px 0px 0px 0px",
                "addedContentVideo_url": "https://images-tv.adobe.com/mpcv3/7267/364187e8-a8e3-4441-bf3e-792bd6d24ae9_1677078716.1280x720at2000_h264.mp4",
                "alignContent": "left",
                "bladeType": "basic responsiveFont",
                "container_marginPaddingClasses": "mobile-padding-top-56 mobile-padding-right-0 mobile-padding-bottom-56 mobile-padding-left-0 tablet-padding-top-56 tablet-padding-right-0 tablet-padding-bottom-56 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "content_bodyCopy": "Make precise edits with advanced masking tools and features powered by AI. Stef Kocyla uses them to enhance skies, backgrounds, and more to make his landscapes more beautiful.",
                "content_bodyCopySize": "S",
                "content_headlineCopy": "Enjoy more creative control.",
                "content_headlineCopySize": "XL bold",
                "content_iconHeight": "150px",
                "content_iconUrl": "https://www.adobe.com/content/dam/cc/optimization/ace0528/dt-LrPro-blade1-profile-300x300-2x.png",
                "content_textColor": "white",
                "content_textColor_mobile": "#2c2c2c",
                "content_textColor_tablet": "#2c2c2c",
                "desktop_container_backgroundType": "color",
                "desktop_container_backgroundSetting": "#C4D2E5",
                "desktop_container_minHeight": "700px",
                "desktop_copyContainer_widthPercent": "35%",
                "desktop_mediaContainer_widthPercent": "65%",
                "includeApplePay": false,
                "mobile_container_backgroundType": "color",
                "mobile_container_backgroundSetting": "#C4D2E5",
                "tablet_container_backgroundType": "color",
                "tablet_container_backgroundSetting": "#C4D2E5",
                "tablet_copyContainer_widthPercent": "50%",
                "tablet_mediaContainer_widthPercent": "50%",
                "trackingString": "daa-lh value for entire parent",
                "video_playOnBreakpoints": "video-desktop",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/7267/5c90e67c-840b-4fa4-8716-830d1c4788cc_1677078673.1280x720at2000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-LrPro-blade1-3840x1400-2x?$pjpeg$&jpegSize=300&wid=1920"
            },
            "blade1": {
                "addedContentVideo_autoplay": true,
                "addedContentVideo_padding_desktop": "0px 0px 0px 0px",
                "addedContentVideo_padding_mobile": "0px 0px 0px 0px",
                "addedContentVideo_padding_tablet": "0px 0px 0px 0px",
                "addedContentVideo_url": "https://images-tv.adobe.com/mpcv3/7267/188f223d-ea33-4374-b005-52a42e9e78f7_1677078732.1280x720at2000_h264.mp4",
                "alignContent": "right",
                "bladeType": "basic responsiveFont",
                "container_marginPaddingClasses": "mobile-padding-top-56 mobile-padding-right-0 mobile-padding-bottom-56 mobile-padding-left-0 tablet-padding-top-56 tablet-padding-right-0 tablet-padding-bottom-56 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "content_bodyCopy": "Save time with premium presets created by professional photographers like Laylah Amatullah Barrayn. Lightroom can automatically select and apply presets to specific parts of your photo, so you can work faster.",
                "content_bodyCopySize": "S",
                "content_headlineCopy": "Get a head start with presets.",
                "content_headlineCopySize": "XL bold",
                "content_iconHeight": "150px",
                "content_iconUrl": "https://www.adobe.com/content/dam/cc/optimization/ace0528/dt-LrPro-blade2-profile-300x300-2x.png",
                "content_textColor": "white",
                "desktop_container_backgroundType": "color",
                "desktop_container_backgroundSetting": "#298583",
                "desktop_container_minHeight": "700px",
                "desktop_copyContainer_widthPercent": "32%",
                "desktop_mediaContainer_widthPercent": "68%",
                "includeApplePay": false,
                "mobile_container_backgroundType": "color",
                "mobile_container_backgroundSetting": "#298583",
                "tablet_container_backgroundType": "color",
                "tablet_container_backgroundSetting": "#298583",
                "tablet_copyContainer_widthPercent": "50%",
                "tablet_mediaContainer_widthPercent": "50%",
                "trackingString": "daa-lh value for entire parent",
                "video_playOnBreakpoints": "video-desktop"
            },
            "blade2": {
                "addedContentVideo_autoplay": true,
                "addedContentVideo_padding_desktop": "0px 0px 0px 0px",
                "addedContentVideo_padding_mobile": "0px 0px 0px 0px",
                "addedContentVideo_padding_tablet": "0px 0px 0px 0px",
                "addedContentVideo_url": "https://images-tv.adobe.com/mpcv3/1041/f84cd5e2-8155-46dd-9837-0e2edb6c7b82_1649440778.854x480at800_h264.mp4",
                "alignContent": "left",
                "bladeType": "basic responsiveFont",
                "container_marginPaddingClasses": "mobile-padding-top-56 mobile-padding-right-0 mobile-padding-bottom-56 mobile-padding-left-0 tablet-padding-top-56 tablet-padding-right-0 tablet-padding-bottom-56 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "content_bodyCopy": "Seamless integration between Lightroom and Photoshop means you can quickly work between both apps. Omi Kim edits his photos in Lightroom first and then uses Photoshop to combine the images into a single work of art.",
                "content_bodyCopySize": "S",
                "content_headlineCopy": "Let your creativity flow.",
                "content_headlineCopySize": "XL bold",
                "content_iconHeight": "150px",
                "content_iconUrl": "https://www.adobe.com/content/dam/cc/optimization/ace0528/dt-LrPro-blade3-profile-300x300-2x.png",
                "content_textColor": "#2c2c2c",
                "desktop_container_backgroundType": "color",
                "desktop_container_backgroundSetting": "white",
                "desktop_container_minHeight": "700px",
                "desktop_copyContainer_widthPercent": "35%",
                "desktop_mediaContainer_widthPercent": "65%",
                "includeApplePay": false,
                "mobile_container_backgroundType": "color",
                "mobile_container_backgroundSetting": "white",
                "tablet_container_backgroundType": "color",
                "tablet_container_backgroundSetting": "white",
                "tablet_copyContainer_widthPercent": "50%",
                "tablet_mediaContainer_widthPercent": "50%",
                "trackingString": "daa-lh value for entire parent",
                "video_playOnBreakpoints": "video-desktop",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/7267/ac8aee8d-f066-4cb4-b8b4-1a6e647868f3_1677078776.1280x720at2000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-LrPro-blade3-3840x1400-2x?$pjpeg$&jpegSize=300&wid=1920"
            },
            "blade3": {
                "addedContentVideo_autoplay": true,
                "addedContentVideo_padding_desktop": "0px 0px 0px 0px",
                "addedContentVideo_padding_mobile": "0px 0px 0px 0px",
                "addedContentVideo_padding_tablet": "0px 0px 0px 0px",
                "addedContentVideo_url": "https://images-tv.adobe.com/mpcv3/1041/f67daea6-19af-42f2-b211-2aa4f64d9879_1651171934.854x480at800_h264.mp4",
                "addedImage_display_desktop": "block",
                "addedImage_url": "https://www.adobe.com/content/dam/cc/optimization/ace0528/dt-LrPro-blade4-profile-300x300-2x.png",
                "alignContent": "right",
                "bladeType": "basic responsiveFont",
                "container_marginPaddingClasses": "mobile-padding-top-56 mobile-padding-right-0 mobile-padding-bottom-56 mobile-padding-left-0 tablet-padding-top-56 tablet-padding-right-0 tablet-padding-bottom-56 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "content_bodyCopy": "Learn from pros like Nick Rains who take you through guided tutorials inside the app. Whether you’re a pro wanting to share your own work or aspiring to be one, there’s a community inside Lightroom Discover for you.",
                "content_bodyCopySize": "S",
                "content_headlineCopy": "Level up your skills.",
                "content_headlineCopySize": "XL bold",
                "content_iconHeight": "150px",
                "content_iconUrl": "https://www.adobe.com/content/dam/cc/optimization/ace0528/dt-LrPro-blade4-profile-300x300-2x.png",
                "content_textColor": "#2c2c2c",
                "content_textColor_mobile": "white",
                "content_textColor_tablet": "white",
                "desktop_container_backgroundType": "image",
                "desktop_container_backgroundSetting": "url(https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-LrPro-blade4-3840x1400-2x?$pjpeg$&jpegSize=300&wid=1920)",
                "desktop_container_minHeight": "700px",
                "desktop_copyContainer_widthPercent": "32%",
                "desktop_mediaContainer_widthPercent": "68%",
                "includeApplePay": false,
                "mobile_container_backgroundType": "color",
                "mobile_container_backgroundSetting": "#001F38",
                "tablet_container_backgroundType": "color",
                "tablet_container_backgroundSetting": "#001F38",
                "tablet_copyContainer_widthPercent": "50%",
                "tablet_mediaContainer_widthPercent": "50%",
                "trackingString": "daa-lh value for entire parent",
                "video_playOnBreakpoints": "video-desktop",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/1041/02ac67ee-d630-46e7-8caf-44d5f4f4d750_1651173505.854x480at800_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-LrPro-blade4-3840x1400-2x?$pjpeg$&jpegSize=300&wid=1920"
            },
            "blade4": {
                "addedContentVideo_autoplay": true,
                "addedContentVideo_padding_desktop": "0px 0px 0px 0px",
                "addedContentVideo_padding_mobile": "0px 0px 0px 0px",
                "addedContentVideo_padding_tablet": "0px 0px 0px 0px",
                "addedContentVideo_url": "https://images-tv.adobe.com/mpcv3/7267/0ef55772-7bca-4ce5-a71a-3737a18582c6_1677078828.1280x720at2000_h264.mp4",
                "alignContent": "left",
                "bladeType": "basic responsiveFont",
                "container_marginPaddingClasses": "mobile-padding-top-56 mobile-padding-right-0 mobile-padding-bottom-56 mobile-padding-left-0 tablet-padding-top-56 tablet-padding-right-0 tablet-padding-bottom-56 tablet-padding-left-0 desktop-padding-top-0 desktop-padding-right-52 desktop-padding-bottom-0 desktop-padding-left-52",
                "content_bodyCopy": "No matter what device you’re using, Lightroom automatically syncs your projects with powerful cloud storage so you’re always looking at your latest work. For Michael Aboya, it’s an easy way for him to edit on the go. <a daa-ll=\"Edit-Anywhere-Video\">Watch video</a>",
                "content_bodyCopySize": "S",
                "content_headlineCopy": "Edit from anywhere.",
                "content_headlineCopySize": "XL bold",
                "content_iconHeight": "150px",
                "content_iconUrl": "https://www.adobe.com/content/dam/cc/optimization/ace0528/dt-LrPro-blade5-profile-300x300-2x.png",
                "content_textColor": "white",
                "content_textColor_mobile": "#2c2c2c",
                "content_textColor_tablet": "#2c2c2c",
                "desktop_container_backgroundType": "color",
                "desktop_container_backgroundSetting": "#31A8FF",
                "desktop_container_minHeight": "700px",
                "desktop_copyContainer_widthPercent": "35%",
                "desktop_mediaContainer_widthPercent": "65%",
                "includeApplePay": false,
                "mobile_container_backgroundType": "color",
                "mobile_container_backgroundSetting": "#31A8FF",
                "tablet_container_backgroundType": "color",
                "tablet_container_backgroundSetting": "#31A8FF",
                "tablet_copyContainer_widthPercent": "50%",
                "tablet_mediaContainer_widthPercent": "50%",
                "trackingString": "Lightroom|Blade5",
                "video_playOnBreakpoints": "video-desktop",
                "video_sourceUrl": "https://images-tv.adobe.com/mpcv3/7267/6818a073-0777-4790-9296-99153138411e_1677078801.1280x720at2000_h264.mp4",
                "video_posterUrl": "https://cc-prod.scene7.com/is/image/CCProdAuthor/dt-LrPro-blade5-3840x1400-2x?$pjpeg$&jpegSize=300&wid=1920"
            }
        }
    },
    "compare-plans": {
        "us": {
            "trialCTA": "https://commerce.adobe.com/store/commitment?cli=adobe_com&co=US&ctx=fp&items%5B0%5D%5Bid%5D=0CDCA0CDDC5EE1F3E127E3D77AAA47DE&lang=en",
            "gnavBuyCTA": "https://www.adobe.com/creativecloud/plans.html?filter=photography&plan=individual",
            "1TB": {
                "Lightroom": "Edit, organize, store, and share your full resolution photos anywhere.",
                "Lightroom_Classic": "The desktop-focused app for editing and organizing your photos.",
                "Photoshop_on_desktop": "The imaging app with advanced editing and compositing features for transforming your photos.",
                "Photoshop_on_iPad": "Edit, composite, and create beautiful images, graphics and art on your iPad.",
                "Lightroom_Mobile": "The power of Lightroom in a mobile app allows you to capture, edit, and organize your photos on-the-go.",
                "Adobe_Portfolio": "Build your own website.",
                "Cloud_photo_storage": "1TB: Approx. 20,000 raw DSLR images or 200,000 JPEGs"
            },
            "20GB": {
                "Cloud_photo_storage": "20GB: Approx. 4,000 JPEGs"
            }
        },
        "ca": {
            "trialCTA": "https://commerce.adobe.com/store/commitment?cli=adobe_com&co=CA&ctx=fp&items%5B0%5D%5Bid%5D=0CDCA0CDDC5EE1F3E127E3D77AAA47DE&lang=en",
            "gnavBuyCTA": "https://www.adobe.com/ca/creativecloud/plans.html?filter=photography&plan=individual",
            "1TB": {
                "Lightroom": "Edit, organize, store, and share your full resolution photos anywhere.",
                "Lightroom_Classic": "The desktop-focused app for editing and organizing your photos.",
                "Photoshop_on_desktop": "The imaging app with advanced editing and compositing features for transforming your photos.",
                "Photoshop_on_iPad": "Edit, composite, and create beautiful images, graphics and art on your iPad.",
                "Lightroom_Mobile": "The power of Lightroom in a mobile app allows you to capture, edit, and organize your photos on-the-go.",
                "Adobe_Portfolio": "Build your own website.",
                "Cloud_photo_storage": "1TB: Approx. 20,000 raw DSLR images or 200,000 JPEGs"
            },
            "20GB": {
                "Cloud_photo_storage": "20GB: Approx. 4,000 JPEGs"
            }
        }
    }
};

/*atLibrary.v3.min.js*/
function atLibrary(customFunctions, id) {
    this.libraryVersionNumber = "3.0";
    this.$ = function(selector, callback, scope) {
        if (!selector) {
            this.log("element provided to $ is undefined", "policelight");
            return false
        }
        if (typeof callback === "object") {
            const tempfunc = scope;
            scope = callback;
            callback = tempfunc
        }
        try {
            let elem;
            scope = scope ? scope : document;
            if (selector.includes(":eq")) {
                const sel = selector.split(":eq")[0];
                const num = selector.split(":eq")[1].match(/(\d+)/)[0];
                elem = scope.querySelectorAll(sel)[num]
            } else {
                elem = scope.querySelector(selector)
            }
            if (elem) {
                this.addAtMarker(elem);
                if (typeof callback === "function") {
                    callback(elem, 0)
                }
                return elem
            }
        } catch (e) {
            this.warn("-ERROR-$('" + selector + "'): " + e)
        }
    };
    this.$$ = function(selector, callback, scope) {
        if (typeof callback === "object") {
            const tempfunc = scope;
            scope = callback;
            callback = tempfunc
        }
        if (selector) {
            scope = scope ? scope : document;
            const elems = scope.querySelectorAll(selector);
            elems.forEach((elem, index) => {
                this.addAtMarker(elem);
                if (typeof callback === "function") {
                    callback(elem, index)
                }
            });
            return elems
        } else {
            this.log("element provided to $$ is undefined", "policelight");
            return false
        }
    };
    this.addAtMarker = function(el) {
        const addAttribute = domNode => {
            domNode.setAttribute("data-adobe-target-testid", this.id)
        };
        try {
            if (el instanceof NodeList) {
                el.forEach(item => addAttribute(item))
            } else if (el instanceof Node) {
                addAttribute(el)
            } else {
                const elem = document.querySelectorAll(el);
                elem.forEach(item => addAttribute(item))
            }
        } catch (e) {
            this.log(e)
        }
    };
    this.fillMissingOptionsWithDefaults = function(options, defaultOptions) {
        return { ...defaultOptions,
            ...options
        }
    };
    this.includes = function(str, arr) {
        for (let substr of arr) {
            if (substr === "${ ") substr = substr.trim();
            if (str.includes(substr)) return true
        }
        return false
    };
    this.parseString = function(str, data) {
        const reduce = (target, obj) => {
            let keys = target.split(".");
            return keys.reduce((prev, curr) => {
                if (curr.search(/\[/g) > -1) {
                    let mCurr = curr.replace(/\]/g, "");
                    let arr = mCurr.split("[");
                    return arr.reduce((pr, cu) => {
                        cu = cu.split('"').join("").split("'").join("");
                        return pr && pr[cu]
                    }, prev)
                } else {
                    return prev && prev[curr]
                }
            }, obj)
        };
        const completeData = {
            this: this
        };
        if (data) {
            completeData.data = data
        }
        if (this.useCopy) {
            const uc = this.useCopy;
            if (uc.languages && uc.languages[this.language]) {
                completeData.thisLanguage = uc.languages[this.language]
            }
            if (uc.countries) {
                if (uc.countries[this.country]) {
                    completeData.thisCountry = uc.countries[this.country]
                }
                if (uc.countries[this.userCountry]) {
                    completeData.thisUserCountry = uc.countries[this.userCountry]
                }
            }
            if (uc.locales && uc.locales[this.locale]) {
                completeData.thisLocale = uc.locales[this.locale]
            }
            if (this.useCopy.pages && this.useCopy.pages[this.page]) {
                completeData.thisPage = this.useCopy.pages[this.page]
            }
        }
        return str.replace(/\$\{([^}]+)}/g, (_, target) => {
            target = target.trim();
            for (const property in completeData) {
                const splitValue = "[" + property + ".";
                if (target.includes(splitValue)) {
                    const openBracketSplit = target.split(splitValue);
                    for (let i = 1; i < openBracketSplit.length; i++) {
                        let closeBracketSplit = openBracketSplit[i].split("]");
                        closeBracketSplit[0] = reduce(property + "." + closeBracketSplit[0], completeData);
                        if (isNaN(closeBracketSplit[0])) {
                            closeBracketSplit[0] = "'" + closeBracketSplit[0] + "'"
                        }
                        openBracketSplit[i] = closeBracketSplit.join("]")
                    }
                    target = openBracketSplit.join("[")
                }
            }
            return reduce(target, completeData)
        })
    };
    this.insertHTML = function(fOptions) {
        const defaultOptions = {
            templateHtml: false,
            position: "beforeEnd",
            element: "body",
            linkHeader: false,
            data: {}
        };
        const placeHTML = element => {
            const position = options.position.toLowerCase();
            if (position === "innerhtml") {
                element.innerHTML = options.templateHtml
            } else if (position === "outerhtml") {
                element.outerHTML = options.templateHtml
            } else {
                element.insertAdjacentHTML(options.position, options.templateHtml)
            }
        };
        if ("element" in fOptions && typeof fOptions.element === "undefined") {
            this.log("element provided to insertHTML is undefined", "policelight");
            return false
        } else if (!fOptions.templateHtml) {
            if (fOptions.html) {
                fOptions.templateHtml = fOptions.html;
                delete fOptions.html
            } else {
                this.log("The insertHTML function was passed an undefined html setting.  Please check your reference in the function call. It is likely your data-tt-id name does not exactly match your reference", "policelight");
                return false
            }
        }
        const options = { ...defaultOptions,
            ...fOptions
        };
        while (this.includes(options.templateHtml, ["${ ", "[["])) {
            if (options.templateHtml.includes("[[")) {
                options.templateHtml = options.templateHtml.split("[[").join("${").split("]]]").join("] }").split("]]").join("}")
            }
            options.templateHtml = this.parseString(options.templateHtml, options.data)
        }
        const newElemContainer = document.createElement("DIV");
        if (options.templateHtml.startsWith("<tr") || options.templateHtml.startsWith("<td")) {
            options.templateHtml = options.templateHtml.split("<tr>").join("<ttr>").split("<tr ").join("<ttr ").split("</tr>").join("</ttr>").split("<td>").join("<ttd>").split("<td ").join("<ttd ").split("</td>").join("</ttd>")
        }
        newElemContainer.innerHTML = options.templateHtml;
        const newElem = newElemContainer.querySelector(":scope>*") || newElemContainer;
        newElem.setAttribute("data-adobe-target-testid", this.id);
        if (typeof options.linkHeader === "string" || options.linkHeader instanceof String) {
            newElem.setAttribute("daa-lh", options.linkHeader)
        } else if (options.linkHeader === true) {
            const dataId = newElem.getAttribute("data-tt-id");
            newElem.setAttribute("daa-lh", this.id + "|" + dataId)
        }
        const ttIfs = newElem.querySelectorAll('[data-tt-if=""],[data-tt-if="undefined"]');
        ttIfs.forEach(ttIf => {
            ttIf.parentNode.removeChild(ttIf)
        });
        options.templateHtml = newElem.outerHTML;
        const tableTags = ["tr", "td"];
        tableTags.forEach(tag => {
            options.templateHtml = options.templateHtml.split("<t" + tag + " ").join("<" + tag + " ").split("<t" + tag + ">").join("<" + tag + ">").split("</t" + tag + ">").join("</" + tag + ">")
        });
        if (typeof options.element === "string" || options.element instanceof String) {
            const el = document.querySelectorAll(options.element);
            for (let j = 0; j < el.length; j++) {
                placeHTML(el[j])
            }
        } else if (options.element) {
            placeHTML(options.element)
        }
    };
    this.removeFailedTest = function(message) {
        this.trackCustomLink(message);
        this.removeFlickerPreventionCss()
    };
    this.removeFlickerPreventionCss = () => {
        this.log("removing flicker prevention css");
        let els = document.querySelectorAll('style.atHide[data-adobe-target-testid="' + this.id + '"]');
        els.forEach(el => el.parentNode.removeChild(el))
    };
    this.trackCustomLink = function(val, prependTestNumber) {
        if (typeof prependTestNumber === "undefined") prependTestNumber = true;
        if (prependTestNumber) val = this.id + " " + val;
        this.log("trackCustomLink: " + val);
        try {
            if (window.marketingtech && window.marketingtech.adobe && window.marketingtech.adobe.alloy && window.alloy) {
                window.alloy("sendEvent", {
                    documentUnloading: true,
                    xdm: {
                        eventType: "web.webinteraction.linkClicks",
                        web: {
                            webInteraction: {
                                linkClicks: {
                                    value: 1
                                },
                                type: "other",
                                name: val
                            }
                        }
                    },
                    data: {
                        _adobe_corpnew: {
                            digitalData: {
                                primaryEvent: {
                                    eventInfo: {
                                        eventName: val
                                    }
                                }
                            }
                        }
                    }
                })
            } else if (window._satellite && window._satellite.buildInfo) {
                let digitalDataSnapshot = window.digitalData._snapshot();
                digitalDataSnapshot._set("primaryEvent.eventInfo.eventName", val);
                window._satellite.track("event", {
                    digitalData: digitalDataSnapshot,
                    clickTracking: true
                })
            } else if (window.s_adbadobenonacdc) {
                window.s_adbadobenonacdc.tl(true, "o", val)
            } else {
                this.warn("Custom Link not tracked. Library not found.")
            }
        } catch (e) {
            this.warn("-ERROR-trackCustomLink: " + e)
        }
    };
    this.log = function(output, emoji) {
        if (this.devPhase) {
            let emojiSymbol = "",
                emojis = {
                    target: "0x1F3AF",
                    thumbsup: "0x1F44D",
                    thumbsdown: "0x1F44E",
                    pray: "0x1F64F",
                    smile: "0x1F600",
                    thinking: "0x1F914",
                    warning: "0x26A0",
                    policelight: "0x1F6A8",
                    fire: "0x1F525",
                    cat: "0x1F431",
                    dog: "0x1F436"
                };
            if (!emoji) emoji = this.defaultEmojiForLogs;
            if (!(emoji.toLowerCase() in emojis)) {
                emojiSymbol = String.fromCodePoint(emoji) + " "
            } else {
                emoji.split("U+").join("0x");
                emojiSymbol = String.fromCodePoint(emojis[emoji.toLowerCase()]) + " "
            }
            let prefix = emojiSymbol + this.id + "-" + this.experience + "-" + this.language + "-" + this.country + "-" + this.audience + "-" + this.server + ": ";
            if (!!window.MSInputMethodContext && !!document.documentMode && typeof output !== "string") {
                console.log(prefix);
                console.log(output)
            } else {
                console.log(prefix, output)
            }
        }
    };
    this.warn = function(output) {
        if (this.devPhase) console.warn(this.id + "-" + this.experience + "-" + this.country + "-" + this.language + "-" + this.server + "-" + this.audience + ": " + output)
    };
    this.init = function() {
        const defaultSettings = {
            id: id,
            requiredElements: false,
            audiences: false,
            defaultEmojiForLogs: "target",
            waitForBodyLoad: true,
            timeout: 3e3
        };
        const checkKeyAgainstUrl = key => {
            const pageList = key.split(",");
            let pageFound = false;
            pageList.forEach(item => {
                if (window.location.href.includes(item.trim())) {
                    pageFound = true
                }
            });
            return pageFound
        };
        const findRequiredElements = settings => {
            if (settings.waitForBodyLoad && document.readyState !== "interactive" && document.readyState !== "complete") {
                return "bodyNotLoaded"
            } else if (!settings.waitForBodyLoad || document.readyState === "interactive" || document.readyState === "complete") {
                if (settings.requiredElements === false || Array.isArray(settings.requiredElements) || (typeof settings.requiredElements === "string" || settings.requiredElements instanceof String) && settings.requiredElements !== "") {
                    this.usedRequiredElements = settings.requiredElements;
                    return chooseSelectionMethod(settings.requiredElements)
                } else if (typeof settings.requiredElements === "object") {
                    let elementFound = false;
                    Object.keys(settings.requiredElements).forEach(key => {
                        if (!elementFound && (checkKeyAgainstUrl(key) || key === "else" || key === "all")) {
                            this.usedRequiredElements = settings.requiredElements[key];
                            elementFound = chooseSelectionMethod(settings.requiredElements[key])
                        }
                    });
                    return elementFound
                } else {
                    return false
                }
            }
        };
        const chooseSelectionMethod = selector => {
            if (selector === false) {
                return true
            } else if ((typeof selector === "string" || selector instanceof String) && selector !== "") {
                return tryToSelect(selector)
            } else if (Array.isArray(selector)) {
                for (let i = 0; i < selector.length; i++) {
                    if (!tryToSelect(selector[i])) return false
                }
                return true
            } else if (typeof selector === "object") {
                let allKeysFound = true;
                Object.keys(selector).forEach(function(key) {
                    if (!tryToSelect(selector[key])) allKeysFound = false
                });
                return allKeysFound
            }
        };
        const tryToSelect = selector => {
            try {
                let el = document.querySelectorAll(selector);
                if (el.length) {
                    return true
                } else {
                    this.log(`${ this.id } required element '${ selector }' not found`, "policelight");
                    return false
                }
            } catch (e) {
                this.warn("Invalid selector in required elements");
                return false
            }
        };
        const setCountryAndLanguageFromLocale = locale => {
            let localeArray = locale.toLowerCase().split("-").join("_").split("_");
            if (localeArray.length) {
                if (localeArray.length >= 3) {
                    this.language = `${ localeArray[0] }-${ localeArray[1] }`;
                    this.country = localeArray[2]
                } else if (localeArray.length >= 2) {
                    this.language = localeArray[0];
                    this.country = localeArray[1]
                } else {
                    this.country = localeArray[0];
                    const diffCountryLanguageCodes = {
                        jp: "ja",
                        mx: "es",
                        br: "pt",
                        se: "sv",
                        dk: "da",
                        us: "en",
                        cn: "zh-hant",
                        hk: "zh-hant",
                        tw: "zh-hant",
                        kr: "ko"
                    };
                    const diffLanguageCountryCodes = {};
                    Object.keys(diffCountryLanguageCodes).forEach(function(key) {
                        diffLanguageCountryCodes[diffCountryLanguageCodes[key]] = key
                    });
                    if (this.country === "nb") {
                        this.language = "no";
                        this.country = "no"
                    } else if (this.country in diffCountryLanguageCodes) {
                        this.language = diffCountryLanguageCodes[this.country]
                    } else if (this.country in diffLanguageCountryCodes) {
                        this.language = this.country;
                        this.country = diffLanguageCountryCodes[this.country]
                    } else {
                        this.language = this.country
                    }
                }
                this.countryCode = this.country === "uk" ? "GB" : this.country.toUpperCase();
                this.countryFolder = "";
                let ccGeoFolderList = ["br", "ca", "ca_fr", "la", "mx", "cl", "africa", "be_nl", "be_fr", "be_en", "bg", "sa_en", "sa_ar", "ae_en", "cz", "cy_en", "dk", "de", "ee", "es", "fr", "gr_en", "ie", "il_en", "it", "lv", "lt", "lu_de", "lu_en", "lu_fr", "hu", "mt", "mena_en", "nl", "no", "at", "pl", "pt", "ro", "ch_de", "si", "sk", "ch_fr", "fi", "se", "ch_it", "tr", "ua", "uk", "ru", "au", "hk_en", "in", "nz", "sea", "sg", "th_en", "cn", "hk_zh", "tw", "jp", "kr", "cis_ru", "ae_ar", "mena_ar", "il_he", "cis_en", "co", "ar", "pe", "za", "my_en", "id_en", "ph_en", "vn_en"];
                if (locale === "iw_IL") {
                    this.countryFolder = "il_he/"
                } else if (ccGeoFolderList.includes(this.country + "_" + this.language)) {
                    this.countryFolder = this.country + "_" + this.language + "/"
                } else if (ccGeoFolderList.includes(this.country)) {
                    this.countryFolder = this.country + "/"
                }
            }
            this.locale = this.language + "_" + this.country
        };
        const setInitValues = (settings, id) => {
            this.id = settings.id || id;
            this.campaign = id;
            this.experience = 1;
            this.country = "us";
            this.countryCode = "US";
            this.language = "en";
            this.countryFolder = "";
            this.audience = "all";
            this.defaultEmojiForLogs = settings.defaultEmojiForLogs;
            if (window.location.host.includes("stage") || window.location.host.includes("stg") || window.location.host.includes("author")) {
                this.server = "stage"
            } else {
                this.server = "prod"
            }
            const ua = navigator.userAgent.toLocaleLowerCase() || navigator.vendor.toLocaleLowerCase() || window.opera.toLocaleLowerCase();
            this.browser = false;
            if (ua.includes("edg/")) {
                this.browser = "edge"
            } else if (ua.includes("firefox/")) {
                this.browser = "firefox"
            } else if (ua.includes("opr/")) {
                this.browser = "opera"
            } else if (ua.includes("chrome/")) {
                this.browser = "chrome"
            } else if (ua.includes("safari/")) {
                this.browser = "safari"
            }
            this.platform = false;
            if (/windows phone/i.test(ua)) {
                this.platform = "windowsPhone"
            } else if (/android/i.test(ua)) {
                this.platform = "android"
            } else if (/(iphone|ipad|ipod)/i.test(ua) && !window.MSStream) {
                this.platform = "iOS"
            } else if (/(macintosh|macintel|macppc|mac68k|macos)/i.test(ua)) {
                this.platform = "mac"
            } else if (/(win32|win64|windows|wince)/i.test(ua)) {
                this.platform = "windows"
            }
            this.devPhase = false;
            let locale = "en_us";
            if (typeof adobeid !== "undefined" && "locale" in adobeid) {
                if (typeof adobeid.locale === "object" && "ietf" in adobeid.locale) {
                    locale = adobeid.locale.ietf
                } else if (typeof adobeid.locale === "string") {
                    locale = adobeid.locale
                }
            } else if (window.adobe_dc_sdk ? .dom ? .getLocale) {
                locale = adobe_dc_sdk.dom.getLocale()
            }
            setCountryAndLanguageFromLocale(locale);
            this.userCountry = this.country;
            this.userCountryCode = this.countryCode;
            if (window.location.pathname === "/" || window.location.pathname === "/" + this.country + "/") {
                this.page = "index";
                this.pageWithPath = "/index"
            } else {
                const pathArray = window.location.pathname.split("/");
                if (window.location.pathname[window.location.pathname.length - 1] === "/") {
                    this.page = pathArray[pathArray.length - 2]
                } else {
                    this.page = pathArray[pathArray.length - 1].split(".")[0]
                }
                this.pageWithPath = window.location.pathname
            }
            if (this.country !== "us") {
                if (this.country === "gb") {
                    this.log('Locale uses "gb", updated to "uk".');
                    this.country = "uk";
                    this.countryFolder = "uk/"
                }
                this.pageWithPath = window.location.pathname.replace(this.countryFolder, "")
            }
        };
        const lookForRecipeNamePrefixes = recipeName => {
            if (recipeName.startsWith("control") || recipeName.startsWith("ctrl") || recipeName.startsWith("cntrl") || recipeName.startsWith("holdout")) {
                return 0
            } else {
                let prefixes = ["var", "branch", "challenger", "experience"];
                for (let i = 0; i < prefixes.length; i++) {
                    for (let j = 0; j < 2; j++) {
                        let prefix = prefixes[i];
                        if (!j) prefix += " ";
                        if (recipeName.startsWith(prefix)) {
                            let exp = recipeName.substr(prefix.length, 1);
                            if (exp === "-") {
                                return 1
                            } else if (isNaN(exp)) {
                                return recipeName.charCodeAt(prefix.length) - 97
                            } else {
                                return exp
                            }
                        }
                    }
                }
            }
            return 1
        };
        const setValuesFromTarget = settings => {
            let el = document.querySelectorAll('[data-csp-campaign-id="' + this.id + '"]'),
                recipeName = "cpro_pzn",
                campaignName = "ROLLOUT PRSNLZ | NA | Photoshop",
                geoLocationCountry = "japan";
            if (el.length) {
                campaignName = el[0].getAttribute("data-campaign-name");
                recipeName = el[0].getAttribute("data-recipe-name");
                geoLocationCountry = el[0].getAttribute("data-geolocation-country")
            }
            recipeName = recipeName.toLowerCase();
            campaignName = campaignName.toLowerCase();
            if (!recipeName.includes("recipe.name")) {
                this.experience = lookForRecipeNamePrefixes(recipeName);
                if (Array.isArray(settings.audiences)) {
                    for (let i = 0; i < settings.audiences.length; i++) {
                        if (recipeName.includes(settings.audiences[i].toLowerCase()) || campaignName.includes(settings.audiences[i].toLowerCase())) this.audience = settings.audiences[i]
                    }
                }
                let targetCountryNameMap = {
                    argentina: "ar",
                    brazil: "br",
                    canada: "ca",
                    chile: "cl",
                    colombia: "co",
                    "costa rica": "cr",
                    ecuador: "ec",
                    guatemala: "gt",
                    mexico: "mx",
                    peru: "pe",
                    "united states": "us",
                    venezuela: "ve",
                    austria: "at",
                    belgium: "be",
                    bulgaria: "bg",
                    croatia: "hr",
                    "czech republic": "cz",
                    denmark: "dk",
                    estonia: "ee",
                    finland: "fi",
                    france: "fr",
                    germany: "de",
                    greece: "gr",
                    hungary: "hu",
                    ireland: "ie",
                    italy: "it",
                    latvia: "lv",
                    lithuania: "lt",
                    luxembourg: "lu",
                    malta: "mt",
                    netherlands: "nl",
                    norway: "no",
                    poland: "pl",
                    portugal: "pt",
                    romania: "ro",
                    "russian federation": "ru",
                    serbia: "rs",
                    "slovakia (slovak republic)": "sk",
                    slovenia: "si",
                    spain: "es",
                    sweden: "se",
                    switzerland: "ch",
                    "united kingdom": "uk",
                    ukraine: "ua",
                    australia: "au",
                    china: "cn",
                    "hong kong": "hk",
                    india: "in",
                    japan: "jp",
                    "south korea": "kr",
                    "new zealand": "nz",
                    taiwan: "tw",
                    indonesia: "id",
                    malaysia: "my",
                    philippines: "ph",
                    singapore: "sg",
                    thailand: "th",
                    "viet nam": "vn",
                    algeria: "dz",
                    cyprus: "cy",
                    egypt: "eg",
                    morocco: "ma",
                    "south africa": "za",
                    tunisia: "tn",
                    afghanistan: "af",
                    bahrain: "bh",
                    israel: "il",
                    jordan: "jo",
                    kuwait: "kw",
                    lebanon: "lb",
                    oman: "om",
                    qatar: "qa",
                    "saudi arabia": "sa",
                    turkey: "tr",
                    "united arab emirates": "ae",
                    yemen: "ye"
                };
                if (geoLocationCountry in targetCountryNameMap) this.userCountry = targetCountryNameMap[geoLocationCountry];
                this.userCountryCode = this.userCountry === "uk" ? "GB" : this.userCountry.toUpperCase()
            }
        };
        const setValuesFromGet = () => {
            this.get = {};
            let args = location.search.substr(1).split(/&/);
            for (let i = 0; i < args.length; ++i) {
                let tmp = args[i].split(/=/);
                if (tmp[0] !== "") {
                    this.get[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "))
                }
            }
            if ("tt" in this.get || "at_preview_token" in this.get || "test" in this.get || "atMarker" in this.get) {
                this.devPhase = true;
                if ("tt" in this.get) {
                    let ttArray = decodeURIComponent(this.get.tt.toLowerCase()).split(",");
                    for (let i = 0; i < ttArray.length; i++) {
                        if (ttArray[i].includes(this.id.toLowerCase())) {
                            let tmpDcc = ttArray[i].split("-");
                            if (tmpDcc.length >= 2 && !isNaN(tmpDcc[1])) this.experience = tmpDcc[1]
                        }
                    }
                }
            }
            let geoLocationCountry = "japan",
                cspScript = document.querySelectorAll('[data-csp-campaign-id="' + this.id + '"]');
            if (geoLocationCountry.includes("profile.geolocation.country") && !cspScript.length && ("countryCode" in this.get || "akamaiLocale" in this.get)) {
                if ("countryCode" in this.get) {
                    this.userCountry = this.get.countryCode.toLowerCase()
                } else if ("akamaiLocale" in this.get) {
                    this.userCountry = this.get.akamaiLocale.toLowerCase()
                }
                this.userCountryCode = this.userCountry.toUpperCase();
                if (this.userCountry === "gb") {
                    this.userCountry = "uk"
                }
            }
            if ("server" in this.get) {
                this.server = this.get.server
            }
            if ("atMarker" in this.get) document.body.classList.add("atMarker");
            if ("atlocale" in this.get) setCountryAndLanguageFromLocale(this.get.locale);
            if ("ataudience" in this.get) this.audience = this.get.ataudience;
            if ("atbrowser" in this.get) this.browser = this.get.atbrowser.toLowerCase();
            if ("atplatform" in this.get) this.platform = this.get.atplatform.toLowerCase();
            if (this.platform === "windowsphone") {
                this.platform = "windowsPhone"
            } else if (this.platform === "ios") {
                this.platform === "iOS"
            }
        };
        const addClassesToBodyAndStartMain = async () => {
            const testIdWithVariant = this.id + "-" + this.experience;
            document.body.classList.add(testIdWithVariant);
            document.body.classList.add("ttLocale-" + this.locale);
            document.body.classList.add("ttPage-" + this.page);
            document.body.classList.add("ttAudience-" + this.audience);
            let testIdsValue = document.body.dataset.adobeTargetTestids;
            if (testIdsValue) {
                let testIdsValueArray = testIdsValue.split(" ");
                if (!testIdsValueArray.includes(testIdWithVariant)) document.body.dataset.adobeTargetTestids = testIdsValue + " " + testIdWithVariant
            } else {
                document.body.dataset.adobeTargetTestids = testIdWithVariant
            }
            this.log(`firing main function in library v${ this.libraryVersionNumber }`);
            await this.main();
            this.removeFlickerPreventionCss()
        };
        const runMain = () => {
            if ("disable" in this.get && this.get.disable.includes(this.id)) {
                this.removeFailedTest("disabled by parameter")
            } else if ("main" in this) {
                this.experience = parseInt(this.experience);
                if (this.devPhase) {
                    addClassesToBodyAndStartMain()
                } else {
                    try {
                        addClassesToBodyAndStartMain()
                    } catch (e) {
                        this.removeFailedTest("error: JS contains error")
                    }
                }
            } else {
                this.removeFailedTest("error: main function not set")
            }
        };
        let settings = defaultSettings;
        if ("settings" in customFunctions) settings = { ...defaultSettings,
            ...customFunctions.settings
        };
        let endTime = Date.now() + settings.timeout;
        Object.keys(customFunctions).forEach(key => {
            this[key] = customFunctions[key]
        });
        setInitValues(settings, id);
        setValuesFromTarget(settings);
        setValuesFromGet();
        if (findRequiredElements(settings) === true) {
            runMain()
        } else {
            let findElementsInterval = setInterval(() => {
                const elementsFound = findRequiredElements(settings);
                if (elementsFound === true) {
                    clearInterval(findElementsInterval);
                    runMain()
                } else if (Date.now() > endTime) {
                    clearInterval(findElementsInterval);
                    if (elementsFound === "bodyNotLoaded") {
                        this.removeFailedTest("error: body not loaded in allowed timeout")
                    } else {
                        this.removeFailedTest("error: requiredElements not found in allowed timeout")
                    }
                }
            }, 100)
        }
    };
    this.init()
}
if (typeof atOffers === 'undefined') var atOffers = {};
atOffers['cpro'] = new atLibrary(atOffer, 'cpro');
//# sourceURL=/OPT_cpro.js