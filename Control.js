
var desktop = document.createElement("link");
desktop.setAttribute("rel", "stylesheet");
desktop.setAttribute("type", "text/css");
desktop.setAttribute("href", "Desktop.css");
desktop.setAttribute("id", "Style");

var lttablet = document.createElement("link");
lttablet.setAttribute("rel", "stylesheet");
lttablet.setAttribute("type", "text/css");
lttablet.setAttribute("href", "LeftOnTopTablet.css");
lttablet.setAttribute("id", "Style");

var rttablet = document.createElement("link");
rttablet.setAttribute("rel", "stylesheet");
rttablet.setAttribute("type", "text/css");
rttablet.setAttribute("href", "RightOnTopTablet.css");
rttablet.setAttribute("id", "Style");

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
        ChangeToMobileMOde();
    }
    else if (window.innerWidth>=721 && window.innerWidth<=1080 && Current_Css!=1)
    {
        ChangeToLeftTopTabletMOde();
    }
    else if (window.innerWidth>1080&&Current_Css!=0)
    {
        ChangeToDesktopMOde();
    }
}

function ChangeToMobileMOde()
{
    Current_Css=2;
    document.getElementsByTagName("head").item(0).replaceChild(mobile,document.getElementById("Style"));
}

function ChangeToLeftTopTabletMOde()
{
    Current_Css=1;
    document.getElementsByTagName("head").item(0).replaceChild(lttablet,document.getElementById("Style"));
}

/*This is not working yet
function ChangeToRightTopTabletMOde()
{
    Current_Css=1;
    document.getElementsByTagName("head").item(0).replaceChild(rttablet,document.getElementById("Style"));
}
*/
function ChangeToDesktopMOde()
{
    Current_Css=0;
    document.getElementsByTagName("head").item(0).replaceChild(desktop,document.getElementById("Style"));
}


