import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component', () => {
  // Render the Footer component
  const { getByText } = render(<Footer />);

  // Assert that the rendered component contains the expected text
  const homeLink = getByText('Home');
  const aboutLink = getByText('About');
  const projectsLink = getByText('Projects');
  const githubLink = getByText('Github');
  const linkedInLink = getByText('LinkedIn');
  const twitterLink = getByText('Twitter');
  const blogLink = getByText('Blog');
  const contactLink = getByText('Contact');
  const cvLink = getByText('My CV');

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(githubLink).toBeInTheDocument();
  expect(linkedInLink).toBeInTheDocument();
  expect(twitterLink).toBeInTheDocument();
  expect(blogLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
  expect(cvLink).toBeInTheDocument();
});
