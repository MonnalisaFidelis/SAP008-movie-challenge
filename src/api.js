const url ="https://api.themoviedb.org/3/trending/all/day?api_key=36d24538fcf17f4ad17c021b7b56a206"

export async function getMovies(){
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    return data
}
