import * as React from 'react';
import {Alert, AlertTitle} from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function ActionAlerts(foo:() => void, msg: string): JSX.Element {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error" onClose={() => {foo()}}><AlertTitle>As a pity!</AlertTitle>{msg}</Alert>
    </Stack>
  );
}
