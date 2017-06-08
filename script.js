let isShow = false;

$(document).ready(() => {
  // Click on projectBox
  $('.projectBox').css('cursor','pointer');
  $('.projectBox').click( (e) => {

    $(e.target).toggleClass('projectBoxActive');

    if($(e.target).attr('data-isshow') == 'true'){
      $(e.target).children().toggle();
      $(e.target).attr('data-isshow', 'false');
    } else {
      $(e.target).one('transitionend', (e) => { $(e.target).children().toggle(); });
      $(e.target).attr('data-isshow', 'true');
    }

  });
});
