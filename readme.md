#  Essage

> a more elegant way to show message / tips.

-------------------------

- Live demo [http://sofish.github.io/essage/](http://sofish.github.io/essage/)
- Browser support: tested under IE6+, Firefox, Chrome, Safari

-------------------------

### 1. installaion

Place the js/css file on you page, and use the `Essage` object to manage your message:

```html
<link rel="stylesheet" href="essage.css">
<script src="essage.js"></script>
```

### 2. API: `show` or `hide`

1. **show(message, timeout)** show message

 ```js
 // The argument `message` can be html(string).
 Essage.show('<b>hello</b>, im a message.');
 ```

 **auto hide**: If `timeout` {Number} is specific, the message will hide automaticlly after `timeout` (ms).

 ```js
 // `timeout` should be a number
 Essage.show('i willl hide automaticlly after 2 seconds', 2000);
 ```

 **config**: And, the `message` can be an object:

 ```js
 var message = {
   message: 'message body',

   // add class `essage-success` to the container
   // by default, there're 4 status: normal, warning, success, error
   status: 'success',

   // the placement can be `top` or `bottom`, by default is `top`
   placement: 'bottom'
 };

 Essage.show(message, 3000);
 ```

2. **hide()** hide message

 ```js
 Essage.hide();
 ```

### 3. MIT licence

Licensed under MIT. [liccese.txt](https://github.com/sofish/essage/blob/master/license.txt)




