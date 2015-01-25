---
title: React-Tree
description: Provide a component, render a tree
repo: https://github.com/littlemooon/react-tree
author: fred-wright
date: 2015-01-25
template: project.jade
---

Syntax highlighting with [highlight.js](http://softwaremaniacs.org/soft/highlight/en/).
The theme used is tomorrow, you can find more themes [here](http://jmblog.github.io/color-themes-for-highlightjs/).

<span class="more"></span>

### JavaScript

```javascript
/*
 * Component to render for each node
 */
var CollapsableTreeItem = React.createClass({
  render: function() {
    var p = this.props;
    var d = p.data;
    var node = null;
    var collapse = null;

    // if we are collapsable create a button
    if(p.collapsable) {
      collapse = (
        <button 
          className = 'collapse'
          onClick = {p.onCollapse}>
          {p.collapsed? '+' : '-'}
        </button>
      );
    }

    if(p.collapsed) {
      node = (
        <div>
          <h3>{d.name} {collapse}</h3>
          
        </div>
      );
    } else {
      node = (
        <div>
          <h3>{d.name} {collapse}</h3>
          
          <p>{d.quote}</p>
        </div>
      );
    }

    return node;
  }
});
```