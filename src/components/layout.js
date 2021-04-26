import React, { useEffect } from "react"
import { connect } from "react-redux"
import Header from "./Header"
import MobileMenu from "./MobileMenu"
import MobileContact from "./MobileContact"
import Footer from "./Footer"
import { setBodyFontLoaded, setAtTop, setIsMobile } from "../state"
import { useTheme, useMediaQuery } from "@material-ui/core"
import { AnimatePresence, motion } from "framer-motion"
import FontFaceObserver from "fontfaceobserver"
import { font } from "../style"

const Layout = ({ dispatch, children, bodyFontLoaded, headerFontLoaded }) => {
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const loadAssets = () => {
    const fontFace = new FontFaceObserver(font)
    const bodyFontLoader = () => {
      fontFace.load().then(() => {
        dispatch(setBodyFontLoaded(true))
      }, bodyFontLoader)
    }
    bodyFontLoader()
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      dispatch(setAtTop(window.scrollY === 0))
    })
    loadAssets()
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    dispatch(setIsMobile(isMobile))
    //eslint-disable-next-line
  }, [isMobile])

  const duration = 0.25

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: duration,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
  }

  return (
    <>
      {bodyFontLoaded ? (
        <>
          <MobileMenu />
          <MobileContact />
          <Header />
          <AnimatePresence>
            {typeof window !== `undefined` ? (
              <motion.main
                key={window.location.pathname}
                variants={variants}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {children}
              </motion.main>
            ) : null}
          </AnimatePresence>

          <Footer />
        </>
      ) : null}
    </>
  )
}

const mapStateToProps = state => ({
  bodyFontLoaded: state.bodyFontLoaded,
  currentPage: state.currentPage,
})

export default connect(mapStateToProps)(Layout)
