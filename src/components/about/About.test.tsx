import { render } from '@testing-library/react';
import About from './About';
import "intersection-observer";

describe('About', () => {
  it('renders paragraphs correctly', () => {
    const paragraph1 = 'This is the first paragraph.';
    const paragraph2 = 'This is the second paragraph.';
    const { getByText } = render(
      <About paragraph1={paragraph1} paragraph2={paragraph2} />
    );

    expect(getByText(paragraph1)).toBeInTheDocument();
    expect(getByText(paragraph2)).toBeInTheDocument();
  });

  // Add more test cases if needed
});
