import React, {createContext, useState, useContext} from 'react'
import itemData from "./item-data.json"


const DataContext = createContext();
export const useData = () => useContext(DataContext);


export default function DataProvider({children}) {
    /* makes item-data.json data and operations available for files*/

    const [data, setData] = useState(itemData);

    const filter = (searchString) => {
        /* return item-data.json contents that includes search string
         *
         * if string is empty return original array and return
         * make a new array of item-data objects that has a title that
         * includes search string
         */

        if (searchString === "") {
            setData(itemData);
            return;
        }

        let newData = [...itemData].filter(element => {
            let title = element.title.toLowerCase();
            let manufacturer = element.manufacturer.toLowerCase();
            let search = searchString.toLowerCase();

            if (title.includes(search)) {
                return true;
            } else if (manufacturer.includes(search)) {
                return true;
            } else {
                return false;
            }
        });

        setData(newData);
    }

    return (
        <DataContext.Provider value={{data, filter}}>
            {children}
        </DataContext.Provider>
    )
}
