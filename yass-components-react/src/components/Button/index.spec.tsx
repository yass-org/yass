import Button from "./index";
import { render, fireEvent, screen } from "@testing-library/react";

describe("Button", () => {
  it("calls onClick function when user clicks", () => {
    const onClickMock = jest.fn();
    const buttonText = "Click me!";
    const component = <Button onClick={onClickMock}>{buttonText}</Button>;

    render(component);

    const button = screen.getByText(buttonText);
    fireEvent.click(button);

    expect(onClickMock).toBeCalledTimes(1);
  });

  it("doesn‘t call onClick function when user clicks", () => {
    const onClickMock = jest.fn();
    const buttonText = "Click me!";
    const component = <Button onClick={onClickMock}>{buttonText}</Button>;

    render(component);

    expect(onClickMock).not.toBeCalled();
  });
});
