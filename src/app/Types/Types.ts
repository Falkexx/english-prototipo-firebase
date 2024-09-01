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

export interface ConquestsUser {

    data: ConquestsEspecs[]
}

export interface RankingUsers {
    data: RankingUsersEspecs[];
}
