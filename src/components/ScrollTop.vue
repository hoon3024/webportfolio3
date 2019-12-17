<template>

    <div id="scrollTop">
      <div class="d-flex align-items-center justify-content-end">
        <i class="fa fa-long-arrow-up"></i>To Top</div>
    </div>
  
    
    
</template>

<script>
export default {
    template,

    ready() {
        'use strict'
        var vm = this;
        vm.scrolltop();
        vm.scrollup();
    },

    data() {
        return {}
    },
    methods: {
        scrolltop() {
            $('#scrollTop').on('click', function() {

                $('html, body').animate({ scrollTop: 0 }, 800);
            });
        },
        scrollup() {
            var c, currentScrollTop = 0,
                navbar = $('.navbar');
            $(window).on('scroll', function() {


                var a = $(window).scrollTop(),
                    b = navbar.height();

                currentScrollTop = a;
                if (c < currentScrollTop && a > b + b) {
                    navbar.addClass("scrollUp");
                } else if (c > currentScrollTop && !(a <= b)) {
                    navbar.removeClass("scrollUp");
                }
                c = currentScrollTop;


                if ($(window).scrollTop() >= 1600) {
                    $('#scrollTop').addClass('active');
                } else {
                    $('#scrollTop').removeClass('active');
                }
            });
        }


    },
    computed: {},
    components: {}

}
</script>

<style>
#scrollTop {
  width: 80px;
  height: 90px;
  position: fixed;
  right: -90px;
  top: 40%;
  background-color: #5989e5;
  background-image: url(/assets/topbutton/topbutton.gif);
  color: #fff;
  text-shadow: 0px 0px 10px black;
  text-align: center;
  line-height: 40px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  font-size: 0.7rem;
  cursor: pointer;
  z-index: 9998;
  padding-right: 10px;
  transition: all 0.3s;
}

#scrollTop.active {
  right: -50px;
}

#scrollTop i {
  font-size: 1.1rem;
  margin-right: 10px;
}

#scrollTop:hover {
  right: 0;
}

/* */
@media (max-width: 475px) {
  #scrollTop {
    display: none !important;
  }
}


</style>
