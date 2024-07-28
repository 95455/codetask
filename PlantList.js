import React, { useState,useEffect } from 'React';
import { View, FlatList, StyleSheet, } from "react";
import PlantCard from "./PlantCard.js";

const PlantList = () = {
    const[plant, setPlant] = useState([]);

    useEffect(() => {
    fetch("https://lza4vi7uuvokxmbo5kmt4ou7i40nzhbg.lambda-url.us-east-1.on.aws/")
        .then((Response) => Response.json)
        .then((data) => setPlant(data))
        .catch((error)=>console.error(error))
}, []);

const handlePlantDetail() => {
    navigator.navigator("PlantDetail");
}

return (
    <View Styles={StyleSheet.container}>
        <FlatList data={PlantList}
            renderItem={({ item }) => (
                <PlantCard image={itemImage}
                    bio={itembio}
                    fertilizer={itemFertilizer}
                    water={itemWater}
                    size={itemSize}
                    price={itemPrice}
                    category={itemCategory}
                    name={itemName} ,
         )}, keyExtractor={
    (item) =>item.id.toString()
  },
);
        const Styles= StylesSheet.create{
            container: 
    }
    //{"id":1,"name":"Pepperomia","category":"Air Purifier","price":400,"size":"4\" h","water":"250ml","light":"30-40%","fertilizer":"250gm","bio":"No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.","image":"https://i.imgur.com/4ucOXpZ.png"},

}