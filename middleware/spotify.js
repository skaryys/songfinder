export default function({query, store}) {
  return Vue.spotify.search(query)
    .then(function(data) {
      console.log(data);
    }, function(err) {
      console.log('Something went wrong!', err);
    });
}
