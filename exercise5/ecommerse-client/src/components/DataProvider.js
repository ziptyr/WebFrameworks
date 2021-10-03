import React, {createContext, useState, useContext} from 'react';
import axios from 'axios';


const server = 'http://localhost:4000';
const serverData = {items: []};
const DataContext = createContext();
export const useData = () => useContext(DataContext);


export default function DataProvider({children}) {
  /* makes item-data.json data and operations available for files*/

  React.useEffect(() => {
    /* get initial item data from server */

    axios.get(server + '/items')
      .then(function (response) {
        serverData.items.push(...response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error)
      });
  }, []);


  const [data, setData] = useState(serverData.items);
  const [adminMode, setAdminMode] = useState(false);

  const ignoreCaseIncludes = (sentence, subString) => {
    /* test if string contains substring
     *
     * case insensitive test with true|false return
     */

    let str = sentence.toLowerCase();
    let subStr = subString.toLowerCase();
    return str.includes(subStr);
  }

  const filter = (search) => {
    /* filter client items
     *
     * show all items if search string is empyt, test if title or
     * manufacturer contais search string
     */

    if (search === '') {
      setData(serverData.items);
      return;
    }

    let newData = [...serverData.items].filter(item => {
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
    /* sed newItem to server and client
     *
     * axios waits server for response with new set of items for client
     */

    let lastItem = data[data.length - 1];
    newItem.id = lastItem.id + 1;

    axios.post(server + '/items/', newItem)
      .then(function (response) {
        console.log(response)
        setData(response.data);
        serverData.items = response.data;
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  const removeItem = (id) => {
    /* remove item from server and client
     *
     * axios waits server response and corrects client items
     */

    axios.delete(server + '/items/' + id)
      .then(function (response) {
        console.log(response)
        setData(response.data);
        serverData.items = response.data;
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
