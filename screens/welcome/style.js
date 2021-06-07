import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
//import colors from "../../resources/colors";
 
export default StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: colors.primaryBlue,
        backgroundColor:"#0052fe",
    },
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle: {
        //color:colors.white,
        color:"#ffffff",
        fontWeight:" bold",
      //  fontSize:"RFValue(35,35)",
      fontSize:"23px"
    }
})