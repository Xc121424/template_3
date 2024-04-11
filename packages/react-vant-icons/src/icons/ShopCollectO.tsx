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
      d="M777.292 611.025c61.202 0 110.926 50.008 110.926 111.423l-.057 2.633-.022.496c-.014.28-.033.587-.058.996l.02 1.147c0 10.93-2.404 21.999-6.81 33.18l-.29.782-.306.803c-1.633 4.21-3.848 8.813-8.715 16.955l1.316-1.766.166-.237.04-.06 1.068-1.85-.651 1.181.075-.111c.023-.025-.093.198-.521 1.017l-.578 1.075-.403.737c-1 1.812-1.932 3.389-2.603 4.316a196.206 196.206 0 01-6.61 10.228c-12.945 18.773-30.582 38.098-51.832 57.804-14.205 13.173-29.268 25.82-44.55 37.742l-3.264 2.53c-9.713 7.474-25.961 19.394-21.314 15.875a41.957 41.957 0 01-25.21 8.419c-8.78 0-17.343-2.697-24.683-8.006l-.484-.354.8.612.05.044c.065.12-14.664-10.694-23.086-17.192l-.26-.201c-15.965-12.339-31.707-25.473-46.516-39.198-21.907-20.302-39.962-40.223-52.997-59.604-5.951-8.848-10.823-17.547-14.573-26.266l-.42-1.034c-5.387-12.872-8.234-25.384-8.234-37.446a58.794 58.794 0 01-.222-5.247c0-61.436 49.708-111.423 110.927-111.423 21.437 0 42.202 6.352 59.935 17.9 17.71-11.549 38.484-17.9 59.946-17.9zm-5.29-419.154c24.98 0 46.753 17 52.811 41.233l34.216 136.862c9.208 19.523 14.068 40.948 14.068 62.977 0 81.602-66.151 147.753-147.753 147.753-47.414 0-89.612-22.333-116.648-57.053-27.036 34.72-69.233 57.053-116.647 57.053s-89.612-22.333-116.648-57.053c-27.036 34.72-69.234 57.053-116.647 57.053-13.457 0-26.494-1.799-38.883-5.17v269.571h299.396c15.031 0 27.217 12.186 27.217 27.218s-12.186 27.218-27.217 27.218H206.262c-22.548 0-40.826-18.279-40.826-40.827V547.504C132.214 520.41 111 479.154 111 432.943c0-22.03 4.86-43.454 14.069-62.977l34.215-136.862c6.059-24.233 27.832-41.233 52.81-41.233h559.909zm5.29 473.59c-15.09 0-29.631 6.307-40.27 17.408L717.42 703.32l-19.652-20.403c-10.733-11.143-25.3-17.458-40.357-17.458-30.775 0-55.983 25.04-56.484 56.047l-.004 1.092.15 6.631.03-.343.032-.939c.007 4.065 1.261 9.576 4.014 16.145l.411 1.024c2.265 5.194 5.46 10.875 9.542 16.944 10.341 15.375 25.747 32.373 44.83 50.058 13.507 12.518 28.037 24.641 42.802 36.053l1.625 1.249 1.566 1.193a1209.35 1209.35 0 0011.155 8.346l3.18-2.367 3.506-2.626a727.922 727.922 0 007.175-5.45l.527-.408c14.812-11.478 29.402-23.672 42.964-36.249 18.25-16.924 33.155-33.202 43.494-48.014l.54-.778c1.741-2.526 3.335-4.99 5.606-8.68l.182-.277.257-.428c.173-.3.416-.734.817-1.45l.41-.826.227-.437c.098-.184.215-.394.395-.722l.954-1.654a58.14 58.14 0 003.08-6.987c2.15-5.469 3.14-9.742 3.26-13.186l.014-.801-.015-2.856.13-2.185v-.131c0-31.42-25.423-56.988-56.491-56.988zm-5.29-419.154H212.096l-35.663 142.648-.38.717c-6.78 12.934-10.616 27.654-10.616 43.27 0 51.539 41.78 93.319 93.318 93.319 51.022 0 92.481-40.949 93.305-91.775l.013-1.543h46.659l.012 1.543c.824 50.826 42.283 91.775 93.306 91.775 51.022 0 92.481-40.949 93.305-91.775l.013-1.543h46.659l.012 1.543c.824 50.826 42.283 91.775 93.306 91.775 51.538 0 93.318-41.78 93.318-93.318 0-15.617-3.836-30.337-10.617-43.271l-.38-.717-35.662-142.648zM764.227 83c15.032 0 27.218 12.186 27.218 27.218s-12.186 27.218-27.218 27.218H219.871c-15.032 0-27.218-12.186-27.218-27.218S204.84 83 219.871 83h544.355z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgShopCollectO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgShopCollectO" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default SvgShopCollectO;
