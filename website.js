jQuery(document).ready(function ($) {
  console.log("hello");

  function onScrollInit( items, trigger ) {
          items.each( function() {
              var osElement = $(this),
              osAnimationClass = osElement.attr('data-os-animation'),
              osAnimationDelay = osElement.attr('data-os-animation-delay');
              osElement.css({
                '-webkit-animation-delay':  osAnimationDelay,
                '-moz-animation-delay':     osAnimationDelay,
                'animation-delay':          osAnimationDelay,
                'animation-duration':         '2s',
                '-webkit-animation-delay':  '2s',
                '-moz-animation-delay':     '2s'
              });

              var osTrigger = ( trigger ) ? trigger : osElement;

              osTrigger.waypoint(function() {
                  console.log(osElement);
                  console.log("YOLO");
                osElement.addClass('animated').addClass(osAnimationClass);
                },{
                    offset: '90%'
              });
          });

       }
       onScrollInit($('.os-animation'));
});
