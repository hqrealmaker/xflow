import { Handle, Position, NodeProps } from '@xyflow/react';

export function TextNode({ data }: NodeProps) {
  return (
    <div className="text-node">
      <Handle type="target" position={Position.Top} />
      <textarea
        defaultValue={data.text}
        onChange={(evt) => data.onChange(evt.target.value)}
        className="nodrag"
      />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
