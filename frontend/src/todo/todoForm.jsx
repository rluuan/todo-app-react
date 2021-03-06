import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search } from './todoActions'

class TodoForm extends Component {
    constructor (props) {
        super (props)
        this.keyHandle = this.keyHandle.bind(this)
    }
    keyHandle(e) {
        if (e.key == 'Enter') e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        else if (e.key == 'Escape') props.handleClear()
    }
    componentWillMount() {
        this.props.search();
    }
    render() {
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input type="text" id="description" className="form-control"
                        onChange={this.props.changeDescription}
                        placeholder='Adicione uma tarefa' onKeyUp={this.keyHandle} value={this.props.description}/>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'     onClick={this.props.handleAdd} /> 
                    <IconButton style='info'    icon='search'   onClick={this.props.handleSearch} />
                    <IconButton style='default' icon='close'    onClick={this.props.handleClear} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
})
const mapDispatchToProps = dispatch => bindActionCreators( {changeDescription, search}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)