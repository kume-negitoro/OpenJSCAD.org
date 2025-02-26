const test = require('ava')

const { geom2, path2 } = require('../../geometries')

const hullPath2 = require('./hullPath2')

test('hullPath2', (t) => {
  const closed = true
  const geometry1 = path2.fromPoints({ closed }, [[0, 0], [-4, 4], [-4, -4]])
  const geometry2 = path2.fromPoints({ closed }, [[0, 0], [4, -4], [4, 4]])

  const obs = hullPath2(geometry1, geometry2)
  t.true(path2.isA(obs))
  let pts = path2.toPoints(obs)
  t.is(pts.length, 4)
})
