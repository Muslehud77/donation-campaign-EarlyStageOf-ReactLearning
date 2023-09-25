const getStoredItem = () => {
    let storedItems = []
    const item = localStorage.getItem("donationRecords");

    if (item) {
        storedItems = JSON.parse(item)
        return storedItems;
    }else{
        return storedItems;
    }

}

export default getStoredItem 