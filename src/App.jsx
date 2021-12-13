import React from 'react';
import Header from './components/Header'
import Section from './components/Section'

function App() {
  return (
    <>
      <Header title='Blog'/>
      <Section title="Hello World Is Cool" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum risus ligula, in hendrerit urna placerat vel. Suspendisse sed congue dui. Curabitur tellus dolor, lobortis eget tristique sed, tincidunt nec nisi. Cras laoreet, mauris non feugiat consequat, dolor diam vulputate ligula, sed vulputate est neque at ligula. Sed ligula ante, suscipit sed diam eu, finibus scelerisque orci. Aliquam id elementum massa, eu pretium turpis.'/>

      <Section title="A Second Blog Post" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum risus ligula, in hendrerit urna placerat vel. Suspendisse sed congue dui. Curabitur tellus dolor, lobortis eget tristique sed, tincidunt nec nisi. Cras laoreet, mauris non feugiat consequat, dolor diam vulputate ligula, sed vulputate est neque at ligula. Sed ligula ante, suscipit sed diam eu, finibus scelerisque orci. Aliquam id elementum massa, eu pretium turpis.'/>
    </>
  );
}

export default App;