import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { SpeedDial } from '../SpeedDial';

describe('SpeedDial component', () => {
  afterEach(cleanup);

  const handleDelete = jest.fn();
  const handleEdit = jest.fn();

  it('should be rendered', () => {
    const { asFragment } = render(
      <SpeedDial handleDelete={handleDelete} handleEdit={handleEdit} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with actions', () => {
    render(<SpeedDial handleDelete={handleDelete} handleEdit={handleEdit} />);

    const moreOptionsIcon = screen.getByTitle('More options');
    expect(moreOptionsIcon).toBeInTheDocument();

    const actionButtons = screen.getAllByRole('menuitem');

    actionButtons.forEach(button => expect(button).toBeInTheDocument());
  });

  it('calls handleDelete when Delete action is clicked', () => {
    render(<SpeedDial handleDelete={handleDelete} handleEdit={handleEdit} />);

    const actionButtons = screen.getAllByRole('menuitem');

    fireEvent.click(actionButtons[0]);

    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleEdit).not.toHaveBeenCalled();
  });

  it('calls handleEdit when Edit action is clicked', () => {
    const handleDelete = jest.fn();
    const handleEdit = jest.fn();

    render(<SpeedDial handleDelete={handleDelete} handleEdit={handleEdit} />);

    const actionButtons = screen.getAllByRole('menuitem');

    fireEvent.click(actionButtons[1]);

    expect(handleEdit).toHaveBeenCalledTimes(1);
    expect(handleDelete).not.toHaveBeenCalled();
  });
});
