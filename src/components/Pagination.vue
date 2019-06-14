<template>
  <div class="pagination">
    <a :class="pageNumber === 1 ? 'disabled' : ''" @click="prevPage">Prev</a>
    <a
      v-for="(page, index) in pagination(pageNumber, totalPages)"
      :key="index"
      @click="gotoPage(page)"
      :class="{active:  activePage == page }"
    >{{page}}</a>
    <a :class="pageNumber >= totalPages -1 ? 'disabled' : ''" @click="nextPage">Next</a>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: Number,
    pageNumber: Number
  },
  data() {
    return {
      size: 20,
      activePage: this.pageNumber
    };
  },
  methods: {
    nextPage() {
      if (this.pageNumber > this.totalPages - 1) return;
      this.$router.push({ query: { page: this.pageNumber + 1 } });
    },
    prevPage() {
      if (this.pageNumber === 1) return;
      this.$router.push({ query: { page: this.pageNumber - 1 } });
    },
    gotoPage(pageNumber) {
      if (pageNumber === "...") return;
      this.activePage = pageNumber;
      this.$router.push({ query: { page: pageNumber } });
    },
    pagination(currentPage, nrOfPages) {
      var delta = 3,
        range = [],
        rangeWithDots = [],
        l;

      range.push(1);

      if (nrOfPages <= 1) return range;

      for (let i = currentPage - delta; i <= currentPage + delta; i++) {
        if (i < nrOfPages && i > 1) range.push(i);
      }
      range.push(nrOfPages);

      for (let i of range) {
        if (l) {
          if (i - l === 2) rangeWithDots.push(l + 1);
          else if (i - l !== 1) rangeWithDots.push("...");
        }
        rangeWithDots.push(i);
        l = i;
      }

      return rangeWithDots;
    }
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  margin: 10px 20px;
  justify-content: center;
}

.pagination a {
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
  cursor: pointer;
}

.pagination a.active {
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  font-weight: bold;
}

.pagination a:hover:not(.active):not(.disabled) {
  background-color: #ddd;
}

.pagination a.disabled {
  background-color: #ddd;
}

.pagination a:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.pagination a:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
