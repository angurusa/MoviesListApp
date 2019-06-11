<template>
    <div class="pagination">
        <button class="prev" :disabled="pageNumber === 1" @click="prevPage">
            Prev
        </button>
        
        <span class="pages" v-for="(page, index) in pagination(pageNumber, totalPages)" :key="index">
            <button @click="gotoPage(page)">
                <span v-if="page === 1">First</span>
                <span v-else-if="page === totalPages">Last</span>
                <span v-else>{{page}}</span>
            </button>
        </span>

        <button class="next" :disabled="pageNumber >= totalPages -1"  @click="nextPage">
            Next
        </button>
        <div class="showing">Showing: {{ pageNumber + " of " + totalPages }} pages</div>
    </div>
</template>

<script>
export default {
    props: {
        totalPages: Number,
        pageNumber: Number,
    },
    data(){
        return {
            size: 20
        }
    },
    methods: {
        nextPage() {
            this.$router.push({ query: { page: this.pageNumber + 1 } });
        },
        prevPage() {
            this.$router.push({ query: { page: this.pageNumber - 1 } });
        },
        gotoPage(pageNumber) {
            this.$router.push({ query: { page: pageNumber } });
        },
        pagination(currentPage, nrOfPages) {
            var delta = 3,
                range = [];

            range.push(1);  

            if (nrOfPages <= 1){
                return range;
            }

            for (let i = currentPage - delta; i <= currentPage + delta; i++) {
                if (i < nrOfPages && i > 1) {
                    range.push(i);
                }
            }  
            range.push(nrOfPages);

            return range;
        }
    }
}
</script>

<style scoped>
    .pagination {
        margin: 0px 20px;
    }

    .prev {
        margin-right: 10px; 
    }

    .next {
        margin-left: 10px;
    }

    .showing {
        margin: 5px 0px;
    }
</style>
