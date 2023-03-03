import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${"New"}`)
      .then((data) => setVideos(data.items))
  },[]);

  console.log(videos)

  return (
    <Container>
      {videos.map((video) => (
        <>
        {video.id.videoId && <Card video={video} /> }
        </>
      ))}
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Home