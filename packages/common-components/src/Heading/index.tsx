export interface HeadingProps {
  level: 1 | 2 | 3;
  text: string;
  color?: 'primary' | 'black';
}

const Heading: React.FC<HeadingProps> = ({
  level,
  text,
  color = 'primary',
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return <HeadingTag>{text}</HeadingTag>;
};

export default Heading;
