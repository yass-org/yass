import color from './default/color.json'
import elevation from './default/elevation.json'
import fontWeight from './default/font-weight.json'
import opacity from './default/opacity.json'
import scale from './default/scale.json'

import css from './css.json'

const defaults = [
  ...color,
  ...elevation,
  ...fontWeight,
  ...opacity,
  ...scale,
]

export {
  defaults,
  css,
}