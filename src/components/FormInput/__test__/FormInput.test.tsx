import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { createRegister } from '@utils/testMocks';

import { TOGGLE_BUTTON_TEST_ID } from '../constants';
import { FormInput } from '../FormInput';

const register = createRegister('name');

jest.mock('react-hook-form', () => ({
  useForm: () => ({
    register,
  }),
}));

describe('FormInput component', () => {
  afterEach(cleanup);

  const textInputProps = {
    label: 'Label',
    placeholder: 'Placeholder',
    name: 'name',
    type: 'text',
    errors: {},
    isPassword: false,
    register,
  };

  const passwordInputProps = {
    ...textInputProps,
    type: 'password',
    isPassword: true,
  };

  it('should rendered text type input', () => {
    const { asFragment } = render(<FormInput {...textInputProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render password type input', () => {
    const { asFragment } = render(<FormInput {...passwordInputProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be rendered correctly', () => {
    render(<FormInput {...textInputProps} />);

    const inputElement = screen.getByLabelText(textInputProps.label);
    const placeholderElement = screen.getByPlaceholderText(
      textInputProps.placeholder,
    );

    expect(inputElement).toBeInTheDocument();
    expect(placeholderElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', textInputProps.type);
  });

  it('toggles password visibility when it is a password input', () => {
    render(<FormInput {...passwordInputProps} />);

    const inputElement = screen.getByLabelText(passwordInputProps.label);
    const toggleButton = screen.getByTestId(TOGGLE_BUTTON_TEST_ID);

    expect(inputElement).toHaveAttribute('type', passwordInputProps.type);

    fireEvent.click(toggleButton);

    expect(inputElement).toHaveAttribute('type', textInputProps.type);
  });

  it('does not toggle password visibility when it is not a password input', () => {
    render(<FormInput {...textInputProps} />);

    const inputElement = screen.getByLabelText(textInputProps.label);
    const toggleButton = screen.queryByTestId(TOGGLE_BUTTON_TEST_ID);

    expect(inputElement).not.toHaveAttribute('type', passwordInputProps.type);
    expect(toggleButton).toBeNull();
  });

  it('shows the value entered by the user', () => {
    const enteredValue = 'Text value';

    render(<FormInput {...textInputProps} />);

    const inputElement = screen.getByLabelText(textInputProps.label);

    fireEvent.change(inputElement, { target: { value: enteredValue } });

    expect(screen.getByDisplayValue(enteredValue)).toBeInTheDocument();
  });

  it('shows default value if it is', () => {
    const defaultValue = 'Default value';

    render(<FormInput {...{ ...textInputProps, defaultValue }} />);

    const value = screen.getByDisplayValue(defaultValue);

    expect(value).toBeInTheDocument();
  });
});
