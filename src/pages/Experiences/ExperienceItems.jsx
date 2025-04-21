import React from 'react'
import { Paper, Box, Typography } from '@mui/material'


const ExperienceItems = ({exp}) => {
    return (
        <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={'20px'}>
            <Typography variant="h6" component="h3">
            {exp.companyTitle}
            </Typography>
            {exp.logo && (
            <Box
                component="img"
                src={exp.logo}
                alt={`${exp.companyTitle} logo`}
                sx={{ width: 70, height: 70, objectFit: 'contain', ml: 2 }}
            />
            )}
        </Box>
        <Typography variant="subtitle2" color="text.secondary">
          {exp.role}
        </Typography>
        <Box mt={1}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            {exp.description}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            <strong>Tech:</strong> {exp.tech}
          </Typography>
        </Box>
      </Paper>
      )    
}
export default ExperienceItems