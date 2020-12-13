import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from './routes'
import '../../src/scss/style.scss'

import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
} from './index'
import { showHideSidebar } from '../Store/slice/sidebarSlice'
import TheHeaderTestDropdown from './TheHeaderTestDropdown'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow).isShow
  const exam = useSelector(state => state.exam).exam
  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow)
      ? false
      : 'responsive'
    dispatch(showHideSidebar(val))
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow)
      ? true
      : 'responsive'
    dispatch(showHideSidebar(val))
  }

  return (
    <CHeader withSubheader id="modified-header" className="container-fluid">
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        {/* config icon brand here */}
        <CIcon name="logo" height="48" alt="Logo" />
      </CHeaderBrand>
      {exam ? (
        <>
          <CHeaderNav className="d-md-down-none mr-auto header">
            <CLink className="navbar-brand logo" to="#">
              <img
                src="image/logo.png"
                width="50"
                height="50"
                alt=""
                loading="lazy"
                className="ml-2"
              />
            </CLink>
          </CHeaderNav>
          <CHeaderNav className="px-3">
            <TheHeaderDropdown />
          </CHeaderNav>
        </>
      ) : (
        <>
          <CHeaderNav className="d-md-down-none mr-auto header">
            <CLink className="navbar-brand logo" to="#">
              <img
                src="image/logo.png"
                width="50"
                height="50"
                alt=""
                loading="lazy"
                className="ml-2"
              />
            </CLink>
            <CHeaderNavItem className="px-3">
              <CHeaderNavLink to="/dashboard">Đề thi thử</CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem className="px-3">
              <CHeaderNavLink to="/ThangDiemToeic">
                Cách tính điểm TOEIC
              </CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem className="px-3">
              <CHeaderNavLink to="/#">Tài liệu tham khảo</CHeaderNavLink>
            </CHeaderNavItem>
          </CHeaderNav>
          <CHeaderNav className="px-3">
            <TheHeaderTestDropdown></TheHeaderTestDropdown>
            <TheHeaderDropdownNotif />
            <TheHeaderDropdownTasks />
            <TheHeaderDropdownMssg />
            <TheHeaderDropdown />
          </CHeaderNav>
          <CSubheader
            id="modified-subheader"
            className="px-3 justify-content-between"
          >
            <CBreadcrumbRouter
              className="border-0 c-subheader-nav m-0 px-0 px-md-3"
              routes={routes}
            />
          </CSubheader>
        </>
      )}
    </CHeader>
  )
}

export default TheHeader
