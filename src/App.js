import React, {Component} from 'react';
import './App.css';
import marked from 'marked';

const initState = `
# H1
## H2

[I'm an inline-style link](https://www.google.com)

Inline \`code\` has \`back-ticks around\` it.

\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

1. First item
2. Second item
3. Third item

- First item
- Second item
- Third item


> blockquotes are very handy in email to emulate reply text.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Here's a logo (hover to see the title text):

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

`;

class App extends Component {
  state ={
    text : initState,
  }

  changeHandler = (e) => {
    this.setState({text: e.target.value});
  }
  render(){
    const {text}= this.state;
    const markdown = marked(text, {breaks: true});

    return (
    <div className="App">
      <textarea id="editor" value={text} onChange={this.changeHandler} />
      <div id="preview" dangerouslySetInnerHTML={{__html: markdown}} />
    </div>
  );
}
}

export default App;
