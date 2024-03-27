import blocks from './blocks/blocks'
import {allBlockTypes} from '../utils/linkHelper'

export default {
  type: 'object',
  name: 'section',
  title: 'Section',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'string',
      name: 'theme',
      title: 'Theme',
      options: {
        list: [
          {title: 'White', value: 'white'},
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
          {title: 'Black', value: 'black'},
        ],
      },
    },
    {
      type: 'array',
      name: 'blocks',
      of: allBlockTypes,
    },
    {
      type: 'boolean',
      name: 'pad_top',
      title: 'Pad Top?',
    },
    {
      type: 'boolean',
      name: 'pad_bottom',
      title: 'Pad Bottom?',
    },
  ],
  initialValue: {
    theme: 'white',
    pad_top: true,
    pad_bottom: true,
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `Section`,
        subtitle: title,
      }
    },
  },
}
