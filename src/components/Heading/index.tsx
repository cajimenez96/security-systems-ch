import { HeadingProps } from "./Heading.types";

const Heading: React.FC<HeadingProps> = ({children, className = "", level = 1}) => {
  const Etiqueta = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Etiqueta className={className}>
      {children}
    </Etiqueta>
  )
}

export default Heading;
