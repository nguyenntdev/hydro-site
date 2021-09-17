var headerContent = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
<!-- Container wrapper -->
<div class="container-fluid">
  <!-- Toggle button -->
  <button
    class="navbar-toggler"
    type="button"
    data-mdb-toggle="collapse"
    data-mdb-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <i class="fas fa-bars"></i>
  </button>

  <!-- Collapsible wrapper -->
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <!-- Navbar brand -->
    <a class="navbar-brand mt-2 mt-lg-0" href="#">
      <img
        src="/assets/images/logo.png"
        height="40"
        alt=""
        loading="lazy"
      />
    </a>
    <!-- Left links -->
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#">Trang chủ</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Thành viên</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Dự án</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="https://kodelang.dev">Tổ chức Kode</a>
        </li>
    </ul>
    <!-- Left links -->
  </div>
  <!-- Collapsible wrapper -->

  <!-- Right elements -->
  <div class="d-flex align-items-center">
    <!-- Icon -->
    <a
      class="text-reset me-3"
      href="https://github.com/kakangocthien109/HydroOS"
      aria-expanded="false"
    >
      <i class="fab fa-github-square"></i>
    </a>
  </div>

  <div class="d-flex align-items-center">
    <!-- Icon -->
    <a
      class="text-reset me-3"
      href="https://facebook.com/hydroos.dev"
      aria-expanded="false"
    >
      <i class="fab fa-facebook-square"></i>
    </a>
  </div>
  <!-- Right elements -->
</div>
<!-- Container wrapper -->
</nav>
        `;

var footerContent = `
    
`;

document.getElementById("header").innerHTML = headerContent;

document.getElementById("footer").innerHTML = footerContent;
