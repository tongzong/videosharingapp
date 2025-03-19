// import { useState } from 'react'
import youtube from './api/youtube';
import { Grid } from "@material-ui/core";
import SearchBar from './Components/SearchBar';
import { useState } from 'react';



function App() {
   const [videos, setVideos] = useState([]);
   const [selectedVideo, setSelectedVideo] = useState({ id:{}, snippet:{} });

  const handleSubmit  = async (searchItem) =>{
    
      try {
        const {data: {items: videos}} = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResult: 5,
         key: "AIzaSyCSWNhs9JmhB7VWzQ4JpafuJC20O1JgETo",
        q: searchItem,
      },
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }catch (error){
    console.error("Error fetching videos:", error);
  }
};

  return (
    <>
    <Grid style={{justifyContent: "center"}} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit = {handleSubmit}/>
            </Grid>
          <Grid item xs={12}>
            <VideoDetails videos={selectedVideo}/>
            </Grid>
          <Grid item xs={12}>
            {/* {{VideoList}} */}
            </Grid>
        </Grid>
      </Grid>
    </Grid>
           </>
  );

}



export default App
