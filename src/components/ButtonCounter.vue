<template>
<button v-on:click="count++">
    <!-- {{ msg }} -->
    Anda mengklik saya {{ count }} kali.</button>
</template>

<script>
export default {
    data: function () {
        return {
            count: 0,
        };
    },
    // props: {
    //     msg: String
    // }
};
</script>