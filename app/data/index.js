export const list = ['HTML', 'CSS', 'JS'];

export default {
  HTML: [
    {
      question: 'What does a DOCTYPE do?',
      answer: [
        'DOCTYPE is an abbreviation for “document type”. It is a declaration used in HTML to distinguish between standards mode and quirks mode. Its presence tells the browser to render the web page in standards mode. Moral of the story - just add <!DOCTYPE html> at the start of your page.',
      ],
    },
    {
      question: 'How do you serve a page with content in multiple languages?',
      answer: [
        'The question is a little vague, I will assume that it is asking about the most common case, which is how to serve a page with content available in multiple languages, but the content within the page should be displayed only in one consistent language. When an HTTP request is made to a server, the requesting user agent usually sends information about language preferences, such as in the Accept-Language header. The server can then use this information to return a version of the document in the appropriate language if such an alternative is available. The returned HTML document should also declare the lang attribute in the <html> tag, such as <html lang="en">...</html>. In the back end, the HTML markup will contain i18n placeholders and content for the specific language stored in YML or JSON formats. The server then dynamically generates the HTML page with content in that particular language, usually with the help of a back end framework.',
      ],
    },
    {
      question: [
        'What kind of things must you be wary of when designing or developing for multilingual sites?',
      ],
      answer: [
        'Use lang attribute in your HTML.',
        'Directing users to their native language - Allow a user to change his country/language easily without hassle.',
        "Text in images is not a scalable approach - Placing text in an image is still a popular way to get good-looking, non-system fonts to display on any computer. However, to translate image text, each string of text will need to have it's a separate image created for each language. Anything more than a handful of replacements like this can quickly get out of control.",
        "Restrictive words/sentence length - Some content can be longer when written in another language. Be wary of layout or overflow issues in the design. It's best to avoid designing where the amount of text would make or break a design. Character counts come into play with things like headlines, labels, and buttons. They are less of an issue with free-flowing text such as body text or comments.",
        'Be mindful of how colors are perceived - Colors are perceived differently across languages and cultures. The design should use color appropriately.',
        'Formatting dates and currencies - Calendar dates are sometimes presented in different ways. Eg. "May 31, 2012" in the U.S. vs. "31 May 2012" in parts of Europe.',
        'Do not concatenate translated strings - Do not do anything like "The date today is " + date. It will break in languages with different word order. Use a template string with parameters substitution for each language instead. For example, look at the following two sentences in English and Chinese respectively: I will travel on {% date %} and {% date %} 我会出发. Note that the position of the variable is different due to grammar rules of the language.',
        'Language reading direction - In English, we read from left-to-right, top-to-bottom, in traditional Japanese, text is read up-to-down, right-to-left.',
      ],
    },
    {
      question: 'What are data- attributes good for?',
      answer: [
        'Before JavaScript frameworks became popular, front end developers used data- attributes to store extra data within the DOM itself, without other hacks such as non-standard attributes, extra properties on the DOM. It is intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements. These days, using data- attributes is not encouraged. One reason is that users can modify the data attribute easily by using inspect element in the browser. The data model is better stored within JavaScript itself and stay updated with the DOM via data binding possibly through a library or a framework.',
      ],
    },
    {
      question:
        'Consider HTML5 as an open web platform. What are the building blocks of HTML5?',
      answer: [
        'Semantics - Allowing you to describe more precisely what your content is.',
        'Connectivity - Allowing you to communicate with the server in new and innovative ways.',
        'Offline and storage - Allowing webpages to store data on the client-side locally and operate offline more efficiently.',
        'Multimedia - Making video and audio first-class citizens in the Open Web.',
        '2D/3D graphics and effects - Allowing a much more diverse range of presentation options.',
        'Performance and integration - Providing greater speed optimization and better usage of computer hardware.',
        'Device access - Allowing for the usage of various input and output devices.',
        'Styling - Letting authors write more sophisticated themes.',
      ],
    },
  ],
  CSS: [
    {
      question: 'What is CSS selector specificity and how does it work?',
      answer: [
        'The browser determines what styles to show on an element depending on the specificity of CSS rules. We assume that the browser has already determined the rules that match a particular element. Among the matching rules, the specificity, four comma-separate values, a, b, c, d are calculated for each rule based on the following: \n a is whether inline styles are being used. If the property declaration is an inline style on the element, a is 1, else 0.\nb is the number of ID selectors.\nc is the number of classes, attributes and pseudo-classes selectors.\nd is the number of tags and pseudo-elements selectors. The resulting specificity is not a score, but a matrix of values that can be compared column by column. When comparing selectors to determine which has the highest specificity, look from left to right, and compare the highest value in each column. So a value in column b will override values in columns c and d, no matter what they might be. As such, specificity of 0,1,0,0 would be greater than one of 0,0,10,10. In the cases of equal specificity: the latest rule is the one that counts. If you have written the same rule into your stylesheet (regardless of internal or external) twice, then the lower rule in your style sheet is closer to the element to be styled, it is deemed to be more specific and therefore will be applied. I would write CSS rules with low specificity so that they can be easily overridden if necessary. When writing CSS UI component library code, it is important that they have low specificities so that users of the library can override them without using too complicated CSS rules just for the sake of increasing specificity or resorting to !important.',
      ],
    },
    {
      question: [
        'What\'s the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?',
      ],
      answer: [
        'Resetting - Resetting is meant to strip all default browser styling on elements. For e.g. margins, paddings, font-sizes of all elements are reset to be the same. You will have to redeclare styling for common typographic elements.',
        'Normalizing - Normalizing preserves useful default styles rather than "unstyling" everything. It also corrects bugs for common browser dependencies.',
        'I would choose resetting when I have a very customized or unconventional site design such that I need to do a lot of my own styling and do not need any default styling to be preserved.',
      ],
    },
    {
      question: 'Describe floats and how they work.',
      answer: [
        'Float is a CSS positioning property. Floated elements remain a part of the flow of the page, and will affect the positioning of other elements (e.g. text will flow around floated elements), unlike position: absolute elements, which are removed from the flow of the page. The CSS clear property can be used to be positioned below left/right/both floated elements. If a parent element contains nothing but floated elements, its height will be collapsed to nothing. It can be fixed by clearing the float after the floated elements in the container but before the close of the container. The .clearfix hack uses a clever CSS pseudo selector (:after) to clear floats. Rather than setting the overflow on the parent, you apply an additional class clearfix to it. Then apply this CSS:',
        ".clearfix:after { \ncontent: ' ';\nvisibility: hidden;\ndisplay: block;\nheight: 0;\nclear: both;}",
        'Alternatively, give overflow: auto or overflow: hidden property to the parent element which will establish a new block formatting context inside the children and it will expand to contain its children.',
      ],
    },
    {
      question: 'Describe z-index and how stacking context is formed.',
      answer: [
        "The z-index property in CSS controls the vertical stacking order of elements that overlap. z-index only affects elements that have a position value which is not static. Without any z-index value, elements stack in the order that they appear in the DOM (the lowest one down at the same hierarchy level appears on top). Elements with non-static positioning (and their children) will always appear on top of elements with default static positioning, regardless of HTML hierarchy. A stacking context is an element that contains a set of layers. Within a local stacking context, the z-index values of its children are set relative to that element rather than to the document root. Layers outside of that context — i.e. sibling elements of a local stacking context — can't sit between layers within it. If an element B sits on top of element A, a child element of element A, element C, can never be higher than element B even if element C has a higher z-index than element B. Each stacking context is self-contained - after the element's contents are stacked, the whole element is considered in the stacking order of the parent stacking context. A handful of CSS properties trigger a new stacking context, such as opacity less than 1, filter that is not none, and transform that is notnone.",
      ],
    },
    {
      question: 'Describe Block Formatting Context (BFC) and how it works.',
      answer: [
        'A Block Formatting Context (BFC) is part of the visual CSS rendering of a web page in which block boxes are laid out. Floats, absolutely positioned elements, inline-blocks, table-cells, table-captions, and elements with overflow other than visible (except when that value has been propagated to the viewport) establish new block formatting contexts. A BFC is an HTML box that satisfies at least one of the following conditions:',
        'The value of float is not none.',
        'The value of position is neither static nor relative.',
        'The value of display is table-cell, table-caption, inline-block, flex, or inline-flex.',
        'The value of overflow is not visible.',
        "In a BFC, each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch). Vertical margins between adjacent block-level boxes in a BFC collapse. Read more on collapsing margins.",
      ],
    },
  ],
  JS: [
    {
      question: 'Explain event delegation',
      answer: [
        'Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements. The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM. The benefits of this technique are:',
        'Memory footprint goes down because only one single handler is needed on the parent element, rather than having to attach event handlers on each descendant.',
        'There is no need to unbind the handler from elements that are removed and to bind the event for new elements.',
      ],
    },
    {
      question: 'Explain how this works in JavaScript',
      answer: [
        "There's no simple explanation for this; it is one of the most confusing concepts in JavaScript. A hand-wavey explanation is that the value of this depends on how the function is called. I have read many explanations on this online, and I found Arnav Aggrawal's explanation to be the clearest. The following rules are applied:",
        'If the new keyword is used when calling the function, this inside the function is a brand new object.',
        'If apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.',
        'If a function is called as a method, such as obj.method() — this is the object that the function is a property of.',
        "If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it is the window object. If in strict mode ('use strict'), this will be undefined instead of the global object.",
        'If multiple of the above rules apply, the rule that is higher wins and will set the this value.',
        'If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it is created.',
        'For an in-depth explanation, do check out his article on Medium.',
      ],
    },
    {
      question: 'Explain how prototypal inheritance works',
      answer: [
        "This is an extremely common JavaScript interview question. All JavaScript objects have a prototype property, that is a reference to another object. When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's prototype, and the prototype's prototype and so on, until it finds the property defined on one of the prototypes or until it reaches the end of the prototype chain. This behavior simulates classical inheritance, but it is really more of delegation than inheritance.",
      ],
    },
    {
      question: 'What do you think of AMD vs CommonJS?',
      answer: [
        "Both are ways to implement a module system, which was not natively present in JavaScript until ES2015 came along. CommonJS is synchronous while AMD (Asynchronous Module Definition) is obviously asynchronous. CommonJS is designed with server-side development in mind while AMD, with its support for asynchronous loading of modules, is more intended for browsers. I find AMD syntax to be quite verbose and CommonJS is closer to the style you would write import statements in other languages. Most of the time, I find AMD unnecessary, because if you served all your JavaScript into one concatenated bundle file, you wouldn't benefit from the async loading properties. Also, CommonJS syntax is closer to Node style of writing modules and there is less context-switching overhead when switching between client side and server side JavaScript development. I'm glad that with ES2015 modules, that has support for both synchronous and asynchronous loading, we can finally just stick to one approach. Although it hasn't been fully rolled out in browsers and in Node, we can always use transpilers to convert our code.",
      ],
    },
    {
      question:
        "Explain why the following doesn't work as an IIFE: function foo(){ }();. What needs to be changed to properly make it an IIFE?",
      answer: [
        "IIFE stands for Immediately Invoked Function Expressions. The JavaScript parser reads function foo(){ }(); as function foo(){ } and ();, where the former is a function declaration and the latter (a pair of brackets) is an attempt at calling a function but there is no name specified, hence it throws Uncaught SyntaxError: Unexpected token ). Here are two ways to fix it that involves adding more brackets: (function foo(){ })() and (function foo(){ }()). These functions are not exposed in the global scope and you can even omit its name if you do not need to reference itself within the body. You might also use void operator: void function foo(){ }();. Unfortunately, there is one issue with such approach. The evaluation of given expression is always undefined, so if your IIFE function returns anything, you can't use it. An example:",
        "// Don't add JS syntax to this code block to prevent Prettier from formatting it. const foo = void function bar() { return 'foo'; }(); console.log(foo); // undefined",
      ],
    },
  ],
};
