$(document).ready(function(){var a=$(".star-rating .fa"),t=function(){return a.each(function(){return parseInt(a.siblings("input.rating-value").val())==parseInt($(this).data("rating"))?($(this).attr("tabindex",0),$(this).focus(),$(this).removeClass("fa-star-o").addClass("fa-star")):parseInt(a.siblings("input.rating-value").val())>parseInt($(this).data("rating"))?(""==a.siblings("input.rating-value").val()&&1==parseInt($(this).data("rating"))?$(this).attr("tabindex",0):$(this).attr("tabindex",-1),$(this).removeClass("fa-star-o").addClass("fa-star")):(""==a.siblings("input.rating-value").val()&&1==parseInt($(this).data("rating"))?$(this).attr("tabindex",0):$(this).attr("tabindex",-1),$(this).removeClass("fa-star").addClass("fa-star-o"))})};a.on("click keydown",function(i){return 0===i.which||1===i.which||32===i.which||13===i.which?(i.preventDefault(),a.siblings("input.rating-value").val()==$(this).data("rating")?(a.siblings("input.rating-value").val(""),t()):(a.siblings("input.rating-value").val($(this).data("rating")),t())):37===i.which||40===i.which?(a.siblings("input.rating-value").val(parseInt(a.siblings("input.rating-value").val())-1),t()):39===i.which||38===i.which?(a.siblings("input.rating-value").val(parseInt(a.siblings("input.rating-value").val())+1),t()):void 0})});