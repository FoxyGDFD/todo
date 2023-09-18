import { FC, PropsWithChildren } from 'react';
import { Box, Typography } from 'simplify-dev';

const RootLayout: FC<PropsWithChildren> = props => {
  const { children } = props;
  return (
    <Box
      as='main'
      className='mx-auto my-[50px] flex max-w-md flex-col rounded-[10px] bg-slate-100 p-[20px]'
    >
      <Typography as='h1' className='text-center'>
        Todos
      </Typography>
      <Box as='section' className='pt-[40px]'>
        {children}
      </Box>
    </Box>
  );
};

export default RootLayout;
