import React from 'react'
import localFont from 'next/font/local'
import '../styles/globals.css'
import PropTypes from 'prop-types'

// Font files can be colocated inside of `pages`
const wishfulWaves =
  localFont({
    src: '../public/fonts/wishfulwaves/wishfulwaves.ttf'
  })

const aaaiight =
  localFont({
    src: '../public/fonts/aaaiight/aaaiight.ttf',
  })

function MyApp({ Component, pageProps }) {
  return (
    <div className={wishfulWaves.className}>
      <div className={aaaiight.className}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp
