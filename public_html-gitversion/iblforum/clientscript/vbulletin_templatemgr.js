/*======================================================================*\
|| #################################################################### ||
|| # vBulletin 4.1.3
|| # ---------------------------------------------------------------- # ||
|| # Copyright ©2000-2011 vBulletin Solutions Inc. All Rights Reserved. ||
|| # This file may not be redistributed in whole or significant part. # ||
|| # ---------------- VBULLETIN IS NOT FREE SOFTWARE ---------------- # ||
|| # http://www.vbulletin.com | http://www.vbulletin.com/license.html # ||
|| #################################################################### ||
\*======================================================================*/
var win=window;var n=0;function Sdo(B,A){B=B.split("_");if(B[0]=="template"){switch(B[1]){case"templates":goURL="modify&expandset=";break;case"addtemplate":goURL="add&dostyleid=";break;case"editstyle":goURL="editstyle&dostyleid=";break;case"addstyle":goURL="addstyle&parentid=";break;case"delete":goURL="deletestyle&dostyleid=";break;case"download":goURL="files&dostyleid=";break;case"revertall":goURL="revertall&dostyleid=";break}if(goURL){window.location="template.php?s="+SESSIONHASH+"&group="+document.forms.tform.group.value+"&do="+goURL+A}}else{if(B[0]=="css"){window.location="css.php?s="+SESSIONHASH+"&do=edit&dowhat="+B[1]+"&group="+document.forms.tform.group.value+"&dostyleid="+A}else{if(B[0]=="stylevar"){if(B[1]=="revertall"){window.location="stylevar.php?s="+SESSIONHASH+"&do=revertall&dostyleid="+A}else{if(B[1]=="convertvb3tovb4"){window.location="stylevar.php?s="+SESSIONHASH+"&dostyleid="+A+"&do=convertvb3tovb4"}else{window.location="stylevar.php?s="+SESSIONHASH+"&dostyleid="+A}}}}}}function Tjump(A){var B="template.php?s="+SESSIONHASH+"&do="+A+"&searchstring="+SEARCHSTRING+"&expandset="+EXPANDSET;if(is_ie&&event.shiftKey){window.open(B)}else{window.location=B}}function Texpand(A,B){window.location="template.php?s="+SESSIONHASH+"&do=modify&expandset="+B+"&group="+A+"#"+A}function Tedit(A){Tjump("edit&templateid="+A+"&dostyleid="+EXPANDSET+"&group="+GROUP)}function Tcustom1(A,B){Tjump("add&dostyleid="+A+"&title="+B+"&group="+GROUP)}function Tcustom2(A,B){Tjump("add&dostyleid="+A+"&templateid="+B+"&group="+GROUP)}function Tdelete(A,B){Tjump("delete&dostyleid="+A+"&templateid="+B+"&group="+GROUP)}function Toriginal(A){window.open("template.php?s="+SESSIONHASH+"&do=view&title="+A)}function Tprep(elm,styleid,echo){var str=elm.value;if(echo){button=new Array();button.edit=eval("document.forms.tform.edit"+styleid);button.edit.disabled="disabled";button.cust=eval("document.forms.tform.cust"+styleid);button.cust.disabled="disabled";button.kill=eval("document.forms.tform.kill"+styleid);button.kill.disabled="disabled";button.expa=eval("document.forms.tform.expa"+styleid);button.expa.disabled="disabled";button.orig=eval("document.forms.tform.orig"+styleid);button.orig.disabled="disabled";textbox=document.getElementById("helparea"+styleid)}if(str!=""){selitem=eval("document.forms.tform.tl"+styleid);var out=new Array();out.selectedtext=selitem.options[selitem.selectedIndex].text.replace(/^-- /,"");if(str=="~"){str=out.selectedtext}out.styleid=styleid;out.original=str;if(str.search(/^\[(\w*)\]$/)!=-1){out.value=str.replace(/^\[(\w*)\]$/,"$1");if(isNaN(out.value)||out.value==""){out.action="expand";out.text=construct_phrase(vbphrase.click_the_expand_collapse_button,out.selectedtext.replace(/Templates/,"").bold());button.expa.disabled=""}else{out.action="editinherited";selecteditem=eval("document.forms.tform.tl"+styleid);tsid=selecteditem.options[selecteditem.selectedIndex].getAttribute("tsid");out.text=construct_phrase(vbphrase.this_template_has_been_customized_in_a_parent_style,STYLETITLE[tsid].bold(),STYLETITLE[styleid].bold(),out.selectedtext.bold(),"template.php?s="+SESSIONHASH+"&amp;do=edit&amp;templateid="+out.value+"&amp;group="+GROUP);button.orig.disabled="";button.cust.disabled=""}}else{out.value=str;if(isNaN(out.value)){out.action="customize";out.text=vbphrase.this_template_has_not_been_customized;button.cust.disabled=""}else{out.action="edit";out.text=vbphrase.this_template_has_been_customized_in_this_style;button.edit.disabled="";button.orig.disabled="";button.kill.disabled=""}}if(echo){textbox.innerHTML=out.selectedtext.bold()+":<br /><br />"+out.text;if(elm.getAttribute("i")){var editinfo=elm.getAttribute("i").split(";");editinfo[1]=new Date(editinfo[1]*1000);var day=editinfo[1].getDate();var month=editinfo[1].getMonth();var year=editinfo[1].getFullYear();var hours=editinfo[1].getHours();if(hours<10){hours="0"+hours}var mins=editinfo[1].getMinutes();if(mins<10){mins="0"+mins}textbox.innerHTML+=construct_phrase("<br /><br />"+vbphrase.template_last_edited_js,MONTH[month],day,year,hours,mins,editinfo[0].bold())}}else{return out}}else{textbox.innerHTML=construct_phrase("<center>"+vbphrase.x_templates+"</center>",STYLETITLE[styleid].bold())}}function Tdo(B,A){if(B==null){return false}switch(B.action){case"expand":Tjump("modify&expandset="+EXPANDSET+"&group="+B.value);break;case"customize":Tjump("add&dostyleid="+B.styleid+"&title="+B.value+"&group="+GROUP);break;case"edit":switch(A){case"vieworiginal":window.open("template.php?s="+SESSIONHASH+"&do=view&title="+B.selectedtext);break;case"killtemplate":Tjump("delete&templateid="+B.value+"&dostyleid="+B.styleid+"&group="+GROUP);break;default:Tjump("edit&templateid="+B.value+"&group="+GROUP);break}break;case"editinherited":if(A=="vieworiginal"){window.open("template.php?s="+SESSIONHASH+"&do=view&title="+B.selectedtext)}else{Tjump("add&dostyleid="+B.styleid+"&templateid="+B.value+"&group="+GROUP)}break}}var popup="";function displayHTML(){var A=document.cpform.template.value;if(popup&&!popup.closed){popup.document.close()}else{popup=window.open(", ","popup","toolbar = no, status = no, scrollbars=yes")}popup.document.open();popup.document.write(""+A+"")}function HighlightAll(){document.cpform.template.focus();document.cpform.template.select();if(document.all){var A=document.cpform.template.createTextRange();A.execCommand("Copy")}}function findInPageKeyPress(A){A=A?A:window.event;if(A.keyCode==13){findInPage(this.value);return false}else{return true}}var startpos=0;function findInPage(F){var B,C,D;if(F==""){return false}if(is_moz){B=fetch_object(textarea_id).value;if(!startpos||startpos+F.length>=B.length){startpos=0}var A=0;var E=false;for(C=startpos;C<B.length;C++){if(B.charAt(C).toLowerCase()==F.charAt(A).toLowerCase()){A++}else{A=0}if(A==F.length){C++;startpos=C;fetch_object(textarea_id).focus();fetch_object(textarea_id).setSelectionRange(C-F.length,C);moz_txtarea_scroll(fetch_object(textarea_id),C);E=true;break}if(C==B.length-1&&startpos>0){C=0;startpos=0}}if(!E){alert(vbphrase.not_found)}}if(is_ie){B=win.fetch_object(textarea_id).createTextRange();for(C=0;C<=n&&(D=B.findText(F))!=false;C++){B.moveStart("character",1);B.moveEnd("textedit")}if(D){B.moveStart("character",-1);B.findText(F);B.select();B.scrollIntoView(true);n++}else{if(n>0){n=0;findInPage(F)}else{alert(vbphrase.not_found)}}}return false}function moz_txtarea_scroll(A,B){var C=A.cloneNode(true);C.setAttribute("id","moo");C.style.width=A.offsetWidth+"px";C.value=A.value.substr(0,B)+"\n";document.body.appendChild(C);if(C.scrollHeight<=A.scrollTop||C.scrollHeight>=A.scrollTop+A.offsetHeight){if(C.scrollHeight==C.clientHeight){A.scrollTop=0}else{A.scrollTop=C.scrollHeight-40}}document.body.removeChild(document.getElementById("moo"));C=A.cloneNode(true);C.setAttribute("id","moo");C.style.width=A.offsetWidth+"px";var D=A.value.substr(0,B).lastIndexOf("\n");if(!D){D=0}C.value=A.value.substring(D,B);document.body.appendChild(C);if(C.scrollWidth==A.offsetWidth){A.scrollLeft=0}else{A.scrollLeft=C.scrollWidth-40}document.body.removeChild(document.getElementById("moo"))}function set_wordwrap(B,A){element=fetch_object(B);if(A){element.wrap="soft"}else{element.wrap="off"}}function check_children(A,C){fetch_object("userselect_"+A).checked=C;for(var B in STYLEPARENTS){if(YAHOO.lang.hasOwnProperty(STYLEPARENTS,B)&&STYLEPARENTS[B]==A){check_children(B,C)}}return false}function crc32(D){var B="00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";var C=-1;var A=0,F=0;for(var E=0;E<D.length;E++){F=(C^D.charCodeAt(E))&255;A="0x"+B.substr(F*9,8);C=(C>>>8)^A}return C^(-1)};