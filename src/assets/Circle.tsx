export const Circle = ({ filled = false, color = 'white', radius = 148, className = '', children }: { filled?: boolean, color?: string, radius?: number, className?: string, children?: React.ReactNode }) => {
  const svgStyle = filled
    ? { fill: color }
    : { stroke: color, fill: 'none', strokeOpacity: 0.5 };

  return (
    <svg className={className} width={radius * 2} height={radius * 2} viewBox={`0 0 ${radius * 2} ${radius * 2}`} xmlns="http://www.w3.org/2000/svg">
      <circle cx={radius} cy={radius} r={radius} style={svgStyle} />
      {children}
    </svg>
  );
};
