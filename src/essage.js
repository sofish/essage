/* Essage - a more elegant way to show message
 * https://github.com/sofish/essage
 */
~function(win, doc) {

  var Essage = function() {
    var self = this;

    this.el = doc.createElement('div');
    this.el.className = 'essage';

    this.close = document.createElement('span');
    this.close.className = 'close';
    this.close.innerHTML = '×'

    this.el.onclick = function(e) {
      var e = e || win.event
        , target = e.target || e.srcElement;
      if(target.className === 'close') self.hide();
    }

    // placement of the message, by default is `top`
    this.placement = 'top';

    doc.body.appendChild(this.el);

    return this;
  };

  Essage.prototype.setClass = function(classname) {
    this.el.className = classname || 'essage';
    return this;
  };

  Essage.prototype.setPlacement = function(placement) {
    this.placement = placement && placement.match(/^(?:top|bottom)$/) ? placement : 'top';
    this.el.style[this.placement] = -this._height();
    this.el.style[this.placement === 'top' ? 'bottom' : 'top'] = 'auto';
    return this;
  };

  Essage.prototype._height = function() {
    return this.el.offsetHeight || this.el.clientHeight;
  };

  Essage.prototype.show = function(message, duration) {
    var el = this.el
      , self = this
      , interval, timeout;

    el.innerHTML = message;
    el.appendChild(this.close);
    this.close.innerHTML = '&times';

    var top = -this._height();

    // disppear automaticlly
    if(this._timeout) clearTimeout(this._timeout);
    duration && (timeout = function() {
      return setTimeout(function() {
        self.hide();
      }, duration);
    });

    interval = setInterval(function() {
      if(top === 0) {
        self._timeout = timeout && timeout();
        return clearInterval(interval);
      }
      el.style[self.placement] = (top += 1) + 'px';
    }, 3);

    return this;
  };

  Essage.prototype.hide = function() {
    var top = +this.el.style[this.placement].slice(0, -2)
      , dest = -this._height()
      , self = this
      , interval;

    interval = setInterval(function() {
      if(top === dest) return interval && clearInterval(interval);
      self.el.style[self.placement] = (top -= 1) + 'px';
    }, 3);
    return this;
  }

  // export to window
  win.Essage = new Essage();

}(window, document);