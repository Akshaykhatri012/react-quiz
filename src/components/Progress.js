function Progress({ numQuestions, index, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>0/{maxPossiblePoints}</p>
    </header>
  );
}

export default Progress;
