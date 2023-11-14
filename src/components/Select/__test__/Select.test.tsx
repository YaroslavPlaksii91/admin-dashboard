import { cleanup, render, screen } from '@testing-library/react';
import { FieldErrors, FieldError } from 'react-hook-form';

import { createRegister } from '@utils/testMocks';

import { Select } from '../Select';

describe('Select component', () => {
  afterEach(cleanup);

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const label = 'Select component';
  const name = 'select';
  const register = createRegister(name);
  const errors: FieldErrors = {};

  it('should be rendered', () => {
    const { asFragment } = render(
      <Select
        label={label}
        name={name}
        register={register}
        errors={errors}
        options={options}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    render(
      <Select
        label={label}
        name={name}
        register={register}
        errors={errors}
        options={options}
      />,
    );

    const labelElement = screen.getByLabelText(label);
    const selectElement = screen.getByRole('button');

    expect(labelElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
  });

  it('displays error and helper text when there is an error', () => {
    const errors: FieldErrors = {
      [name]: { message: 'This field is required' } as FieldError,
    };

    render(
      <Select
        label={label}
        name={name}
        register={register}
        errors={errors}
        options={options}
      />,
    );

    const errorElement = screen.getByText('This field is required');
    expect(errorElement).toBeInTheDocument();
  });
});
