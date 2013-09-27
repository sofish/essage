/* Essage - an elegant way to display tips/message
 * https://github.com/sofish/Essage
 */
~function(win, doc) {

  var Essage = function() {
    this.el = doc.createElement('div');
    this.el.className = 'essage';

    return this;
  };

  Essage.prototype.setClass = function(classname) {
    this.el.className = classname;
    return this;
  };

  Essage.prototype._height = function() {
    return this.el.offsetHeight;
  };

  Essage.prototype.show = function(message, duration) {
    var el = this.el
      , self = this
      , interval, timeout;

    el.innerHTML = message;

    // first apply
    if(!el.parentNode) doc.body.appendChild(el);

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
      console.log(3);

      el.style.top = (top += 1) + 'px';
    }, 10);

    return this;
  };

  Essage.prototype.hide = function() {
    var top = +this.el.style.top.slice(0, -2)
      , dest = -this._height()
      , self = this
      , interval;

    interval = setInterval(function() {
      if(top === dest) return interval && clearInterval(interval);
      self.el.style.top = (top -= 1) + 'px';
    }, 10);
    return this;
  }

  // export to window
  win.Essage = new Essage();

}(window, document);