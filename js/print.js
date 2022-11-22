function myPrint(myfrm) {
  var printdata = document.getElementById(myfrm);
  mywindow = window.open("", "", "width=auto,height=auto");

  mywindow.document.write("<html>");
  mywindow.document.write("<head>");
  mywindow.document.write(
    "<title>Ample Admin Lite Template by WrapPixel</title>"
  );
  mywindow.document.write('<link href="css/style.min.css" rel="stylesheet"/>');
  mywindow.document.write("</head><body >");

  mywindow.document.write(printdata.outerHTML);
  mywindow.document.write("</body>");
  mywindow.document.write("</html>");
  mywindow.focus();
  console.log(mywindow.document);

  mywindow.print();
  mywindow.close();
}

function handleSubmit() {
  console.log("submit-abc");
  const userName = document.getElementById("name").value;
  console.log(userName);
  const formObject = [
    {
      userName: userName,
    },
  ];

  localStorage.setItem("profileObject", JSON.stringify(formObject));
}
