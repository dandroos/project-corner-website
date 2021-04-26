import { createStore } from "redux"

const initialState = {
  bodyFontLoaded: false,
  headerFontLoaded: false,
  currentPage: "inicio",
  isMobile: false,
  atTop: true,
  showMobileMenu: false,
}

//Types
const SET_BODY_FONT_LOADED = "SET_BODY_FONT_LOADED"
const SET_HEADER_FONT_LOADED = "SET_HEADER_FONT_LOADED"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_IS_MOBILE = "SET_IS_MOBILE"
const SET_AT_TOP = "SET_AT_TOP"
const SET_SHOW_MOBILE_MENU = "SET_SHOW_MOBILE_MENU"

//Actions

export const setBodyFontLoaded = payload => ({
  type: SET_BODY_FONT_LOADED,
  payload,
})

export const setHeaderFontLoaded = payload => ({
  type: SET_HEADER_FONT_LOADED,
  payload,
})

export const setCurrentPage = payload => ({
  type: SET_CURRENT_PAGE,
  payload,
})

export const setIsMobile = payload => ({
  type: SET_IS_MOBILE,
  payload,
})

export const setAtTop = payload => ({
  type: SET_AT_TOP,
  payload,
})

export const setShowMobileMenu = payload => ({
  type: SET_SHOW_MOBILE_MENU,
  payload,
})

const reducer = (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state)

  switch (type) {
    case SET_BODY_FONT_LOADED:
      newState.bodyFontLoaded = payload
      break
    case SET_HEADER_FONT_LOADED:
      newState.headerFontLoaded = payload
      break
    case SET_CURRENT_PAGE:
      newState.currentPage = payload
      break
    case SET_IS_MOBILE:
      newState.isMobile = payload
      break
    case SET_AT_TOP:
      newState.atTop = payload
      break
    case SET_SHOW_MOBILE_MENU:
      newState.showMobileMenu = payload
      break
    default:
      break
  }

  return newState
}

export const store = createStore(reducer)
