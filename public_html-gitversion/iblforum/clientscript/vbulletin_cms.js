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
vB_XHTML_Ready.subscribe(function(){load_cms_overlay()});var config_overlay;function load_cms_overlay(){config_overlay=new vB_Overlay()}function cms_show_overlay(A){if(config_overlay==undefined){config_overlay=new vB_Overlay(null,A,"",this,true)}else{config_overlay.show_ajax(A,"",this,true)}return false}function initVbTreeMenus(D){var M=window.vbGlobal_SHOW_ALL_TREE_ELEMENTS_THRESHOLD?window.vbGlobal_SHOW_ALL_TREE_ELEMENTS_THRESHOLD:10;var N=YAHOO.util.Dom.getElementsByClassName("vb-tree-menu","div");for(var O=0;treeElement=N[O];O++){var B=null;if(!treeElement._vbTreeAlreadyProcessed){var Q=-1;var A=treeElement.getElementsByTagName("li");for(var H=0;(Q==-1)&&(treeItem=A[H]);H++){if(treeItem.className&&(YAHOO.util.Dom.hasClass(treeItem,"active"))){B=treeItem;Q=H+1}}if(!D){var P=new YAHOO.widget.TreeView(treeElement);P.subscribe("clickEvent",function(R){if(R&&R.node&&R.node.href){location.href=R.node.href}});P.render();var F=P.getNodeCount();if(F<=M){P.expandAll()}if(Q!=-1){var L=P.getNodeByIndex(Q);var C=L;while(C=C.parent){C.expand()}L.focus();L.highlight();L.expand();YAHOO.util.Dom.addClass(L.getEl(),"activeVBMenuItem")}}else{var I="Site";var K=YAHOO.util.Dom.getElementsByClassName("echo_section","span",document.body);K=K[0]?K[0]:null;if(K&&B){var E=B.getElementsByTagName("a")[0].innerHTML;var G=B.parentNode.parentNode;var J="Site";if(G&&(G.tagName.toLowerCase()=="li")){var J=G.getElementsByTagName("a")[0].innerHTML}var I=J+" &gt; "+E}if(K){K.innerHTML=I}vBPrepTreeBranch(treeElement.getElementsByTagName("ul")[0],0,B)}treeElement._vbTreeAlreadyProcessed={}}}if(document.body.style&&(document.body.style.textAlign=="right")){window.correctYUIEl=function(){var T=YAHOO.util.Dom.getElementsByClassName("ygtvtn","div");var R=(((T!=null)&&(T[0]))?T[0]:null);if(!R){T=YAHOO.util.Dom.getElementsByClassName("ygtvtm","span");R=(((T!=null)&&(T[0]))?T[0].parentNode:null)}var S=null;if(R&&(S=R.getAttribute("style"))){R.removeAttribute("style");R.setAttribute("style","position: absolute; height: 1px; width: 1px; top: -1000px; right: -1000px;");R.style.left="auto";R.style.top="-1000px";R.style.right="-1000px";R.style.position="absolute";R.style.height="1px";R.style.width="1px"}else{window.setTimeout(window.correctYUIEl,500)}};window.onload=correctYUIEl}}function vBPrepTreeBranch(F,C,B){var A=false;YAHOO.util.Dom.addClass(F,"level_"+C);if(B&&(B.parentNode==F)){YAHOO.util.Dom.addClass(F,"active_branch")}if(C>0){YAHOO.util.Dom.addClass(F,"not_root")}else{A=true}var G=YAHOO.util.Dom.getChildren(F);for(var E=0;leaf=G[E];E++){if(leaf.tagName&&leaf.tagName.toLowerCase()=="li"){if((!B&&A)||(B&&(B.parentNode==F))){YAHOO.util.Dom.addClass(leaf,"sibling_active")}else{if(F.parentNode==B){YAHOO.util.Dom.addClass(leaf,"direct_child_active")}}YAHOO.util.Dom.addClass(leaf,"level_"+C);if(C>0){YAHOO.util.Dom.addClass(leaf,"not_root")}var D=leaf.getElementsByTagName("ul");D=D[0]?D[0]:null;if(D){vBPrepTreeBranch(D,(C+1),B)}}else{alert("Why would you put an <"+leaf.tagName+"> tag inside of a <"+leaf.parentNode.tagName+"> tag?");alert(leaf.parentNode.tagName.innerHTML)}}};