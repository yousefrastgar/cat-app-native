import React, {lazy, Suspense} from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import Loading from "../components/Loading";
import Categories from "../containers/categories";

const Home = lazy(() => import("../screens/Home"));

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Drawer.Navigator initialRouteName="Home" drawerContent={props => <Categories {...props}/>}>
                <Drawer.Screen name="Home" component={Home} options={{
                    headerShown: true,
                    headerTitle: "Cats Gallery",
                    headerTitleAlign: "center"
                }}/>
            </Drawer.Navigator>
        </Suspense>
    );
}

export default DrawerNavigator;
