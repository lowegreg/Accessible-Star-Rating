$(document).ready(function() {
  var $star_rating = $('.star-rating .fa');

  var SetRatingStar = function() {
    return $star_rating.each(function() {
      if (parseInt($star_rating.siblings('input.rating-value').val()) == parseInt($(this).data('rating'))) {
        $(this).attr('tabindex', 0);
        $(this).focus();
        return $(this).removeClass('fa-star-o').addClass('fa-star');
      } else if (parseInt($star_rating.siblings('input.rating-value').val()) > parseInt($(this).data('rating'))) {
        if ($star_rating.siblings('input.rating-value').val() == "" && parseInt($(this).data('rating')) == 1){
          $(this).attr('tabindex', 0);
        } else {
          $(this).attr('tabindex', -1);
        }
        return $(this).removeClass('fa-star-o').addClass('fa-star');
      } else {
        if ($star_rating.siblings('input.rating-value').val() == "" && parseInt($(this).data('rating')) == 1){
          $(this).attr('tabindex', 0);
        } else {
          $(this).attr('tabindex', -1);
        }
        return $(this).removeClass('fa-star').addClass('fa-star-o');
      }
    });
  };

  $star_rating.on('click keydown', function(event) {
    if (event.which === 0 || event.which === 1 || event.which === 32 || event.which === 13) {
      event.preventDefault();
      if ($star_rating.siblings('input.rating-value').val() == $(this).data('rating')){
        $star_rating.siblings('input.rating-value').val("");
        return SetRatingStar();
      } else {
        $star_rating.siblings('input.rating-value').val($(this).data('rating'));
        return SetRatingStar();
      }
    } else if (event.which === 37 || event.which === 40) {
      $star_rating.siblings('input.rating-value').val( (parseInt($star_rating.siblings('input.rating-value').val()))-1 );
      return SetRatingStar();
    } else if (event.which === 39 || event.which === 38) {
      $star_rating.siblings('input.rating-value').val( (parseInt($star_rating.siblings('input.rating-value').val()))+1 );
      return SetRatingStar();
    }
  });

  SetRatingStar();
});