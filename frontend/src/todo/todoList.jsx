import React from 'react'
import Grid from '../template/grid'

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='9 9 10'></Grid>
        <Grid cols='3 3 2'>
            <h1>List</h1>
        </Grid>
    </div>
)