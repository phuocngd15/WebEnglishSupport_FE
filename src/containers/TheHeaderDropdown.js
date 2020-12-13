import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeaderNavItem,
  CHeaderNavLink,
  CHeaderNav,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { showHideSidebar } from '../Store/slice/sidebarSlice'
import TheHeaderTestDropdown from './TheHeaderTestDropdown'
import { logOut } from '../Store/slice/authenticationSlice'

const TheHeaderDropdown = () => {
  const exam = useSelector(state => state.exam).exam
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  }
  return (
    <CDropdown inNav className='c-header-nav-items mx-2' direction='down'>
      {exam ? (
        <CHeaderNav className='d-md-down-none mr-auto header'>
          <CHeaderNavItem className='nav-test-list'>
            <CHeaderNavLink to='/'>Test list</CHeaderNavLink>
          </CHeaderNavItem>
        </CHeaderNav>
      ) : (
        <>
          <CDropdownToggle className='c-header-nav-link' caret={false}>
            <div className='c-avatar'>
              <CImg
                src={'avatars/6.jpg'}
                className='c-avatar-img'
                alt='admin@bootstrapmaster.com'
              />
            </div>
          </CDropdownToggle>
          <CDropdownMenu className='pt-0' placement='bottom-end'>
            <CDropdownItem
              header
              tag='div'
              color='light'
              className='text-center'>
              <strong>Account</strong>
            </CDropdownItem>
            <CDropdownItem>
              <CIcon name='cil-bell' className='mfe-2' />
              Updates
              <CBadge color='info' className='mfs-auto'>
                42
              </CBadge>
            </CDropdownItem>
            <CDropdownItem>
              <CIcon name='cil-envelope-open' className='mfe-2' />
              Messages
              <CBadge color='success' className='mfs-auto'>
                42
              </CBadge>
            </CDropdownItem>
            <CDropdownItem>
              <CIcon name='cil-task' className='mfe-2' />
              Tasks
              <CBadge color='danger' className='mfs-auto'>
                42
              </CBadge>
            </CDropdownItem>
            <CDropdownItem>
              <CIcon name='cil-comment-square' className='mfe-2' />
              Comments
              <CBadge color='warning' className='mfs-auto'>
                42
              </CBadge>
            </CDropdownItem>
            <CDropdownItem
              header
              tag='div'
              color='light'
              className='text-center'>
              <strong>Settings</strong>
            </CDropdownItem>
            <CDropdownItem>
              <CIcon name='cil-user' className='mfe-2' />
              Profile
            </CDropdownItem>
            <CDropdownItem>
              <CIcon name='cil-settings' className='mfe-2' />
              Settings
            </CDropdownItem>
            <CDropdownItem>
              <CIcon name='cil-credit-card' className='mfe-2' />
              Payments
              <CBadge color='secondary' className='mfs-auto'>
                42
              </CBadge>
            </CDropdownItem>
            <CDropdownItem>
              <CIcon name='cil-file' className='mfe-2' />
              Projects
              <CBadge color='primary' className='mfs-auto'>
                42
              </CBadge>
            </CDropdownItem>
            <CDropdownItem divider />
            <CDropdownItem  onClick={handleLogOut}>
              <CIcon
                name="cil-lock-locked"
                className="mfe-2"
               
              />
              Đăng xuất
            </CDropdownItem>
          </CDropdownMenu>
        </>
      )}
    </CDropdown>
  );
};

export default TheHeaderDropdown;
