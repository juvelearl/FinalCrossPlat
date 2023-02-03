<template>
    <div>
      <nav>
      <li>
        <div class="icon-bar">
            <b-button v-b-toggle.sidebar-1 vertical class="btn-primary d-block p-3 text-decoration-none">Sidebar</b-button>
            <b-sidebar id="sidebar-1" title="Sidebar" shadow>
              <nav class="mb-3">
              <b-nav vertical>
                <NuxtLink to="/homepage" class="btn btn-primary navbar-btn"> Dashboard</NuxtLink>
                <NuxtLink to="/dashboard" class="btn btn-primary navbar-btn"> Add Students</NuxtLink>
              </b-nav>
            </nav>
            </b-sidebar>
          </div>
      </li>
      <li style="float:right"><a href="/" class="d-block p-3 link-light text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
        <svg class="bi" width="40" height="1px"><use xlink:href="#bootstrap"></use></svg>
        <span class="visually-hidden">Logout</span>
      </a></li>
    </nav>
        <div class="container" style="padding: 4rem; margin-left:250px">
            <div>
                <h3>Welcome to My Website's Home</h3>
            </div>
          </div>
    </div>
</template>
<style scoped>
nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color:#1886CA;
  }

li {
    float: left;
    border-right:1px solid #bbb;
  }

li:last-child {
    border-right: none;
  }

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

li a:hover:not(.active) {
    background-color: #111;
  }
</style>
