import * as React from "react";
import injectSheet from 'react-jss';
import styles from './App.styles';
import {AppHeader} from '../AppHeader/AppHeader';

interface Props {
    classes: {[key: string]: any},
}

interface State {

}

class App extends React.PureComponent<Props, State> {

    render() {
        return (
                <div className={this.props.classes.todo}>
                    <AppHeader />
                </div>
        );
    }
}


const StyledApp = injectSheet(styles)(App);
export {StyledApp as App};