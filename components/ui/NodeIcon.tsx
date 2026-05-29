type NodeIconProps = {
  className?: string;
  label?: string;
};

export default function NodeIcon({ className = '', label = 'Connected workflow node' }: NodeIconProps) {
  return (
    <span aria-label={label} className={`node-mark ${className}`}>
      <span />
      <span />
      <span />
    </span>
  );
}
