const calculateScores = (frames) => {
  let score = 0;
  const newScores = [];
  for (let i = 0; i < frames.length; i ++) {
    const currentFrame = frames[i];
    const firstRoll = currentFrame[0];
    const secondRoll = currentFrame[1];
    const thirdRoll = currentFrame[2];
    const [firstBonusRoll, secondBonusRoll] = ([frames[i + 1], frames[i + 2]]).flat();
    if (firstRoll === 10 && currentFrame.length === 1) {
      score += (firstRoll + (firstBonusRoll || 0) + (secondBonusRoll || 0));
    } else if (firstRoll === 10 && currentFrame.length === 3) {
      score += (firstRoll + secondRoll + thirdRoll);
    } else if (firstRoll + secondRoll === 10 && currentFrame.length === 3) {
      score += (firstRoll + secondRoll + thirdRoll);
    } else if (firstRoll + secondRoll === 10) {
      score += (10 + (firstBonusRoll || 0));
    } else {
      score += (firstRoll + secondRoll);
    }
    newScores.push(score);
  }
  return newScores;
}

export default calculateScores;
