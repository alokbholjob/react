import {useState, useEffect} from 'react'

const useFetch = ( url ) =>{ //custom reusable hook | name should start with 'use'

    const [data, setData] = useState(null);   //we replace blogs with "data" to make it reusable
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
          fetch(url)
          .then(res =>{
            if(!res.ok){ //checking the status-200 is ok or not if not handling the error
              throw Error('could not fetch the data for that resource'); //throwing the error
            }
            return res.json()
          })
          .then(data =>{
            setData(data);
            setIsLoading(false);
            setError(null); //here the connection is OK so...
          })
          // to handle the error
          .catch(err =>{
            setIsLoading(false); //becoz while rendering the error message the Loading object is showing, so we don't want that
            setError(err.message); //catch the error
            console.log(err.message); 
          })
        },(1000));    
      }, [url]); //now url is a depedency array, whenever the url changes this fuction is going to be re-render 

    /* This fuction will return some values an array like useStates or it could be a string or a boolean
       In our case object with three properties. because if we want to use this in another file 
       we are able to grab it's properties */
      return { data, isLoading, error }

}
export default useFetch;


/*
1- name with "use"
2- import depedent hooks-- useState, useEffect
3- register all hooks-- data, error
4- export default
5- return objects
6- passing the url to the function(dyanamic)
7- use url as depedency
8- Custom Hook Done!
9- use it wherever u want by destructuring
10- use origional url inside this function 
 */