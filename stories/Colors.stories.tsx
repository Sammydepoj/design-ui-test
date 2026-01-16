import React from 'react';
import type { Meta } from '@storybook/react';
import { tokens } from '../src/tokens';

const meta = {
  title: 'Design System/Tokens/Colors',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

export const Colors = () => (
  <div className="p-8 space-y-8">
    {Object.entries(tokens.colors).map(([colorName, shades]) => (
      <div key={colorName}>
        <h2 className="text-2xl font-bold mb-4 capitalize">{colorName}</h2>
        <div className="flex flex-wrap gap-4">
          {Object.entries(shades).map(([shade, color]) => (
            <div key={shade} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-lg shadow-md" style={{ backgroundColor: color }} />
              <p className="mt-2 text-sm font-medium">{shade}</p>
              <p className="text-xs text-gray-500">{color}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
