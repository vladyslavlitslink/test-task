export const size = {
  xs: `450px`,
  sm: `768px`,
  lg: `1216px`,
};

const device = {
  mobile: `(max-width: ${size.xs})`,
  tablet: `(max-width: ${size.sm})`,
  desktop: `(max-width: ${size.lg})`,
};

export default device;
