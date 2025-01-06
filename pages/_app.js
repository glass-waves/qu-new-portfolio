import localFont from 'next/font/local'
// import { Metadata } from 'next/document'
import '../styles/globals.css'

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

export default MyApp

export const metadata = {
  title: "General Qu",
  description: "General Qu - Creative Director",
}
