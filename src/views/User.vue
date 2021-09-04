<template>
    <div>
        <!-- <Header /> -->
        <div class="container">
            <div class="row mt-4">
                <div class="col">
                    <h2>Users</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-4">
                        <b-button v-b-modal.modal-1 class="btn btn-success">Add</b-button>
                        <b-modal 
                            size="lg"
                            id="modal-1"
                            title="ADD/UPDATE"
                            no-close-on-backdrop
                            hide-header-close
                        >
                            <form @submit.prevent="add">
                                <input type="hidden" v-model="form.id" />
                                <label class="col-sm-5">Nama Depan</label>
                                <input type="text" v-model="form.firstName" />
                                <label class="col-sm-5">Nama Belakang</label>
                                <input type="text" v-model="form.lastName" />
                                <label class="col-sm-5">E-mail</label>
                                <input type="text" v-model="form.emailId" />
                                <button 
                                    type="submit"
                                    v-show="!updateSubmit"
                                    class="btn btn-success"
                                    @click="$bvModal.hide('modal-1')"
                                >
                                    add
                                </button>
                                <button
                                    type="button"
                                    v-show="updateSubmit"
                                    class="btn btn-success"
                                    @click="update(form), $bvModal.hide('modal-1')"
                                >
                                    Update
                                </button>
                            </form>
                        </b-modal>
                    </div>
                </div>
            </div>
            <div>
                <b-pagination
                    align="center"
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="user-table"
                ></b-pagination>
                <b-table
                    id="user-table"
                    :per-page="perPage"
                    :current-page="currentPage"
                    striped
                    hover
                    :fields="fields"
                    :items="users"
                >
                <template v-slot:cell(action)="data">
                    <button
                        v-b-modal.modal-1
                        @click="edit(data.item)"
                        class="btn btn-success"
                    >
                        Edit
                    </button>
                    ||
                    <button @click="del(data.item)" class="btn btn-success">
                        Delete
                    </button>
                </template>
                </b-table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// import Header from '@/components/Header.vue'

export default {
    // components: {
    //     Header,
    // },
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            fields: [
                { key: "firstName", label: "Nama Depan", sortable: true},
                { key: "lastName", label: "Nama Belakang", sortable: true},
                { key: "emailId", label: "Email", sortable: true},
                "action",
            ],
            form: {
                id: "",
                firstName: "",
                lastName: "",
                emailId: ""
            },
            users: [],
            updateSubmit: false,
        };
    },
    mounted() {
        this.load();
    },
    computed: {
        rows() {
            return this.users.length;
        },
    },
    methods: {
        load() {
            axios
            .get("http://localhost:3000/user")
            .then((res) => {
                this.users = res.data;
            })
            .catch((err) => {
                console.log(err);
            });
        },
        add() {
            if (this.form.firstName) {
                axios.post("http://localhost:3000/user", this.form).then(() => {
                    this.load();
                    this.form.firstName = "";
                });
            } else {
                this.$toast.error("Data TIDAK BOLEH KOSONG", {
                    type: "error",
                    position: "top-right", 
                    duration: 3000,
                    dismissible: true,
                });
            }
        },
        edit(user) {
            this.updateSubmit = true;
            this.form.id = user.id;
            this.form.firstName = user.firstName;
            this.form.lastName = user.lastName;
            this.form.emailId = user.emailId;
        },
        update(form) {
            if (this.form.firstName) {
                return axios 
                .put("http://localhost:3000/user/" + form.id, {
                    firstName: this.form.firstName,
                    lastName: this.form.lastName,
                    emailId:  this.form.emailId,
                })
                .then(() => {
                    this.load();
                    this.form.id = "";
                    this.form.firstName = "";
                    this.form.lastName = "";
                    this.form.emailId = "";
                    this.updateSubmit = false;
                })
                .catch((err) => {
                console.log(err);
            });
            } else {
                this.$toast.error("Data TIDAK BOLEH KOSONG", {
                    type: "error",
                    position: "top-right", 
                    duration: 3000,
                    dismissible: true,
                });
            }
        },
        del(user) {
            axios.delete("http://localhost:3000/user/" + user.id).then(() => {
                this.load();
                // let index = this.users.indexOf(form.firstName); //tidak usah dipakai
                // this.users.splice(index, 1); //tidak usah dipakai
            });
        },
    },  
};
</script>

