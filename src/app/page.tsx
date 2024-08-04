import { ListComponent } from '@/components';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Typography variant={'h1'}>
        Technical Assessment for the position of Fullstack at Town Square
      </Typography>

      <ListComponent />
    </main>
  );
}
