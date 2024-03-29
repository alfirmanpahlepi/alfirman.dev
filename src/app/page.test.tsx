import { render } from '@testing-library/react';
import HomePage from './page';
import "intersection-observer";

// Mock the home.json file
jest.mock('@/content/home.json', () => ({
  name: 'Alfirman Ejha Pahlepi',
  headline: 'Frontend Developer',
  profile_picture: '/alfirman.jpg',
  description: 'I enjoy programming and whenever I can I try to learn new things.',
  about: "I'm a passionate dev with +2 year of work experience in JavaScript/TypeScript, I'm a lover of page design or other things and whenever I can I try to learn new technologies since I discovered programming at 18 years old.",
  favourite_tech: ['typescript', 'react', 'next', 'tailwindcss', 'node'],
  experience: [
    {
      position: 'Frontend Developer',
      company: 'PT Kode Inovasi Teknologi (CODR)',
      start_date: 'Feb 2023',
      end_date: 'Currently',
      is_active: true,
    },
    {
      position: 'Frontend Developer',
      company: 'Erloom Digital Venture',
      start_date: 'Jan 2023',
      end_date: 'Jan 2022',
      is_active: false,
    },
    {
      position: 'Frontend Developer',
      company: 'PT Permata Indonesia',
      start_date: 'Jan 2023',
      end_date: 'Jan 2022',
      is_active: false,
    },
  ],
  email: 'alfirman.pahlepi@gmail.com',
  phone: '6289673757429',
}));

describe('HomePage', () => {
  it('renders home page content correctly', () => {
    const { getByText, getByAltText } = render(<HomePage />);

    // Assert the presence of specific elements or text
    expect(getByText('Alfirman Ejha Pahlepi')).toBeInTheDocument();
    // expect(getByText('Frontend Developer')).toBeInTheDocument();
    expect(getByAltText('Alfirman Pahlepi')).toBeInTheDocument();
    expect(getByText('I enjoy programming and whenever I can I try to learn new things.')).toBeInTheDocument();
    // Add more assertions to validate the rendered content
  });

  // Add more test cases if needed
});
