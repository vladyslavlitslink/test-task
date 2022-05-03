import { useMediaQuery } from 'react-responsive';

const useDesktopMediaQuery = () =>
  useMediaQuery({ query: '(min-width: 1216px)' });

const useTabletAndBelowMediaQuery = () =>
  useMediaQuery({ query: '(max-width: 768px)' });

const useTabletAndAboveMediaQuery = () =>
  useMediaQuery({ query: '(min-width: 768px)' });

// Mobile
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  return isMobile ? children : null;
};

// Desktop
export const Desktop = ({ children }) => {
  const isDesktop = useDesktopMediaQuery();

  return isDesktop ? children : null;
};

// Tablet and above
export const TabletAndAbove = ({ children }) => {
  const isTabletAndBelow = useTabletAndAboveMediaQuery();

  return isTabletAndBelow ? children : null;
};

// Tablet and below
export const TabletAndBelow = ({ children }) => {
  const isTabletAndBelow = useTabletAndBelowMediaQuery();

  return isTabletAndBelow ? children : null;
};
