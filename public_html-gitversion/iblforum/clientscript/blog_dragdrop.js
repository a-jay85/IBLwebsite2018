/*======================================================================*\
|| #################################################################### ||
|| # vBulletin 4.1.3
|| # ---------------------------------------------------------------- # ||
|| # Copyright �2000-2011 vBulletin Solutions Inc. All Rights Reserved. ||
|| # This file may not be redistributed in whole or significant part. # ||
|| # ---------------- VBULLETIN IS NOT FREE SOFTWARE ---------------- # ||
|| # http://www.vbulletin.com | http://www.vbulletin.com/license.html # ||
|| #################################################################### ||
\*======================================================================*/
function vB_Blog_DragDrop(A){if(AJAX_Compatible&&(typeof vb_disable_ajax=="undefined"||vb_disable_ajax<2)){this.init(A)}}vB_Blog_DragDrop.prototype.init=function(D){this.objectid=D;this.listitem=YAHOO.util.Dom.get(this.objectid);this.items=this.listitem.getElementsByTagName("li");this.blocks=new Array();for(var A=0;A<this.items.length;A++){var B=YAHOO.util.Dom.get(this.items[A]);var C=YAHOO.util.Dom.get(B.id+"_handle");if(B.parentNode.id==this.objectid&&C){this.blocks[B.id]=new vB_Blog_DragDrop_DDProxy(B.id,this.listitem.id);this.blocks[B.id].setHandleElId(B.id+"_handle");YAHOO.util.Dom.setStyle(C,"cursor","move")}}};vB_Blog_DragDrop_DDProxy=function(D,A,B){vB_Blog_DragDrop_DDProxy.superclass.constructor.call(this,D,A,B);var C=this.getDragEl();YAHOO.util.Dom.setStyle(C,"opacity",0.67);this.goingUp=false;this.lastY=0};YAHOO.extend(vB_Blog_DragDrop_DDProxy,YAHOO.util.DDProxy);vB_Blog_DragDrop_DDProxy.prototype.startDrag=function(I,H){var A=this.getDragEl();var E=this.getEl();YAHOO.util.Dom.setStyle(E,"visibility","hidden");if(A.parentNode.nodeName.toLowerCase()=="body"){E.parentNode.parentNode.appendChild(A)}var F=E.parentNode.getElementsByTagName("li");E.parentNode.blockorder="";for(var D=0;D<F.length;D++){var J=YAHOO.util.Dom.get(F[D]);var G=YAHOO.util.Dom.get(J.id+"_handle");if(J.parentNode.id==E.parentNode.id&&G){E.parentNode.blockorder+=J.id}}var C=YAHOO.util.Dom.get(E.id+"_div");if(C){var B=C.cloneNode(true);B.style.display="none";E.appendChild(B);B.style.margin="0px";B.style.padding="0px";B.style.borderWidth="0px";A.innerHTML=B.innerHTML;B.parentNode.removeChild(B)}else{A.innerHTML=E.innerHTML}YAHOO.util.Dom.setStyle(A,"color",YAHOO.util.Dom.setStyle(E,"color"));YAHOO.util.Dom.setStyle(A,"backgroundColor",YAHOO.util.Dom.setStyle(E,"backgroundColor"));YAHOO.util.Dom.setStyle(A,"border","2px solid gray")};vB_Blog_DragDrop_DDProxy.prototype.endDrag=function(J){var A=this.getEl();var B=this.getDragEl();var L="";var E="";var G=A.parentNode.getElementsByTagName("li");var I=1;for(var F=0;F<G.length;F++){var M=YAHOO.util.Dom.get(G[F]);var H=YAHOO.util.Dom.get(M.id+"_handle");if(M.parentNode.id==A.parentNode.id&&H){L+=M.id;E+="&block["+M.id+"]="+I;I++}}if(L!=A.parentNode.blockorder){YAHOO.util.Connect.asyncRequest("POST","blog_ajax.php?do=moveblock"+E,{timeout:vB_Default_Timeout,scope:this},SESSIONURL+"securitytoken="+SECURITYTOKEN+"&do=moveblock"+E)}YAHOO.util.Dom.setStyle(B,"visibility","");var K=new YAHOO.util.Motion(B,{points:{to:YAHOO.util.Dom.getXY(A)}},0.2,YAHOO.util.Easing.easeOut);var D=B.id;var C=this.id;K.onComplete.subscribe(function(){YAHOO.util.Dom.setStyle(D,"visibility","hidden");YAHOO.util.Dom.setStyle(C,"visibility","");YAHOO.util.Dom.get(D).innerHTML=""});K.animate()};vB_Blog_DragDrop_DDProxy.prototype.onDrag=function(A){var B=YAHOO.util.Event.getPageY(A);if(B<this.lastY){this.goingUp=true}else{if(B>this.lastY){this.goingUp=false}}this.lastY=B};vB_Blog_DragDrop_DDProxy.prototype.onDragOver=function(E,F){var C=this.getEl();var B=YAHOO.util.Dom.get(F);if(B.nodeName.toLowerCase()=="li"){var A=C.parentNode;var D=B.parentNode;if(this.goingUp){D.insertBefore(C,B)}else{D.insertBefore(C,B.nextSibling)}}YAHOO.util.DDM.refreshCache()};