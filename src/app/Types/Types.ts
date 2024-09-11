interface RankingUsersEspecs {
    position: string;
    medal: boolean | string;
    imgUrl: string;
    userName: string;
    userEXP: string;
}

interface ConquestsEspecs{

    conquest: string
    imgUrl: string
    description: string

}

interface UserDatasEspecs{

    imgUrl: string
    userName: string
    memberSince: string
}

export interface ConquestsUser {

    data: ConquestsEspecs[]
}

export interface Userdatas {

    data: UserDatasEspecs[]
}

export interface RankingUsers {
    data: RankingUsersEspecs[];
}
