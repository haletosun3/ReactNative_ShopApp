import { useEffect, useState } from "react"
import axios from "axios";
function useFetch(url){
    
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async() => {
        try {
          const {data: resData} = await axios.get(url);
            setData(resData);
            setLoading(false);
        } catch (err) {
          setError(err.message)
          setLoading(false);
        }
      };

    useEffect( () =>{
       fetchData();
    }, [])
    return {error,loading,data}
}

export default useFetch;
//usefecth fonk içeriye gönderlien parametrreye a istek
// atacak istek sonucunda loading ve error datalarını geri dönecek

//useEffect fonk kullandım cünkü çalıstıgı calıssın istiyorum