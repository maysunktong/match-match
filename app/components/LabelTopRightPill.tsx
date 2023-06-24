type LabelPillProps = {
  children: React.ReactNode;
};

export function LabelTopRight({children}:LabelPillProps) {
  return <div className="absolute top-8 right-2 text-xs text-green-300 px-2 py-1 border border-green-300  rounded-xl">
  {children}
</div>
} 
