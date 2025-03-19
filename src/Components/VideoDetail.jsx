import{Paper, Typography} from "@material-ui/core";

const VideoDetail = ( {video: {id: {videoId}, snippet: {title, channelTitle, descripton }}}) 
    if(!videoId) return <div>Loading...</div>

    return(
        <React.Fragment>
            <Paper elevation={6} style={{ height: "70%" }}>
                <iframe
                frameBorder="0"
                height="100%"
                width= "100% "
                title="Video Player"
                src={videoSrc} 
                />
            </Paper>
            <Paper elevation={6} style={{ padding: "15px" }}>
                <Typography variant="h4">
                    {title} - {channelTitle}

                </Typography>
                <Typography variant="subtitle2">
                    {description}
                </Typography>

            </Paper>
        </React.Fragment>
    );
}
export default videoDetals

