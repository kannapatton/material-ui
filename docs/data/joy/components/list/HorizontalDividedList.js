import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';

export default function HorizontalDividedList() {
  return (
    <List
      row
      variant="outlined"
      sx={{
        borderRadius: 'sm',
        flexGrow: 0,
        mx: 'auto',
        '--List-decorator-width': '48px',
        '--List-item-paddingY': '1rem',
      }}
    >
      <ListItem>
        <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
          <Avatar size="sm" src="/static/images/avatar/1.jpg" />
        </ListItemDecorator>
        Mabel Boyle
      </ListItem>
      <ListDivider inset="gutter" />
      <ListItem>
        <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
          <Avatar size="sm" src="/static/images/avatar/2.jpg" />
        </ListItemDecorator>
        Boyd Burt
      </ListItem>
      <ListDivider inset="gutter" />
      <ListItem>
        <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
          <Avatar size="sm" src="/static/images/avatar/3.jpg" />
        </ListItemDecorator>
        Adam Tris
      </ListItem>
    </List>
  );
}
