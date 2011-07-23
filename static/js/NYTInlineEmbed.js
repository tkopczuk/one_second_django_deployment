// code for embedding NYTInline audio player

//var playerURL = "http://graphics8.nytimes.com/packages/flash/multimedia/INLINE_PLAYER/NYTInline.swf";
var playerURL = "http://graphics8.nytimes.com/packages/flash/multimedia/INLINE_PLAYER/NYTInlineAudioPlayer.swf";
//var loaderURL = "http://www.nytimes.com/packages/flash/multimedia/swfs/multiloader.swf";
var loaderURL = "http://www.nytimes.com/packages/flash/multimedia/swfs/AS3Multiloader.swf";

var mm = new Object();


// vars needed for this function should already be declared
function writePlayer() {
				
				// in case of multiple embedded players
				var pID = Math.round(Math.random()*1000000);
				 
        		var HTML_anchorOpenStart = "<a href=\"";
        		var HTML_anchorOpenEnd = "\" target=\"new\" style=\"display:inline\">";
        		var HTML_iconImageTag = "<img src=\"http://graphics8.nytimes.com/images/multimedia/icons/audio_icon.gif\" height=\"10\" width=\"13\">";
        		var HTML_anchorClose = "</a>";
        		var HTML_beforeMP3 = "&nbsp;(";
        		var HTML_MP3 = "mp3";
        		var HTML_afterMP3 = ")";
        		var HTML_br = "<br/>"
				
				//var htmlStr = "\<script src=\"http://graphics8.nytimes.com/packages/html/multimedia/js/swfobject.js\"\>\</script\>\n"; 
				
				var htmlStr = "<style type='text/css'>.refer .inlinePlayer .refer{font-size:1em}</style>";
				
				//htmlStr += "<style type=\"text/css\">\n";
				//htmlStr += "html>body .outerInlinePlayer, html>body .inlinePlayer { display: inline-block; }\n";
				//htmlStr += "body:first-of-type .outerInlinePlayer, body:first-of-type .inlinePlayer { display: block; }\n";
				//htmlStr += ".inlinePlayer { overflow: auto; }\n";
				//htmlStr += "</style>\n";
				
				
				//htmlStr += "\<div class=\"outerInlinePlayer\" style=\"padding:0; margin:0;\"\>"
				htmlStr += "\<div class=\"inlinePlayer box\"\>"
				
				
				if(mm.IU != "") {
					htmlStr += "<div class=\"story\"><div class=\"callout\"><img src=\"";
          			htmlStr += mm.IU;
          			htmlStr += "\" alt=\"\"></div></div>";
        		}

				htmlStr += "<div class='refer'>";
				
				if((mm.DI == true) || (mm.DI == "true")) {
            
						// we are.  See if we are linking it to the audio.
            			if((mm.LI == true) || (mm.LI == "true")) {
                
								// add link begin
				
                				htmlStr += HTML_anchorOpenStart;

                // add URL
                				htmlStr += mm.AU;

                // add link end
                				htmlStr += HTML_anchorOpenEnd;

                // add icon image
                				htmlStr += HTML_iconImageTag;

                // add close of link
                				htmlStr += HTML_anchorClose;
            			} else {
                
							htmlStr += HTML_iconImageTag;
            			}

            		// add a space after the image
            		htmlStr += "&nbsp;";
        		}

        		// if there is a headline, add it.
        		if((mm.AH != null) && (mm.AH != "")) {
            
						// add the headline.
            			htmlStr += mm.AH;
						
						if((mm.LI == true) || (mm.LI == "true")) {
						
							// add the "(mp3)" with the "mp3" linked to the audio file.
							htmlStr += HTML_beforeMP3;
							htmlStr += HTML_anchorOpenStart;
							htmlStr += mm.AU;
							htmlStr += HTML_anchorOpenEnd;
							htmlStr += HTML_MP3;
							htmlStr += HTML_anchorClose;
							htmlStr += HTML_afterMP3;
						}
        		}
				
				htmlStr+="\</div>";
				if(mm.ID == null || mm.ID == "") {
					htmlStr+="\<div id=\"p"+pID+"\" style=\"margin:0;padding:0;width:100%;height:25;\">\</div\>\n";
				}
				htmlStr+="\</div\>\n";
				
				//htmlStr+="\<script src=\"http://graphics8.nytimes.com/packages/html/multimedia/js/NYTInlineEmbed.js\" \>\</script\>\n";
				//htmlStr+="\<script\>embedNYTInline(\""+audioURL+"\",\""+audioDuration+"\",\"p"+pID+"\");\</script\>";
				
				
				htmlStr+="\<script\>\n";
				htmlStr+="var so = new SWFObject(\""+loaderURL+"\", \"p"+pID+"\", \"100%\", \"25\", \"8\", \"#FFFFFF\");\n";
				
				htmlStr+="so.addVariable(\"mp3\",\""+mm.AU+"\")\n";
				htmlStr+="so.addVariable(\"duration\",\""+mm.AD+"\")\n";
				htmlStr+="so.addVariable(\"contentPath\",\""+playerURL+"\")\n";
				htmlStr+="so.addParam(\"allowScriptAccess\", \"always\");\n";
				htmlStr+="so.addParam(\"wmode\", \"opaque\");\n";
			
				if(mm.ID == null || mm.ID == "") {
					htmlStr+="so.write(\"p"+pID+"\");\n\</script\>";
				} else {
					htmlStr+="so.write(\""+mm.ID+"\");\n\</script\>";
				}
		
				//tf.value = htmlStr;
				if(!(document.location.search=="?noflash")) { document.write(htmlStr); }
		}