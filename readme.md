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

### 2. API

2.1 **show(message, timeout)** show message

```js
Essage.show('hello, im a message.');
```

if `timeout` {Number} is specific, the message will hide automaticlly after `timeout` (ms).

```js
// `timeout` should be a number
Essage.show('i willl hide automaticlly after 2 seconds', 2000);
```

2.2 **hide()** hide message

```js
Essage.hide();
```

2.3 **setPlacement(placement)** change placement of the message

```js
// by default, it's `top`, set the placement to `bottom`
Essage.setPlacement('bottom').show('then, show the message');
```

2.4 **setClass(classname) ** change the container's classname

```js
// if you change the className, remember to modify `essage.css`
Essage.setClass('essage-success');
```

2.5 **chain methods**

```js
// Method of `Essage` can be chained
Essage.setPlacement('bottom')
  .setClass('essage-error')
  .show('message', 3000);
```

### 3. MIT licence

Licensed under MIT. [liccese.txt](https://github.com/sofish/essage/blob/master/license.txt)




