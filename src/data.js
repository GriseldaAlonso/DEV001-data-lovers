

//función buscador 
export const searchData = (ghibliData, condition,value) => {
	return ghibliData.filter(item=> item[condition].toLowerCase().includes(value.toLowerCase()));
}

//funcion filtro de director
export const directorFilter = (ghibliData, select)=>{
	const director = ghibliData.filter((movie =>{
		return movie.director == select
	}));
	return director
}


//funcion ordenar por año ascendente
export const yearSort = (ghibliData, selectorValue) =>{
	if (selectorValue === "asc"){
		return ghibliData.sort((yearA, yearB)=>{
			if(yearA.release_date > yearB.release_date){
				return 1
			} else {
				return -1
			}
		})
	} if (selectorValue === "desc"){
		return ghibliData.sort((yearA, yearB)=>{
			if(yearA.release_date > yearB.release_date){
				return -1
			} else {
				return 1
			}
		})
	}
}
