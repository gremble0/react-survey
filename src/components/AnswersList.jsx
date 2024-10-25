import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList }) {
  return (
    <ul className="space-y-4">
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
