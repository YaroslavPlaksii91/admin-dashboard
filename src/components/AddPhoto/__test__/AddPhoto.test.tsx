import { cleanup, render, screen } from '@testing-library/react';
import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';

import { AddPhoto } from '../AddPhoto';
import { IMAGE_SIZE } from '../constants';

describe('Add photo component', () => {
  afterEach(cleanup);

  const label = 'Label';
  const name = 'photo';
  const size = IMAGE_SIZE.BIG;
  const register: UseFormRegisterReturn<any> = {
    onChange: jest.fn(),
    onBlur: jest.fn(),
    name: name,
    ref: null as any,
  };
  const errors: FieldErrors = {};

  it('should be rendered', () => {
    const { asFragment } = render(
      <AddPhoto
        label={label}
        size={size}
        name={name}
        register={register}
        errors={errors}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    render(
      <AddPhoto
        label={label}
        name={name}
        errors={errors}
        register={register}
        size={size}
      />,
    );

    const labelElement = screen.getByText(label);
    const addButton = screen.getByRole('button');

    expect(labelElement).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it('displays the image preview when an image is provided as src prop', () => {
    const imageUrl = 'https://example.com/photo.jpg';

    render(
      <AddPhoto
        label={label}
        name={name}
        errors={errors}
        register={register}
        size={size}
        src={imageUrl}
      />,
    );

    const imagePreview = screen.getByAltText('Photo');

    expect(imagePreview).toBeInTheDocument();
    expect(imagePreview).toHaveAttribute('src', imageUrl);
  });
});
