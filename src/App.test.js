import { render, screen } from "@testing-library/react";
import App from "./App";

test("snapshot is correct", () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});
