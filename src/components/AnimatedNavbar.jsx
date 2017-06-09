import ReactDOM from 'react-dom'
import Navbar from 'react-bootstrap/lib/Navbar'

export default class AnimatedNavbar extends Navbar {
  constructor (props) {
    super(props)

    this.height = 0
    this.mouseClientY = 0
    this.lastScrollYPos = 0
    this.justScrolledUp = false
    this.navbarToggle = undefined

    this.hide = this.hide.bind(this)
    this.show = this.show.bind(this)
    this.dropdownIsOpen = this.dropdownIsOpen.bind(this)
    this.collapsed = this.collapsed.bind(this)
    this.fixedBottom = this.fixedBottom.bind(this)
    this.atScrollTop = this.atScrollTop.bind(this)
    this.atScrollBottom = this.atScrollBottom.bind(this)
    this.getScrollY = this.getScrollY.bind(this)
    this.mouseInside = this.mouseInside.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.onResize = this.onResize.bind(this)
  }

  componentDidMount () {
    this.node = ReactDOM.findDOMNode(this)
    // console.log('node.id=' + this.node.id)

    this.navbarToggle = this.node.getElementsByClassName('navbar-toggle')[0]

    document.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)

    this.onResize()
    this.onScroll()
  }

  componentWillUnmount () {
    document.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onResize)
  }

  onResize () {
    // Get the height of the Navbar
    this.rect = this.node.getBoundingClientRect()
    this.height = this.rect.height + 1
  }

  onDropdownClick (e) {
    if (e.currentTarget.className.includes('open') === false) {
      // Getting ready to open dropdown
      this.openedDropdown = e.currentTarget
    } else {
      // Getting ready to close dropdown
      this.openedDropdown = undefined
    }
  }

  onScroll () {
    this.justScrolledUp = false

    let scrollY = this.getScrollY()

    if (this.lastScrollYPos > scrollY) {
      this.justScrolledUp = true
    }

    this.lastScrollYPos = scrollY

    if (this.atScrollTop() || this.atScrollBottom() || this.justScrolledUp) {
      this.show()
    } else {
      this.hide()
    }
  }

  onMouseMove (e) {
    this.mouseClientY = e.clientY
    if (this.mouseInside()) {
      this.show()
    } else if (!this.atScrollTop() && !this.atScrollBottom() && !this.justScrolledUp && !this.dropdownIsOpen() && (this.collapsed() || this.fixedBottom())) {
      this.hide()
    }
  }

  hide () {
    if (this.fixedBottom() === true) {
      this.node.style.bottom = (-1 * this.height) + 'px'
    } else {
      this.node.style.top = (-1 * this.height) + 'px'
    }
  }

  dropdownIsOpen () {
    let retVal = false
    let dropdowns = this.node.getElementsByClassName('dropdown')
    for (let dropdown of dropdowns) {
      if (dropdown.className.includes('open') === true) {
        retVal = true
        break
      }
    }
    return retVal
  }

  collapsed () {
    let retVal = false
    if (this.navbarToggle !== undefined) {
      retVal = this.navbarToggle.className.includes('collapsed')
    }
    return retVal
  }

  fixedBottom () {
    return this.node.className.includes('navbar-fixed-bottom')
  }

  show () {
    if (this.fixedBottom() === true) {
      this.node.style.bottom = '0px'
    } else {
      this.node.style.top = '0px'
    }
  }

  atScrollTop () {
    return document.body.scrollTop <= this.height
  }

  atScrollBottom () {
    return this.getScrollY() >= document.body.offsetHeight + this.height
  }

  getScrollY () {
    return (window.innerHeight + window.pageYOffset)
  }

  mouseInside () {
    if (this.node.className.includes('navbar-fixed-bottom') === true) {
      return this.mouseClientY >= window.innerHeight - this.height
    } else {
      return this.mouseClientY <= this.height
    }
  }
}
