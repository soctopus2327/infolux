import type { StackProps } from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { textGradient } from 'src/theme/styles';

// ----------------------------------------------------------------------

export function NavUpgrade({ sx, ...other }: StackProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{ mb: 4, textAlign: 'center', ...sx }}
      {...other}
    >
      <Typography
        variant="h6"
        sx={(theme) => ({
          ...textGradient(
            `to right, ${theme.vars.palette.secondary.main}, ${theme.vars.palette.warning.main}`
          ),
        })}
      >
        New Hires needed?
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
        {`Interview now with `}
        <Box component="strong" sx={{ color: 'text.primary' }}>
          AI Interviewer
        </Box>
      </Typography>

      <Box
        component="img"
        alt="Minimal dashboard"
        src="/assets/illustrations/illustration-dashboard.webp"
        sx={{ width: 200, my: 2 }}
      />

      <Button
        href="https://material-ui.com/store/items/minimal-dashboard/"
        target="_blank"
        variant="contained"
        color="inherit"
      >
        Schedule Interview
      </Button>
    </Box>
  );
}
