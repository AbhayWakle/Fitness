import React, { useState } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';
import ReactPlayer from 'react-player';

const ExerciseVideos = ({ exerciseVideos, name }) => {
    const [playingIndex, setPlayingIndex] = useState(null);

    if (!exerciseVideos.length) return <Loader />;

    return (
        <Box sx={{ marginTop: { lg: '50px', xs: '20px' } }} p="20px">
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, fontWeight: 700, color: '#333', marginBottom: '33px' }}>
                Watch <span style={{ color: '#FF4081', textTransform: 'capitalize' }}>{name}</span> exercise videos
            </Typography>
            <Stack sx={{ gap: '30px', justifyContent: 'flex-start', alignItems: 'flex-start', flexWrap: 'wrap' }} direction="row">
                {exerciseVideos?.slice(0, 6)?.map((item, index) => (
                    <Box
                        key={index}
                        className="exercise-video"
                        sx={{
                            position: 'relative',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            width: 'calc(33.33% - 20px)', // Adjusted width for 3 items in a row with spacing
                            marginBottom: '30px', // Spacing between rows
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                        }}
                        onMouseEnter={() => setPlayingIndex(index)}
                        onMouseLeave={() => setPlayingIndex(null)}
                    >
                        {playingIndex === index ? (
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                                playing
                                controls
                                volume
                                width="100%"
                                height="100%"
                                style={{ borderRadius: '20px' }}
                            />
                        ) : (
                            <img
                                src={item.video.thumbnails[0].url}
                                alt={item.video.title}
                                style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
                            />
                        )}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                width: '100%',
                                padding: '10px',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                color: '#333',
                                borderBottomLeftRadius: '20px',
                                borderBottomRightRadius: '20px',
                            }}
                        >
                            <Typography sx={{ fontSize: '18px', fontWeight: 600, lineHeight: '1.3', mb: '6px' }}>
                                {item.video.title}
                            </Typography>
                            <Typography variant="body2" color="#666">
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default ExerciseVideos;
