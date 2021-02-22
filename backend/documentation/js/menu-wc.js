'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">futuru-backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/__module__.html" data-type="entity-link">__module__</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CardModule.html" data-type="entity-link">CardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CardModule-a9e0d8cb88049671bc02e6c67ae7d5d8"' : 'data-target="#xs-controllers-links-module-CardModule-a9e0d8cb88049671bc02e6c67ae7d5d8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CardModule-a9e0d8cb88049671bc02e6c67ae7d5d8"' :
                                            'id="xs-controllers-links-module-CardModule-a9e0d8cb88049671bc02e6c67ae7d5d8"' }>
                                            <li class="link">
                                                <a href="controllers/CardController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CardModule-a9e0d8cb88049671bc02e6c67ae7d5d8"' : 'data-target="#xs-injectables-links-module-CardModule-a9e0d8cb88049671bc02e6c67ae7d5d8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CardModule-a9e0d8cb88049671bc02e6c67ae7d5d8"' :
                                        'id="xs-injectables-links-module-CardModule-a9e0d8cb88049671bc02e6c67ae7d5d8"' }>
                                        <li class="link">
                                            <a href="injectables/CardService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CardService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewsModule.html" data-type="entity-link">NewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-NewsModule-76e293b1fe229877b4249478d00dc934"' : 'data-target="#xs-controllers-links-module-NewsModule-76e293b1fe229877b4249478d00dc934"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NewsModule-76e293b1fe229877b4249478d00dc934"' :
                                            'id="xs-controllers-links-module-NewsModule-76e293b1fe229877b4249478d00dc934"' }>
                                            <li class="link">
                                                <a href="controllers/NewsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NewsModule-76e293b1fe229877b4249478d00dc934"' : 'data-target="#xs-injectables-links-module-NewsModule-76e293b1fe229877b4249478d00dc934"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NewsModule-76e293b1fe229877b4249478d00dc934"' :
                                        'id="xs-injectables-links-module-NewsModule-76e293b1fe229877b4249478d00dc934"' }>
                                        <li class="link">
                                            <a href="injectables/NewsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NewsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/__module__.html" data-type="entity-link">__module__</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CardController.html" data-type="entity-link">CardController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/NewsController.html" data-type="entity-link">NewsController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/__entity__.html" data-type="entity-link">__entity__</a>
                            </li>
                            <li class="link">
                                <a href="classes/Card.html" data-type="entity-link">Card</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigService.html" data-type="entity-link">ConfigService</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCardDto.html" data-type="entity-link">CreateCardDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpError.html" data-type="entity-link">HttpError</a>
                            </li>
                            <li class="link">
                                <a href="classes/Logger.html" data-type="entity-link">Logger</a>
                            </li>
                            <li class="link">
                                <a href="classes/News.html" data-type="entity-link">News</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/__module__.html" data-type="entity-link">__module__</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthCheckerMiddleware.html" data-type="entity-link">AuthCheckerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CardService.html" data-type="entity-link">CardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link">LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewsService.html" data-type="entity-link">NewsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RestfulCrudRoleGuard.html" data-type="entity-link">RestfulCrudRoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IRequestError.html" data-type="entity-link">IRequestError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRequestResult.html" data-type="entity-link">IRequestResult</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});