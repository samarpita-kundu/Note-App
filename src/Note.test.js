import React from 'react';
import Note from './component/Note' 
import ReactDOM from 'react-dom';

it('Notes are created', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Note />, div);
    ReactDOM.unmountComponentAtNode(div);
});

