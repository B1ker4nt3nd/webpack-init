import { logSomething } from './module';
import { Editor } from 'slate-react';

logSomething('Hello World');

const [value, setValue] = React.useState([
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]);
