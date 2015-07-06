var uID = "", uDomain = "", eDate = "", uKey = "", cCode = "C001";
var cWidth = 500;
var cHeight = 600;

var frName = "SinsuUnse";
if (cWidth < 500) cWidth = 500;
if (cHeight < 200) cHeight = 200;
document.write("<iframe name=\"" + frName + "\" src=\"http://free.sinsu.net/contents/main.asp?uid=" + uID + "&domain=" + uDomain + "&edate=" + eDate + "&key=" + uKey + "&cw=" + cWidth + "&ch=" + cHeight + "&code=" + cCode + "&curl=" + escape(parent.location.href) + "\" id=\"SinsuUnse\" style=\"width: " + cWidth + "px; height: " + cHeight + "px;\" allowTransparency=\"true\" frameborder=\"0\" scrolling=\"no\"></iframe>");