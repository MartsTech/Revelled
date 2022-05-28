import { render, screen } from "@testing-library/react";
import Input from "components/input";
import Theme from "styles/Theme";

describe("Input", () => {
  it("should render and input correctly", () => {
    render(<Input theme={Theme} />);
    const component = screen.getByTestId("input");

    expect(component).toBeVisible();
  });

  it("should match snapshot", () => {
    render(<Input theme={Theme} />);
    const component = screen.getByTestId("input");

    expect(component).toMatchSnapshot();
  });
});
