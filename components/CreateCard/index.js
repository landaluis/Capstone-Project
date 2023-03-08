import styled from "styled-components";
import Link from "next/link";

export default function CreateCard(onAddEntry) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formDataCard = new FormData(form);

    const data = Object.fromEntries(formDataCard);
    onAddEntry(data);
    form.reset();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h4>New Card</h4>
        <div>
          <div>
            <label htmlFor="wish">Wanted: </label>
            <input type="text" id="wish" name="wish" />
          </div>
          <div>
            <label htmlFor="why">Why: </label>
            <input type="text" id="why" name="why" />
          </div>
          <div>
            <label htmlFor="price">Price: </label>
            <input type="number" id="price" name="price" />
          </div>

          <div>
            <label htmlFor="HowMuch">How much i will save: </label>
            <input type="number" id="HowMuch" name="HowMuch" />
          </div>
          <div>
            <label>How often will i save: </label>
            <select name="Frequency">
              <option value="o"></option>
              <option value="1">Daily</option>
              <option value="2">Weekly</option>
              <option value="3">Monthly</option>
            </select>
          </div>
          <button type="reset">Reset</button>
          <button type="submit">Create</button>
        </div>
      </StyledForm>
      <Exit>
        <Link href={"/"}>
          <span class="material-symbols-outlined">disabled_by_default</span>
        </Link>
      </Exit>
    </>
  );
}

const Exit = styled.div`
  z-index: 30;
  top: 75px;
  position: absolute;
  right: 30px;
`;
const StyledForm = styled.form`
  display: flex;
  position: relative;
  justify-content: center;
  top: 100px;
  display: block;
  width: 315px;
  height: 450px;
  text-align: center;
  border: 1px solid white;
  z-index: 10;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  background-color: #eaeaea;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
