var turn = 0;

function makeMove(evt) {
  $('.active .open.square').off('click',makeMove);
  if(turn%2 === 0) {
    $(this).addClass('player1');
    $(this).removeClass('open');
    checkWin($(this),'player1');
  }
  else {
    $(this).addClass('player2');
    $(this).removeClass('open');
    checkWin($(this),'player2');
  }
  $('.active .open.square').on('click',makeMove);
  turn++;
}

function checkVictory(player) {
  if($('.game').children('.top.left.'+player).length > 0 &&
$('.game').children('.top.center.'+player).length > 0 &&
$('.game').children('.top.right.'+player).length > 0) {
  $('.game').children('.sub-board').addClass('done');
  $('h1.'+player).removeClass('hidden');
}
if($('.game').children('.middle.left.'+player).length > 0 &&
$('.game').children('.middle.center.'+player).length > 0 &&
$('.game').children('.middle.right.'+player).length > 0) {
$('.game').children('.sub-board').addClass('done');
$('h1.'+player).removeClass('hidden');
}
if($('.game').children('.bottom.left.'+player).length > 0 &&
$('.game').children('.bottom.center.'+player).length > 0 &&
$('.game').children('.bottom.right.'+player).length > 0) {
$('.game').children('.sub-board').addClass('done');
$('h1.'+player).removeClass('hidden');
}
if($('.game').children('.top.left.'+player).length > 0 &&
$('.game').children('.middle.left.'+player).length > 0 &&
$('.game').children('.bottom.left.'+player).length > 0) {
$('.game').children('.sub-board').addClass('done');
$('h1.'+player).removeClass('hidden');
}
if($('.game').children('.top.center.'+player).length > 0 &&
$('.game').children('.middle.center.'+player).length > 0 &&
$('.game').children('.bottom.center.'+player).length > 0) {
$('.game').children('.sub-board').addClass('done');
$('h1.'+player).removeClass('hidden');
}
if($('.game').children('.top.right.'+player).length > 0 &&
$('.game').children('.middle.right.'+player).length > 0 &&
$('.game').children('.bottom.right.'+player).length > 0) {
$('.game').children('.sub-board').addClass('done');
$('h1.'+player).removeClass('hidden');
}
if($('.game').children('.top.left.'+player).length > 0 &&
$('.game').children('.middle.center.'+player).length > 0 &&
$('.game').children('.bottom.right.'+player).length > 0) {
$('.game').children('.sub-board').addClass('done');
$('h1.'+player).removeClass('hidden');
}
if($('.game').children('.top.right.'+player).length > 0 &&
$('.game').children('.middle.center.'+player).length > 0 &&
$('.game').children('.bottom.left.'+player).length > 0) {
$('.game').children('.sub-board').addClass('done');
$('h1.'+player).removeClass('hidden');
}
}

function checkWin(obj, player) {
  var parent = obj.parent();
  $('.sub-board').removeClass('active');
  if(parent.find('.top.left.'+player).length > 0 &&
parent.find('.top.center.'+player).length>0 &&
parent.find('.top.right.'+player).length > 0) {
    parent.addClass(player);
    parent.addClass('done');
    parent.empty();
    checkVictory(player);
}
if(parent.find('.middle.left.'+player).length > 0 &&
parent.find('.middle.center.'+player).length>0 &&
parent.find('.middle.right.'+player).length > 0) {
  parent.addClass(player);
  parent.addClass('done');
  parent.empty();
  checkVictory(player);
}
if(parent.find('.bottom.left.'+player).length > 0 &&
parent.find('.bottom.center.'+player).length>0 &&
parent.find('.bottom.right.'+player).length > 0) {
  parent.addClass(player);
  parent.addClass('done');
  parent.empty();
  checkVictory(player);
}
if(parent.find('.top.left.'+player).length > 0 &&
parent.find('.middle.left.'+player).length>0 &&
parent.find('.bottom.left.'+player).length > 0) {
  parent.addClass(player);
  parent.addClass('done');
  parent.empty();
  checkVictory(player);
}
if(parent.find('.top.center.'+player).length > 0 &&
parent.find('.middle.center.'+player).length>0 &&
parent.find('.bottom.center.'+player).length > 0) {
  parent.addClass(player);
  parent.addClass('done');
  parent.empty();
  checkVictory(player);
}
if(parent.find('.top.right.'+player).length > 0 &&
parent.find('.middle.right.'+player).length>0 &&
parent.find('.bottom.right.'+player).length > 0) {
  parent.addClass(player);
  parent.addClass('done');
  parent.empty();
  checkVictory(player);
}
if(parent.find('.top.right.'+player).length > 0 &&
parent.find('.middle.center.'+player).length>0 &&
parent.find('.bottom.left.'+player).length > 0) {
  parent.addClass(player);
  parent.addClass('done');
  parent.empty();
  checkVictory(player);
}
if(parent.find('.top.left.'+player).length > 0 &&
parent.find('.middle.center.'+player).length>0 &&
parent.find('.bottom.right.'+player).length > 0) {
  parent.addClass(player);
  parent.addClass('done');
  parent.empty();
  checkVictory(player);
}
if(parent.find('.open').length === 0) {
  parent.addClass('done');
}

if(obj.hasClass('top')) {
  if(obj.hasClass('left')) {
    $('.game').children('.top.left').addClass('active');
  }
  if(obj.hasClass('center')) {
    $('.game').children('.top.center').addClass('active');
  }
  if(obj.hasClass('right')) {
    $('.game').children('.top.right').addClass('active');
  }
} else if(obj.hasClass('middle')) {
  if(obj.hasClass('left')) {
    $('.game').children('.middle.left').addClass('active');
  }
  if(obj.hasClass('center')) {
    $('.game').children('.middle.center').addClass('active');
  }
  if(obj.hasClass('right')) {
    $('.game').children('.middle.right').addClass('active');
  }
} else if(obj.hasClass('bottom')) {
  if(obj.hasClass('left')) {
    $('.game').children('.bottom.left').addClass('active');
  }
  if(obj.hasClass('center')) {
    $('.game').children('.bottom.center').addClass('active');
  }
  if(obj.hasClass('right')) {
    $('.game').children('.bottom.right').addClass('active');
  }
}
if($('.active .open.square').length == 0) {
  $('.sub-board.done').removeClass('active');
  $('.sub-board:not(.done)').addClass('active');
}
}

$('.active .open.square').on('click',makeMove);
