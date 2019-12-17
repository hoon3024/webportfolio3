<template>

<header class="header">
    <nav class="navbar navbar-expand-lg fixed-top"><a class="navbar-brand">ChangHoon Webs</a>
        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><span></span><span></span><span></span></button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto align-items-start align-items-lg-center">
                <li class="nav-item"><a href="#home" class="nav-link link-scroll">HOME</a></li>
                <li class="nav-item"><a href="#about-me" class="nav-link link-scroll">About me</a></li>
                <li class="nav-item"><a href="#skill" class="nav-link link-scroll">Skills</a></li>
                <li class="nav-item"><a href="#port" class="nav-link link-scroll">Portfolio</a></li>
                <li class="nav-item"><a href="#contact" class="nav-link link-scroll">Contact</a></li>
            </ul>
           
        </div>
    </nav>
</header>

    
</template>

<script>
export default {
     template,
 
    ready() {

    'use strict'
        var vm = this;

        vm.navigator();
        vm.scrollspy();
        vm.toggleNav();




    },
    data() {
        return {

        }
    },
    methods: {


        navigator() {
            
            $('.link-scroll').on('click', function(e) {
                var anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(anchor.attr('href')).offset().top
                }, 1000);
                e.preventDefault();
            });
        },

        scrollspy() {
            
            $('body').scrollspy({
                target: '#navbarSupportedContent',
                offset: 80
            });
        },
        toggleNav() {

            
            $('.navbar .navbar-toggler').on('click', function() {
                $(this).toggleClass('active');
            });
        },
        themeColor() {

            var stylesheet = $('link#theme-stylesheet');
            $("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(stylesheet);
            var alternateColour = $('link#new-stylesheet');

            if ($.cookie("theme_csspath")) {
                alternateColour.attr("href", $.cookie("theme_csspath"));
            }

            $("#colour").change(function() {

                if ($(this).val() !== '') {

                    var theme_csspath = 'css/style.' + $(this).val() + '.css';

                    alternateColour.attr("href", theme_csspath);

                    $.cookie("theme_csspath", theme_csspath, { expires: 365, path: document.URL.substr(0, document.URL.lastIndexOf('/')) });

                }

                return false;
            });

        }

    },
    computed: {},
    components: {}


}
</script>

<style>
</style>