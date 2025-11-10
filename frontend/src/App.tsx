import { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <Container maxWidth="md" sx={{ height: '100vh', py: 4 }}>
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Study Buddy
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Your AI companion for ITI studies
        </Typography>
      </Box>
      <ChatInterface />
    </Container>
  );
}

export default App;

