import { colors } from '@common/styles';

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = () => (
  <svg
    width="48"
    height="74"
    viewBox="0 0 48 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.83 73.4808L0.779175 60.8858V10.33L34.045 0.5625V15.9583L47.1792 12.4267V41.9642L27.7 53.5958V24.245L20.83 26.0925V73.4808ZM7.12418 57.37L14.485 61.995V21.22L27.7 17.665V9.04667L7.12418 15.0883V57.37ZM34.045 22.5383V42.4092L40.8342 38.355V20.715L34.045 22.5383Z"
      fill={colors.pink}
    />
  </svg>
);

export default Logo;
