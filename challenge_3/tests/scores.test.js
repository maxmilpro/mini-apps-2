import calculateScores from '../client/components/helpers.jsx';

test('scores strikes and spares', () => {
  const frames = [[7, 3],[5, 4],[10],[7, 3],[7, 1],[6, 4],[7, 3],[9, 0],[4, 3],[10, 7, 3]]
  const scores = calculateScores(frames);
  expect(scores[scores.length - 1]).toBe(141);
});

test('adds bonus roll to score after 10th frame spare', () => {
  const frames = [[10],[10],[10],[10],[10],[10],[10],[10],[10],[7, 3, 10]]
  const scores = calculateScores(frames);
  expect(scores[scores.length - 1]).toBe(277);
});

test('returns 300 for a perfect game', () => {
  const frames = [[10],[10],[10],[10],[10],[10],[10],[10],[10],[10, 10, 10]];
  const scores = calculateScores(frames);
  expect(scores[scores.length - 1]).toBe(300);
});
