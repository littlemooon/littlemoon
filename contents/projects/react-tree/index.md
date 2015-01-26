---
title: React-Tree
description: Provide a component, render a tree
repo: https://github.com/littlemooon/react-tree
author: fred-wright
date: 2015-01-25
template: project.jade
---

How many generic 'list' components have you created? This is yet another. 

The aim is to provide a highly reusable API for rendering data in list and tree structures. Provide a component and an array and we're off...

<span class="more"></span>

### 1 Lists - the simple case

A simple list is the most basic use case. We have all looped through data, rendering a view for each item, before.

Supply the array and the view to the React-Tree component:

```javascript
var data = ['apple', 'orange', 'banana'];

var ListOfFruit = React.createClass({
  render: function() {
    return <Tree nodes = {data} component = {Fruit}/>;
  }
});

var Fruit = React.createClass({
  render: function() {
    return <p>{this.props.data}</p>;
  }
});
```

... and you will be blessed with a list of that data:

<div class='example'/><div><p>apple</p></div><div><p>orange</p></div><div><p>banana</p></div></div>

### 2 Trees - this is getting exciting

The data for each item in the list is accessible via 'props.data'. This is the case no matter what type of objects the array contains.

If we provide it with a list of objects that themselves contain a list of child objects of the same type we contruct a nested tree of components:

```javascript
var data = ['apple', 'orange', 'banana'];

var ListOfFruit = React.createClass({
  render: function() {
    return <Tree nodes = {data} component = {Fruit}/>;
  }
});

var Fruit = React.createClass({
  render: function() {
    return <p>{this.props.data}</p>;
  }
});
```