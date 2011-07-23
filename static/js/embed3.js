var plugin = 0;

if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
    if (navigator.plugins && navigator.plugins["Shockwave Flash"]) plugin = 1;
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && (navigator.userAgent.indexOf("Windows 95")>=0 || navigator.userAgent.indexOf("Windows 98")>=0 || navigator.userAgent.indexOf("Windows NT")>=0)) {
    document.write('<SCRIPT LANGUAGE=VBScript\> \n');
    document.write('on error resume next \n');
    document.write('plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4")))\n');
    document.write('if ( plugin <= 0 ) then plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5")))\n');
    document.write('<\/SCRIPT\> \n');
}

if ( plugin ) {
    document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
    document.write(' codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width=' + movieWidth + ' height=' + movieHeight + ' ID="Flash">\n');
    document.write(' <param name=movie value="' + swfSrc + '">\n');
    document.write(' <param name=wmode value=opaque>\n');
    document.write(' <param name=quality value=high>\n');
    document.write(' <param name=loop value=true>\n');
    document.write(' <embed src="' + swfSrc + '" quality=high loop=true wmode=opaque pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width=' + movieWidth + ' height=' + movieHeight + '>\n');
    document.write(' </EMBED>\n');
    document.write(' </OBJECT>\n');
} else {
    document.write('<A HREF="' + altClickThru + '"><IMG SRC="' + altSrc + '" WIDTH=' + movieWidth + ' HEIGHT=' + movieHeight + ' BORDER=0 alt=""  TARGET="_blank"></a>\n');
}