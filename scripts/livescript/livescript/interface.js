$(function(){
  var $tab_cnts;
  $tab_cnts = $('.tab-cnt');
  $('.tabs a').click(function(){
    var $this;
    $this = $(this);
    $tab_cnts.removeClass('selected').filter($this.attr('href')).addClass('selected');
    $this.parent().addClass('selected').siblings().removeClass('selected');
    return false;
  });
});