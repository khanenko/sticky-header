# sticky-header

## Usage

`/src/index.js`

```javascript
import ReactDOM from 'react-dom';
import React from 'react';

import StickyHeader from './components/StickyHeader.jsx';

ReactDOM.render(
    <div>
        <StickyHeader className="sticky-one" enter="150" exit="500">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </StickyHeader>
    </div>,
    document.getElementById('sticky')
);
```
#### Properties
`className`	*string* - The class name of the element

`enter` *string* - Says how many pixels must to be scrolling in order to the element starts to be a sticky

`exit` *string* - Says how many pixels must to be scrolling in order to the element finishes to be a sticky

`enter`, `exit` are not required

#### Links
This site was built using [GitHub Pages](https://khanenko.github.io/sticky-header/public/)
