// Garden Gnome Software - Skin
// Object2VR 4.0beta2/20670
// Filename: test1.ggsk
// Generated 2024-01-18T14:32:54

function object2vrSkin(player,base) {
	player.addVariable('opt_autorotate', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
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
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((170px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller.logicBlock_size = function() {
			var newConditionsTrueSize = [];
			var deltaW = 0;
			var deltaH = 0;
			if (
				((player.getRowsCount() <= 1))
			)
			{
				newConditionsTrueSize.push(0);
			}
			if (
				((player.getVariableValue('opt_autorotate') == true))
			)
			{
				newConditionsTrueSize.push(1);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTrueSize.push(2);
			}
			if (JSON.stringify(me._controller.ggConditionsTrueSize) != JSON.stringify(newConditionsTrueSize)) {
				me._controller.ggConditionsTrueSize = newConditionsTrueSize;
				me._controller.style.transition='width 0s, height 0s';
				if (me._controller.ggConditionsTrueSize.includes(0)) {
					deltaW += -15;
					deltaH += 0;
				}
				if (me._controller.ggConditionsTrueSize.includes(1)) {
					deltaW += 50;
					deltaH += 0;
				}
				if (me._controller.ggConditionsTrueSize.includes(2)) {
					deltaW += 50;
					deltaH += 0;
				}
					me._controller.style.width=(170+deltaW) + 'px';
					me._controller.style.height=(50+deltaH) + 'px';
					me._controller.style.left = 'calc(50% - (' + (170+deltaW) +'px / 2))';
					skin.updateSize(me._controller);
			}
		}
		me._controller.logicBlock_size();
		me._controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._down=document.createElement('div');
		els=me._down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJFYmVuZV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdG'+
			'g9IjMycHgiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxnPgogIDxwb2x5Z29uIGZpbGw9IiM2NjY2NjYiIGZpbGwtb3BhY2l0eT0iMSIgcG9pbnRzPSIxNS4wMjYsMTYuNTM1IDUuNTA3LDcuODE0IDUuNTA3LDE1LjQ4MiAxNS4wMjYsMjQuMTg2IDI0LjQ5MiwxNS41MDkgMjQuNDczLDcuODk4ICAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._down__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJFYmVuZV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdG'+
			'g9IjMycHgiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxnPgogIDxwb2x5Z29uIGZpbGw9IiMxQTE3MUIiIHBvaW50cz0iMTUuMDI2LDE2LjUzNSA1LjUwNyw3LjgxNCA1LjUwNywxNS40ODIgMTUuMDI2LDI0LjE4NiAyNC40OTIsMTUuNTA5IDI0LjQ3Myw3Ljg5OCAgIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._down.ggIsActive=function() {
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
		me._down.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getRowsCount() <= 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._down.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._down.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._down.style.transition='';
				if (me._down.ggCurrentLogicStateVisible == 0) {
					me._down.style.visibility="hidden";
					me._down.ggVisible=false;
				}
				else {
					me._down.style.visibility=(Number(me._down.style.opacity)>0||!me._down.style.opacity)?'inherit':'hidden';
					me._down.ggVisible=true;
				}
			}
		}
		me._down.logicBlock_visible();
		me._down.onclick=function (e) {
			player.changeTiltLog(-1,true);
		}
		me._down.onmouseenter=function (e) {
			me._down__img.style.visibility='hidden';
			me._down__imgo.style.visibility='inherit';
			me.elementMouseOver['down']=true;
		}
		me._down.onmouseleave=function (e) {
			me._down__img.style.visibility='inherit';
			me._down__imgo.style.visibility='hidden';
			me.elementMouseOver['down']=false;
		}
		me._down.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._down);
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJFYmVuZV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdG'+
			'g9IjMycHgiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxnPgogIDxwb2x5Z29uIGZpbGw9IiM2NjY2NjYiIGZpbGwtb3BhY2l0eT0iMSIgcG9pbnRzPSIxNC45NzMsMTUuNDY1IDI0LjQ5MiwyNC4xODYgMjQuNDkyLDE2LjUxOCAxNC45NzMsNy44MTQgNS41MDcsMTYuNDkxIDUuNTI2LDI0LjEwMiAgIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._up__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJFYmVuZV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdG'+
			'g9IjMycHgiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxnPgogIDxwb2x5Z29uIGZpbGw9IiMxQTE3MUIiIHBvaW50cz0iMTQuOTczLDE1LjQ2NSAyNC40OTIsMjQuMTg2IDI0LjQ5MiwxNi41MTggMTQuOTczLDcuODE0IDUuNTA3LDE2LjQ5MSA1LjUyNiwyNC4xMDIgICIvPgogPC9nPgo8L3N2Zz4K';
		me._up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._up.ggIsActive=function() {
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
		me._up.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getRowsCount() <= 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._up.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._up.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._up.style.transition='';
				if (me._up.ggCurrentLogicStateVisible == 0) {
					me._up.style.visibility="hidden";
					me._up.ggVisible=false;
				}
				else {
					me._up.style.visibility=(Number(me._up.style.opacity)>0||!me._up.style.opacity)?'inherit':'hidden';
					me._up.ggVisible=true;
				}
			}
		}
		me._up.logicBlock_visible();
		me._up.onclick=function (e) {
			player.changeTiltLog(1,true);
		}
		me._up.onmouseenter=function (e) {
			me._up__img.style.visibility='hidden';
			me._up__imgo.style.visibility='inherit';
			me.elementMouseOver['up']=true;
		}
		me._up.onmouseleave=function (e) {
			me._up__img.style.visibility='inherit';
			me._up__imgo.style.visibility='hidden';
			me.elementMouseOver['up']=false;
		}
		me._up.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._up);
		el=me._left=document.createElement('div');
		els=me._left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJFYmVuZV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdG'+
			'g9IjMycHgiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxnPgogIDxwb2x5Z29uIGZpbGw9IiM2NjY2NjYiIGZpbGwtb3BhY2l0eT0iMSIgcG9pbnRzPSIxNC40NjUsMTYuMDI3IDIzLjE4Niw2LjUwNyAxNS41MTgsNi41MDcgNi44MTUsMTYuMDI3IDE1LjQ5MSwyNS40OTIgMjMuMTAyLDI1LjQ3MyAgIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._left__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJFYmVuZV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdG'+
			'g9IjMycHgiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxnPgogIDxwb2x5Z29uIGZpbGw9IiMxQTE3MUIiIHBvaW50cz0iMTQuNDY1LDE2LjAyNyAyMy4xODYsNi41MDcgMTUuNTE4LDYuNTA3IDYuODE1LDE2LjAyNyAxNS40OTEsMjUuNDkyIDIzLjEwMiwyNS40NzMgICIvPgogPC9nPgo8L3N2Zz4K';
		me._left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left.ggIsActive=function() {
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
		me._left.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getRowsCount() <= 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._left.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._left.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._left.style.transition='left 0s, top 0s';
				if (me._left.ggCurrentLogicStatePosition == 0) {
					me._left.style.left='0px';
					me._left.style.top='11px';
				}
				else {
					me._left.style.left='0px';
					me._left.style.top='0px';
				}
			}
		}
		me._left.logicBlock_position();
		me._left.onclick=function (e) {
			player.changePanLog(1,true);
		}
		me._left.onmouseenter=function (e) {
			me._left__img.style.visibility='hidden';
			me._left__imgo.style.visibility='inherit';
			me.elementMouseOver['left']=true;
		}
		me._left.onmouseleave=function (e) {
			me._left__img.style.visibility='inherit';
			me._left__imgo.style.visibility='hidden';
			me.elementMouseOver['left']=false;
		}
		me._left.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._left);
		el=me._right=document.createElement('div');
		els=me._right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJFYmVuZV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdG'+
			'g9IjMycHgiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxnPgogIDxwb2x5Z29uIGZpbGw9IiM2NjY2NjYiIGZpbGwtb3BhY2l0eT0iMSIgcG9pbnRzPSIxNS41MzUsMTUuOTcyIDYuODE0LDI1LjQ5MiAxNC40ODIsMjUuNDkyIDIzLjE4NiwxNS45NzIgMTQuNTA5LDYuNTA3IDYuODk4LDYuNTI2ICAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._right__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJFYmVuZV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdG'+
			'g9IjMycHgiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxnPgogIDxwb2x5Z29uIGZpbGw9IiMxQTE3MUIiIHBvaW50cz0iMTUuNTM1LDE1Ljk3MiA2LjgxNCwyNS40OTIgMTQuNDgyLDI1LjQ5MiAyMy4xODYsMTUuOTcyIDE0LjUwOSw2LjUwNyA2Ljg5OCw2LjUyNiAgIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 43px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right.ggIsActive=function() {
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
		me._right.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getRowsCount() <= 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._right.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._right.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._right.style.transition='left 0s, top 0s';
				if (me._right.ggCurrentLogicStatePosition == 0) {
					me._right.style.left='28px';
					me._right.style.top='11px';
				}
				else {
					me._right.style.left='43px';
					me._right.style.top='0px';
				}
			}
		}
		me._right.logicBlock_position();
		me._right.onclick=function (e) {
			player.changePanLog(-1,true);
		}
		me._right.onmouseenter=function (e) {
			me._right__img.style.visibility='hidden';
			me._right__imgo.style.visibility='inherit';
			me.elementMouseOver['right']=true;
		}
		me._right.onmouseleave=function (e) {
			me._right__img.style.visibility='inherit';
			me._right__imgo.style.visibility='hidden';
			me.elementMouseOver['right']=false;
		}
		me._right.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._right);
		el=me._autorotate=document.createElement('div');
		els=me._autorotate__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJFYmVuZV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdG'+
			'g9IjMycHgiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxnPgogIDxnPgogICA8cGF0aCBkPSJNNy4xNjYsMTIuNTIxYy0wLjMxMywwLTAuNTcyLTAuMS0wLjc3NS0wLjMwMWMtMC4yMDMtMC4yMDEtMC4zNTQtMC41NjEtMC40NS0xLjA4bC0yLjQ1NywwLjM0MiAgICBjMC4xNjEsMC41OCwwLjM5MiwxLjA2LDAuNjksMS40NDJjMC4zLDAuMzg0LDAuNjgyLDAuNjc1LDEuMTQ2LDAuODcyYzAuNDY1LDAuMTk4LDEuMSwwLjI5OCwxLjkw'+
			'NSwwLjI5OCAgICBjMC44MjUsMCwxLjQ5MS0wLjEzNCwxLjk5OC0wLjQwM2MwLjUwNy0wLjI2OCwwLjg5Ni0wLjY0OSwxLjE2NS0xLjE0NnMwLjQwNC0xLjAxNiwwLjQwNC0xLjU1N2MwLTAuNDMyLTAuMDgyLTAuODAzLTAuMjQ0LTEuMTEzICAgIGMtMC4xNjQtMC4zMTEtMC4zOTMtMC41NjEtMC42ODYtMC43NTFDOS42ODMsOS4wMDQsOS40Miw4Ljg5OSw5LjA3OCw4LjgxMmMwLjQyNC0wLjI0NCwwLjczOS0wLjUyOSwwLjk0OC0wLjg1NSAgICBjMC4yMDktMC4zMjUsMC4zMTMtMC42ODgsMC4zMTMtMS4wOWMwLTAuNjg2LTAuMjU4LTEuMjU0LTAuNzcyLTEuNzA2Yy0wLjUxNC0wLjQ1Mi0xLjM1LT'+
			'AuNjgtMi41MDUtMC42OCAgICBjLTEuMDA2LDAtMS43ODQsMC4yMDctMi4zMzMsMC42MjFzLTAuOTIsMS4wMS0xLjExNCwxLjc4OWwyLjMyNCwwLjQzN2MwLjA2NS0wLjQ2MSwwLjE4OC0wLjc4MywwLjM3LTAuOTY4ICAgIEM2LjQ5LDYuMTc2LDYuNzI1LDYuMDg1LDcuMDE1LDYuMDg1YzAuMjgsMCwwLjUwMywwLjA4NSwwLjY2NiwwLjI1NUM3Ljg0LDYuNTA5LDcuOTIyLDYuNzM1LDcuOTIyLDcuMDE5ICAgIGMwLDAuMjk3LTAuMTA4LDAuNTUxLTAuMzIzLDAuNzY4QzcuMzgzLDguMDAxLDcuMTE0LDguMTA4LDYuNzkzLDguMTA4Yy0wLjA3NiwwLTAuMTg0LTAuMDEtMC4zMi0wLjAzMUw2LjM0Nyw5'+
			'LjkyMiAgICBDNi42ODUsOS44MjEsNi45NSw5Ljc3MSw3LjE0Myw5Ljc3MWMwLjM2MSwwLDAuNjQ4LDAuMTE5LDAuODU5LDAuMzU0YzAuMjEzLDAuMjM1LDAuMzE3LDAuNTY5LDAuMzE3LDEuMDAxICAgIGMwLDAuNDIzLTAuMTA4LDAuNzYyLTAuMzI5LDEuMDE2QzcuNzcxLDEyLjM5NCw3LjQ5NiwxMi41MjEsNy4xNjYsMTIuNTIxeiIgZmlsbD0iIzY2NjY2NiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgIDxwYXRoIGQ9Ik0xMy41NzQsMTMuNjE4YzAuNTM1LDAuMzE2LDEuMjQ2LDAuNDc2LDIuMTMxLDAuNDc2YzAuNzM2LDAsMS4zNS0wLjEzLDEuODM4LTAuMzkgICAgYzAuNDg2LTAuMjYsMC44NzEtMC'+
			'42NDUsMS4xNDYtMS4xNTFjMC4yNzItMC41MDYsMC40MTItMS4wNjcsMC40MTItMS42OGMwLTAuOTA5LTAuMjcxLTEuNjU5LTAuODE1LTIuMjUxICAgIGMtMC41NDYtMC41OTItMS4yMTMtMC44ODktMi0wLjg4OWMtMC40MDYsMC0wLjc2NiwwLjA3Ni0xLjA3NiwwLjIyNmMtMC4zMSwwLjE0OS0wLjYxMSwwLjM4MS0wLjkwNCwwLjY5NCAgICBDMTQuMzgxLDcuNjU2LDE0LjUsNy4wMDUsMTQuNjYsNi43YzAuMjIzLTAuNDI0LDAuNTMyLTAuNjM1LDAuOTMtMC42MzVjMC4yMjIsMCwwLjQwOCwwLjA3NCwwLjU1OSwwLjIyM3MwLjI1OSwwLjQwMiwwLjMyMywwLjc2MSAgICBsMi40NDQtMC4zMTdjLTAu'+
			'MTQzLTAuNDk4LTAuMzUtMC45MTQtMC42MTktMS4yNDRjLTAuMjctMC4zMjgtMC42MDctMC41NzktMS4wMTgtMC43NWMtMC40MDYtMC4xNzItMC45NjQtMC4yNTgtMS42NjgtMC4yNTggICAgYy0xLjE4OSwwLTIuMTIyLDAuMzkxLTIuNzk0LDEuMTdjLTAuNjcyLDAuNzgxLTEuMDA4LDIuMDEtMS4wMDgsMy42ODhjMCwxLjE0NiwwLjE2LDIuMDY2LDAuNDc5LDIuNzYyICAgIEMxMi42MTEsMTIuNzk1LDEzLjAzOSwxMy4zMDEsMTMuNTc0LDEzLjYxOHogTTE0LjczNyw5LjczMWMwLjIzMS0wLjI2NywwLjUxOS0wLjM5OSwwLjg2LTAuMzk5YzAuMzM0LDAsMC42MTMsMC4xMzgsMC44NCwwLjQxMiAgIC'+
			'BjMC4yMjUsMC4yNzQsMC4zMzgsMC42NzUsMC4zMzgsMS4xOThjMCwwLjUxMi0wLjEwOSwwLjg5Ni0wLjMyNiwxLjE1NGMtMC4yMTgsMC4yNTgtMC40ODYsMC4zODctMC44MDksMC4zODcgICAgYy0wLjM1LDAtMC42NDYtMC4xNDMtMC44ODktMC40MjhjLTAuMjQtMC4yODUtMC4zNjEtMC42OC0wLjM2MS0xLjE4M0MxNC4zOTEsMTAuMzc4LDE0LjUwNiw5Ljk5OCwxNC43MzcsOS43MzF6IiBmaWxsPSIjNjY2NjY2IiBmaWxsLW9wYWNpdHk9IjEiLz4KICAgPHBhdGggZD0iTTIwLjcyMywxMi42MjJjMC4yOTMsMC40ODIsMC42NywwLjg0OCwxLjEyOSwxLjA5N2MwLjQ1OSwwLjI1LDEuMDYyLDAuMzc1'+
			'LDEuODA3LDAuMzc1ICAgIGMxLjMyNiwwLDIuMjY1LTAuMzkxLDIuODA4LTEuMTczYzAuNTQzLTAuNzgxLDAuODEyLTIuMDE2LDAuODEyLTMuNzAzYzAtMC43NTItMC4wODItMS40NzUtMC4yNDQtMi4xNjggICAgYy0wLjA4OC0wLjM2My0wLjE5Ni0wLjY4Mi0wLjMzOC0wLjk1NWMtMC4xMzktMC4yNzMtMC4zMjUtMC41MzMtMC41NjctMC43NzljLTAuMjQxLTAuMjQ4LTAuNTU0LTAuNDQ4LTAuOTM4LTAuNjAzICAgIGMtMC4zODMtMC4xNTMtMC44NzEtMC4yMzEtMS40NjctMC4yMzFjLTEuMjQsMC0yLjE2MiwwLjM1NC0yLjc3LDEuMDZjLTAuNjA0LDAuNzA2LTAuOTA4LDEuOTQyLTAuOTA4LDMuNz'+
			'A5ICAgIGMwLDAuNzE4LDAuMDYxLDEuMzc0LDAuMTgsMS45NjhDMjAuMzQyLDExLjgxMiwyMC41MDgsMTIuMjgsMjAuNzIzLDEyLjYyMnogTTIyLjc1Niw2Ljg0OUMyMi45MzgsNi40MTYsMjMuMjMyLDYuMiwyMy42MzksNi4yICAgIGMwLjM5NiwwLDAuNjk1LDAuMjEzLDAuODk2LDAuNjM4YzAuMTk3LDAuNDI2LDAuMjk5LDEuMjU0LDAuMjk5LDIuNDg4YzAsMC44NDEtMC4wNDMsMS40NjEtMC4xMjksMS44NTcgICAgYy0wLjA4OCwwLjM5Ny0wLjIyMywwLjY4OC0wLjQwNCwwLjg3M2MtMC4xODQsMC4xODQtMC4zOTYsMC4yNzUtMC42NDYsMC4yNzVjLTAuMzc5LDAtMC42NjgtMC4yMTctMC44NjQt'+
			'MC42NSAgICBjLTAuMTk5LTAuNDMzLTAuMzAxLTEuMjQtMC4zMDEtMi40MjVDMjIuNDg0LDguMDg1LDIyLjU3Niw3LjI4MywyMi43NTYsNi44NDl6IiBmaWxsPSIjNjY2NjY2IiBmaWxsLW9wYWNpdHk9IjEiLz4KICAgPHBhdGggZD0iTTE1Ljg2NCwxNi4wMWM1LjE5MiwwLDkuNDc5LDEuNDEsMTAuMTc5LDMuMjQxYzAuNzI1LTAuMDMzLDEuNDYxLTAuMDU4LDIuMjIzLTAuMDU4ICAgIGMwLjc3OSwwLDEuNTQxLDAuMDIxLDIuMjgxLDAuMDZjLTEuMDc0LTIuMjkzLTcuMjI5LTQuMDUtMTQuNjgzLTQuMDVDNy42NTUsMTUuMjAzLDEsMTcuMzMzLDEsMTkuOTYxICAgIGMwLDIuNDY1LDUuODQsNC40OT'+
			'EsMTMuMzMsNC43MzRsLTEuNTIzLDIuMTZsMTQuMzU0LTIuNzdsLTEwLjQ0Ny0yLjc3MWwtMS41NTgsMi4yMDljLTUuMzUxLTAuMTMzLTkuNTgyLTEuNzYtOS41ODItMy43NTIgICAgQzUuNTc0LDE3LjY5MSwxMC4xODIsMTYuMDEsMTUuODY0LDE2LjAxeiIgZmlsbD0iIzY2NjY2NiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._autorotate__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJFYmVuZV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdG'+
			'g9IjMycHgiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxnPgogIDxnPgogICA8cGF0aCBkPSJNNy4xNjYsMTIuNTIxYy0wLjMxMywwLTAuNTcyLTAuMS0wLjc3NS0wLjMwMWMtMC4yMDMtMC4yMDEtMC4zNTQtMC41NjEtMC40NS0xLjA4bC0yLjQ1NywwLjM0MiAgICBjMC4xNjEsMC41OCwwLjM5MiwxLjA2LDAuNjksMS40NDJjMC4zLDAuMzg0LDAuNjgyLDAuNjc1LDEuMTQ2LDAuODcyYzAuNDY1LDAuMTk4LDEuMSwwLjI5OCwxLjkw'+
			'NSwwLjI5OCAgICBjMC44MjUsMCwxLjQ5MS0wLjEzNCwxLjk5OC0wLjQwM2MwLjUwNy0wLjI2OCwwLjg5Ni0wLjY0OSwxLjE2NS0xLjE0NnMwLjQwNC0xLjAxNiwwLjQwNC0xLjU1N2MwLTAuNDMyLTAuMDgyLTAuODAzLTAuMjQ0LTEuMTEzICAgIGMtMC4xNjQtMC4zMTEtMC4zOTMtMC41NjEtMC42ODYtMC43NTFDOS42ODMsOS4wMDQsOS40Miw4Ljg5OSw5LjA3OCw4LjgxMmMwLjQyNC0wLjI0NCwwLjczOS0wLjUyOSwwLjk0OC0wLjg1NSAgICBjMC4yMDktMC4zMjUsMC4zMTMtMC42ODgsMC4zMTMtMS4wOWMwLTAuNjg2LTAuMjU4LTEuMjU0LTAuNzcyLTEuNzA2Yy0wLjUxNC0wLjQ1Mi0xLjM1LT'+
			'AuNjgtMi41MDUtMC42OCAgICBjLTEuMDA2LDAtMS43ODQsMC4yMDctMi4zMzMsMC42MjFzLTAuOTIsMS4wMS0xLjExNCwxLjc4OWwyLjMyNCwwLjQzN2MwLjA2NS0wLjQ2MSwwLjE4OC0wLjc4MywwLjM3LTAuOTY4ICAgIEM2LjQ5LDYuMTc2LDYuNzI1LDYuMDg1LDcuMDE1LDYuMDg1YzAuMjgsMCwwLjUwMywwLjA4NSwwLjY2NiwwLjI1NUM3Ljg0LDYuNTA5LDcuOTIyLDYuNzM1LDcuOTIyLDcuMDE5ICAgIGMwLDAuMjk3LTAuMTA4LDAuNTUxLTAuMzIzLDAuNzY4QzcuMzgzLDguMDAxLDcuMTE0LDguMTA4LDYuNzkzLDguMTA4Yy0wLjA3NiwwLTAuMTg0LTAuMDEtMC4zMi0wLjAzMUw2LjM0Nyw5'+
			'LjkyMiAgICBDNi42ODUsOS44MjEsNi45NSw5Ljc3MSw3LjE0Myw5Ljc3MWMwLjM2MSwwLDAuNjQ4LDAuMTE5LDAuODU5LDAuMzU0YzAuMjEzLDAuMjM1LDAuMzE3LDAuNTY5LDAuMzE3LDEuMDAxICAgIGMwLDAuNDIzLTAuMTA4LDAuNzYyLTAuMzI5LDEuMDE2QzcuNzcxLDEyLjM5NCw3LjQ5NiwxMi41MjEsNy4xNjYsMTIuNTIxeiIgZmlsbD0iIzFBMTcxQiIvPgogICA8cGF0aCBkPSJNMTMuNTc0LDEzLjYxOGMwLjUzNSwwLjMxNiwxLjI0NiwwLjQ3NiwyLjEzMSwwLjQ3NmMwLjczNiwwLDEuMzUtMC4xMywxLjgzOC0wLjM5ICAgIGMwLjQ4Ni0wLjI2LDAuODcxLTAuNjQ1LDEuMTQ2LTEuMTUxYz'+
			'AuMjc0LTAuNTA2LDAuNDEyLTEuMDY3LDAuNDEyLTEuNjhjMC0wLjkwOS0wLjI3MS0xLjY1OS0wLjgxNS0yLjI1MSAgICBjLTAuNTQ2LTAuNTkyLTEuMjEzLTAuODg5LTItMC44ODljLTAuNDA2LDAtMC43NjYsMC4wNzYtMS4wNzYsMC4yMjZjLTAuMzEsMC4xNDktMC42MTEsMC4zODEtMC45MDQsMC42OTQgICAgQzE0LjM4MSw3LjY1NiwxNC41LDcuMDA1LDE0LjY2LDYuN2MwLjIyMy0wLjQyNCwwLjUzMi0wLjYzNSwwLjkzLTAuNjM1YzAuMjIyLDAsMC40MDgsMC4wNzQsMC41NTksMC4yMjNzMC4yNTksMC40MDIsMC4zMjMsMC43NjEgICAgbDIuNDQ0LTAuMzE3Yy0wLjE0My0wLjQ5OC0wLjM1LTAu'+
			'OTE0LTAuNjE5LTEuMjQ0Yy0wLjI3LTAuMzI4LTAuNjA3LTAuNTc5LTEuMDE4LTAuNzVjLTAuNDA2LTAuMTcyLTAuOTY0LTAuMjU4LTEuNjY4LTAuMjU4ICAgIGMtMS4xODksMC0yLjEyMiwwLjM5MS0yLjc5NCwxLjE3Yy0wLjY3MiwwLjc4MS0xLjAwOCwyLjAxLTEuMDA4LDMuNjg4YzAsMS4xNDYsMC4xNiwyLjA2NiwwLjQ3OSwyLjc2MiAgICBDMTIuNjExLDEyLjc5NSwxMy4wMzksMTMuMzAxLDEzLjU3NCwxMy42MTh6IE0xNC43MzcsOS43MzFjMC4yMzEtMC4yNjcsMC41MTktMC4zOTksMC44Ni0wLjM5OWMwLjMzNCwwLDAuNjEzLDAuMTM4LDAuODQsMC40MTIgICAgYzAuMjI1LDAuMjc0LDAuMz'+
			'M4LDAuNjc1LDAuMzM4LDEuMTk4YzAsMC41MTItMC4xMDksMC44OTYtMC4zMjYsMS4xNTRjLTAuMjE4LDAuMjU4LTAuNDg2LDAuMzg3LTAuODA5LDAuMzg3ICAgIGMtMC4zNSwwLTAuNjQ2LTAuMTQzLTAuODg5LTAuNDI4Yy0wLjI0LTAuMjg1LTAuMzYxLTAuNjgtMC4zNjEtMS4xODNDMTQuMzkxLDEwLjM3OCwxNC41MDYsOS45OTgsMTQuNzM3LDkuNzMxeiIgZmlsbD0iIzFBMTcxQiIvPgogICA8cGF0aCBkPSJNMjAuNzIzLDEyLjYyMmMwLjI5MywwLjQ4MiwwLjY3LDAuODQ4LDEuMTI5LDEuMDk3YzAuNDU5LDAuMjUsMS4wNjIsMC4zNzUsMS44MDUsMC4zNzUgICAgYzEuMzI4LDAsMi4yNjUtMC4z'+
			'OTEsMi44MDgtMS4xNzNjMC41NDMtMC43ODEsMC44MTMtMi4wMTYsMC44MTMtMy43MDNjMC0wLjc1Mi0wLjA4Mi0xLjQ3NS0wLjI0Ni0yLjE2OCAgICBjLTAuMDg2LTAuMzYzLTAuMTk2LTAuNjgyLTAuMzM2LTAuOTU1Yy0wLjEzOS0wLjI3My0wLjMyNy0wLjUzMy0wLjU2OS0wLjc3OWMtMC4yNDItMC4yNDgtMC41NTQtMC40NDgtMC45MzctMC42MDMgICAgYy0wLjM4My0wLjE1My0wLjg3MS0wLjIzMS0xLjQ2Ny0wLjIzMWMtMS4yNCwwLTIuMTYyLDAuMzU0LTIuNzcsMS4wNmMtMC42MDQsMC43MDYtMC45MDgsMS45NDItMC45MDgsMy43MDkgICAgYzAsMC43MTgsMC4wNjEsMS4zNzQsMC4xOCwxLj'+
			'k2OEMyMC4zNDIsMTEuODEyLDIwLjUwOCwxMi4yOCwyMC43MjMsMTIuNjIyeiBNMjIuNzU2LDYuODQ5QzIyLjkzOCw2LjQxNiwyMy4yMzIsNi4yLDIzLjYzOSw2LjIgICAgYzAuMzk2LDAsMC42OTUsMC4yMTMsMC44OTYsMC42MzhjMC4xOTgsMC40MjYsMC4yOTksMS4yNTQsMC4yOTksMi40ODhjMCwwLjg0MS0wLjA0MywxLjQ2MS0wLjEyOSwxLjg1NyAgICBjLTAuMDg4LDAuMzk3LTAuMjIyLDAuNjg4LTAuNDA0LDAuODczYy0wLjE4NCwwLjE4NC0wLjM5NywwLjI3NS0wLjY0NywwLjI3NWMtMC4zNzksMC0wLjY2OC0wLjIxNy0wLjg2NS0wLjY1ICAgIGMtMC4xOTktMC40MzMtMC4zMDEtMS4yNC0w'+
			'LjMwMS0yLjQyNUMyMi40ODQsOC4wODUsMjIuNTc2LDcuMjgzLDIyLjc1Niw2Ljg0OXoiIGZpbGw9IiMxQTE3MUIiLz4KICAgPHBhdGggZD0iTTE1Ljg2NCwxNi4wMWM1LjE5MiwwLDkuNDc5LDEuNDEsMTAuMTc5LDMuMjQxYzAuNzI1LTAuMDMzLDEuNDYxLTAuMDU4LDIuMjIzLTAuMDU4ICAgIGMwLjc3OSwwLDEuNTQxLDAuMDIxLDIuMjgxLDAuMDZjLTEuMDc0LTIuMjkzLTcuMjI5LTQuMDUtMTQuNjgzLTQuMDVDNy42NTUsMTUuMjAzLDEsMTcuMzMzLDEsMTkuOTYxICAgIGMwLDIuNDY1LDUuODQsNC40OTEsMTMuMzMsNC43MzRsLTEuNTIzLDIuMTZsMTQuMzU0LTIuNzY4bC0xMC40NDctMi43Nz'+
			'FsLTEuNTU4LDIuMjA5Yy01LjM1MS0wLjEzMy05LjU4Mi0xLjc2LTkuNTgyLTMuNzUyICAgIEM1LjU3NCwxNy42OTEsMTAuMTgyLDE2LjAxLDE1Ljg2NCwxNi4wMXoiIGZpbGw9IiMxQTE3MUIiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="autorotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 180px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : hidden;';
		hs+='width : 34px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._autorotate.ggIsActive=function() {
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
		me._autorotate.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getRowsCount() <= 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._autorotate.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._autorotate.ggConditionsTruePosition = newConditionsTruePosition;
				me._autorotate.style.transition='left 0s, top 0s';
				if (me._autorotate.ggConditionsTruePosition.includes(0)) {
					deltaX += -15;
					deltaY += 0;
				}
					me._autorotate.style.left=(180+deltaX) + 'px';
					me._autorotate.style.top=(9+deltaY) + 'px';
			}
		}
		me._autorotate.logicBlock_position();
		me._autorotate.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_autorotate') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._autorotate.style.transition='left 0s, top 0s';
				if (me._autorotate.ggCurrentLogicStateVisible == 0) {
					me._autorotate.style.visibility=(Number(me._autorotate.style.opacity)>0||!me._autorotate.style.opacity)?'inherit':'hidden';
					me._autorotate.ggVisible=true;
				}
				else {
					me._autorotate.style.visibility="hidden";
					me._autorotate.ggVisible=false;
				}
			}
		}
		me._autorotate.logicBlock_visible();
		me._autorotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._autorotate.onmouseenter=function (e) {
			me._autorotate__img.style.visibility='hidden';
			me._autorotate__imgo.style.visibility='inherit';
			me.elementMouseOver['autorotate']=true;
		}
		me._autorotate.onmouseleave=function (e) {
			me._autorotate__img.style.visibility='inherit';
			me._autorotate__imgo.style.visibility='hidden';
			me.elementMouseOver['autorotate']=false;
		}
		me._autorotate.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._autorotate);
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
		hs+='height : 32px;';
		hs+='left : 230px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen.ggIsActive=function() {
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
				me._fullscreen.style.transition='left 0s, top 0s';
				if (me._fullscreen.ggConditionsTruePosition.includes(0)) {
					deltaX += -15;
					deltaY += 0;
				}
				if (me._fullscreen.ggConditionsTruePosition.includes(1)) {
					deltaX += -50;
					deltaY += 0;
				}
					me._fullscreen.style.left=(230+deltaX) + 'px';
					me._fullscreen.style.top=(10+deltaY) + 'px';
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
				me._fullscreen.style.transition='left 0s, top 0s';
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
		me._controller.appendChild(me._fullscreen);
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
		hs+='height : 25px;';
		hs+='left : 81px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
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
			player.changeViewState("0",0.05);
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._image_1);
		el=me._image_1_1=document.createElement('div');
		els=me._image_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_1';
		hs=basePath + 'images/image_1_1.png';
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
		el.ggId="Image 1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 126px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1_1.ggIsActive=function() {
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
		me._image_1_1.onclick=function (e) {
			player.changeViewState("1",0.05);
		}
		me._image_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._image_1_1);
		me.divSkin.appendChild(me._controller);
		me._controller.logicBlock_size();
		me._down.logicBlock_visible();
		me.elementMouseOver['down']=false;
		me._up.logicBlock_visible();
		me.elementMouseOver['up']=false;
		me._left.logicBlock_position();
		me.elementMouseOver['left']=false;
		me._right.logicBlock_position();
		me.elementMouseOver['right']=false;
		me._autorotate.logicBlock_position();
		me._autorotate.logicBlock_visible();
		me.elementMouseOver['autorotate']=false;
		me._fullscreen.logicBlock_position();
		me._fullscreen.logicBlock_visible();
		me.elementMouseOver['fullscreen']=false;
		player.addListener('changenode', function(event) {
			me._controller.logicBlock_size();
			me._autorotate.logicBlock_visible();
			me._fullscreen.logicBlock_position();
			me._fullscreen.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			me._variable_has_fullscreen.logicBlock();
			me._controller.logicBlock_size();
			me._down.logicBlock_visible();
			me._up.logicBlock_visible();
			me._left.logicBlock_position();
			me._right.logicBlock_position();
			me._autorotate.logicBlock_position();
			me._autorotate.logicBlock_visible();
			me._fullscreen.logicBlock_position();
			me._fullscreen.logicBlock_visible();
		});
		player.addListener('varchanged_has_fullscreen', function(event) {
			me._controller.logicBlock_size();
			me._fullscreen.logicBlock_visible();
		});
		player.addListener('varchanged_opt_autorotate', function(event) {
			me._controller.logicBlock_size();
			me._autorotate.logicBlock_visible();
			me._fullscreen.logicBlock_position();
		});
		player.addListener('varchanged_opt_fullscreen', function(event) {
			me._controller.logicBlock_size();
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
};