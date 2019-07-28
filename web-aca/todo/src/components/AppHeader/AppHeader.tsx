import * as React from 'react';
import injectSheet from 'react-jss';
import styles from './AppHeader.styles';

interface Props {
    classes: {[key: string]: any},
    onAddPost: (post: {header: string; text: string}) => void;
}

const AppHeader = () => {
    return (
           <div>
               <h1>Todo List</h1>
           </div>
    );
};

const StyledAppHeader = injectSheet(styles)(AppHeader);
export {StyledAppHeader as AppHeader};