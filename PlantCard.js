import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";

const PlantCard = ({
    image,bio,category,water,size,price,name,fertilizer
}=> {
    const [count, setCount] = useState[(0)];
    return (
        <View styles={styles.container}
        <Text styles={styles.bio}>{bio}</Text>
         <Text styles={styles.category}>{category}</Text>
         <Text styles={styles.water}>{water}</Text>
         <Text styles={styles.size}>{size}</Text>
         <Text styles={styles.price}>{price}</Text>
         <Text styles={styles.name}>{name}</Text>
         <Text styles={styles.fertilizer}>{fertilizer}</Text>
        </View>
    );

    const styles = StyleSheet.create(
        card: {
        height: 80,
        width: 100,
        color: "green"
    }
    );
}


);