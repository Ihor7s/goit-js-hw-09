!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.startBtn.classList.add("btn-start"),t.stopBtn.classList.add("btn-stop");var n={intervalId:null,isActive:!1,onClickBtnStart:function(){this.isActive||(this.isActive=!0,t.startBtn.disabled=!0,t.stopBtn.disabled=!1,this.intervalId=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))},onClickBtnStop:function(){clearInterval(this.intervalId),this.isActive=!1,t.startBtn.disabled=!1,t.stopBtn.disabled=!0}};t.startBtn.addEventListener("click",(function(t){n.onClickBtnStart()})),t.stopBtn.addEventListener("click",(function(t){n.onClickBtnStop()}))}();
//# sourceMappingURL=01-color-switcher.f1752cb1.js.map
