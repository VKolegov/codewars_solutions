class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
        this.count = collection.length;
        this.pages = Math.ceil(collection.length / itemsPerPage);
    }

    itemCount() {
        return this.count;
    }

    pageCount() {
        return this.pages;
    }

    pageItemCount(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.pages) {
            return -1;
        }

        const itemsCount = this.count - pageIndex * this.itemsPerPage;

        if (itemsCount >= this.itemsPerPage) {
            return this.itemsPerPage;
        } else {
            return itemsCount;
        }
    }

    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.count) {
            return -1;
        }

        return Math.floor(itemIndex / this.itemsPerPage);
    }
}