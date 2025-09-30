import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 430px;
  min-height: 540px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
    @media (max-width: 768px) {
    width: 100%;
    padding: 20px 16px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: ${({ expanded }) => (expanded ? "block" : "-webkit-box")};
  -webkit-line-clamp: ${({ expanded }) => (expanded ? "none" : 3)};
  -webkit-box-orient: vertical;
  word-break: break-word;
`;

const ReadMoreButton = styled.span`
  color: ${({ theme }) => theme.primary + 99};
  font-weight: 600;
  cursor: pointer;
  display: inline;
  font-size: 12px;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const TagsHeader = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.text_secondary + "20"};
  color: ${({ theme }) => theme.text_secondary + 99};
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 5px;
  font-weight: 500;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 18px 0;
`;

const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
`;

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card>
      <Image src={project.image} />

      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>

        <DescriptionWrapper>
          <Description expanded={isExpanded}>{project.description}</Description>
          {!isExpanded && project.description.length > 150 && (
            <ReadMoreButton onClick={() => setIsExpanded(true)}>
              ...Read More
            </ReadMoreButton>
          )}
          {isExpanded && project.description.length > 150 && (
            <ReadMoreButton onClick={() => setIsExpanded(false)}>
              Read Less
            </ReadMoreButton>
          )}
        </DescriptionWrapper>
      </Details>

      <Members>
        {project.member?.map((member, index) => (
          <Avatar key={index} src={member.img} />
        ))}
      </Members>

      <TagsHeader>Tech Stack Used:</TagsHeader>
      <Tags>
        {project.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>

      <Buttons>
        <Button href={project.github} target="_blank">
          View Code
        </Button>
        <Button href={project.webapp} target="_blank">
          View App
        </Button>
      </Buttons>
    </Card>
  );
};

export default ProjectCard;
