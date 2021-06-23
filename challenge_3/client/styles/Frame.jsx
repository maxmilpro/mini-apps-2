import styled from 'styled-components'

const StyledFrame = styled.div`
  padding: 2px;
  margin: 2px;
  border-style: solid;
  border-width: 1px;
`;

const Round = styled.div`
  padding: 1px;
  margin: 1px;
  border-style: solid;
  border-width: 1px;
`;

const Rolls = styled.div`
  display: flex;
  justify-content: center;
`;

const Roll = styled.div`
  padding: 1px;
  margin: 1px;
  border-style: solid;
  border-width: 1px;
`;

const RunningScore = styled.div`
  text-align: center;
  padding: 1px;
  margin: 1px;
  border-style: solid;
  border-width: 1px;
`;

export {
  StyledFrame,
  Round,
  Rolls,
  Roll,
  RunningScore
};
