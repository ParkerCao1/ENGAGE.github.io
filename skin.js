// Garden Gnome Software - Skin
// Object2VR 4.0beta2/20670
// Filename: test2.ggsk
// Generated 2024-01-26T17:49:51

function object2vrSkin(player,base) {
	player.addVariable('opt_autorotate', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('seat', 1, 0, { ignoreInState: 1  });
	player.addVariable('color', 1, 0, { ignoreInState: 1  });
	player.addVariable('carpaintname', 0, "", { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJFYmVuZV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdG'+
			'g9IjMycHgiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxnPgogIDxnPgogICA8cG9seWdvbiBmaWxsPSIjNjY2NjY2IiBmaWxsLW9wYWNpdHk9IjEiIHBvaW50cz0iMy4yODYsNi42MjIgOC41NDksNi42MjIgOC41NDksNC41NzkgMy4yODYsNC41NzkgMS4yNDMsNC41NzkgMS4yNDMsNi42MjIgMS4yNDMsMTEuOTE3ICAgICAzLjI4NiwxMS45MTcgICAiLz4KICAgPHBvbHlnb24gZmlsbD0iIzY2NjY2NiIgZmlsbC1vcGFjaXR5PSIx'+
			'IiBwb2ludHM9IjI4LjgxNiw0LjU3OSAyMy41MjEsNC41NzkgMjMuNTIxLDYuNjIzIDI4LjgxNiw2LjYyMyAyOC44MTYsMTEuODg1IDMwLjg1OSwxMS44ODUgMzAuODU5LDYuNjIzICAgICAzMC44NTksNC41NzkgICAiLz4KICAgPHJlY3QgZmlsbD0iIzY2NjY2NiIgZmlsbC1vcGFjaXR5PSIxIiBoZWlnaHQ9IjE2LjQ5OCIgd2lkdGg9IjIxLjUzMSIgeD0iNS4xOTkiIHk9IjguMjQ4Ii8+CiAgIDxwb2x5Z29uIGZpbGw9IiM2NjY2NjYiIGZpbGwtb3BhY2l0eT0iMSIgcG9pbnRzPSIyOC44MTYsMjYuMzcyIDIzLjU1MywyNi4zNzIgMjMuNTUzLDI4LjQxNSAyOC44MTYsMjguNDE1IDMwLjg1OSwyOC'+
			'40MTUgMzAuODU5LDI2LjM3MiAgICAgMzAuODU5LDIxLjA3NyAyOC44MTYsMjEuMDc3ICAgIi8+CiAgIDxwb2x5Z29uIGZpbGw9IiM2NjY2NjYiIGZpbGwtb3BhY2l0eT0iMSIgcG9pbnRzPSIzLjI4NiwyMS4xMDcgMS4yNDMsMjEuMTA3IDEuMjQzLDI2LjM3MiAxLjI0MywyOC40MTUgMy4yODYsMjguNDE1IDguNTgxLDI4LjQxNSA4LjU4MSwyNi4zNzIgICAgIDMuMjg2LDI2LjM3MiAgICIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._fullscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJFYmVuZV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdG'+
			'g9IjMycHgiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxnPgogIDxnPgogICA8cG9seWdvbiBmaWxsPSIjMUExNzFCIiBwb2ludHM9IjMuMjg2LDYuNjIyIDguNTQ5LDYuNjIyIDguNTQ5LDQuNTc5IDMuMjg2LDQuNTc5IDEuMjQzLDQuNTc5IDEuMjQzLDYuNjIyIDEuMjQzLDExLjkxNyAgICAgMy4yODYsMTEuOTE3ICAgIi8+CiAgIDxwb2x5Z29uIGZpbGw9IiMxQTE3MUIiIHBvaW50cz0iMjguODE2LDQuNTc5IDIzLjUyMSw0LjU3'+
			'OSAyMy41MjEsNi42MjMgMjguODE2LDYuNjIzIDI4LjgxNiwxMS44ODUgMzAuODU5LDExLjg4NSAzMC44NTksNi42MjMgICAgIDMwLjg1OSw0LjU3OSAgICIvPgogICA8cmVjdCBmaWxsPSIjMUExNzFCIiBoZWlnaHQ9IjE2LjQ5OCIgd2lkdGg9IjIxLjUzMSIgeD0iNS4xOTkiIHk9IjguMjQ4Ii8+CiAgIDxwb2x5Z29uIGZpbGw9IiMxQTE3MUIiIHBvaW50cz0iMjguODE2LDI2LjM3MiAyMy41NTMsMjYuMzcyIDIzLjU1MywyOC40MTUgMjguODE2LDI4LjQxNSAzMC44NTksMjguNDE1IDMwLjg1OSwyNi4zNzIgICAgIDMwLjg1OSwyMS4wNzcgMjguODE2LDIxLjA3NyAgICIvPgogICA8cG9seWdvbi'+
			'BmaWxsPSIjMUExNzFCIiBwb2ludHM9IjMuMjg2LDIxLjEwNyAxLjI0MywyMS4xMDcgMS4yNDMsMjYuMzcyIDEuMjQzLDI4LjQxNSAzLjI4NiwyOC40MTUgOC41ODEsMjguNDE1IDguNTgxLDI2LjM3MiAgICAgMy4yODYsMjYuMzcyICAgIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 35px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fullscreen.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getRowsCount() <= 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_autorotate') == false))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (JSON.stringify(me._fullscreen.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._fullscreen.ggConditionsTruePosition = newConditionsTruePosition;
				me._fullscreen.style.transition='right 0s, top 0s';
				if (me._fullscreen.ggConditionsTruePosition.includes(0)) {
					deltaX += -15;
					deltaY += 0;
				}
				if (me._fullscreen.ggConditionsTruePosition.includes(1)) {
					deltaX += -50;
					deltaY += 0;
				}
					me._fullscreen.style.right=(35+deltaX) + 'px';
					me._fullscreen.style.top=(15+deltaY) + 'px';
			}
		}
		me._fullscreen.logicBlock_position();
		me._fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen.style.transition='right 0s, top 0s';
				if (me._fullscreen.ggCurrentLogicStateVisible == 0) {
					me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
					me._fullscreen.ggVisible=true;
				}
				else {
					me._fullscreen.style.visibility="hidden";
					me._fullscreen.ggVisible=false;
				}
			}
		}
		me._fullscreen.logicBlock_visible();
		me._fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen.onmouseenter=function (e) {
			me._fullscreen__img.style.visibility='hidden';
			me._fullscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen']=true;
		}
		me._fullscreen.onmouseleave=function (e) {
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen']=false;
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._fullscreen);
		el=me._load_bar=document.createElement('div');
		el.ggId="LOAD BAR";
		el.ggDx=-2;
		el.ggDy=-29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 10px;';
		hs+='left : calc(50% - ((222px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) - 29px);';
		hs+='visibility : inherit;';
		hs+='width : 222px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._load_bar.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._load_bar.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,0,1);';
		hs+='height : 25px;';
		hs+='left : 38px;';
		hs+='position : absolute;';
		hs+='top : -28px;';
		hs+='visibility : inherit;';
		hs+='width : 146px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 900;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			params.push(player._(String((player.getPercentLoaded()*100.0).toFixed(0))));
			var hs = player._("Loading %1%", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._text_1.ggUpdateText();
		});
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._load_bar.appendChild(me._text_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=3;
		el.ggDy=-21;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 270px;';
		hs+='left : calc(50% - ((270px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((270px + 0px) / 2) - 21px);';
		hs+='visibility : inherit;';
		hs+='width : 270px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me._load_bar.appendChild(me._image_2);
		me.divSkin.appendChild(me._load_bar);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 99px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -14px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_3);
		el=me._carpaint_name=document.createElement('div');
		el.ggId="carpaint name";
		el.ggDx=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 5px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._carpaint_name.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._carpaint_name.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 900;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('carpaintname', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("<div class=\"ggmarkdown\"><h3>%1<\/h3>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		player.addListener('varchanged_carpaintname', function() {
			me._text_2.ggUpdateText();
		});
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('color') == Number("0")))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('color') == Number("1")))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('color') == Number("2")))
			)
			{
				newLogicStateText = 2;
			}
			else if (
				((player.getVariableValue('color') == Number("3")))
			)
			{
				newLogicStateText = 3;
			}
			else if (
				((player.getVariableValue('color') == Number("4")))
			)
			{
				newLogicStateText = 4;
			}
			else if (
				((player.getVariableValue('color') == Number("5")))
			)
			{
				newLogicStateText = 5;
			}
			else if (
				((player.getVariableValue('color') == Number("6")))
			)
			{
				newLogicStateText = 6;
			}
			else if (
				((player.getVariableValue('color') == Number("7")))
			)
			{
				newLogicStateText = 7;
			}
			else if (
				((player.getVariableValue('color') == Number("8")))
			)
			{
				newLogicStateText = 8;
			}
			else if (
				((player.getVariableValue('color') == Number("9")))
			)
			{
				newLogicStateText = 9;
			}
			else if (
				((player.getVariableValue('color') == Number("10")))
			)
			{
				newLogicStateText = 10;
			}
			else if (
				((player.getVariableValue('color') == Number("11")))
			)
			{
				newLogicStateText = 11;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_2.ggCurrentLogicStateText != newLogicStateText) {
				me._text_2.ggCurrentLogicStateText = newLogicStateText;
				me._text_2.style.transition='';
				if (me._text_2.ggCurrentLogicStateText == 0) {
					if (me._text_2.ggUpdateText) {
					me._text_2.ggUpdateText=function() {
						var params = [];
						var hs = player._("Glossy Red", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_2.ggUpdateText();
					} else {
						if (me._text_2.ggUpdatePosition) me._text_2.ggUpdatePosition();
					}
				}
				else if (me._text_2.ggCurrentLogicStateText == 1) {
					if (me._text_2.ggUpdateText) {
					me._text_2.ggUpdateText=function() {
						var params = [];
						var hs = player._("Glossy Black", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_2.ggUpdateText();
					} else {
						if (me._text_2.ggUpdatePosition) me._text_2.ggUpdatePosition();
					}
				}
				else if (me._text_2.ggCurrentLogicStateText == 2) {
					if (me._text_2.ggUpdateText) {
					me._text_2.ggUpdateText=function() {
						var params = [];
						var hs = player._("Glossy Grey", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_2.ggUpdateText();
					} else {
						if (me._text_2.ggUpdatePosition) me._text_2.ggUpdatePosition();
					}
				}
				else if (me._text_2.ggCurrentLogicStateText == 3) {
					if (me._text_2.ggUpdateText) {
					me._text_2.ggUpdateText=function() {
						var params = [];
						var hs = player._("Glossy Marine", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_2.ggUpdateText();
					} else {
						if (me._text_2.ggUpdatePosition) me._text_2.ggUpdatePosition();
					}
				}
				else if (me._text_2.ggCurrentLogicStateText == 4) {
					if (me._text_2.ggUpdateText) {
					me._text_2.ggUpdateText=function() {
						var params = [];
						var hs = player._("Glossy Orange", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_2.ggUpdateText();
					} else {
						if (me._text_2.ggUpdatePosition) me._text_2.ggUpdatePosition();
					}
				}
				else if (me._text_2.ggCurrentLogicStateText == 5) {
					if (me._text_2.ggUpdateText) {
					me._text_2.ggUpdateText=function() {
						var params = [];
						var hs = player._("White Diamond", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_2.ggUpdateText();
					} else {
						if (me._text_2.ggUpdatePosition) me._text_2.ggUpdatePosition();
					}
				}
				else if (me._text_2.ggCurrentLogicStateText == 6) {
					if (me._text_2.ggUpdateText) {
					me._text_2.ggUpdateText=function() {
						var params = [];
						var hs = player._("Matte Red", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_2.ggUpdateText();
					} else {
						if (me._text_2.ggUpdatePosition) me._text_2.ggUpdatePosition();
					}
				}
				else if (me._text_2.ggCurrentLogicStateText == 7) {
					if (me._text_2.ggUpdateText) {
					me._text_2.ggUpdateText=function() {
						var params = [];
						var hs = player._("Matte Black", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_2.ggUpdateText();
					} else {
						if (me._text_2.ggUpdatePosition) me._text_2.ggUpdatePosition();
					}
				}
				else if (me._text_2.ggCurrentLogicStateText == 8) {
					if (me._text_2.ggUpdateText) {
					me._text_2.ggUpdateText=function() {
						var params = [];
						var hs = player._("Matte Grey", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_2.ggUpdateText();
					} else {
						if (me._text_2.ggUpdatePosition) me._text_2.ggUpdatePosition();
					}
				}
				else if (me._text_2.ggCurrentLogicStateText == 9) {
					if (me._text_2.ggUpdateText) {
					me._text_2.ggUpdateText=function() {
						var params = [];
						var hs = player._("Matte Blue", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_2.ggUpdateText();
					} else {
						if (me._text_2.ggUpdatePosition) me._text_2.ggUpdatePosition();
					}
				}
				else if (me._text_2.ggCurrentLogicStateText == 10) {
					if (me._text_2.ggUpdateText) {
					me._text_2.ggUpdateText=function() {
						var params = [];
						var hs = player._("Matte Green", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_2.ggUpdateText();
					} else {
						if (me._text_2.ggUpdatePosition) me._text_2.ggUpdatePosition();
					}
				}
				else if (me._text_2.ggCurrentLogicStateText == 11) {
					if (me._text_2.ggUpdateText) {
					me._text_2.ggUpdateText=function() {
						var params = [];
						var hs = player._("Matte White", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_2.ggUpdateText();
					} else {
						if (me._text_2.ggUpdatePosition) me._text_2.ggUpdatePosition();
					}
				}
				else {
					if (me._text_2.ggUpdateText) {
					me._text_2.ggUpdateText=function() {
						var params = [];
						params.push(player._(String(player.getVariableValue('carpaintname', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
						var hs = player._("<div class=\"ggmarkdown\"><h3>%1<\/h3>\n<div>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_2.ggUpdateText();
					} else {
						if (me._text_2.ggUpdatePosition) me._text_2.ggUpdatePosition();
					}
				}
			}
		}
		me._text_2.logicBlock_text();
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._carpaint_name.appendChild(me._text_2);
		me.divSkin.appendChild(me._carpaint_name);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDy=-47;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 187px;';
		hs+='left : 218px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((187px + 0px) / 2) - 47px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #aa0000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -194px;';
		hs+='height : 25px;';
		hs+='left : -137px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('color') == Number("0")))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('color') != Number("0")))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_3.style.transition='transform 0s';
				if (me._rectangle_3.ggCurrentLogicStateScaling == 0) {
					me._rectangle_3.ggParameter.sx = 1.2;
					me._rectangle_3.ggParameter.sy = 1.2;
					me._rectangle_3.style.transform=parameterToTransform(me._rectangle_3.ggParameter);
					skin.updateSize(me._rectangle_3);
				}
				else if (me._rectangle_3.ggCurrentLogicStateScaling == 1) {
					me._rectangle_3.ggParameter.sx = 1;
					me._rectangle_3.ggParameter.sy = 1;
					me._rectangle_3.style.transform=parameterToTransform(me._rectangle_3.ggParameter);
					skin.updateSize(me._rectangle_3);
				}
				else {
					me._rectangle_3.ggParameter.sx = 1;
					me._rectangle_3.ggParameter.sy = 1;
					me._rectangle_3.style.transform=parameterToTransform(me._rectangle_3.ggParameter);
					skin.updateSize(me._rectangle_3);
				}
			}
		}
		me._rectangle_3.logicBlock_scaling();
		me._rectangle_3.onclick=function (e) {
			if (
				(
					((player.getVariableValue('seat') == Number("0")))
				)
			) {
				player.changeViewState("0",0.05);
			}
			if (
				(
					((player.getVariableValue('seat') == Number("1")))
				)
			) {
				player.changeViewState("1",0.05);
			}
			player.setVariableValue('color', Number("0.00"));
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_3);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -219px;';
		hs+='color : #000000;';
		hs+='height : 21px;';
		hs+='left : -205px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 123px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 900;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("GLOSSY", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._text_3);
		el=me._rectangle_2_2=document.createElement('div');
		el.ggId="Rectangle 2_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #474747;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -155px;';
		hs+='height : 25px;';
		hs+='left : -191px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('color') == Number("2")))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('color') != Number("2")))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_2_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_2_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_2_2.style.transition='transform 0s';
				if (me._rectangle_2_2.ggCurrentLogicStateScaling == 0) {
					me._rectangle_2_2.ggParameter.sx = 1.2;
					me._rectangle_2_2.ggParameter.sy = 1.2;
					me._rectangle_2_2.style.transform=parameterToTransform(me._rectangle_2_2.ggParameter);
					skin.updateSize(me._rectangle_2_2);
				}
				else if (me._rectangle_2_2.ggCurrentLogicStateScaling == 1) {
					me._rectangle_2_2.ggParameter.sx = 1;
					me._rectangle_2_2.ggParameter.sy = 1;
					me._rectangle_2_2.style.transform=parameterToTransform(me._rectangle_2_2.ggParameter);
					skin.updateSize(me._rectangle_2_2);
				}
				else {
					me._rectangle_2_2.ggParameter.sx = 1;
					me._rectangle_2_2.ggParameter.sy = 1;
					me._rectangle_2_2.style.transform=parameterToTransform(me._rectangle_2_2.ggParameter);
					skin.updateSize(me._rectangle_2_2);
				}
			}
		}
		me._rectangle_2_2.logicBlock_scaling();
		me._rectangle_2_2.onclick=function (e) {
			if (
				(
					((player.getVariableValue('seat') == Number("0")))
				)
			) {
				player.changeViewState("4",0.05);
			}
			if (
				(
					((player.getVariableValue('seat') == Number("1")))
				)
			) {
				player.changeViewState("5",0.05);
			}
			player.setVariableValue('color', Number("2.00"));
		}
		me._rectangle_2_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_2_2);
		el=me._rectangle_3_2=document.createElement('div');
		el.ggId="Rectangle 3_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffbe62;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -155px;';
		hs+='height : 25px;';
		hs+='left : -137px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('color') == Number("4")))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('color') != Number("4")))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_3_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_3_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_3_2.style.transition='transform 0s';
				if (me._rectangle_3_2.ggCurrentLogicStateScaling == 0) {
					me._rectangle_3_2.ggParameter.sx = 1.2;
					me._rectangle_3_2.ggParameter.sy = 1.2;
					me._rectangle_3_2.style.transform=parameterToTransform(me._rectangle_3_2.ggParameter);
					skin.updateSize(me._rectangle_3_2);
				}
				else if (me._rectangle_3_2.ggCurrentLogicStateScaling == 1) {
					me._rectangle_3_2.ggParameter.sx = 1;
					me._rectangle_3_2.ggParameter.sy = 1;
					me._rectangle_3_2.style.transform=parameterToTransform(me._rectangle_3_2.ggParameter);
					skin.updateSize(me._rectangle_3_2);
				}
				else {
					me._rectangle_3_2.ggParameter.sx = 1;
					me._rectangle_3_2.ggParameter.sy = 1;
					me._rectangle_3_2.style.transform=parameterToTransform(me._rectangle_3_2.ggParameter);
					skin.updateSize(me._rectangle_3_2);
				}
			}
		}
		me._rectangle_3_2.logicBlock_scaling();
		me._rectangle_3_2.onclick=function (e) {
			if (
				(
					((player.getVariableValue('seat') == Number("0")))
				)
			) {
				player.changeViewState("8",0.05);
			}
			if (
				(
					((player.getVariableValue('seat') == Number("1")))
				)
			) {
				player.changeViewState("9",0.05);
			}
			player.setVariableValue('color', Number("4.00"));
		}
		me._rectangle_3_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_3_2);
		el=me._rectangle_2_2_1=document.createElement('div');
		el.ggId="Rectangle 2_2_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #fff9cf;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -118px;';
		hs+='height : 25px;';
		hs+='left : -191px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2_2_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('color') == Number("5")))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('color') != Number("5")))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_2_2_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_2_2_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_2_2_1.style.transition='transform 0s';
				if (me._rectangle_2_2_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_2_2_1.ggParameter.sx = 1.2;
					me._rectangle_2_2_1.ggParameter.sy = 1.2;
					me._rectangle_2_2_1.style.transform=parameterToTransform(me._rectangle_2_2_1.ggParameter);
					skin.updateSize(me._rectangle_2_2_1);
				}
				else if (me._rectangle_2_2_1.ggCurrentLogicStateScaling == 1) {
					me._rectangle_2_2_1.ggParameter.sx = 1;
					me._rectangle_2_2_1.ggParameter.sy = 1;
					me._rectangle_2_2_1.style.transform=parameterToTransform(me._rectangle_2_2_1.ggParameter);
					skin.updateSize(me._rectangle_2_2_1);
				}
				else {
					me._rectangle_2_2_1.ggParameter.sx = 1;
					me._rectangle_2_2_1.ggParameter.sy = 1;
					me._rectangle_2_2_1.style.transform=parameterToTransform(me._rectangle_2_2_1.ggParameter);
					skin.updateSize(me._rectangle_2_2_1);
				}
			}
		}
		me._rectangle_2_2_1.logicBlock_scaling();
		me._rectangle_2_2_1.onclick=function (e) {
			if (
				(
					((player.getVariableValue('seat') == Number("0")))
				)
			) {
				player.changeViewState("10",0.05);
			}
			if (
				(
					((player.getVariableValue('seat') == Number("1")))
				)
			) {
				player.changeViewState("11",0.05);
			}
			player.setVariableValue('color', Number("5.00"));
		}
		me._rectangle_2_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_2_2_1);
		el=me._rectangle_3_2_1=document.createElement('div');
		el.ggId="Rectangle 3_2_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00ffe1;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -118px;';
		hs+='height : 25px;';
		hs+='left : -137px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3_2_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('color') == Number("3")))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('color') != Number("3")))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_3_2_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_3_2_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_3_2_1.style.transition='transform 0s';
				if (me._rectangle_3_2_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_3_2_1.ggParameter.sx = 1.2;
					me._rectangle_3_2_1.ggParameter.sy = 1.2;
					me._rectangle_3_2_1.style.transform=parameterToTransform(me._rectangle_3_2_1.ggParameter);
					skin.updateSize(me._rectangle_3_2_1);
				}
				else if (me._rectangle_3_2_1.ggCurrentLogicStateScaling == 1) {
					me._rectangle_3_2_1.ggParameter.sx = 1;
					me._rectangle_3_2_1.ggParameter.sy = 1;
					me._rectangle_3_2_1.style.transform=parameterToTransform(me._rectangle_3_2_1.ggParameter);
					skin.updateSize(me._rectangle_3_2_1);
				}
				else {
					me._rectangle_3_2_1.ggParameter.sx = 1;
					me._rectangle_3_2_1.ggParameter.sy = 1;
					me._rectangle_3_2_1.style.transform=parameterToTransform(me._rectangle_3_2_1.ggParameter);
					skin.updateSize(me._rectangle_3_2_1);
				}
			}
		}
		me._rectangle_3_2_1.logicBlock_scaling();
		me._rectangle_3_2_1.onclick=function (e) {
			if (
				(
					((player.getVariableValue('seat') == Number("0")))
				)
			) {
				player.changeViewState("6",0.05);
			}
			if (
				(
					((player.getVariableValue('seat') == Number("1")))
				)
			) {
				player.changeViewState("7",0.05);
			}
			player.setVariableValue('color', Number("3.00"));
		}
		me._rectangle_3_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_3_2_1);
		el=me._rectangle_3_2_1_1=document.createElement('div');
		el.ggId="Rectangle 3_2_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9dff00;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : 29px;';
		hs+='height : 25px;';
		hs+='left : -137px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3_2_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3_2_1_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('color') == Number("10")))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('color') != Number("10")))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_3_2_1_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_3_2_1_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_3_2_1_1.style.transition='transform 0s';
				if (me._rectangle_3_2_1_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_3_2_1_1.ggParameter.sx = 1.2;
					me._rectangle_3_2_1_1.ggParameter.sy = 1.2;
					me._rectangle_3_2_1_1.style.transform=parameterToTransform(me._rectangle_3_2_1_1.ggParameter);
					skin.updateSize(me._rectangle_3_2_1_1);
				}
				else if (me._rectangle_3_2_1_1.ggCurrentLogicStateScaling == 1) {
					me._rectangle_3_2_1_1.ggParameter.sx = 1;
					me._rectangle_3_2_1_1.ggParameter.sy = 1;
					me._rectangle_3_2_1_1.style.transform=parameterToTransform(me._rectangle_3_2_1_1.ggParameter);
					skin.updateSize(me._rectangle_3_2_1_1);
				}
				else {
					me._rectangle_3_2_1_1.ggParameter.sx = 1;
					me._rectangle_3_2_1_1.ggParameter.sy = 1;
					me._rectangle_3_2_1_1.style.transform=parameterToTransform(me._rectangle_3_2_1_1.ggParameter);
					skin.updateSize(me._rectangle_3_2_1_1);
				}
			}
		}
		me._rectangle_3_2_1_1.logicBlock_scaling();
		me._rectangle_3_2_1_1.onclick=function (e) {
			if (
				(
					((player.getVariableValue('seat') == Number("0")))
				)
			) {
				player.changeViewState("20",0.05);
			}
			if (
				(
					((player.getVariableValue('seat') == Number("1")))
				)
			) {
				player.changeViewState("21",0.05);
			}
			player.setVariableValue('color', Number("10.00"));
		}
		me._rectangle_3_2_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_3_2_1_1);
		el=me._rectangle_2_2_1_1=document.createElement('div');
		el.ggId="Rectangle 2_2_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : 29px;';
		hs+='height : 25px;';
		hs+='left : -191px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2_2_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2_2_1_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('color') == Number("11")))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('color') != Number("11")))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_2_2_1_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_2_2_1_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_2_2_1_1.style.transition='transform 0s';
				if (me._rectangle_2_2_1_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_2_2_1_1.ggParameter.sx = 1.2;
					me._rectangle_2_2_1_1.ggParameter.sy = 1.2;
					me._rectangle_2_2_1_1.style.transform=parameterToTransform(me._rectangle_2_2_1_1.ggParameter);
					skin.updateSize(me._rectangle_2_2_1_1);
				}
				else if (me._rectangle_2_2_1_1.ggCurrentLogicStateScaling == 1) {
					me._rectangle_2_2_1_1.ggParameter.sx = 1;
					me._rectangle_2_2_1_1.ggParameter.sy = 1;
					me._rectangle_2_2_1_1.style.transform=parameterToTransform(me._rectangle_2_2_1_1.ggParameter);
					skin.updateSize(me._rectangle_2_2_1_1);
				}
				else {
					me._rectangle_2_2_1_1.ggParameter.sx = 1;
					me._rectangle_2_2_1_1.ggParameter.sy = 1;
					me._rectangle_2_2_1_1.style.transform=parameterToTransform(me._rectangle_2_2_1_1.ggParameter);
					skin.updateSize(me._rectangle_2_2_1_1);
				}
			}
		}
		me._rectangle_2_2_1_1.logicBlock_scaling();
		me._rectangle_2_2_1_1.onclick=function (e) {
			if (
				(
					((player.getVariableValue('seat') == Number("0")))
				)
			) {
				player.changeViewState("22",0.05);
			}
			if (
				(
					((player.getVariableValue('seat') == Number("1")))
				)
			) {
				player.changeViewState("23",0.05);
			}
			player.setVariableValue('color', Number("11.00"));
		}
		me._rectangle_2_2_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_2_2_1_1);
		el=me._rectangle_2_2_2=document.createElement('div');
		el.ggId="Rectangle 2_2_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #474747;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -9px;';
		hs+='height : 25px;';
		hs+='left : -191px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2_2_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2_2_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('color') == Number("8")))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('color') != Number("8")))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_2_2_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_2_2_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_2_2_2.style.transition='transform 0s';
				if (me._rectangle_2_2_2.ggCurrentLogicStateScaling == 0) {
					me._rectangle_2_2_2.ggParameter.sx = 1.2;
					me._rectangle_2_2_2.ggParameter.sy = 1.2;
					me._rectangle_2_2_2.style.transform=parameterToTransform(me._rectangle_2_2_2.ggParameter);
					skin.updateSize(me._rectangle_2_2_2);
				}
				else if (me._rectangle_2_2_2.ggCurrentLogicStateScaling == 1) {
					me._rectangle_2_2_2.ggParameter.sx = 1;
					me._rectangle_2_2_2.ggParameter.sy = 1;
					me._rectangle_2_2_2.style.transform=parameterToTransform(me._rectangle_2_2_2.ggParameter);
					skin.updateSize(me._rectangle_2_2_2);
				}
				else {
					me._rectangle_2_2_2.ggParameter.sx = 1;
					me._rectangle_2_2_2.ggParameter.sy = 1;
					me._rectangle_2_2_2.style.transform=parameterToTransform(me._rectangle_2_2_2.ggParameter);
					skin.updateSize(me._rectangle_2_2_2);
				}
			}
		}
		me._rectangle_2_2_2.logicBlock_scaling();
		me._rectangle_2_2_2.onclick=function (e) {
			if (
				(
					((player.getVariableValue('seat') == Number("0")))
				)
			) {
				player.changeViewState("16",0.05);
			}
			if (
				(
					((player.getVariableValue('seat') == Number("1")))
				)
			) {
				player.changeViewState("17",0.05);
			}
			player.setVariableValue('color', Number("8.00"));
		}
		me._rectangle_2_2_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_2_2_2);
		el=me._rectangle_3_2_2=document.createElement('div');
		el.ggId="Rectangle 3_2_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -9px;';
		hs+='height : 25px;';
		hs+='left : -137px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3_2_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3_2_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('color') == Number("9")))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('color') != Number("9")))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_3_2_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_3_2_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_3_2_2.style.transition='transform 0s';
				if (me._rectangle_3_2_2.ggCurrentLogicStateScaling == 0) {
					me._rectangle_3_2_2.ggParameter.sx = 1.2;
					me._rectangle_3_2_2.ggParameter.sy = 1.2;
					me._rectangle_3_2_2.style.transform=parameterToTransform(me._rectangle_3_2_2.ggParameter);
					skin.updateSize(me._rectangle_3_2_2);
				}
				else if (me._rectangle_3_2_2.ggCurrentLogicStateScaling == 1) {
					me._rectangle_3_2_2.ggParameter.sx = 1;
					me._rectangle_3_2_2.ggParameter.sy = 1;
					me._rectangle_3_2_2.style.transform=parameterToTransform(me._rectangle_3_2_2.ggParameter);
					skin.updateSize(me._rectangle_3_2_2);
				}
				else {
					me._rectangle_3_2_2.ggParameter.sx = 1;
					me._rectangle_3_2_2.ggParameter.sy = 1;
					me._rectangle_3_2_2.style.transform=parameterToTransform(me._rectangle_3_2_2.ggParameter);
					skin.updateSize(me._rectangle_3_2_2);
				}
			}
		}
		me._rectangle_3_2_2.logicBlock_scaling();
		me._rectangle_3_2_2.onclick=function (e) {
			if (
				(
					((player.getVariableValue('seat') == Number("0")))
				)
			) {
				player.changeViewState("18",0.05);
			}
			if (
				(
					((player.getVariableValue('seat') == Number("1")))
				)
			) {
				player.changeViewState("19",0.05);
			}
			player.setVariableValue('color', Number("9.00"));
		}
		me._rectangle_3_2_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_3_2_2);
		el=me._rectangle_3_3=document.createElement('div');
		el.ggId="Rectangle 3_3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #aa0000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -47px;';
		hs+='height : 25px;';
		hs+='left : -137px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3_3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('color') == Number("6")))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('color') != Number("6")))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_3_3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_3_3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_3_3.style.transition='transform 0s';
				if (me._rectangle_3_3.ggCurrentLogicStateScaling == 0) {
					me._rectangle_3_3.ggParameter.sx = 1.2;
					me._rectangle_3_3.ggParameter.sy = 1.2;
					me._rectangle_3_3.style.transform=parameterToTransform(me._rectangle_3_3.ggParameter);
					skin.updateSize(me._rectangle_3_3);
				}
				else if (me._rectangle_3_3.ggCurrentLogicStateScaling == 1) {
					me._rectangle_3_3.ggParameter.sx = 1;
					me._rectangle_3_3.ggParameter.sy = 1;
					me._rectangle_3_3.style.transform=parameterToTransform(me._rectangle_3_3.ggParameter);
					skin.updateSize(me._rectangle_3_3);
				}
				else {
					me._rectangle_3_3.ggParameter.sx = 1;
					me._rectangle_3_3.ggParameter.sy = 1;
					me._rectangle_3_3.style.transform=parameterToTransform(me._rectangle_3_3.ggParameter);
					skin.updateSize(me._rectangle_3_3);
				}
			}
		}
		me._rectangle_3_3.logicBlock_scaling();
		me._rectangle_3_3.onclick=function (e) {
			if (
				(
					((player.getVariableValue('seat') == Number("0")))
				)
			) {
				player.changeViewState("12",0.05);
			}
			if (
				(
					((player.getVariableValue('seat') == Number("1")))
				)
			) {
				player.changeViewState("13",0.05);
			}
			player.setVariableValue('color', Number("6.00"));
		}
		me._rectangle_3_3.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_3_3);
		el=me._rectangle_2_3=document.createElement('div');
		el.ggId="Rectangle 2_3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -47px;';
		hs+='height : 25px;';
		hs+='left : -191px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2_3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('color') == Number("7")))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('color') != Number("7")))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_2_3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_2_3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_2_3.style.transition='transform 0s';
				if (me._rectangle_2_3.ggCurrentLogicStateScaling == 0) {
					me._rectangle_2_3.ggParameter.sx = 1.2;
					me._rectangle_2_3.ggParameter.sy = 1.2;
					me._rectangle_2_3.style.transform=parameterToTransform(me._rectangle_2_3.ggParameter);
					skin.updateSize(me._rectangle_2_3);
				}
				else if (me._rectangle_2_3.ggCurrentLogicStateScaling == 1) {
					me._rectangle_2_3.ggParameter.sx = 1;
					me._rectangle_2_3.ggParameter.sy = 1;
					me._rectangle_2_3.style.transform=parameterToTransform(me._rectangle_2_3.ggParameter);
					skin.updateSize(me._rectangle_2_3);
				}
				else {
					me._rectangle_2_3.ggParameter.sx = 1;
					me._rectangle_2_3.ggParameter.sy = 1;
					me._rectangle_2_3.style.transform=parameterToTransform(me._rectangle_2_3.ggParameter);
					skin.updateSize(me._rectangle_2_3);
				}
			}
		}
		me._rectangle_2_3.logicBlock_scaling();
		me._rectangle_2_3.onclick=function (e) {
			if (
				(
					((player.getVariableValue('seat') == Number("0")))
				)
			) {
				player.changeViewState("14",0.05);
			}
			if (
				(
					((player.getVariableValue('seat') == Number("1")))
				)
			) {
				player.changeViewState("15",0.05);
			}
			player.setVariableValue('color', Number("7.00"));
		}
		me._rectangle_2_3.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_2_3);
		el=me._text_3_1=document.createElement('div');
		els=me._text_3_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -73px;';
		hs+='color : #000000;';
		hs+='height : 21px;';
		hs+='left : -200px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 123px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 900;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_3_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("MATTE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3_1.ggUpdateText();
		el.appendChild(els);
		me._text_3_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._text_3_1);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 113px;';
		hs+='height : 66px;';
		hs+='left : -189px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.onclick=function (e) {
			if (
				(
					((player.getVariableValue('color') == Number("0")))
				)
			) {
				player.changeViewState("0",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("1")))
				)
			) {
				player.changeViewState("2",0.05);
			}
			player.setVariableValue('seat', Number("0.00"));
			if (
				(
					((player.getVariableValue('color') == Number("2")))
				)
			) {
				player.changeViewState("4",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("3")))
				)
			) {
				player.changeViewState("6",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("4")))
				)
			) {
				player.changeViewState("8",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("5")))
				)
			) {
				player.changeViewState("10",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("6")))
				)
			) {
				player.changeViewState("12",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("7")))
				)
			) {
				player.changeViewState("14",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("8")))
				)
			) {
				player.changeViewState("16",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("9")))
				)
			) {
				player.changeViewState("18",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("10")))
				)
			) {
				player.changeViewState("20",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("11")))
				)
			) {
				player.changeViewState("22",0.05);
			}
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_1);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs=basePath + 'images/image_5.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 179px;';
		hs+='height : 66px;';
		hs+='left : -189px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.onclick=function (e) {
			if (
				(
					((player.getVariableValue('color') == Number("0")))
				)
			) {
				player.changeViewState("1",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("1")))
				)
			) {
				player.changeViewState("3",0.05);
			}
			player.setVariableValue('seat', Number("1.00"));
			if (
				(
					((player.getVariableValue('color') == Number("2")))
				)
			) {
				player.changeViewState("5",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("3")))
				)
			) {
				player.changeViewState("7",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("4")))
				)
			) {
				player.changeViewState("9",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("5")))
				)
			) {
				player.changeViewState("11",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("6")))
				)
			) {
				player.changeViewState("13",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("7")))
				)
			) {
				player.changeViewState("15",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("8")))
				)
			) {
				player.changeViewState("17",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("9")))
				)
			) {
				player.changeViewState("19",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("10")))
				)
			) {
				player.changeViewState("21",0.05);
			}
			if (
				(
					((player.getVariableValue('color') == Number("11")))
				)
			) {
				player.changeViewState("23",0.05);
			}
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_5);
		el=me._text_3_1_1=document.createElement('div');
		els=me._text_3_1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 94px;';
		hs+='color : #000000;';
		hs+='height : 21px;';
		hs+='left : -198px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 123px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 900;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_3_1_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("SEAT", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3_1_1.ggUpdateText();
		el.appendChild(els);
		me._text_3_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._text_3_1_1);
		el=me._rectangle_3_1=document.createElement('div');
		el.ggId="Rectangle 3_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -194px;';
		hs+='height : 25px;';
		hs+='left : -191px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('color') == Number("1")))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('color') != Number("1")))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_3_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_3_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_3_1.style.transition='transform 0s';
				if (me._rectangle_3_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_3_1.ggParameter.sx = 1.2;
					me._rectangle_3_1.ggParameter.sy = 1.2;
					me._rectangle_3_1.style.transform=parameterToTransform(me._rectangle_3_1.ggParameter);
					skin.updateSize(me._rectangle_3_1);
				}
				else if (me._rectangle_3_1.ggCurrentLogicStateScaling == 1) {
					me._rectangle_3_1.ggParameter.sx = 1;
					me._rectangle_3_1.ggParameter.sy = 1;
					me._rectangle_3_1.style.transform=parameterToTransform(me._rectangle_3_1.ggParameter);
					skin.updateSize(me._rectangle_3_1);
				}
				else {
					me._rectangle_3_1.ggParameter.sx = 1;
					me._rectangle_3_1.ggParameter.sy = 1;
					me._rectangle_3_1.style.transform=parameterToTransform(me._rectangle_3_1.ggParameter);
					skin.updateSize(me._rectangle_3_1);
				}
			}
		}
		me._rectangle_3_1.logicBlock_scaling();
		me._rectangle_3_1.onclick=function (e) {
			if (
				(
					((player.getVariableValue('seat') == Number("0")))
				)
			) {
				player.changeViewState("2",0.05);
			}
			if (
				(
					((player.getVariableValue('seat') == Number("1")))
				)
			) {
				player.changeViewState("3",0.05);
			}
			player.setVariableValue('color', Number("1.00"));
		}
		me._rectangle_3_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_3_1);
		me.divSkin.appendChild(me._container_1);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 436px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((436px + 0px) / 2) - 2px);';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_4);
		me._fullscreen.logicBlock_position();
		me._fullscreen.logicBlock_visible();
		me.elementMouseOver['fullscreen']=false;
		me._text_2.logicBlock_text();
		me._rectangle_3.logicBlock_scaling();
		me._rectangle_2_2.logicBlock_scaling();
		me._rectangle_3_2.logicBlock_scaling();
		me._rectangle_2_2_1.logicBlock_scaling();
		me._rectangle_3_2_1.logicBlock_scaling();
		me._rectangle_3_2_1_1.logicBlock_scaling();
		me._rectangle_2_2_1_1.logicBlock_scaling();
		me._rectangle_2_2_2.logicBlock_scaling();
		me._rectangle_3_2_2.logicBlock_scaling();
		me._rectangle_3_3.logicBlock_scaling();
		me._rectangle_2_3.logicBlock_scaling();
		me._rectangle_3_1.logicBlock_scaling();
		player.addListener('changenode', function(event) {
			me._fullscreen.logicBlock_position();
			me._fullscreen.logicBlock_visible();
			me._text_2.logicBlock_text();
			me._rectangle_3.logicBlock_scaling();
			me._rectangle_2_2.logicBlock_scaling();
			me._rectangle_3_2.logicBlock_scaling();
			me._rectangle_2_2_1.logicBlock_scaling();
			me._rectangle_3_2_1.logicBlock_scaling();
			me._rectangle_3_2_1_1.logicBlock_scaling();
			me._rectangle_2_2_1_1.logicBlock_scaling();
			me._rectangle_2_2_2.logicBlock_scaling();
			me._rectangle_3_2_2.logicBlock_scaling();
			me._rectangle_3_3.logicBlock_scaling();
			me._rectangle_2_3.logicBlock_scaling();
			me._rectangle_3_1.logicBlock_scaling();
		});
		player.addListener('configloaded', function(event) {
			me._variable_has_fullscreen.logicBlock();
			me._fullscreen.logicBlock_position();
			me._fullscreen.logicBlock_visible();
			me._text_2.logicBlock_text();
			me._rectangle_3.logicBlock_scaling();
			me._rectangle_2_2.logicBlock_scaling();
			me._rectangle_3_2.logicBlock_scaling();
			me._rectangle_2_2_1.logicBlock_scaling();
			me._rectangle_3_2_1.logicBlock_scaling();
			me._rectangle_3_2_1_1.logicBlock_scaling();
			me._rectangle_2_2_1_1.logicBlock_scaling();
			me._rectangle_2_2_2.logicBlock_scaling();
			me._rectangle_3_2_2.logicBlock_scaling();
			me._rectangle_3_3.logicBlock_scaling();
			me._rectangle_2_3.logicBlock_scaling();
			me._rectangle_3_1.logicBlock_scaling();
		});
		player.addListener('imagesready', function(event) {
			me._load_bar.style.transition='none';
			me._load_bar.style.visibility='hidden';
			me._load_bar.ggVisible=false;
		});
		player.addListener('varchanged_color', function(event) {
			me._text_2.logicBlock_text();
			me._rectangle_3.logicBlock_scaling();
			me._rectangle_2_2.logicBlock_scaling();
			me._rectangle_3_2.logicBlock_scaling();
			me._rectangle_2_2_1.logicBlock_scaling();
			me._rectangle_3_2_1.logicBlock_scaling();
			me._rectangle_3_2_1_1.logicBlock_scaling();
			me._rectangle_2_2_1_1.logicBlock_scaling();
			me._rectangle_2_2_2.logicBlock_scaling();
			me._rectangle_3_2_2.logicBlock_scaling();
			me._rectangle_3_3.logicBlock_scaling();
			me._rectangle_2_3.logicBlock_scaling();
			me._rectangle_3_1.logicBlock_scaling();
		});
		player.addListener('varchanged_has_fullscreen', function(event) {
			me._fullscreen.logicBlock_visible();
		});
		player.addListener('varchanged_opt_autorotate', function(event) {
			me._fullscreen.logicBlock_position();
		});
		player.addListener('varchanged_opt_fullscreen', function(event) {
			me._fullscreen.logicBlock_visible();
		});
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};