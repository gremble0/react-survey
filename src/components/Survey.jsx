import { useState } from "react";
import AnswersList from "./AnswersList";
import { answersSet } from "./AnswersItem";

export default function Survey() {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    colour: "",
    timeSpent: [],
    review: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnswers([...answers, formData]);
    setFormData({
      username: "",
      colour: "",
      timeSpent: [],
      review: "",
    });
  };

  const handleTimeSpentChange = (activity) => {
    setFormData((prev) => ({
      ...prev,
      timeSpent: prev.timeSpent.includes(activity)
        ? prev.timeSpent.filter((item) => item !== activity)
        : [...prev.timeSpent, activity],
    }));
  };

  return (
    <main className="survey max-w-4xl mx-auto p-4">
      <div className="flex gap-4 flex-col md:flex-row">
        <section className={`survey__list ${open ? "open" : ""} flex-1`}>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Answers list</h2>
            <AnswersList answersList={answers} />
          </div>
        </section>

        <section className="survey__form flex-1">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Submit Your Answer</h2>

            <div className="mb-4">
              <label className="block mb-2">
                Name (optional):
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className="w-full p-2 border rounded mt-1"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="block mb-2">
                How do you rate your rubber duck colour?
                <select
                  required
                  value={formData.colour}
                  onChange={(e) =>
                    setFormData({ ...formData, colour: e.target.value })
                  }
                  className="w-full p-2 border rounded mt-1"
                >
                  <option value="">Select a rating</option>
                  <option value="love">I love it</option>
                  <option value="ok">It's okay</option>
                  <option value="meh">Meh</option>
                </select>
              </label>
            </div>

            <div className="mb-4">
              <p className="mb-2">
                How do you like to spend time with your rubber duck?
              </p>
              {Object.entries(answersSet).map(([key, value]) => (
                <label key={key} className="block mb-2">
                  <input
                    type="checkbox"
                    checked={formData.timeSpent.includes(key)}
                    onChange={() => handleTimeSpentChange(key)}
                    className="mr-2"
                  />
                  {value}
                </label>
              ))}
            </div>

            <div className="mb-6">
              <label className="block mb-2">
                What else have you got to say about your rubber duck?
                <textarea
                  required
                  value={formData.review}
                  onChange={(e) =>
                    setFormData({ ...formData, review: e.target.value })
                  }
                  className="w-full p-2 border rounded mt-1"
                  rows="4"
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
