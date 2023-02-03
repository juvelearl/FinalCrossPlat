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
      <h3>Dashboard</h3>
      <hr>
      <h4>Add Students</h4>
      </div>
      <br>
      <div class="form-inline" action="#">
      <input v-model="item.name" id="FName"  type="text"  placeholder="First Name" class="form-control">
      <input v-model="item.lastname" id="LName" type="text" placeholder="Last Name" class="form-control">
      <button class="btn btn-dark" @click="addItem" id="AddUser"><i class="fas fa-plus">Add</i></button>
        </div>
      <br><br>
      <table class="table table-striped table-bordered table-sm" id="MyTable">
        <thead class="thead-light">
          <th>First Name</th>
          <th>Last Name</th>
          <th class="col-2">Edit/Delete</th>
        </thead>
        <tr v-for="item in items" v-bind:key="item.name">
          <td>
            <input v-if="item.edit" v-model="item.name" type="text">
            <span v-else>{{item.name}}</span>
          </td>
          <td>
            <input v-if="item.edit" v-model="item.lastname" type="text">
            <span v-else>{{item.lastname}}</span>
          </td>
          <td>
            <button class="btn" @click="ItemEdit(item)">Update</button>
            <button class="btn" @click="removeItem(item)">Delete</button></td>
        </tr>
      </table>
  </div>
  </div>

  </template>


  <script scope>
  const url = "http://localhost:3002/users";
    export default {
      data() {
      return {
        item: {id: 0, name: "", lastname: "", edit: false},
        items: [],
        tempData: []
      }
    },
    methods:{
      async addItem() {
        console.log(this.item.id);
        await this.$axios.$post(url + '/insert', this.item)
        .then((res) => {
          console.log(res);
          this.item = {id: 0, name: "", lastname: "", edit: false};
          this.GetAllData();
        })
        .catch((err) => console.log(err));
      },
      async removeItem(item){
        await this.$axios.$post(url + '/delete', { id: item.id })
        .then((res) => {
          console.log(res);
          this.GetAllData();
        })
        .catch((err) => console.log(err));
      },
      GetCurrentID(){
      this.item.id = Math.max.apply(Math, this.items.map(function(o) { return o.id; })) + 1;
      console.log(this.item);
      },
      async GetAllData(){
        await this.$axios.$get(url)
      .then((res) => {
        console.log(res);
        this.tempData = res;
      })
      .catch((err) => console.log(err));
      this.items = this.tempData;
      this.GetCurrentID();
      },
      async ItemEdit(item)
      {
        if(!item.edit)
        {
          item.edit = !item.edit
        }
        else
        {
          item.edit = !item.edit
          console.log(item);
          await this.$axios.$post(url + '/update', item)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
        }
      }
    },
    async mounted(){
      await this.GetAllData();
    }
    }
  </script>

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
