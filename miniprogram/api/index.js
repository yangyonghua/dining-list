"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../utils/index");
exports.SERVER_PATH = 'http://localhost:3001';
exports.GET_OPEN_ID = exports.SERVER_PATH + "/getOpenID";
function request(options) {
    var publicOptions = {};
    wx.request(index_1.mergeObjectDeep(publicOptions, options));
}
exports.request = request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdDQUV1QjtBQUtWLFFBQUEsV0FBVyxHQUFHLHVCQUF1QixDQUFBO0FBS3JDLFFBQUEsV0FBVyxHQUFNLG1CQUFXLGVBQVksQ0FBQTtBQUtyRCxTQUFnQixPQUFPLENBQUUsT0FBeUI7SUFFaEQsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFBO0lBQ3hCLEVBQUUsQ0FBQyxPQUFPLENBQUMsdUJBQWUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQTtBQUNyRCxDQUFDO0FBSkQsMEJBSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDlrprkuYnmnInlhbNBUEnosIPnlKjnmoTkv6Hmga9cclxuaW1wb3J0IHtcclxuICBtZXJnZU9iamVjdERlZXAsXHJcbn0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnXHJcblxyXG4vKipcclxuICogIOWQjuerr+acjeWKoeWcsOWdgFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNFUlZFUl9QQVRIID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSdcclxuXHJcbi8qKlxyXG4gKiAg6I635Y+Wb3Blbmlk5o6l5Y+j6Lev5b6EXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgR0VUX09QRU5fSUQgPSBgJHtTRVJWRVJfUEFUSH0vZ2V0T3BlbklEYFxyXG5cclxuLyoqXHJcbiAqICByZXF1ZXN05bCB6KOF77yM6ZuG5Lit5aSE55CGXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdCAob3B0aW9uczogd3guUmVxdWVzdE9wdGlvbikge1xyXG4gIC8vIOWFrOWFseWkhOeQhumFjee9rlxyXG4gIGNvbnN0IHB1YmxpY09wdGlvbnMgPSB7fVxyXG4gIHd4LnJlcXVlc3QobWVyZ2VPYmplY3REZWVwKHB1YmxpY09wdGlvbnMsIG9wdGlvbnMpKVxyXG59XHJcbiJdfQ==