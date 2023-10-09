import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { ModalComponent } from '../Modal';

describe('Label component', () => {
  afterEach(cleanup);

  const closeModal = jest.fn();
  const title = 'Test Modal';

  it('should be rendered', () => {
    const { asFragment } = render(
      <ModalComponent isOpen={true} title={title} onClose={closeModal}>
        <div>Modal Content</div>
      </ModalComponent>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    render(
      <ModalComponent isOpen={true} title={title} onClose={closeModal}>
        <div>Modal Content</div>
      </ModalComponent>,
    );

    const titleElement = screen.getByText('Test Modal');
    const contentElement = screen.getByText('Modal Content');

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  it('should not be rendered when isOpen false', () => {
    render(
      <ModalComponent isOpen={false} title={title} onClose={closeModal}>
        <div>Modal Content</div>
      </ModalComponent>,
    );

    const titleElement = screen.queryByText('Test Modal');
    const contentElement = screen.queryByText('Modal Content');

    expect(titleElement).not.toBeInTheDocument();
    expect(contentElement).not.toBeInTheDocument();
  });

  it('calls onClose when Cancel button is clicked', () => {
    const { getByText } = render(
      <ModalComponent isOpen={true} title={title} onClose={closeModal}>
        <div>Modal Content</div>
      </ModalComponent>,
    );

    const cancelButton = getByText('Cancel');

    fireEvent.click(cancelButton);

    expect(closeModal).toHaveBeenCalled();
  });
});
