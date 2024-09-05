import { Handle, Position, NodeProps } from '@xyflow/react';

export function ImageNode({ data }: NodeProps) {
  return (
    <div className="image-node">
      <Handle type="target" position={Position.Top} />
      <img src={data.src} alt={data.alt} style={{ maxWidth: '100%', maxHeight: '200px' }} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
