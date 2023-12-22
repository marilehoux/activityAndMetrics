import { StyleSheet } from "react-native";
import { COLORMAIN } from "../../../outils/constantes";

const TEXT_SIZE = {
    title: 24,
    label: 18,
    body: 15,
};

const PADDING = {
    horizontal: 25,
    vertical: 10,
};


const variableStyles = StyleSheet.create({
	title: {
        fontSize: TEXT_SIZE.title,
        textAlign: "center",
        fontWeight: "bold",
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        color: COLORMAIN.black
    },
    body : {
        marginHorizontal: PADDING.horizontal,
        marginVertical: PADDING.vertical,
        color: COLORMAIN.black
    },
    inputRow: {
        marginHorizontal: PADDING.horizontal,
        marginVertical: PADDING.vertical/2,
    },
    inputRowNumeric: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap"
    },
    inputRowDate: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 10,
        flexWrap: "wrap"
    },
    inputLabel: {
        fontWeight: "bold",
        color: COLORMAIN.black,
        paddingVertical: PADDING.vertical,
        fontSize: TEXT_SIZE.label
    },
    inputField: {
        borderColor: COLORMAIN.black,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: TEXT_SIZE.body
    },
    inputFieldNumeric : {
        width: 50,
        paddingVertical: 5,
    },
    listItem : {
        fontSize: TEXT_SIZE.body
    },
    listContainer : {
        borderColor: COLORMAIN.black,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: TEXT_SIZE.body,
        paddingVertical: 10
    },
    radio : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel : {
        fontSize: TEXT_SIZE.body,
        color: COLORMAIN.black
    },
    buttonContainer : {
        flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		paddingVertical: PADDING.vertical,
        paddingHorizontal: PADDING.horizontal
    },
    switchContainer : {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

export default variableStyles;