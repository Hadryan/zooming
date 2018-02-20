import { Selector } from 'testcafe'

const imgJourney = Selector('#img-journey')
const imgCustom = Selector('#img-custom')

fixture`Demo`
  .page`../index.html`;

test('First Image', async t => {
  await t
    .expect(imgJourney.getStyleProperty('cursor')).contains('zoom-in')
    .click(imgJourney)
    .expect(imgJourney.getStyleProperty('cursor')).contains('grab')
    .click(imgJourney)
    .expect(imgJourney.getStyleProperty('cursor')).contains('zoom-in')
})

test('Second Image', async t => {
  await t
    .expect(imgCustom.getStyleProperty('cursor')).contains('zoom-in')
    .click(imgCustom)
    .expect(imgCustom.getStyleProperty('cursor')).contains('grab')
    .click(imgCustom)
    .expect(imgCustom.getStyleProperty('cursor')).contains('zoom-in')
})