import tokens from '../src/index'

describe('yass-default-tokens', () => {
  it('base tokens match snapshot', () => {
    expect(tokens.base).toMatchSnapshot()
  })

  it('component tokens match snapshot', () => {
    expect(tokens.components).toMatchSnapshot()
  })

  it('utility classes match snapshot', () => {
    expect(tokens.utility).toMatchSnapshot()
  })
})

