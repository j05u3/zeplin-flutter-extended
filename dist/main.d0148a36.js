!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.extension=e():t.extension=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t){return{code:c(t).join("\n"),language:"dart"}}function r(t){return{code:u(t).join("\n"),language:"dart"}}function l(t,e){return e.length>0?e.map(function(t){return new function(t,e,n,o,r){this.color=t,this.offsetx=e,this.offsety=n,this.blurRadius=o,this.spreadRadius=r}(new f(t.color.toHex().r,t.color.toHex().g,t.color.toHex().b,t.color.toHex().a),t.offsetX,t.offsetY,t.blurRadius,t.spread)}):null}function i(t,e,n,r){var l;if(l=n?"\n      ":"",e<1)return`${l}Color(0x${t.a}${t.r}${t.g}${t.b}).withOpacity(${e})`;var i=function(t,e){o=[];var n="";return null!=t&&t.project.colors.map(function(t){(function(t,e){return t.r==e.r&&t.g==e.g&&t.b==e.b&&t.a==e.a})(new f(t.toHex().r,t.toHex().g,t.toHex().b,t.toHex().a),e)&&(n=t.name)}),n}(r,t);return""!=i?`${l}${i}`:`${l}Color(0x${t.a}${t.r}${t.g}${t.b})`}function s(t,e){var n,o;return n=null!=t.shadows?`shadows: ${a(t.shadows)}`:"",o=null!=t.letterSpacing?`letterSpacing: ${t.letterSpacing},`:"",`TextStyle(\n    fontFamily: '${t.fontFamily}',\n    color: ${i(t.color,1,!1,e)},\n    fontSize: ${t.fontSize},\n    fontWeight: FontWeight.w${t.fontWeight},\n    fontStyle: FontStyle.${t.fontStyle},\n    ${o}\n    ${n}\n    )`}function a(t,e){return`[${t.map(function(t){return function(t,e){return`BoxShadow(\n        color: ${i(t.color,1,!1,e)},\n        offset: Offset(${t.offsetx},${t.offsety}),\n        blurRadius: ${t.blurRadius},\n        spreadRadius: ${t.spreadRadius}\n\n    )`}(t,e)})} ],\n`}function c(t){return o=[],t.project.colors.map(function(t){o.push(`const Color ${t.name} = const ${i(new f(t.toHex().r,t.toHex().g,t.toHex().b,t.toHex().a),1,!1)};`)}),o}function u(t){return r=[],t.project.textStyles.map(function(e){r.push(`const TextStyle ${e.name.replace(/\s/g,"")} = const ${s(new x(e.fontFamily,new f(e.color.toHex().r,e.color.toHex().g,e.color.toHex().b,e.color.toHex().a),e.fontSize,e.fontWeight,e.fontStyle,e.letterSpacing,e.lineHeight,l(0,[])),t)};`)}),r}function f(t,e,n,o){this.r=t,this.g=e,this.b=n,this.a=o}function d(t,e){this.text=t,this.textStyle=e}function x(t,e,n,o,r,l,i,s){this.fontFamily=t,this.color=e,this.fontSize=n,this.fontWeight=o,this.fontStyle=r,this.letterSpacing=l,this.height=i,this.shadows=s}Object.defineProperty(e,"__esModule",{value:!0}),e.default={layer:function(t,e){switch(e.type){case"text":return{code:`${function(t,e){var n;if(e.textStyles.length>1){var o=[];e.textStyles.map(function(t){o.push(new d(e.content.substring(t.range.start,t.range.end),new x(t.textStyle.fontFamily,new f(t.textStyle.color.toHex().r,t.textStyle.color.toHex().g,t.textStyle.color.toHex().b,t.textStyle.color.toHex().a),t.textStyle.fontSize,t.textStyle.fontWeight,t.textStyle.fontStyle,t.textStyle.letterSpacing,t.textStyle.lineHeight,l(0,e.shadows))))}),n=function(t,e){return`RichText(\n    text: new TextSpan(\n    children: [\n    ${t.map(function(t){return function(t,e){return`\n\tnew TextSpan(\n    text: "${t.text}",\n    style: ${s(t.textStyle,e)}\n    )`}(t,e)})},\n    ]\n  )\n)`}(o,t)}else 1==e.textStyles.length&&(n=function(t,e){return`new Text("${t.text}",\n    style: ${s(t.textStyle,e)}\n)`}(new d(e.content,new x(e.textStyles[0].textStyle.fontFamily,new f(e.textStyles[0].textStyle.color.toHex().r,e.textStyles[0].textStyle.color.toHex().g,e.textStyles[0].textStyle.color.toHex().b,e.textStyles[0].textStyle.color.toHex().a),e.textStyles[0].textStyle.fontSize,e.textStyles[0].textStyle.fontWeight,e.textStyles[0].textStyle.fontStyle,e.textStyles[0].textStyle.letterSpacing,e.textStyles[0].textStyle.lineHeight,l(0,e.shadows))),t));return n}(t,e)}`,language:"dart"};case"shape":return{code:function(t,e){var n=[];return null!=t.decoration&&(null!=t.decoration.color&&n.push(`color: ${i(t.decoration.color,t.decoration.opacity,!1,e)}`),null!=t.decoration.border&&n.push(`border: ${function(t,e){return`Border.all(\n      color: ${i(t.color,1,!1,e)},\n      width: ${t.width}\n    )`}(t.decoration.border,e)}`),null!=t.decoration.borderRadius&&n.push(`\t\tborderRadius: BorderRadius.circular(${t.decoration.borderRadius})`),null!=t.decoration.gradient&&n.push(`\t\tgradient: ${function(t,e){return"linear"===t.type?`LinearGradient(colors: [${t.colors.map(function(t){return i(t,1,!0,e)})} ],\n    stops: [\n        ${t.stops.join(",\n\t\t\t\t")}\n    ]\n    )`:"radial"===t.type?`RadialGradient(colors: [${t.colors.map(function(t){return i(t,1,!0,e)})} ],\n    stops: [\n        ${t.stops.join(",\n\t\t\t\t")}\n    ]\n    )`:""}(t.decoration.gradient,e)}`),null!=t.decoration.shadows&&n.push(`\t\tboxShadow: ${a(t.decoration.shadows,e)}`)),`new Container(\n  width: ${t.width},\n  height: ${t.height},\n  decoration: new BoxDecoration(\n    ${n.join(",\n")}\n  )\n)`}(function(t,e){var n=new function(t,e,n){this.width=t,this.height=e,this.decoration=n}(e.rect.width,e.rect.height);return n.decoration=function(t,e){var n=new function(t,e,n,o,r,l){this.color=t,this.border=e,this.borderRadius=n,this.shadows=o,this.gradient=r,this.opacity=l};return e.fills.length>0&&(n.gradient=function(t,e){return function(t,e){return e.fills.some(function(t){return"gradient"===t.type})}(0,e)?new function(t,e,n,o){this.type=t,this.colors=e,this.stops=n,this.angle=o}(e.fills[e.fills.length-1].gradient.type,e.fills[e.fills.length-1].gradient.colorStops.map(function(t){return new f(t.color.toHex().r,t.color.toHex().g,t.color.toHex().b,t.color.toHex().a)}),e.fills[e.fills.length-1].gradient.colorStops.map(function(t){return t.position}),e.fills[e.fills.length-1].gradient.angle):null}(0,e),null==n.gradient&&(n.color=new f(e.fills[e.fills.length-1].color.toHex().r,e.fills[e.fills.length-1].color.toHex().g,e.fills[e.fills.length-1].color.toHex().b,e.fills[e.fills.length-1].color.toHex().a))),n.border=function(t,e){return e.borders.length>0?new function(t,e){this.color=t,this.width=e}(new f(e.borders[e.borders.length-1].fill.color.toHex().r,e.borders[e.borders.length-1].fill.color.toHex().g,e.borders[e.borders.length-1].fill.color.toHex().b,e.borders[e.borders.length-1].fill.color.toHex().a),e.borders[e.borders.length-1].thickness):null}(0,e),0!=e.borderRadius&&(n.borderRadius=e.borderRadius),n.shadows=l(0,e.shadows),n.opacity=e.opacity,n}(0,e),n}(0,e),t),language:"dart"};case"group":return{code:"group",language:"dart"}}},screen:function(t,e,n){return{code:"Cooming soon",filename:`${t.project.name}TextStyles.dart`,language:"dart"}},component:function(t,e,n){return{code:"Cooming soon",filename:`${t.project.name}TextStyles.dart`,language:"dart"}},colors:o,textStyles:r,exportColors:function(t){return{code:`import 'package:flutter/material.dart';\n\n${c(t).join("\n")}`,filename:`${t.project.name}Colors.dart`,language:"dart"}},exportTextStyles:function(t){return{code:`import 'package:flutter/material.dart';\n\n${u(t).join("\n")}`,filename:`${t.project.name}TextStyles.dart`,language:"dart"}}}}]).default});