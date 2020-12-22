import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CLink,
  CImg
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { showHideSidebar } from '../Store/slice/sidebarSlice';
import TheHeaderTestDropdown from './TheHeaderTestDropdown';
import { logOut } from '../Store/slice/authenticationSlice';

const TheHeaderDropdown = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(state => state.authentication);
  let history = useHistory();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  const handleRecoverPass = () => {
    history.push('/ThongTinCaNhan');
  };
  return (
    <CDropdown inNav className='c-header-nav-items mx-2' direction='down'>
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
        <CDropdownItem header tag='div' color='light' className='text-center'>
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem
          className='header-dropdown-profile'
          onClick={handleRecoverPass}>
          <CIcon name='cil-user' className='mfe-2' />
          Profile
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={handleLogOut}>
          <CIcon name='cil-lock-locked' className='mfe-2' />
          Đăng xuất
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
