var root = new Vue({
    el: '#root',
    data: {
        apiUrl: "./lib/index.php",
        albums: [],
        currentGenre: 'all',
        searchForm: '',

    },
    created() {
        axios.get(this.apiUrl)
            .then((response) => {
                this.albums = response.data.response
            });

    },
    computed: {
        genreList() {
            if (this.searchForm == '') {
                if (this.currentGenre == 'all') {
                    return this.albums
                } else {
                    return this.albums.filter(album => {
                        return album.genre.toLowerCase().includes(this.currentGenre.toLowerCase())
                    })

                }
            } else {
                if (this.currentGenre == 'all') {
                    return this.albums.filter(album => {
                        return album.title.toLowerCase().includes(this.searchForm.toLowerCase())
                    })
                } else {
                    return this.albums.filter(album => {
                        return album.title.toLowerCase().includes(this.searchForm.toLowerCase()) && album.genre.toLowerCase().includes(this.currentGenre.toLowerCase())
                    })

                }
            }

        },


    },
})