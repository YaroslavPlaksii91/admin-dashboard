import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { TOGGLE_BUTTON_TEST_ID } from '../constants';
import { FormInput } from '../FormInput';

describe('FormInput component', () => {
  afterEach(cleanup);

  const useFormMock = () => ({
    register: jest.fn() as any,
  });

  jest.mock('react-hook-form', () => ({
    useForm: useFormMock,
  }));

  const label = 'Label';
  const placeholder = 'Placeholder';
  const name = 'name';
  const type = 'text';
  const errors = {};
  const isPassword = false;
  const register = useFormMock().register;

  it('should be rendered', () => {
    const { asFragment } = render(
      <FormInput
        label={label}
        placeholder={placeholder}
        type={type}
        name={name}
        register={register}
        errors={errors}
        isPassword={isPassword}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render password type', () => {
    const type = 'password';
    const label = 'Password';
    const isPassword = true;

    const { asFragment } = render(
      <FormInput
        label={label}
        placeholder={placeholder}
        type={type}
        name={name}
        register={register}
        errors={errors}
        isPassword={isPassword}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be rendered correctly', () => {
    render(
      <FormInput
        label={label}
        placeholder={placeholder}
        type={type}
        name={name}
        register={register}
        errors={errors}
        isPassword={isPassword}
      />,
    );

    const inputElement = screen.getByLabelText(label);
    const placeholderElement = screen.getByPlaceholderText(placeholder);

    expect(inputElement).toBeInTheDocument();
    expect(placeholderElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', type);
  });

  it('toggles password visibility when it is a password input', () => {
    const type = 'password';
    const label = 'Password';
    const isPassword = true;

    render(
      <FormInput
        label={label}
        type={type}
        name={name}
        placeholder={placeholder}
        register={register}
        errors={errors}
        isPassword={isPassword}
      />,
    );

    const inputElement = screen.getByLabelText(label);
    const toggleButton = screen.getByTestId(TOGGLE_BUTTON_TEST_ID);

    fireEvent.click(toggleButton);

    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('does not toggle password visibility when it is not a password input', () => {
    render(
      <FormInput
        label={label}
        type={type}
        name={name}
        placeholder={placeholder}
        register={register}
        errors={errors}
        isPassword={isPassword}
      />,
    );

    const inputElement = screen.getByLabelText(label);
    const toggleButton = screen.queryByTestId(TOGGLE_BUTTON_TEST_ID);

    expect(inputElement).not.toHaveAttribute('type', 'password');
    expect(toggleButton).toBeNull();
  });
});
