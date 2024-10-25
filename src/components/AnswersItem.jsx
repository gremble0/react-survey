export const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

function ItemsList({ list }) {
  return (
    <ul className="ml-4 list-disc">
      {list.map((item, index) => (
        <li key={index}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

export default function AnswersItem({
  answerItem: { username, colour, timeSpent, review },
}) {
  return (
    <li className="mb-6">
      <article className="answer bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-3">{username || "Anon"} said:</h3>
        <p className="mb-2">
          <em className="font-semibold">
            How do you rate your rubber duck colour?
          </em>
          <span className="answer__line block mt-1 ml-4">{colour}</span>
        </p>
        <p className="mb-2">
          <em className="font-semibold">
            How do you like to spend time with your rubber duck?
          </em>
          <ItemsList list={timeSpent} />
        </p>
        <p className="mb-2">
          <em className="font-semibold">
            What else have you got to say about your rubber duck?
          </em>
          <span className="answer__line block mt-1 ml-4">{review}</span>
        </p>
      </article>
    </li>
  );
}
