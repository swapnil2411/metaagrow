//Mobile Navbar

// Wow js
new WOW().init();

$('.hamburger').on('click', function(){
    $('aside').addClass('showMobileNav');
    $('.overlay').addClass('showOverlay');
})

$('.close_mobile_nav').on('click', function(){
    $('aside').removeClass('showMobileNav');
    $('.overlay').removeClass('showOverlay');
})

$('.accordion_header').on('click', function(){
    $(this).find('svg').toggleClass('rotation');
    $(this).parent().siblings().find('svg').removeClass('rotation');

    $(this).parent().find('.accordion_content').slideToggle(500, function(){
      $(this).addClass('showContent');
      $(this).parent().siblings().find('.accordion_content').slideUp(500, function(){
        $(this).removeClass('showContent');
      })
    });
})

$('#service_carousel').owlCarousel({
  // stagePadding: 280,
  loop:true,
  nav:true,
  items: 1,
  dots: false,
  navText: ['<span class="iconify" data-icon="fontisto:angle-left"></span>','<span class="iconify" data-icon="fontisto:angle-right"></span>'],
  responsive: {
    0:{
      stagePadding:50,
      margin:10,
    },
    600:{
      stagePadding:100,
      margin:10,
    },
    1200:{
      stagePadding:280,
      margin:20,
    }
  }
})




$('#blogs_carousel').owlCarousel({
  // stagePadding: 280,
  loop:true,
  nav:true,
  dots: true,
  margin: 20,
  nav: false,
  navText: ['<span class="iconify" data-icon="fontisto:angle-left"></span>','<span class="iconify" data-icon="fontisto:angle-right"></span>'],
  responsive: {
    0:{
      items: 1,
      slideBy: 1
    },
    600:{
      items: 2,
      slideBy: 2
    },
    1000:{
      items: 3,
      slideBy: 3
    }
  }
})

$('#app_screenshot').owlCarousel({
  loop:true,
  nav:true,
  dots: false,
  margin: 10,
  navText: ['<span class="iconify" data-icon="fontisto:angle-left"></span>','<span class="iconify" data-icon="fontisto:angle-right"></span>'],
  responsive: {
    0:{
      items: 1
    },
    600:{
      items: 3
    },
    1000:{
      items: 5
    }
  }
})

// $('.owl-item.active:nth-child(3)').prev();
// $('#app_screenshot').mouseover(function(){
//   var middleActive;
//   var previousActive;
//   var previouChild;
//   var nextActive;
//   var activeItemLength = [$('#app_screenshot .owl-item.active')];
//   activeItemLength.forEach(element => {
//     previousActive = element[1];
//     previousActive.style.height = "380px";
//     previouChild = previousActive.children[0];
//     console.log(previouChild);
//     previouChild.style.height = "380px";
//     previouChild = previousActive.children[0].children[0].style.height = "380px";
//     console.log(previouChild);
//     console.log(previousActive);
//     middleActive = element[2];
//     nextActive = element[3]
//   });


// })

//Faq accodion

function toggleIcon(e) {
  $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      .toggleClass('glyphicon-plus glyphicon-minus');
  }
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);




