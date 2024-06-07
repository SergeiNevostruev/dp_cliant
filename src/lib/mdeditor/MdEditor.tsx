import MDEditor from '@uiw/react-md-editor';
import React from 'react';

export default function MdEditor() {
  const [value, setValue] = React.useState('**Hello world!!!**');
  return (
    <div className='container'>
      <MDEditor value={value} onChange={setValue} />
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  );
}
