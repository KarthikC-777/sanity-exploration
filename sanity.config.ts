import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'


export default defineConfig(
  {
    name: 'development',
    title: 'Development',

    projectId: 'o8qrhdis',
    dataset: 'development',

    plugins: [structureTool(), visionTool(),  ],

    schema: {
      types: schemaTypes,
    },
    basePath: '/develop'
  }
)
