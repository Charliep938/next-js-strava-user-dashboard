import React from 'react';
import { Select, MenuItem, useTheme } from '@mui/material';

const ThemeDropdown = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const handleChange = (event) => {
    // Handle the selected theme change
    const selectedTheme = event.target.value;
    // Your code to handle the theme change goes here
  };

  return (
    <Select
      value={isDarkMode ? 'dark' : 'light'}
      onChange={handleChange}
      style={{ color: isDarkMode ? '#ffffff' : '#000000' }}
    >
      <MenuItem value="dark">Dark Mode</MenuItem>
      <MenuItem value="light">Light Mode</MenuItem>
    </Select>
  );
};

export default ThemeDropdown;