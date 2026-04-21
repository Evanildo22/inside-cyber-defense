/* ============================================================
   Inside Cyber Defense — Project Pages
   Gallery "More screenshots" toggle + Nivo Lightbox init
   for dynamically revealed items.
   ============================================================ */
(function ($) {
  'use strict';

  $(document).ready(function () {

    /* Hide toggle button if the "more" section has no images */
    $('.gallery-toggle-btn').each(function () {
      var targetId = $(this).data('target');
      if ($('#' + targetId + ' .gallery-item').length === 0) {
        $(this).closest('.gallery-toggle-wrap').hide();
      }
    });

    /* Toggle expand / collapse */
    $('.gallery-toggle-btn').on('click', function () {
      var targetId = $(this).data('target');
      var $more    = $('#' + targetId);
      var isOpen   = $more.hasClass('is-open');

      $more.toggleClass('is-open');

      if (isOpen) {
        $(this).html('<i class="fa fa-plus-circle"></i> Show more screenshots');
      } else {
        $(this).html('<i class="fa fa-minus-circle"></i> Hide extra screenshots');

        /* Re-initialise Nivo Lightbox on newly visible items so they
           join the gallery set (safe to call multiple times). */
        $more.find('a.lightbox').nivoLightbox({
          effect: 'fadeScale',
          keyboardNav: true
        });
      }
    });

  });

}(jQuery));
