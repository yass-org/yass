import { build } from 'yass-css';

import type { YassConfig } from 'yass-css';

// Run from rootDir with `npm run build`
const config: YassConfig = {
  stylesheetOutDir: './yass-components-react/public/styles',
  typesOutDir: './yass-components-react/types',
  typesFileName: 'yass.json',
}

build(config)
