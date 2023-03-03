import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams(); 

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  },[searchTerm]);

  console.log(videos)

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video.id.videoId} video={video}/>
      ))}
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default SearchFeed