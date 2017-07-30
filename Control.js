
var desktop = document.createElement("link");
desktop.setAttribute("rel", "stylesheet");
desktop.setAttribute("type", "text/css");
desktop.setAttribute("href", "Desktop.css");
desktop.setAttribute("id", "Style");

var tablet = document.createElement("link");
tablet.setAttribute("rel", "stylesheet");
tablet.setAttribute("type", "text/css");
tablet.setAttribute("href", "Tablet.css");
tablet.setAttribute("id", "Style");

var mobile = document.createElement("link");
mobile.setAttribute("rel", "stylesheet");
mobile.setAttribute("type", "text/css");
mobile.setAttribute("href", "Mobile.css");
mobile.setAttribute("id", "Style");

var Current_Css=0;

ScreenAdjustment();

function ScreenAdjustment()
{
    if(window.innerWidth>=0 && window.innerWidth<=720 && Current_Css!=2)
    {
        Current_Css=2;
        document.getElementsByTagName("head").item(0).replaceChild(mobile,document.getElementById("Style"));
    }
    else if (window.innerWidth>=721 && window.innerWidth<=1080 && Current_Css!=1)
    {
        Current_Css=1;
        document.getElementsByTagName("head").item(0).replaceChild(tablet,document.getElementById("Style"));
    }
    else if (window.innerWidth>1080&&Current_Css!=0)
    {
        Current_Css=0;
        document.getElementsByTagName("head").item(0).replaceChild(desktop,document.getElementById("Style"));
    }
}