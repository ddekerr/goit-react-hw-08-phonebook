import { SectionContainer } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <h2>{title}</h2>
      {children}
    </SectionContainer>
  );
};
