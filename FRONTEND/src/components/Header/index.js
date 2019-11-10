import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '../../assets/logo-purple.svg';

import { Box } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Box>
      <img src={logo}></img>
    </Box>
  );
}
