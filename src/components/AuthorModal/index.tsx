import { FC } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Stack, Avatar, IconButton, Modal, Typography } from '@mui/material';
import { useToggle } from 'usehooks-ts';

const authorData = {
  name: 'Oleksandr Danylchenko',
  avatarUrl:
    'https://lh3.googleusercontent.com/drive-viewer/AFGJ81rH26C93XYBszu51N8PVa0DG9BA2JCb15J6f32VdAzS0cNyF84XMBvXrWiNGQZsNMq78wZqGOVaKLNW4UTQLs2OR752=s1600',
};

const AuthorModal: FC = () => {
  const [open, toggleOpen] = useToggle(true);

  return (
    <>
      <IconButton
        aria-label="Show author info"
        sx={{
          position: 'absolute',
          left: 10,
          top: 10,
        }}
        color="inherit"
        onClick={toggleOpen}
      >
        <AccountCircleIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={toggleOpen}
        aria-labelledby="author-modal-title"
        aria-describedby="author-modal-description"
      >
        <Stack alignItems="center" justifyContent="center" height="100%">
          <Stack
            alignItems="center"
            justifyContent="center"
            gap={2.5}
            p={3}
            sx={{
              backgroundColor: 'primary.light',
              borderRadius: 10,
              lineHeight: 1.6,
            }}
          >
            <Avatar
              alt={authorData.name}
              src={authorData.avatarUrl}
              sx={{ width: 240, height: 240 }}
            />
            <Typography
              id="author-modal-title"
              variant="h3"
              sx={{ lineHeight: 'inherit' }}
            >
              {authorData.name}
            </Typography>
            <Typography
              id="author-modal-description"
              variant="h5"
              sx={{ lineHeight: 'inherit' }}
            >
              Full-Stack JS/TS Developer <br /> <i>React + Node.js = ❤️</i>
            </Typography>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};

export default AuthorModal;
