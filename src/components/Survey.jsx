import { useState } from "react";
import RadioButtons from "./RadioButtons";
import Checkboxes from "./Checkboxes";
import AnswersList from "./AnswersList";

export default function Survey({ answers, setAnswers }) {
  const [open, setOpen] = useState(false);

  const submitForm = event => {
    event.preventDefault()

    let color
    if (event.target.form[0].checked)
      color = 1
    else if (event.target.form[1].checked)
      color = 2
    else if (event.target.form[2].checked)
      color = 3
    if (event.target.form[3].checked)
      color = 4

    let spendTime = ""
    if (event.target.form[4].checked)
      spendTime += "Swimming "
    if (event.target.form[5].checked)
      spendTime += "Bathing "
    if (event.target.form[6].checked)
      spendTime += "Chatting "
    if (event.target.form[7].checked)
      spendTime += "I don't like to spend time with it "

    setAnswers([...answers, {
      color: color,
      spendTime: spendTime,
      whatElse: event.target.form[8].value,
      name: event.target.form[9].value,
      email: event.target.form[10].value,
    }])

    event.target.form.reset();
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList
          answers={answers}
        />
      </section>
      <section className="survey__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <RadioButtons />
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <Checkboxes />
          </div>
          <label>What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
            ></textarea>
          </label>
          <label>Put your name here (if you feel like it):
            <input
              type="text"
              name="username" />
          </label>
          <label>Leave us your email pretty please??
            <input
              type="email"
              name="email" />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" onClick={submitForm} />
        </form>
      </section>
    </main>
  );
}
