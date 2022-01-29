import Button from "components/button";
import { render, screen } from "@testing-library/react";
import Theme from "styles/Theme";

describe("Button", () => {
  it("should render a button with Click me text", () => {
    render(<Button theme={Theme}>Click me</Button>);
    const button = screen.getByTestId("button");

    expect(button).toBeInTheDocument();
  });

  it("should render a disabled button if loading prop is passed", () => {
    render(
      <Button loading={true} theme={Theme}>
        Click me
      </Button>
    );
    const button = screen.getByTestId("button");

    expect(button).toBeDisabled();
  });

  it("should render a disabled button if disabled prop is passed", () => {
    render(
      <Button disabled={true} theme={Theme}>
        Click me
      </Button>
    );
    const button = screen.getByTestId("button");

    expect(button).toBeDisabled();
  });

  it("should render an icon if icon props is passed", () => {
    render(
      <Button theme={Theme} icon={<div className="flex">Fake icon</div>}>
        Click me
      </Button>
    );
    const icon = screen.getByText("Fake icon");

    expect(icon).toBeVisible();
  });

  it("should match snapshot", () => {
    const { container } = render(
      <Button disabled={true} theme={Theme}>
        Click me
      </Button>
    );

    expect(container).toMatchSnapshot();
  });
});
