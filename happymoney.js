// ==UserScript==
// @name         auto-input-for-happymoney
// @namespace    https://github.com/ask-and-go-to-the-blue/giftcard
// @version      1.0.1
// @description  auto input for happymoney!
// @author       ask-and-go-to-the-blue
// @match        http://www.happymoney.co.kr/svc/cash/giftCardCharge.hm
// @match        https://www.happymoney.co.kr/svc/cash/giftCardCharge.hm
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // add textarea for inputting a message.
    var pinDiv = document.getElementById("pinDiv");
    var inputArea = document.createElement("textarea");
    inputArea.setAttribute("id", "inputPinNumbers");
    inputArea.setAttribute("style", "width: 770px; height:300px;");
    pinDiv.insertBefore(inputArea, pinDiv.childNodes[0]);

    // add button for activation script.
    var fillDataBtn = document.createElement("input");
    fillDataBtn.setAttribute("type", "button");
    fillDataBtn.setAttribute("id", "fillDataBtn");
    fillDataBtn.setAttribute("style", "width: 770px;");
    fillDataBtn.setAttribute("value", "입력하기");
    pinDiv.insertBefore(fillDataBtn, pinDiv.childNodes[1]);

    // add event for button.
    fillDataBtn.onclick = function() {
        var message = inputArea.value;
        var pinNumbers = message.match(/\d{4}-\d{4}-\d{4}-\d{4}/g);

        var pubDate = message.match(/\d{8}/g)[0];
        var len = pinNumbers.length;

        if (len > 5) {
            $("#addTen").click();
        }

        for (var row = 1; row <= len; row++) {
            var pinNum = pinNumbers[row-1].split("-");

            for (var col = 1; col <= 4; col++) {
                var id = "#pinNo" + col + "_" + row;
                $(id).val(pinNum[col-1]);
            }
            var issuedDateId = "#issuedDate_" + row;
            $(issuedDateId).val(pubDate);
        }

    }
})();
