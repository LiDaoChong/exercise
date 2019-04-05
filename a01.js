var num = 1;
function foo() {

	var num = 2;
	function bar(){

		var num = 3;
		function col(){
			num = 4;
			alert(num);
		}
		col();
		alert(num);
	}
	bar();
	alert(num);
}
foo();
alert(num);