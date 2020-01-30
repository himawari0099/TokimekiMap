/*
	コンテンツのリサイズ
	コンテンツの高さがウィンドウの高さより低い時は、
	ブラウザの高さと同じにする
*/
window.onload = function(){
	var windowHeight = this . innerHeight;
	var headerHeight = document . querySelector( "#wrapper > header" ) . clientHeight + 2;
	var contentWrapHeight = document . querySelector( "#contentWrap" ) . clientHeight;
	var footerHeight = document . querySelector( "#wrapper > footer" ) . clientHeight;
	var fullContentSize = headerHeight + contentWrapHeight + footerHeight;
	
	console . log( document . querySelector( "#wrapper > header" ) );
	
	if( windowHeight > fullContentSize ) {
		document . querySelector( "#contentWrap" ) . style . height = ( contentWrapHeight + (windowHeight - fullContentSize ) ) + "px";
	}
};
