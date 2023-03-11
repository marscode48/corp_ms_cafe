"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

document.addEventListener('DOMContentLoaded', function () {
  var main = new Main();
});

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);

    this.side = document.querySelector('#side-btn');
    this.bg = document.querySelector('.bg');

    this._init();
  }

  _createClass(Main, [{
    key: "_init",
    value: function _init() {
      gsap.registerPlugin(ScrollTrigger);
      new MenuOpen();
      new MenuFadeIn(520);
      new SmoothScroll(80);
      Pace.on('done', this._paceDone.bind(this));
    }
  }, {
    key: "_paceDone",
    value: function _paceDone() {
      this._scrollInit();
    }
  }, {
    key: "_mainVisualAnimation",
    value: function _mainVisualAnimation(el, inview) {
      if (inview) {
        new MainVisualAnimation(el);
      }
    }
  }, {
    key: "_featureAnimation",
    value: function _featureAnimation(el, inview) {
      if (inview) {
        new FeatureAnimation(el);
      }
    }
  }, {
    key: "_inviewAnimation",
    value: function _inviewAnimation(el, inview) {
      if (inview) {
        el.classList.add('inview');
      }
    }
  }, {
    key: "_sideAnimation",
    value: function _sideAnimation(el, inview) {
      if (inview) {
        this.side.classList.add('inview');
      } else {
        this.side.classList.remove('inview');
      }
    }
  }, {
    key: "_textAnimation",
    value: function _textAnimation(el, inview) {
      if (inview) {
        var ta = new TweenTextAnimation(el);
        ta.animate();
      }
    }
  }, {
    key: "_fadeInAnimation",
    value: function _fadeInAnimation(el, inview) {
      if (inview) {
        this.bg.classList.add('inview');
      } else {
        this.bg.classList.remove('inview');
      }
    }
  }, {
    key: "_scrollInit",
    value: function _scrollInit() {
      new ScrollObserver('.gsap-top', this._mainVisualAnimation);
      new ScrollObserver('.gsap-feature', this._featureAnimation);
      new ScrollObserver('.menu__item', this._inviewAnimation);
      new ScrollObserver('.site-title', this._inviewAnimation);
      new ScrollObserver('.cover-slide', this._inviewAnimation);
      new ScrollObserver('.appear', this._inviewAnimation);
      new ScrollObserver('.tween-animate-title', this._textAnimation, {
        rootMargin: '-100px 0px'
      });
      new ScrollObserver('#menu', this._sideAnimation.bind(this), {
        once: false,
        rootMargin: '-300px 0px 0px 0px'
      });
      new ScrollObserver('#location', this._fadeInAnimation.bind(this), {
        once: false,
        rootMargin: '-300px 0px 0px 0px'
      });
    }
  }]);

  return Main;
}();
//# sourceMappingURL=main.js.map
