import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import '../scss/drawer.scss';
import { useSelector, useDispatch } from 'react-redux';
import { openDrawer, closeDrawer } from '../redux/action/DrawerAction';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    border: 'none',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const open = useSelector(state => state.drawer.visible);
  const dispatch = useDispatch();
  return (
      <Drawer
        onMouseEnter={() => dispatch(openDrawer())}
        onMouseLeave={() => dispatch(closeDrawer())} 
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Divider />
        <List>
            <ListItem button>
              <ListItemIcon><EmojiObjectsIcon /></ListItemIcon>
              <ListItemText primary="Notes" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><NotificationsNoneIcon /></ListItemIcon>
              <ListItemText primary="Reminders" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><EditIcon /></ListItemIcon>
              <ListItemText primary="Edit labels" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><ArchiveIcon /></ListItemIcon>
              <ListItemText primary="Archive" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><DeleteIcon /></ListItemIcon>
              <ListItemText primary="Bin" />
            </ListItem>
        </List>
      </Drawer>
      
  );
}