import React, {createContext, useState, useContext} from 'react';
import axios from 'axios';


const server = 'http://localhost:4000';
//const axios = require('axios').default;
//const itemData = [];
var serverData = [];
const DataContext = createContext();
export const useData = () => useContext(DataContext);


export default function DataProvider({children}) {
  /* makes item-data.json data and operations available for files*/

  React.useEffect(() => {
    axios.get(server + '/items')
      .then(function (response) {
        //itemData.push(...response.data);
        serverData.push(...response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error)
      });
  }, []);


  const [data, setData] = useState(serverData);
  const [adminMode, setAdminMode] = useState(false);

  const ignoreCaseIncludes = (sentence, subString) => {
    let str = sentence.toLowerCase();
    let subStr = subString.toLowerCase();
    return str.includes(subStr);
  }

  const filter = (search) => {
    /* return item-data.json contents that includes search string
      *
      * if string is empty return original array and return
      * make a new array of item-data objects that has a title that
      * includes search string
      */

    if (search === '') {
      setData(serverData);
      return;
    }

    let newData = [...serverData].filter(item => {
      if (ignoreCaseIncludes(item.title, search)) {
        return true;
      } else if (ignoreCaseIncludes(item.manufacturer, search)) {
        return true;
      } else {
        return false;
      }
    })

    setData(newData);
  }

  //const getItemImage = (id, setState) => {
  //  axios.get(server + '/items/image' + id, {responseType: ArrayBuffer})
  //    .then(function (response) {
  //      const base64 = btoa(
  //        new Uint8Array(response.data).reduce(
  //          (data, byte) => data + String.fromCharCode(byte),
  //          '',
  //        ),
  //      );
  //      setState({ source: 'data:;base64,' + base64 });
  //    })
  //    .catch(function (error) {
  //      console.log(error);
  //    });
  //}

  const addNewItem = (newItem) => {
    let lastItem = data[data.length - 1];
    newItem.id = lastItem.id + 1;

    axios.post(server + '/items/', newItem)
      .then(function (response) {
        console.log(response)
        setData(response.data);
        serverData = response.data;
        //let newData = [...data, response.data];
        //serverData.push(response.data);
        //setData(newData);
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  const removeItem = (id) => {
    axios.delete(server + '/items/' + id)
      .then(function (response) {
        console.log(response)
        setData(response.data);
        serverData = response.data;
        //let newData = data.filter(e => e.id !== id);
        //serverData.splice()
        //setData(newData);
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  return (
    <DataContext.Provider value={{
      data,
      filter,
      addNewItem,
      adminMode,
      setAdminMode,
      removeItem
    }}>
      {children}
    </DataContext.Provider>
  )
}
