<template>
  <div class="user-management">
    <template>
      <div class="header">
        <div class="title">
          <h4>
            <strong>List User</strong>
          </h4>
          <template>
            <h6 v-if="isPlurality">Total {{ numUsers }} users</h6>
            <h6 v-else>Total {{ numUsers }} user</h6>
          </template>
        </div>
        <FlatButton isPrimary title="Add user" />
      </div>
    </template>
    <div class="body">
      <UserListing :role="Role.Staff" :users="users"></UserListing>
      <UserListing :role="Role.Admin" :users="users"></UserListing>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserListing from "@/screens/UserManagement/UserListing.vue";
import { Role, User } from "@/screens/UserManagement/Model";

@Component({
  components: { UserListing }
})
export default class UserManagement extends Vue {
  private readonly Role = Role;
  private users: User[] = [
    User.fake(),
    User.fake(),
    User.fake(),
    User.fake(),
    User.fake(),
    User.fake(),
    User.fake(),
    User.fake(),
    User.fake(),
    User.fake(), User.fake(),
    User.fake(),
    User.fake(),
    User.fake(),
    User.fake()
  ];

  get numUsers(): number {
    return 0;
  }

  get isPlurality(): boolean {
    return this.numUsers > 1;
  }
}
</script>

<style lang="scss">
.user-management {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: auto;
  padding: 16px;
  width: 80vw;

  > .header {
    display: flex;
    margin-bottom: 24px;

    > div.btn {
      margin-left: auto;
    }
  }

  > .body {
    display: flex;
    flex-shrink: 1;
    justify-content: space-around;
    overflow: hidden;

    > div {
      max-width: 47%;
    }
  }
}
</style>
