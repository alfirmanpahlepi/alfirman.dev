import { render } from '@testing-library/react';
import Skills from './Skills';
import "intersection-observer";

describe('Skills', () => {
  it('renders skills and tools correctly', () => {
    const skills = [
      {
        title: 'Frontend',
        techs: ['React', 'JavaScript', 'HTML', 'CSS'],
      },
      {
        title: 'Backend',
        techs: ['Node.js', 'Express', 'MongoDB'],
      },
    ];
    const paragrap1 = 'Lorem ipsum dolor sit amet';
    const paragrap2 = 'consectetur adipiscing elit';
    const { getByText, getAllByText } = render(
      <Skills skills={skills} paragrap1={paragrap1} paragrap2={paragrap2} />
    );

    expect(getByText('Skills and Tools')).toBeInTheDocument();
    expect(getByText(paragrap1)).toBeInTheDocument();
    expect(getByText(paragrap2)).toBeInTheDocument();

    // Check if each skill title and tech is rendered correctly
    skills.forEach((skill) => {
      expect(getByText(skill.title)).toBeInTheDocument();
      skill.techs.forEach((tech) => {
        expect(getAllByText(tech)).toBeTruthy();
      });
    });
  });

  // Add more test cases if needed
});
