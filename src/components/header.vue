<template>
      <main id="nav" class="nav-header-sec w-100 relative bg-pri-dim cover obj-fit" >

        <!-- ***NAV HEADER LEFT STARTS***-->
        <nav data-scroll class="z-9999 fixed pv3 scroll-effect w-100 flex justify-center items-center bb bw0-ns b--black-025">

            <div class="m-w1 w-100 flex justify-between items-center ph3 ph4-m ph5-ns ph5-ns-pro pv2 black-80">
    
                <!-- LOGO -->
                <a data-scroll href="index.html"> 
                    <img class="logo w3-7-ns w4 w-100" src="@/assets/logo-light.svg" style="max-width : 120px">
                </a>
    
                <!-- NAV ITEM LINKS-->
                <ul class="ma0 pa0 flex flex-auto justify-end">
                    <div class="dn df-ns  pa0 flex justify-end items-center">
                        <li class="list"><a class="relative link dn db-ns cs fw4 f6-5 white-60 scroll ttc mr4 cursor_hand"  onclick="smoothScroll('me')">Learn</a></li>
                        <li class="list"><a class="link dn db-ns cs fw4 f6-5 white-60 scroll ttc mr4 cursor cursor_hand" onclick="smoothScroll('core')" >Contact</a></li>
                        <li class="list"><a class="link dn db-ns cs fw4 f6-5 white-60 scroll ttc mr4 cursor cursor_hand"  onclick="smoothScroll('works')">Blogs</a></li>
                        <li class="list"><a class="link dn db-ns cs fw6 f6 gradText scroll mr0 cursor_hand cursor_hand"  onclick="smoothScroll('contact')">Get early access</a></li>
                    </div>
                </ul>
    
                 <!--MOBILE VIEW TOGGLE ICON-->
                <div id="mob-toggle" class="dn-ns df tr w2 pointer flex flex-column justify-center items-end o-toggle">
                    <span id="toogle1" style="height: 2px; width: 20px;" class="br-pill bg-pri mv1"></span>
                    <span id="toogle2" style="height: 2px; width: 20px;" class="br-pill bg-pri mv1"></span>
                </div>

            </div>
    
        </nav>
        <!-- ***NAV HEADER LEFT ENDS***-->
            

        <!--*** MOBILE NAV MENU STARTS ***-->
        <nav id="mob-menu" class="z-999 vh-100 dn fixed hideMob-nav-width absolute bg-black-40">
                <div class="flex flex-column pb4-5 pt4 bg-white w-100 h-45 card-shadow br4 br--top slide-up shadow-2">
                <ul class="pa0 flex flex-column flex-auto justify-start items-center ph3 w-100">
                    <a class="list flex items-center justify-between link pv3 ph3 mv1 bg-white-05 w-100 scroll closelinkHold br2" onclick="smoothScroll('me')">
                        <span class="black-70 ma0 ttc f4-5">About</span>
                        <ion-icon class="f5 black-50" name="ios-arrow-forward"></ion-icon>
                    </a>
                    <a class="list flex items-center justify-between link pv3 ph3 mv1 bg-white-05 w-100 closelinkHold br2" onclick="smoothScroll('core')">
                        <span class="black-70 ma0 ttc f4-5">Contact</span>
                        <ion-icon class="f5 black-50" name="ios-arrow-forward"></ion-icon>
                    </a>
                    <a href="mailto:temidayo.oluwaniyi@gmail.com" target="_blank" class="list flex items-center justify-between link pv3 ph3 mv1 bg-white-05 w-100 closelinkHold br2">
                        <span class="black-70 ma0 ttc f4-5">Let's Talk</span>
                        <span class="sec ma0 f4-5 i flex">Send a mail  <ion-icon class="f5 pt0-5 ml2 sec" name="ios-arrow-forward"></ion-icon></span>
                    </a>
                    <a class=" df justify-center ph3 br3 black-90 closelinkHold pv3 ph4 br-pill mt4 mail-c" onclick="smoothScroll('works')">
                        <p class="ma0 fw5 btn-txt f4-ns f5 cursor_hand">Get early access</p>
                        <!-- <ion-icon class="black btn-icon" name="ios-arrow-forward"></ion-icon> -->
                    </a>
                </ul>
                </div>
        </nav>
        <!--*** MOBILE NAV MENU ENDS ***-->


        <!--***LANDINNG SECTION STARTS ***-->
        <section id="me" class="m-w ph5-ns-pro vh-100-ns w-100 vh-65-m flex flex-column justify-center justify-center-m items-center">
                <div class="df flex-column flex-row-l justify-between-l justify-center-m items-center w-100 ph0 ph4-m ph6-xl ph6-ns ph0-pro ph5-5-x1l">
                    <!--LEFT BANNER CONTENT-->
                    <div  class="slide-up side-img-sm order-1-pro h-100 w-60-ns w-100-m w-60-pro w-100 ph3 ph0-m ph0-ns mt3-ns flex flex-column order-0 justify-center-l justify-start justify-start-m items-start">
                        <h1 class="f-6-ns f-6-x1l f-5b-m SF f0-pro f0-3 white ma0 mt4-l mt4-m mt0 pr0-ns pr3-m lh-solid gradText ani-opacity w-100 slide-up">
                            Change <br class="dn-m"> the narrative
                        </h1>
                        <p class="f1-ns f1-3-m f3 tl tl-ns f2-5-pro white-40 fw5 lh-title2 ani-opacity ma0 mt3-5-ns mt4-m mt4 mb2 slide-up">
                            We help women kick start their <br class="dn-m">career in <span class="white-90">emerging technologies.</span>
                        </p>
                        <div class="mt4 w-100 df flex-column flex-row-ns items-center-ns">
                            <input id="name" class=" input-reset h3 ba b--white-10 w6-ns w5-pro white-80 pa3 db outline-0 br3-5 mr2" style="background: rgba(255,255,255,0.0);" placeholder="example@mail.com" type="text">
                            <a class=" df justify-center items-center ph4 h3 f4-ns f4-5-pro mt3 mt0-ns fw5 br3-5 black-90 btn-grad ml3-ns cursor_hand">Get early access</a>
                        </div>
                    </div>
                    <!--RIGHT BANNER ILLUSTRATION-->
                    <div class="slide-up h7-l h5-m h5-7 w-35-l w-40-pro w-85 mt4-5 mt5-5-m mt0-l mb3 mb0-ns mv0-ns ani-opacity df flex-column items-center justify-center">
                        <div class="sideBgImg br-pill df justify-center items-center">
                            <img class="br-pill bg-white-05 cover obj-fit" src="@/assets/images/black.jpg"/>
                        </div>
                    </div>
                </div>
                <div class=" df justify-between items-center w-100 h0 ph3 ph4-m ph6-xl ph6-l ph0-pro ph5-5-x1l mt5-l mt0-x1l mt3-pro mt4 mb5 mb0-ns">
                    <div class="">
                        <p class="white-40 f5-ns f5-5 pb3">Currently in 5 countries</p>
                        <span class="df items-center">
                            <span class="w2-ns h2-ns w1-3 h1-4 ba b--white-10 bg-transparent br-pill pa1 mr3"><img src="@/assets/images/nig.svg" /></span>
                            <span class="w2-ns h2-ns w1-3 h1-4 ba b--white-10 bg-transparent br-pill pa1 mr3"><img src="@/assets/images/uganda.svg" /></span>
                            <span class="w2-ns h2-ns w1-3 h1-4 ba b--white-10 bg-transparent br-pill pa1 mr3"><img src="@/assets/images/estonia.svg" /></span>
                            <span class="w2-ns h2-ns w1-3 h1-4 ba b--white-10 bg-transparent br-pill pa1 mr3"><img src="@/assets/images/sa.svg" /></span>
                            <span class="w2-ns h2-ns w1-3 h1-4 ba b--white-10 bg-transparent br-pill pa1 mr3"><img src="@/assets/images/ghana.svg" /></span>
                        </span>
                    </div>
                    <label class="toggle-control mr5-ns mr0" style="position: fixed;">
                        <input type="checkbox" checked="checked">
                        <span class="control shadow-4"></span>
                    </label>
                </div>
        </section>
        <!--***LANDINNG SECTION ENDS ***-->
        
    </main>
</template>