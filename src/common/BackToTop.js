import React, { useState } from 'react'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 500) {
      setVisible(true)
    } else if (scrolled <= 500) {
      setVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <div className="d-none d-md-block">
      <span
        className="btn-backtotop cursor-pointer"
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      >
        TOP
      </span>
    </div>
  )
}

export default BackToTop
