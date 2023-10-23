export enum Color {
    RED = "Red",
    BLUE = "Blue",
    GREEN = "Green",
    YELLOW = "Yellow",
    PURPLE = "Purple",
    ORANGE = "Orange",
    PINK = "Pink",
    CYAN = "Cyan",
    TEAL = "Teal",
    LIME = "Lime",
    BROWN = "Brown",
    GRAY = "Gray",
    BLACK = "Black",
    WHITE = "White",
    SILVER = "Silver",
    GOLD = "Gold",
}

export enum SkinType {
    COMMON = "Common",
    RARE = "Rare",
    EPIC = "Epic",
    LEGENDARY = "Legendary",
}

export enum API {
    AUTH = "Auth",
    SKIN = "Skin",
    USER = "User",
    USER_SKIN = "UserSkin"
}

export enum ApiEndPoint {
    //Auth
    AUTH = `${API.AUTH}/auth`,

    //SKIN
    GET_SKIN = `${API.SKIN}/getSkin`,
    AVAIBLE = `${API.SKIN}/avaible`,
    BUY = `${API.SKIN}/buy`,
    MY_SKINS = `${API.SKIN}/mySkins`,
    COLOR = `${API.SKIN}/color`,
    DELETE = `${API.SKIN}/delete`,
    CREATE_SKIN = `${API.SKIN}/createSkin`,
    CREATE_SKINS = `${API.SKIN}/createSkins`,

    //USER
    REGISTER = `${API.USER}/register`,
    GET_USER = `${API.USER}/getUser`,

    //USER_SKIN
    CREATE_USER_SKIN = `${API.USER_SKIN}/createUserSkin`,
    GET_USER_SKIN = `${API.USER_SKIN}/getUserSkin`,
    GET_USER_SKINS = `${API.USER_SKIN}/getUserSkins`,
    DELETE_USER_SKIN = `${API.USER_SKIN}/deleteUserSkins`,
}

