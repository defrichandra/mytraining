<template>
    <div>
        <div class="container">
            <div class="row mt-4">
                <div class="col">
                    <h2>Students</h2>
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
                        <b-modal
                        id="modal-delete"
                        title="Delete"
                        no-close-on-backdrop
                        hide-header-close
                        hide-footer
                        >
                            <button
                                type="button"
                                class="btn btn-success"
                                @click="del(form), $bvModal.hide('modal-delete')"
                            >
                                Ya
                            </button>
                            ||
                            <button
                                type="button"
                                class="btn btn-success"
                                @click= "$bvModal.hide('modal-delete')"
                            >
                                Tidak
                            </button>
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
                    aria-controls="student-table"
                ></b-pagination>
                <b-table
                    id="student-table"
                    :per-page="perPage"
                    :current-page="currentPage"
                    striped
                    hover
                    :fields="fields"
                    :items="allStudents"
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
                    <button v-b-modal.modal-delete @click="hapus(data.item)" class="btn btn-success">
                        Delete
                    </button>
                </template>
                </b-table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
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
            //students: [],
            updateSubmit: false,
        };
    },
    mounted() {
        //this.load();
        this.fetchStudents()
    },
    computed: {
        ...mapGetters(['allStudents']),
        rows() {
            return this.allStudents.length;
        },  
    }, 
    methods: {
        ...mapActions(['fetchStudents', 'addStudent', 'updateStudent', 'removeStudent']),
        add() {
            if (this.form.firstName) {
                this.addStudent(this.form)
                .then(() => {
                    this.fetchStudents();
                    this.form.firstName = "";
                    this.form.lastName = "";
                    this.form.emailId= ""; 
                });
            }
            else {
                this.$toast.error("Data TIDAK BOLEH KOSONG", {
                    type: "error",
                    position: "top-right", 
                    duration: 3000,
                    dismissible: true,
                });
            }
        },
        edit(student) {
            this.updateSubmit = true;
            this.form.id = student.id;
            this.form.firstName = student.firstName;
            this.form.lastName = student.lastName;
            this.form.emailId = student.emailId;
        },
        hapus(student) {
            this.form.id = student.id;
            this.form.firstName = student.firstName;
            this.form.lastName = student.lastName;
            this.form.emailId = student.emailId;
        },
        update() {
            if (this.form.firstName) {            
                this.updateStudent(this.form)
                .then(() => {
                    this.fetchStudents();
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
        del(student) {
            this.removeStudent(student).then(() => {
                this.fetchStudents();
            });
        },
    },
}
</script>
