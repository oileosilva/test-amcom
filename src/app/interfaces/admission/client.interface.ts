export interface Client {
    id: number;
    name: string;
    CPFSituation: boolean;
    accountApplication?: {
        numberAccount: number;
    },
    account?: {
        numberAccount: number;
    }
}

export const listClient: Client[] = [
    {
        id: 1,
        name: "Raimunda Pietra Milena Corte Real",
        CPFSituation: true,
        accountApplication: {
            numberAccount: 123456
        }
    },
    {
        id: 2,
        name: "Rodrigo José Gustavo Drumond",
        CPFSituation: true,
        account: {
            numberAccount: 123456
        }
    },
    {
        id: 3,
        name: "Lúcia Rayssa da Mata",
        CPFSituation: true,
        accountApplication: {
            numberAccount: 123456
        },
        account: {
            numberAccount: 123456
        }
    },
    {
        id: 4,
        name: "Lorenzo Sebastião Almeida",
        CPFSituation: false,
    }
]