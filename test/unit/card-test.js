import { card } from '../../src/card.js'
import { expect } from 'chai'

describe('card', () => {
  it('should not be null', () => {
    let newCard = card
    expect(typeof (newCard)).to.not.be.equal('undefined')
  })
})
