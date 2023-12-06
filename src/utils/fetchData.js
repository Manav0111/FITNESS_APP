 export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};


export const BMIoptions = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5df515f5a9msh2bc83983d847e77p13fe01jsn18dd00c49099',
		'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com'
	}
};



export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  // console.log(res);
  // const data = await res.json();
  const data = await res.json();
  return data;


 

  
};
