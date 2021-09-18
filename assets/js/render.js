var headerContent = `


<div class="topnav nav-gradient" id="myTopnav">
  <a href="#home" class="active">Trang chủ</a>
  <a href="#news">Blog</a>
  <a href="https://fb.com/leminhtri.dev">Liên hệ</a>
  <a href="#about">Tổ chức Kode</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

`;

var footerContent = `
  
<div class="topnav nav-gradient fixed-bottom" id="myTopnav">
<div class="hydro" style="float:left">
<span>Hydro Team</span>
</div>

<div style="float: right">
<a href="#"><i class="fab fa-facebook"></i></a>
</>
</div>

`;

document.getElementById("header").innerHTML = headerContent;

document.getElementById("footer").innerHTML = footerContent;
