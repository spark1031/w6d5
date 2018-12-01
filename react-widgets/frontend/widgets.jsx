import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

const tabsProp = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('root');
  ReactDOM.render(
    <Root/>,
    main
  );
});



const Root = (props) => {
  return (
    <div>
      <Clock />
      <Tabs tabsProp={tabsProp} />
    </div>
  );
};
