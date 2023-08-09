import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import photos from "./photos";
import TEST_IMAGES from "./_testCommon.js";

const testCard = photos[0];

//Smoke test for Card
it("should render without crashing", () => {
  render(
    <Card
    caption={testCard.caption}
    src={testCard.src}
    currNum={1}
    totalNum={1}
    />
  );
});

//Snapshot test for Card
it("should match snapshot", () => {
  const {asFragment} =   render(
    <Card
    caption={testCard.caption}
    src={testCard.src}
    currNum={1}
    totalNum={1}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});