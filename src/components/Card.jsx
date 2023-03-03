import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "300px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "8px" : "35px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({video: { id: { videoId }, snippet }}) => {
  return (
    <Link to={`/video/${videoId}`} style={{ textDecoration: "none" }}>
      <Container>
        <Image
          src={snippet?.thumbnails.high.url}
        />
        <Details>
          <ChannelImage
            src={snippet?.thumbnails.high.url}
          />
          <Texts>
              <Title>{snippet?.title}</Title>
              <ChannelName>{snippet?.channelTitle}</ChannelName>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card