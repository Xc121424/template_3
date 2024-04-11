import * as React from 'react';
import IconBase, { IconBaseProps } from './IconBase';

const SvgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path
      d="M777.778 111.111c30.682 0 55.555 24.873 55.555 55.556v722.222c0 30.682-24.873 55.555-55.555 55.555H222.222c-30.682 0-55.555-24.873-55.555-55.555V166.667c0-30.683 24.873-55.556 55.555-55.556H388.89v55.556H222.222v722.222h555.556V166.667H611.11V111.11h166.667zm-361.111 0c-15.342 0-27.778 12.437-27.778 27.778s12.436 27.778 27.778 27.778h166.666c15.342 0 27.778-12.437 27.778-27.778s-12.436-27.778-27.778-27.778H416.667zM541.044 500l61.567 61.566c11.334 11.334 11.334 29.71 0 41.045-11.334 11.334-29.71 11.334-41.045 0L500 541.044l-62.447 62.447c-10.848 10.848-28.435 10.848-39.283 0l-1.76-1.76c-10.849-10.849-10.849-28.437 0-39.284L458.955 500l-61.567-61.566c-11.334-11.334-11.334-29.71 0-41.045 11.334-11.334 29.71-11.334 41.045 0L500 458.956l62.447-62.447c10.847-10.848 28.435-10.848 39.283 0l1.76 1.76c10.849 10.849 10.849 28.436 0 39.284L541.045 500zM416.667 55.556h166.666c46.024 0 83.334 37.31 83.334 83.333 0 46.024-37.31 83.333-83.334 83.333H416.667c-46.024 0-83.334-37.31-83.334-83.333 0-46.024 37.31-83.333 83.334-83.333z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgFailure = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgFailure" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgFailure;