import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { TextNode } from './TextNode';
import { ImageNode } from './ImageNode';
import { AppNode } from './types';

export const initialNodes: AppNode[] = [
  { id: 'a', type: 'input', position: { x: 0, y: 0 }, data: { label: 'Input Node' } },
  {
    id: 'b',
    type: 'text',
    position: { x: -100, y: 100 },
    data: { text: 'Edit this text', onChange: () => {} },
  },
  {
    id: 'c',
    type: 'image',
    position: { x: 100, y: 100 },
    data: { src: 'https://placekitten.com/200/200', alt: 'A cute kitten' },
  },
];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  'text': TextNode,
  'image': ImageNode,
} satisfies NodeTypes;
