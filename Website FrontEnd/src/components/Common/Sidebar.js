import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
//import Link from '@material-ui/core/Link';

import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import ListSubHeader from '@material-ui/core/ListSubheader';

import FaceIcon from '@material-ui/icons/Face';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DashBoardIcon from '@material-ui/icons/Dashboard';

function ListItemLink(props) {
    return <ListItem button component={RouterLink} {...props} />;
}

class Sidebar extends Component{
    render(){
        return(
            <List>

            <ListItemLink to='/admin'>
                <ListItemIcon>
                    <DashBoardIcon />
                </ListItemIcon>
                <ListItemText primary='DashBoard'/>
            </ListItemLink>

            <ListItemLink to='/admin/posts'>
                <ListItemIcon>
                    <FileCopyIcon />
                </ListItemIcon>
                <ListItemText primary='Posts'/>
            </ListItemLink>

            <ListItemLink to='/admin/users'>
                <ListItemIcon>
                    <FaceIcon />
                </ListItemIcon>
                <ListItemText primary='Users'/>
            </ListItemLink>
            </List>
        )
    }
}

export default Sidebar;