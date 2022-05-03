import React, { useState } from 'react';
import * as Icon from 'react-feather';
import { Avatar, Span } from 'components';

import burgerClose from 'assets/icons/burger-close.svg';
import burgerOpen from 'assets/icons/burger-open.svg';
import logo from 'assets/icons/logo.svg';

import { TabletAndBelow, Desktop } from 'styles/media-queries';
import {
  StyledNavigation,
  StyledHeader,
  StyledIcons,
  StyledIcon,
} from './styles';

export const Header = () => {
  const [isOpened, setOpened] = useState(false);

  const handleMenuClick = () => {
    setOpened((prev) => prev);
  };

  return (
    <StyledHeader>
      <div className="header">
        <div>
          {/* Logo */}
          <img src={logo} alt="logo" />

          {/* Navigation */}
          <Desktop>
            <StyledNavigation>
              <Span size="md" color="gray500">
                Home
              </Span>
              <Span size="md" color="gray500">
                Dashboard
              </Span>
              <Span size="md" color="gray500">
                Projects
              </Span>
              <Span size="md" color="gray500">
                Tasks
              </Span>
              <Span size="md" color="gray500">
                Reporting
              </Span>
              <Span size="md" color="gray500">
                Users
              </Span>
            </StyledNavigation>
          </Desktop>
        </div>

        {/* Icons */}
        <div>
          <StyledIcons>
            <StyledIcon>
              <Icon.Search size={20} />
            </StyledIcon>

            <StyledIcon>
              <Icon.Settings size={20} />
            </StyledIcon>

            <StyledIcon>
              <Icon.Bell size={20} />
            </StyledIcon>
          </StyledIcons>

          {/* Avatar */}
          <Desktop>
            <Avatar />
          </Desktop>

          {/* Burger menu */}
          <TabletAndBelow>
            <img
              src={isOpened ? burgerClose : burgerOpen}
              alt="menu"
              onClick={handleMenuClick}
            />
          </TabletAndBelow>
        </div>
      </div>
    </StyledHeader>
  );
};
