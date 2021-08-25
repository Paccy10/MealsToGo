import React, { useContext } from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { RestaurantList } from "../../restaurants/components/restaurants-list.styles";

const NoFavouritesArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <RestaurantList
      data={favourites}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("RestaurantDetails", { restaurant: item })
          }
        >
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.name.toString()}
    />
  ) : (
    <NoFavouritesArea>
      <Text variant="label">No favourites added yet.</Text>
    </NoFavouritesArea>
  );
};
