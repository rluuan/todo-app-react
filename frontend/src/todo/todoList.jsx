import React from 'react'
import Grid from '../template/grid'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check'    hide={todo.done}  onClick={() => props.handleMarkAsDone(todo)} />
                    <IconButton style='warning' icon='undo'     hide={!todo.done} onClick={() => props.handleMarkAsPending(todo)} />
                    <IconButton style='danger'  icon='trash-o'  hide={!todo.done} onClick={() => props.handleRemove(todo)}     />
                </td>
            </tr>
        ))
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th className='tableActions'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
const mapStateToProps = state => ({
    list: state.todo.list
})
export default connect(mapStateToProps)(TodoList)