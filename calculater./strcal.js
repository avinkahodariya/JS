a = "";
var output = "";

function btn(num) {
  //   if (output !== "") {
  //     document.getElementById("input").value = "";
  //     output = "";
  //   }
  document.getElementById("input").value =
    document.getElementById("input").value + num;
}

function op(s) {
  ops = document.getElementById("input").value;
  console.log(ops);
  console.log(ops.charAt(ops.length - 1));
  if (
    ops.charAt(ops.length - 1) == "+" ||
    ops.charAt(ops.length - 1) == "-" ||
    ops.charAt(ops.length - 1) == "*" ||
    ops.charAt(ops.length - 1) == "/"
  ) {
    sign = s;
    console.log(ops);
    console.log("as");
    ops = ops.substr(0, ops.length - 1);
    console.log(ops);
    console.log(s);
    document.getElementById("input").value = ops + s;
    console.log(document.getElementById("input").value);
  } else {
    document.getElementById("input").value =
      document.getElementById("input").value + s;
  }
}

function equal() {
  input = document.getElementById("input").value;

  var pre = [["/"], ["*"], ["+"], ["-"]];
  for (i = 0; i < 4; i++) {
    var re = new RegExp(
      "(\\d+\\.?\\d*)([\\" + pre[i].join("\\") + "])(\\d+\\.?\\d*)"
    );
    re.lastIndex = 0;

    console.log(re);
    while (re.test(input)) {
      console.log(RegExp.$1);
      console.log(RegExp.$2);
      console.log(RegExp.$3);
      output = calculate(RegExp.$1, RegExp.$2, RegExp.$3);
      console.log(output);

      if (isNaN(output) || !isFinite(output)) {
        document.getElementById("input").value = output;
      }

      input = input.replace(re, output);
    }
  }

  function calculate(a, b, c) {
    a = a * 1;
    c = c * 1;

    console.log(RegExp.$2);
    console.log(RegExp.$3);

    switch (b) {
      case "+":
        return parseFloat(a) + parseFloat(c);
        break;
      case "-":
        return parseFloat(a) - parseFloat(c);
        break;
      case "*":
        return parseFloat(a) * parseFloat(c);
        break;
      case "/":
        return parseFloat(a) / parseFloat(c);
        break;
    }
  }
  document.getElementById("input").value = output;
}

function clr() {
  document.getElementById("input").value = "";
  output = "";
}
