import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Tasks } from '../Tasks';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: () => jest.fn(),
  };
});

describe('Tasks component', () => {
  afterEach(cleanup);

  const mockData = [
    { title: 'Task 1', priority: 'high', isFinished: true },
    { title: 'Task 2', priority: 'medium', isFinished: false },
    { title: 'Task 3', priority: 'low', isFinished: false },
  ];

  it('should be rendered', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Tasks data={mockData} />
      </BrowserRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the task list', () => {
    render(
      <BrowserRouter>
        <Tasks data={mockData} />
      </BrowserRouter>,
    );

    mockData.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('displays "Create new task" button', () => {
    render(
      <BrowserRouter>
        <Tasks data={mockData} />
      </BrowserRouter>,
    );

    expect(screen.getByText('Create new task')).toBeInTheDocument();
  });

  it('displays "View all" link', () => {
    render(
      <BrowserRouter>
        <Tasks data={mockData} />
      </BrowserRouter>,
    );

    expect(screen.getByText('View all')).toBeInTheDocument();
  });
});
