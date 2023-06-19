import { render } from '@testing-library/react';
import Interests from './Interests';
import "intersection-observer";

describe('Interests', () => {
  it('renders interest correctly', () => {
    const interest = 'Coding, Reading, Hiking';
    const { getByText } = render(<Interests interest={interest} />);

    expect(getByText('Interests')).toBeInTheDocument();
    expect(getByText(interest)).toBeInTheDocument();
  });

  // Add more test cases if needed
});
