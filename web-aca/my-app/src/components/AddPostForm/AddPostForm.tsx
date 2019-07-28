import * as React from "react";
import {SyntheticEvent} from "react";
import injectSheet from 'react-jss';
import styles from './AddPostForm.styles';

interface Props {
    classes: {[key: string]: any},
    onAddPost: (post: {header: string; text: string}) => void;
}

interface State {
    header: string,
    text: string
}

class AddPostForm extends React.PureComponent<Props, State> {

    public state = {
        header: 'asdasd',
        text: 'asdasdas'
    };

    private onSubmit = (e) => {
        e.preventDefault();
    };

    // private onHeaderChange = (e: SyntheticEvent<HTMLInputElement>) => {
    //     this.setState({
    //         header: e.currentTarget.value
    //     });
    // };

    // private onTextChange = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    //     this.setState({
    //         text: e.currentTarget.value
    //     });
    // };

    private onChange = (field: string) => (e: SyntheticEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        this.setState((state: State) => {
            const value = e.currentTarget.value;
            return {...state, [field]: value}
        }, () => {
            console.log('finished');
        });
    };

    render() {
        return <form onSubmit={this.onSubmit}>
            <input
                    className={this.props.classes.field}
                    value={this.state.header}
                    onChange = {this.onChange('header')}
                    type='text' placeholder='Header'/>
            <textarea
                    value={this.state.text}
                    name=''
                    id=''
                    onChange = {this.onChange('text')}
                    cols={30}
                    rows={10} />
        </form>
    }
}

const StyledAddPostForm = injectSheet(styles)(AddPostForm);

export {StyledAddPostForm as AddPostForm};