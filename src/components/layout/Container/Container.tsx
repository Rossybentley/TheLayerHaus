import "./Container.css";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return <div className={`container ${className}`.trim()}>{children}</div>;
};

export default Container;
