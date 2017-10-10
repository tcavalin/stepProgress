'use strict'
$.fn.nextStep = function () {
    var current_process = this.find('li[class="activated current"]'); //get current step element
    var length = this.find("li").length;//get total of steps
    var index_current_process = current_process.index(); //get index of current steps
    if (index_current_process < length) { //check if this steps not ending
        var processCount = (index_current_process + 2) * (100 / length);
        var next_process = current_process.next(); //select next process
        current_process.removeClass("current"); //remove current class
        next_process.addClass("activated current");
        var percent = processCount > 100 ? 100 : processCount;
        $(".step-bar").attr("style", "width:" + percent + "%"); //add process bar to step-bar
    }
}