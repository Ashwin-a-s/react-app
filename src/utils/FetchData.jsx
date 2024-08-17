const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a0d08502d8msh1a74d977c214c52p1d70cejsn67c6003d8fa6',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const FetchData = async({url}) => {
        try{
            const res = await fetch(url,options);
            const data = await res.json();
            return data;
        }
        catch(error){
            console.log("Haha You Got an Error"+error);
        }
}