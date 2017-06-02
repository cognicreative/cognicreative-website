var headerHeight = $('#header').height() + 1
var footerHeight = $('#footer').height() + 1
var mouseClientY = 0
// var lastScrollY = getScrollY()

$('#wrapper').css('margin-top', headerHeight + 'px')
$('#wrapper').css('margin-bottom', footerHeight + 'px')

function showHeaderFooter () {
  $('#header').css('top', '0px')
  $('#footer').css('bottom', '0px')
}

function hideHeaderFooter () {
  $('#header').css('top', (-1 * headerHeight) + 'px')
  $('#footer').css('bottom', (-1 * footerHeight) + 'px')
}

function atScrollTop () {
  return $(document).scrollTop() == 0
}

function atScrollBottom () {
  return getScrollY() >= document.body.offsetHeight + footerHeight
}

function getScrollY () {
  return (window.innerHeight + window.pageYOffset)
}

function mouseInHeaderArea () {
  return mouseClientY <= headerHeight
}

function mouseInFooterArea () {
  return mouseClientY >= window.innerHeight - footerHeight
}

function fullpageOnLeave (index, nextIndex, direction) {
  if (nextIndex == 1 || $('.fp-section').size() == nextIndex) {
    showHeaderFooter()
  } else {
    hideHeaderFooter()
  }
    // console.log("total slides=" + $(".fp-section").size() + " index=" + index + " nextIndex=" + nextIndex + " direction=" + direction)
}

$(document).ready(function () {
  $('#fullpage').fullpage({
    'onLeave': fullpageOnLeave
  })

  showHeaderFooter()
  document.onmousemove = function (e) {
    mouseClientY = e.clientY
    if (mouseInHeaderArea() || mouseInFooterArea()) {
      showHeaderFooter()
    }
  }
})

$(window).scroll(function () {
  if (atScrollTop() || atScrollBottom()) {
    showHeaderFooter()
    // } else if (getScrollY() != lastScrollY) {
    //     showHeaderFooter();
  } else {
    hideHeaderFooter()
  }

//   lastScrollY = getScrollY()
})
