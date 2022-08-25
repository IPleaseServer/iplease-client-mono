import { colors } from '@common/styles';

const RightArrow: React.FC<React.SVGProps<SVGSVGElement>> = () => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9243 5.42426C15.1586 5.18995 15.1586 4.81005 14.9243 4.57574L11.1059 0.757359C10.8716 0.523045 10.4917 0.523045 10.2574 0.757359C10.023 0.991674 10.023 1.37157 10.2574 1.60589L13.6515 5L10.2574 8.39411C10.023 8.62843 10.023 9.00833 10.2574 9.24264C10.4917 9.47696 10.8716 9.47696 11.1059 9.24264L14.9243 5.42426ZM0.5 5.6L14.5 5.6V4.4L0.5 4.4L0.5 5.6Z"
      fill={colors.pink}
    />
  </svg>
);

export default RightArrow;
