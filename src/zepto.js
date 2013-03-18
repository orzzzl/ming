!(function (factory) {
    if (typeof define === 'function') {
        define(['zepto'], factory);
    } else {
        factory(Zepto);
    }
})(function ($) {
    return $;
});