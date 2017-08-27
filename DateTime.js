"use strict";

var DateTime = (function () {
  function createDateTime(date) {
    return {
      get offset() {
        return date.getTime();
      }
    };
  }

  //return function () {
    //return createDateTime(new Date());
  //};

  return function (date) {
    if (date !== undefined) {
      if (date instanceof Date) {
        return createDateTime(date);
      }
      throw new Error(String(date) + "is not a Date object.");
    }
    return createDateTime(new Date());
  };

})();
