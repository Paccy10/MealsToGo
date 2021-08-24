import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { colors } from "../../../infrastructure/theme/colors";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isFavouritesBarToggled, setIsFavouritesBarToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={colors.brand.primary} />
        </LoadingContainer>
      )}
      <Search
        onFavouritesToggle={() =>
          setIsFavouritesBarToggled(!isFavouritesBarToggled)
        }
        isFavouritesToggled={isFavouritesBarToggled}
      />
      {isFavouritesBarToggled && (
        <FavouritesBar
          favourites={favourites}
          onGoToDetails={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
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
    </SafeArea>
  );
};
