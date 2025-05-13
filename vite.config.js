export default {
  base: '/testmovie/',

  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        movie: 'movie.html', // movie.html dosyasını da dahil ediyoruz
      },
    },
  },
}
